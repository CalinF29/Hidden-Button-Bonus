const input = document.querySelector("#number");
const button = document.querySelector(".generate-button");
const container = document.querySelector("#buttons-container");
const message = document.querySelector("#message");
console.log(input, button, container);

button.addEventListener("click", function() {
    const buttonCount = input.value;
    container.innerHTML = "";
    for (let i = 0; i < buttonCount; ++i) {
        const newButton = document.createElement("button");
        newButton.classList.add("game-button");
        newButton.textContent = i + 1;
        container.appendChild(newButton);
    }
        const gameButtons = document.querySelectorAll(".game-button");
        const randomIndex = Math.floor(Math.random() * gameButtons.length);
        const winnerButton = gameButtons[randomIndex];

        for (let j = 0; j < gameButtons.length; ++j) {
            gameButtons[j].addEventListener("click", function() {
                for (let k = 0; k < gameButtons.length; ++k) {
                    if (gameButtons[k] == winnerButton) {
                        gameButtons[k].classList.add("winner");
                    } else {
                        gameButtons[k].classList.add("loser");
                    }
                }
                if (gameButtons[j] == winnerButton) {
                    message.textContent = "Winner!";
                    message.style.color = "green";
                } else {
                    message.textContent = "Loser!";
                    message.style.color = "red";
                }
                message.classList.remove("show");

                setTimeout(function () {
                    message.classList.add("show");
                }, 250);
            });
        }
});

