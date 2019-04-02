# Average Sampler 🎨

Average Sampler finds the average color of a given image and sends back an object which includes the average color in both hex and rgb.

## Installation

Use the package manager [npm](https://www.npmjs.com/get-npm) to install average-sampler.

```bash
npm i --save average-sampler
```

## Usage

NOTE: The image you want to sample should be a local image or Chrome will yell at you because of cross-origin. You can get around this but you may need access to the remote server by setting the header appropriately and changing the image crossOrigin to 'Anonymous'.

```
import averageColor from ('average-sampler');

const img = document.getElementById("demo");

averageColor(img)
  .then(color => {
      // Do something with color object.
      // color.hex ====> #FFFFFF
      // color.rgb ====> rgb(25,25,25)
      // color.rgbArr ====> [25,25,25]
      // color.rgbObj ====> {r:25,g:25,b:25}
  });
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://github.com/rouzbehhz/average-sampler/blob/master/LICENSE)
