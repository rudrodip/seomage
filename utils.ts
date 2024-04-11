import sharp from "sharp";
import type { Config } from "./config";
import fs from "fs";

export async function resizeImage(imagePath: string, width: number, height: number): Promise<Buffer> {
  const image = await sharp(imagePath).toBuffer();
  return sharp(image).resize(width, height).toBuffer();
}

export async function generateImages(imagePath: string, output: string = "./", config: Config) {
  // check image path
  try {
    await sharp(imagePath).metadata();
  } catch (error) {
    throw new Error("Invalid image path");
  }

  // check output path, if not create one
  try {
    await fs.promises.access(output);
  } catch (error) {
    await fs.promises.mkdir(output);
  }

  for (const [name, { width, height }] of Object.entries(config)) {
    try {
      const image = await resizeImage(imagePath, width, height);
      await sharp(image).toFile(`${output}/${name}.png`);
    } catch (error: any) {
      console.error(error.message);
    }
  }
}