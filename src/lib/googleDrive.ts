import { google } from "googleapis";
import { Readable } from "stream";

export async function uploadPhotoToDrive(file: File, participantName: string, clubCollegeName: string) {
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
  let privateKey = process.env.GOOGLE_PRIVATE_KEY;
  const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;

  if (!clientEmail || !privateKey || !folderId) {
    throw new Error("Google Drive API configuration is missing in environment variables.");
  }

  // Handle formatted \n characters in private key string
  privateKey = privateKey.replace(/\\n/g, "\n");

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/drive"],
  });

  const drive = google.drive({ version: "v3", auth });

  // Clean filename: participantName_clubCollege_timestamp.ext
  const extension = file.name.split(".").pop() || "jpg";
  const cleanName = participantName.trim().replace(/[^a-zA-Z0-9_-]/g, "_");
  const cleanClub = clubCollegeName.trim().replace(/[^a-zA-Z0-9_-]/g, "_");
  const fileName = `${cleanName}_${cleanClub}_${Date.now()}.${extension}`;

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const stream = Readable.from(buffer);

  const response = await drive.files.create({
    requestBody: {
      name: fileName,
      parents: [folderId],
    },
    media: {
      mimeType: file.type || "image/jpeg",
      body: stream,
    },
    fields: "id, name, webViewLink, webContentLink",
  });

  return {
    fileId: response.data.id,
    webViewLink: response.data.webViewLink,
  };
}
