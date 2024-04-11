# seomage

It's a simple CLI tool to generate favicons in different sizes and formats from a single image.

## Run

```bash
npx seomage -i path/to/image.png -o path/to/output -p
```

or

```bash
npx seomage
```

## Options

- `-i`, `--input` - Path to the input image.
- `-o`, `--output` - Path to the output directory.
- `-p`, `--pwa` - Generate PWA icons.

Default output is set to `public` as nextjs use this directory for static files.
