import { ImageResponse } from "next/og";
import fs from "fs/promises";
import path from "path";

export const runtime = "nodejs";
export const size = {
  width: 64,
  height: 64,
};
export const contentType = "image/png";

const gradientBackground =
  "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 20%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(0,0,0,0.4) 0%, transparent 50%), linear-gradient(135deg, #000000 0%, #4c1d95 50%, #7c3aed 100%)";

export default async function Icon() {
  const logoPath = path.join(process.cwd(), "public", "logo.png");
  const logoBuffer = await fs.readFile(logoPath);
  const logoBase64 = logoBuffer.toString("base64");

  return new ImageResponse(
    (
      <div
        style={{
          width: `${size.width}px`,
          height: `${size.height}px`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: gradientBackground,
          borderRadius: "50%",
        }}
      >
        <img
          src={`data:image/png;base64,${logoBase64}`}
          width={60}
          height={60}
          style={{ objectFit: "contain" }}
          alt="CoderAxo logo"
        />
      </div>
    ),
    {
      ...size,
    }
  );
}

