import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const LOGO = path.join(ROOT, "src/images/logos/Donde el capi-color.png");
const APP = path.join(ROOT, "src/app");
const PUBLIC = path.join(ROOT, "public");

fs.mkdirSync(APP, { recursive: true });
fs.mkdirSync(PUBLIC, { recursive: true });

async function squarePng(size, output) {
  await sharp(LOGO)
    .resize(size, size, {
      fit: "contain",
      background: { r: 255, g: 255, b: 255, alpha: 0 },
    })
    .png()
    .toFile(output);
}

async function openGraphImage() {
  const width = 1200;
  const height = 630;

  const logoBuffer = await sharp(LOGO)
    .resize(520, 520, {
      fit: "contain",
      background: { r: 255, g: 255, b: 255, alpha: 0 },
    })
    .png()
    .toBuffer();

  const background = Buffer.from(`<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#fffbeb"/>
        <stop offset="55%" stop-color="#ffffff"/>
        <stop offset="100%" stop-color="#fef3c7"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#bg)"/>
    <text x="600" y="580" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="700" fill="#525252" letter-spacing="4">COMIDA CALLEJERA COLOMBIANA</text>
  </svg>`);

  await sharp(background)
    .composite([{ input: logoBuffer, top: 48, left: Math.round((width - 520) / 2) }])
    .png()
    .toFile(path.join(APP, "opengraph-image.png"));

  await sharp(path.join(APP, "opengraph-image.png"))
    .png()
    .toFile(path.join(PUBLIC, "og-image.png"));
}

async function main() {
  await squarePng(512, path.join(APP, "icon.png"));
  await squarePng(180, path.join(APP, "apple-icon.png"));
  await squarePng(512, path.join(PUBLIC, "icon.png"));
  await squarePng(180, path.join(PUBLIC, "apple-icon.png"));
  await squarePng(48, path.join(PUBLIC, "favicon-48.png"));
  await squarePng(32, path.join(PUBLIC, "favicon-32.png"));
  await squarePng(16, path.join(PUBLIC, "favicon-16.png"));
  await openGraphImage();

  const { default: pngToIco } = await import("png-to-ico");
  const ico = await pngToIco([
    path.join(PUBLIC, "favicon-16.png"),
    path.join(PUBLIC, "favicon-32.png"),
    path.join(PUBLIC, "favicon-48.png"),
  ]);
  fs.writeFileSync(path.join(APP, "favicon.ico"), ico);
  fs.writeFileSync(path.join(PUBLIC, "favicon.ico"), ico);

  console.log("Icons generated in src/app/ and public/");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
