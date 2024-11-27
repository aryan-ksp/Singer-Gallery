const hoverSound = document.getElementById("hoverSound");
document.querySelectorAll(".image-box").forEach((box) => {
    box.addEventListener("mouseenter", () => {
        const sound = box.dataset.sound; // Get sound file from the data attribute
        hoverSound.src = sound; // Set audio source to the respective file
        hoverSound.play().catch((err) => console.log("Error playing sound:", err)); // Play sound
    });
    box.addEventListener("mouseleave", () => {
        hoverSound.pause(); // Stop the sound
        hoverSound.currentTime = 0; // Reset playback position
    });
});

// Initialize 3D Room rotation
document.addEventListener("mousemove", (e) => {
    const gallery = document.querySelector(".gallery");
    const x = (window.innerWidth / 2 - e.pageX) / 30;
    const y = (window.innerHeight / 2 - e.pageY) / 30;
    gallery.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

// Holographic sound effect with a delay
document.querySelectorAll(".image-box").forEach((box) => {
    box.addEventListener("mouseenter", () => {
        const hoverSound = document.getElementById("hoverSound");
        hoverSound.src = box.dataset.sound;
        hoverSound.play();
    });

    box.addEventListener("mouseleave", () => {
        const hoverSound = document.getElementById("hoverSound");
        hoverSound.pause();
        hoverSound.currentTime = 0;
    });
});
