const FontFaceObserver = require("fontfaceobserver");

const Fonts = () => {
  const link = document.createElement("link");
  link.href =
    "https://fonts.googleapis.com/css?family=Raleway:400,600,700&display=swap";
  link.rel = "stylesheet";

  document.head.appendChild(link);

  const raleway = new FontFaceObserver("Raleway");

  raleway.load().then(() => {
    console.log('Google Font: "Raleway" has loaded successfully!');
  });
};

export default Fonts;
