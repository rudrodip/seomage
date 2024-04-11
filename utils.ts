import sharp from "sharp";
import type { Config } from "./config";

export async function resizeImage(imagePath: string, width: number, height: number): Promise<Buffer> {
  const image = await sharp(imagePath).toBuffer();
  return sharp(image).resize(width, height).toBuffer();
}

export async function generateImages(imagePath: string, output: string = "./", config: Config) {
  await Promise.all(
    Object.entries(config).map(async ([name, { width, height }]) => {
      const image = await resizeImage(imagePath, width, height);
      await sharp(image).toFile(`${output}/${name}.png`);
    })
  )
}