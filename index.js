module.exports = extract

const { createCanvas, loadImage } = require("canvas");
const fs = require('fs');


function extract(spriteSheetDir, jsonDir) {
    fs.readFile(jsonDir, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }

        const jsonData = JSON.parse(data);
        let frames = findObjectByKey(jsonData, "frames");
        let frameArr = [];

        if (Array.isArray(frames)) {
            frameArr = frames.map((frame) => {
                return {
                    name: frame.filename,
                    ...frame.frame
                }
            })
        }
        else {
            frameArr = Object.keys(frames).map((frame) => {
                return {
                    name: frame,
                    ...frames[frame].frame
                }
            })
        }

        cropImages(spriteSheetDir, frameArr);

    });
}

const findObjectByKey = (obj, key) => {
    let result = null;

    function search(obj, key) {
        if (result !== null) {
            return;
        }
        for (let prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                if (prop === key) {
                    result = obj[prop];
                    return;
                } else if (typeof obj[prop] === 'object') {
                    search(obj[prop], key);
                }
            }
        }
    }

    search(obj, key);
    return result;
}

const cropImages = (spriteSheetDir, imageData) => {

    loadImage(spriteSheetDir).then((spriteSheetImage) => {
        logic(spriteSheetImage);
    });

    const logic = (spriteSheetImage) => {

        fs.mkdirSync("Output", { recursive: true }, (err) => {
            if (err) {
                console.error(err);
                return;
            }
        });

        for (image of imageData) {
            const canvas = createCanvas(image.w, image.h);
            const context = canvas.getContext('2d');

            context.drawImage(spriteSheetImage, image.x, image.y, image.w, image.h, 0, 0, image.w, image.h);

            const dataUrl = canvas.toDataURL('image/png', 1);

            // Save the data URL to a file
            fs.writeFileSync(`Output/${image.name}`, dataUrl.replace(/^data:image\/\w+;base64,/, ''), 'base64');

            console.log("downloaded:  " + image.name);
        }
    }
}

extract("stopClock.png", "stopClock.json")