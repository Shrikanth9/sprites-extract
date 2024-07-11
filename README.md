This package can extract and download images from TexturePacker spritesheets using the TexturePacker JSON data.

# INSTALLATION

```
npm i sprites-extract

```

# PREREQUISITES

### Prerequisites

1. **Browser environment**: This package is intended to be used in a browser environment where the files are served to the browser (use of index.html).
2. **Module bundler**: Use a module bundler (e.g. Webpack, Parcel, Vite, etc.) to serve package contents to the browser.

Some helpful resources for setting up a browser environment and module bundler:

* [Parcel template](https://github.com/bpk68/parcel-template)
* [Vue TypeScript template](https://github.com/hhui64/template-vue-ts)
* [Webpack starter](https://github.com/wbkd/webpack-starter)

# USAGE
```
1. Import the method `extract()`.
2. Call this method. Pass the paths of the TexturePacker spritesheet and JSON file as parameters (e.g., `extract("/path/to/spritesheet.png", "./path/to/spritesheet.json")`)

```