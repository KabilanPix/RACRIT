import { google } from "googleapis";
import { Readable } from "stream";

export async function uploadPhotoToDrive(file: File, participantName: string, clubCollegeName: string) {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;
  const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;

  if (!clientId || !clientSecret || !refreshToken || !folderId) {
    throw new Error("Google Drive OAuth configuration is missing in environment variables.");
  }

  // Use OAuth2 user delegation so uploads use your personal 15 GB quota
  const oauth2Client = new google.auth.OAuth2(
    clientId,
    clientSecret,
    "https://developers.google.com/oauthplayground"
  );

  oauth2Client.setCredentials({
    refresh_token: refreshToken,
  });

  const drive = google.drive({ version: "v3", auth: oauth2Client });

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
