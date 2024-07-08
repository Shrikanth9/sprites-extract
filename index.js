module.exports = extract

function extract(spriteSheetDir, jsonDir) {
  fetch(jsonDir).then((response) => response.json()).then((data) => {
      let frames = findObjectByKey(data, "frames");
      let frameArr = [];
  
      if(Array.isArray(frames)) {
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
  })

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
      // Usage
      const spritesheetImage = new Image();
      spritesheetImage.src = spriteSheetDir;
      
      var links = [];

      spritesheetImage.onload = () => {
          logic();  
      };
      
      const logic = () => {
          for (let image of imageData) {
          // Create a canvas for each extracted image
          const canvas = document.createElement('canvas');
          canvas.width = image.w;
          canvas.height = image.h;
          const ctx = canvas.getContext('2d');
          // Extract the image from the framessheet onto the canvas
          ctx.drawImage(spritesheetImage, image.x, image.y, image.w, image.h, 0, 0, image.w, image.h);
          // Convert the canvas to a data URL
          const dataURL = canvas.toDataURL('image/png');
          // Create a download link for the image
          const link = document.createElement('a');
          link.href = dataURL;
          link.download = `${image.name}`;
          link.innerHTML = `${image.name}`;
          link.style.display = "none";
          links.push(link);
          }
      
          for (let i = 0; i < links.length; ++i) {
          setTimeout(() => {
              links[i].click();
              if (i === links.length - 1) {
              alert("Done!");
              }
          }, 500 * i);
          }
      }
      
  }
}
