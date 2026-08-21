import { clerkClient, getAuth } from "@clerk/express";

// Middleware ( Protect Educator Routes )
export const protectEducator = async (req, res, next) => {
  try {
    const { userId } = getAuth(req);
    const response = await clerkClient.users.getUser(userId);

    if (response.publicMetadata.role !== "educator") {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: You are not an educator",
      });
    }
    next();
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
