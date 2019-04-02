// MIT License - Copyright (c) 2018 Rouzbeh Hz (rouzbehhz.com) //

const averageColor = async img => {
  if (img === null || img === undefined) {
    return {
      hex: null,
      rgb: null,
      rgbArr: null,
      rgbObj: null
    };
  }
  let canvas = document.createElement("canvas"), // Create canvas
    context = canvas.getContext && canvas.getContext("2d"), // Set canvas context
    color = { rgbObj: { r: 0, g: 0, b: 0 } }, // Default rgbObj in color
    skip = 5, // Skip every 5th pixel to sample
    count = -715, // Init count (-715 is the magical number)
    counter = -4; // Init counter

  // Get canvas height and width from image
  let height = (canvas.height = img.height),
    width = (canvas.width = img.width);

  // If browser doesn't support canvas or if img width/height is 0, throw generic error
  if (!context || width === 0 || height === 0) {
    alert("Something went terribly wrong...");
    return color;
  }

  // Draw image to canvas
  context.drawImage(img, 1, 1);

  // Get image data from canvas
  let data = context.getImageData(1, 1, width, height);
  data = data.data;

  // Sample values based on skip intervals
  while ((counter += skip * 4) < data.length) {
    count++;
    color.rgbObj.r += data[counter];
    color.rgbObj.g += data[counter + 1];
    color.rgbObj.b += data[counter + 2];
  }

  // Get average RGB values ( Math.floor() / ~~ ) and set in color Object
  color.rgbObj.r = ~~(color.rgbObj.r / count);
  color.rgbObj.g = ~~(color.rgbObj.g / count);
  color.rgbObj.b = ~~(color.rgbObj.b / count);

  // Set RGB as an Array in color Object
  color.rgbArr = [color.rgbObj.r, color.rgbObj.g, color.rgbObj.b];

  // Set RGB as a String in color Object
  color.rgb = `rgb(${color.rgbObj.r},${color.rgbObj.g},${color.rgbObj.b})`;

  // Set HEX code as a String in color Object
  color.hex = color.rgbArr.map(x => {
    // Convert RGB color values to a Base16 string
    x = parseInt(x).toString(16);
    // Add zero if only one character
    return x.length === 1 ? `0${x}` : x;
  });
  color.hex = `#${color.hex.join("")}`;

  // Export color object
  return color;
};

export default averageColor;
