module.exports = extractAndDownloadImages

function extractAndDownloadImages(spriteSheetDir, jsonDir) {
  // Usage
  const spritesheetImage = new Image();
  spritesheetImage.src = spriteSheetDir;
  spritesheetImage.onload = () => {
    fetch(jsonDir).then((response) => response.json()).then((spriteData) => logic(spriteData.frames))
    
  };

  let logic = (spriteData) => {
    var links = [];

    for (let image in spriteData) {
      // Create a canvas for each extracted image
      const canvas = document.createElement('canvas');
      canvas.width = spriteData[image].frame.w;
      canvas.height = spriteData[image].frame.h;
      const ctx = canvas.getContext('2d');
      // Extract the image from the framessheet onto the canvas
      ctx.drawImage(spritesheetImage, spriteData[image].frame.x, spriteData[image].frame.y, spriteData[image].frame.w, spriteData[image].frame.h, 0, 0, spriteData[image].frame.w, spriteData[image].frame.h);
      // Convert the canvas to a data URL
      const dataURL = canvas.toDataURL('image/png');
      // Create a download link for the image
      const link = document.createElement('a');
      link.href = dataURL;
      link.download = `${image}`;
      link.innerHTML = `${image}`;
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
