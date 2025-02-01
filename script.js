const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const popup = document.getElementById("popup");

noButton.addEventListener("mouseover", () => {
    let newX, newY;
    const yesRect = yesButton.getBoundingClientRect();
    const noRect = noButton.getBoundingClientRect();

    do {
        newX = Math.random() * (window.innerWidth - noRect.width);
        newY = Math.random() * (window.innerHeight - noRect.height);
    } while (
        newX + noRect.width > yesRect.left && newX < yesRect.right &&
        newY + noRect.height > yesRect.top && newY < yesRect.bottom
    );

    noButton.style.position = "absolute";
    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;
});

yesButton.addEventListener("click", () => {
    popup.style.display = "flex";
});