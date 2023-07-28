import  index from "./index.html";
const currentValue = 50; // For example, assuming the current value is 50%

// Get the SVG circle element and update its stroke color based on the value
const circle = index.getElementById('progress');
if (circle) {
    const maxProgress = 100; // The maximum value that corresponds to a full circle
    const percentage = (currentValue / maxProgress) * 100;
    const hue = ((100 - percentage) * 120) / 100; // Calculate hue value from 0 (red) to 120 (green)
    const color = `hsl(${hue}, 100%, 50%)`; // Convert hue to an HSL color value
    circle.setAttribute('stroke', color);
}

// Display the current value inside the 'count' div
const countDiv = document.getElementById('count');
if (countDiv) {
    countDiv.textContent = `Current Value: ${currentValue}`;
}