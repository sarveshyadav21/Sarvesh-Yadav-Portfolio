import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const srcPath = path.join(
      process.cwd(),
      "data",
      "Sarvesh_Yadav_fs39_32082.pdf"
    );

    try {
      const publicDir = path.join(process.cwd(), "public");
      const publicPath = path.join(publicDir, "Sarvesh_Yadav_fs39_32082.pdf");
      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
      }
      if (fs.existsSync(srcPath) && !fs.existsSync(publicPath)) {
        fs.copyFileSync(srcPath, publicPath);
      }
    } catch {
      // fallback
    }

    if (!fs.existsSync(srcPath)) {
      return new NextResponse("Resume file not found", { status: 404 });
    }

    const fileBuffer = fs.readFileSync(srcPath);

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'inline; filename="Sarvesh_Yadav_fs39_32082.pdf"',
        "Cache-Control": "public, max-age=3600, must-revalidate",
      },
    });
  } catch (error) {
    return new NextResponse("Internal server error", { status: 500 });
  }
}
