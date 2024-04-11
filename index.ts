#!/usr/bin/env node
import inquirer from "inquirer";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { defaultConfig, pwaConfig } from "./config";
import { generateImages } from "./utils";

async function main() {
  const argv = yargs(hideBin(process.argv))
    .option("image", {
      alias: "i",
      describe: "Path to the image",
      type: "string",
    })
    .option("output", {
      alias: "o",
      describe: "Output directory",
      type: "string",
    })
    .option("pwa", {
      alias: "p",
      describe: "Generate PWA icons",
      type: "boolean",
      default: false,
    })
    .parseSync();

  const questions = [];
  if (!argv.image) {
    questions.push({
      type: "input",
      name: "image",
      message: "Enter the path to the image",
    });
  }
  if (!argv.output) {
    questions.push({
      type: "input",
      name: "output",
      message: "Enter the output directory",
      default: "public", // default public
    });
  }
  if (!argv.pwa) {
    questions.push({
      type: "confirm",
      name: "pwa",
      message: "Do you want to generate PWA icons?",
      default: false,
    });
  }

  const answers = await inquirer.prompt(questions);

  const image = argv.image || answers.image;
  const output = argv.output || answers.output;
  const pwa = argv.pwa || answers.pwa;

  const config = pwa ? pwaConfig : defaultConfig;
  try {
    await generateImages(image, output, config);
    console.log("Images generated successfully");
  } catch (error: any) {
    console.log("Failed to generate images")
    console.log(error.message)
  }
}

main();