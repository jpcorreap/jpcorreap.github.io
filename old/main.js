// Original code from https://campushippo.com/lessons/how-to-convert-rgb-colors-to-hexadecimal-with-javascript-78219fdb
function rgbToHex(rgb) {
  var hex = rgb.toString(16);
  if (hex.length < 2) {
    hex = "0" + hex;
  }
  return hex;
};

/**
 * This function allows change colors of navbar and title
 */
function changeRandomColors() {
  // Generates random hex color
  let red = rgbToHex(Math.floor((Math.random() * 255) + 1));
  let green = rgbToHex(Math.floor((Math.random() * 255) + 1));
  let blue = rgbToHex(Math.floor((Math.random() * 255) + 1));
  let randomColor = "#" + red + green + blue;

  // Change colors of navbar and title
  document.getElementById('navbar').style['background-color'] = randomColor;
  document.getElementById('name').style['color'] = randomColor;
}