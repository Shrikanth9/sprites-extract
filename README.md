This package can extract and download images from TexturePacker spritesheets using the TexturePacker JSON data.

# INSTALLATION

```
npm i sprites-extract

```


# USAGE

1. Create a JavaScript file and require the `extract()` method.
2. Call the `extract()` method, passing the paths of the TexturePacker spritesheet and JSON file as parameters. For example:

```javascript
const extract = require('sprites-extract');

extract('/path/to/spritesheet.png', './path/to/spritesheet.json');
```
3. Run the javascript file using node js command (eg: node script.js). A folder named "Output" should be generated along with all the extracted images from spritesheet.



# CONTRIBUTING

Contributions are welcome! Please open an issue or submit a pull request if you have any suggestions or bug fixes.