import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { uploadPhotoToDrive } from "@/lib/googleDrive";

// Deadline: Nov 30, 2026, 23:59:59 IST (UTC+5:30)
const DEADLINE = new Date("2026-11-30T23:59:59+05:30").getTime();
const MAX_FILE_SIZE_BYTES = 15 * 1024 * 1024; // 15MB

export async function POST(req: NextRequest) {
  try {
    // 1. Deadline check
    if (Date.now() > DEADLINE) {
      return NextResponse.json(
        { error: "Submissions are closed. The deadline has passed." },
        { status: 403 }
      );
    }

    const formData = await req.formData();
    const name = formData.get("name")?.toString().trim();
    const clubCollegeName = formData.get("clubCollegeName")?.toString().trim();
    const email = formData.get("email")?.toString().trim().toLowerCase();
    const phone = formData.get("phone")?.toString().trim();
    const story = formData.get("story")?.toString().trim();
    const file = formData.get("photo") as File | null;

    // 2. Validation
    if (!name || !clubCollegeName || !email || !phone || !story || !file) {
      return NextResponse.json(
        { error: "All fields and photo upload are required." },
        { status: 400 }
      );
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // File validation: Size <= 15MB
    if (file.size > MAX_FILE_SIZE_BYTES) {
      return NextResponse.json(
        { error: "File size exceeds the 15 MB limit." },
        { status: 400 }
      );
    }

    // 3. Duplicate check by email
    const existingSubmission = await prisma.photoSubmission.findUnique({
      where: { email },
    });

    if (existingSubmission) {
      return NextResponse.json(
        { error: "This email address has already submitted an entry." },
        { status: 409 }
      );
    }

    // 4. Upload photo to Google Drive
    let driveUploadResult: { fileId?: string | null; webViewLink?: string | null } = {};
    try {
      driveUploadResult = await uploadPhotoToDrive(file, name, clubCollegeName);
    } catch (driveErr: any) {
      console.error("Google Drive upload error:", driveErr);
      return NextResponse.json(
        { error: "Failed to upload photo to Google Drive. Please verify server drive setup or try again." },
        { status: 500 }
      );
    }

    // 5. Store in Neon DB
    const newSubmission = await prisma.photoSubmission.create({
      data: {
        name,
        clubCollegeName,
        email,
        phone,
        story,
        driveFileId: driveUploadResult.fileId || null,
        driveFileUrl: driveUploadResult.webViewLink || null,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your photograph has been submitted successfully!",
        submissionId: newSubmission.id,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error processing photo submission:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
