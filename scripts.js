var colors = ["pink", "skyblue", "white"];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
document.documentElement.style.setProperty('--maincolor', randomColor);