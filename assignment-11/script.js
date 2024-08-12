document.getElementById('startButton').addEventListener('click', () => {
    const width = parseInt(document.getElementById('width').value);
    const growthAmount = parseInt(document.getElementById('growthAmount').value);
    const growRate = parseInt(document.getElementById('growRate').value);
    const numberCircles = parseInt(document.getElementById('numberCircles').value);

    for (let i = 0; i < numberCircles; i++) {
        createCircle(width, growthAmount, growRate);
    }
});

function createCircle(width, growthAmount, growRate) {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.style.width = `${width}px`;
    circle.style.height = `${width}px`;

    // Position the circle randomly within the window bounds
    const xPos = Math.random() * (window.innerWidth - width);
    const yPos = Math.random() * (window.innerHeight - width);
    circle.style.left = `${xPos}px`;
    circle.style.top = `${yPos}px`;

    document.body.appendChild(circle);

    const intervalId = setInterval(() => {
        const currentWidth = parseInt(circle.style.width);
        const newWidth = currentWidth + growthAmount;
        circle.style.width = `${newWidth}px`;
        circle.style.height = `${newWidth}px`;
    }, growRate);

    circle.addEventListener('click', () => {
        clearInterval(intervalId);
        circle.remove();
    });
}

// Home button functionality
document.getElementById('homeButton').addEventListener('click', () => {
    alert('Going Home!'); // You can replace this with actual navigation if needed
});
