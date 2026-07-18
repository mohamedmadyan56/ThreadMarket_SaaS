import { Request, Response, NextFunction } from 'express';
import prisma from '../utils/connectDB';

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { asyncHandler } from '../helpers/asyncHandler';
import  ApiError  from "../classes/ApiError";
import ApiResponse from "../classes/ApiResponse";
import {generateAccessToken, generateRefreshToken} from "../helpers/JwtToken";
import { ENV } from '../helpers/ENV';





/** * @desc    Login user
 * @route   POST /api/users/login
 * @access  Public
 */
export const login = asyncHandler( async (req: Request, res: Response, next: NextFunction) => {
// Receive login request.
const { identifier, password } = req.body;
// Validate input.
if (!identifier || !password) {
  throw new ApiError("Identifier and password are required", 400);
}

// Find user by email or phone.
const user = await prisma.user.findFirst({
  where: {
    OR: [
      { email: identifier },
      { phone: identifier }
    ]
  }
});

if (!user) {
  throw new ApiError("Invalid credentials", 404);
}

// Check if account is locked.
if (user.lockedUntil && user.lockedUntil > new Date()) {
  throw new ApiError("Account is locked. Please try again later.", 403);
}
// Compare password using bcrypt.
const isPasswordValid = await bcrypt.compare(password, user.password);
if (!isPasswordValid) {
    const failedAttempts = user.failedLoginAttempts + 1;
    const updateData: any = { failedLoginAttempts: failedAttempts };
    
    if (failedAttempts >= 5) {
          updateData.lockedUntil = new Date(Date.now() + 30 * 60 * 1000); // Lock for 30 minutes
      }

    await prisma.user.update({
        where: { id: user.id },
        data: {
            ...updateData
        }
    })
  throw new ApiError("Invalid credentials", 401);
} 
//  Generate:
//        access token (15 min)
const accessToken = generateAccessToken({ id: user.id });
//        refresh token (7 days)
const refreshToken = generateRefreshToken({ id: user.id });

// Update user:
//        failedLoginAttempts = 0
//        lockedUntil = null
//        isOnline = true
//        refreshToken = generated token
await prisma.user.update({
  where: { id: user.id },
  data: {
    failedLoginAttempts: 0,
    lockedUntil: null,
    isOnline: true,
    refreshToken
  }
});
//  Return tokens + user data.
const safeUser = {
    id: user.id,
    username: user.username,
    phone: user.phone,
    email: user.email,
    role: user.role,
    picture_url: user.picture_url,
};

 res.cookie("accessToken", accessToken, {
      maxAge: Number(ENV.ACCESS_TOKEN_EXPIRY),
      httpOnly: true,
      secure: true,
    });
return res.status(200).json(
  new ApiResponse(true, "Login successful",{
    accessToken,
    refreshToken,
    user: safeUser
  })
);
}); 
