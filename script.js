function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function generatePalette() {
    const colorPalette = document.getElementById('colorPalette');
    colorPalette.innerHTML = '';

    for (let i = 0; i < 5; i++) {
        const color = generateRandomColor();
        const colorBox = document.createElement('div');
        colorBox.style.backgroundColor = color;
        colorBox.className = 'colorBox';
        colorBox.textContent = color;
        colorPalette.appendChild(colorBox);
    }
}

