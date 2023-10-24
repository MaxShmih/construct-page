const screenWidth = document.body.clientWidth;
const styleSheet = document.styleSheets[0];
const widthRule = styleSheet.insertRule('.header::after { width: ' + screenWidth + 'px; }', styleSheet.cssRules.length);
const container = document.querySelector('.container');
const containerWidth = container.offsetWidth;
const lineBackdown = (containerWidth - screenWidth);
const lineRule = styleSheet.insertRule('.header::after { left: ' + lineBackdown / 2 + 'px; }', styleSheet.cssRules.length);

