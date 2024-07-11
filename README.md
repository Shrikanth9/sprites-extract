This package can extract and download images from TexturePacker spritesheets using the TexturePacker JSON data.

# INSTALLATION

```
npm i sprites-extract

```

# PREREQUISITES

```
It is intended to be used in a browser environment where the files are served to the browser. So you need to use a module bundler (eg: webpack, parcel, vite etc) in order to serve package contents to the browser.
   
```

# USAGE
```
1. Import the method `extract()`.
2. Call this method. Pass the paths of the TexturePacker spritesheet and JSON file as parameters (e.g., `extract("/path/to/spritesheet.png", "./path/to/spritesheet.json")`)

```