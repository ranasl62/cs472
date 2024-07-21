window.onload = () => {
    const screen = document.getElementById('text-area');
    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
    const animationOption = document.getElementById('animation');
    const sizeOption = document.getElementById('fontsize');
    const speedCheckBox = document.getElementById('turbo');

    let currentFontClass = null;
    let selectedAnimation = window.ANIMATIONS[animationOption.value];
    let speed = 250;
    let player;

    const setScreen = (string) => {
        screen.innerHTML = string;
    };

    const setFont = (font) => {
        const fontClass = `fs-${font}`;
        if (currentFontClass) screen.classList.remove(currentFontClass);
        screen.classList.add(fontClass);
        currentFontClass = fontClass;
    };

    const setAnimation = (animation) => {
        if (!animation) return;

        const frames = animation.split('=====\n');
        let counter = 0;

        player = setInterval(() => {
            setScreen(frames[counter++ % frames.length]);
        }, speed);
    };

    const restart = () => {
        clearInterval(player);
        setAnimation(selectedAnimation);
    };

    animationOption.onchange = (e) => {
        selectedAnimation = window.ANIMATIONS[e.target.value];
        setScreen(selectedAnimation);
    };

    sizeOption.onchange = (e) => {
        setFont(e.target.selectedOptions[0].dataset.fs);
    };

    startButton.onclick = () => {
        startButton.disabled = true;
        animationOption.disabled = true;
        stopButton.disabled = false;
        setAnimation(selectedAnimation);
    };

    stopButton.onclick = () => {
        stopButton.disabled = true;
        startButton.disabled = false;
        animationOption.disabled = false;
        clearInterval(player);
        setScreen(selectedAnimation);
    };

    speedCheckBox.onchange = (e) => {
        speed = e.target.checked ? 50 : 250;
        if (!startButton.disabled) restart();
    };

    // Initialize screen and font size
    setScreen(selectedAnimation);
    setFont(sizeOption.selectedOptions[0].dataset.fs);
};
