document.addEventListener('DOMContentLoaded', function () {
    const createSquaresBtn = document.getElementById('createSquaresBtn');
    const squaresContainer = document.getElementById('squares-container');
    const numberOfSquaresInput = document.getElementById('numberOfSquares');


    createSquaresBtn.addEventListener('click', function () {
        squaresContainer.innerHTML = '';
        //everytime clicked, the chatbox will be cleared.

        const numberOfSquares = parseInt(numberOfSquaresInput.value);

        for (let i = 0; i < numberOfSquares; i++) {
            const square = document.createElement('div');
            //to append new content to the DOM dynamically
            square.className = 'square';
            squaresContainer.appendChild(square);
        }
    });
});
