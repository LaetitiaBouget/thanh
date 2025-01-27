
        const rows = 19;
        const cols = 17;

        const crossword = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
            [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
            [1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
            [1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
            [1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]
        ];

        const definitions = {
            horizontal: {
                1: "Lieu secondaire de dodo",
                4: "Ce que tu es envers les autres mais pas encore assez envers toi-même.",
                5: "Ton coéquipier journalier malgré toi",
                9: "Que si on ne s'endort pas !",
                12: "On vient du ...",
                13: "Sentiment que je ressens quand on est ensemble",
                14: "Ta seule zone de gras",
                15: "Notre première source de stress et de surveillance",
                16: "Notre seconde source de stress et de surveillance",
                18: "Ce que tu aimes faire. Ce que j'aimerais réussir à faire",
                19: "Souvenir d'activité détente entre filles, colorée et piquante"
            },
            vertical: {
                2: "Plaisir du soir",
                3: "Aliment délicieux mais mortel selon ton conjoint",
                6: "Notre premier point commun du quotidien, synonyme de stress",
                7: "Arme mortelle qui peut ouvrir les fronts",
                8: "Celui que tu évites à tout prix",
                10: "Machine de sport à la campagne",
                11: "Il parait que tu sais en jouer",
                15: "Ta passion inavouée sous toutes les formes: solaire, hydratante et bien d'autres encore",
                17: "La bonne manière de parler"
            }
        };

        const answers = [
            ["", "", "", "", "", "", "", "", "", "V", "O", "I", "T", "U", "R", "E", ""],
            ["", "", "", "", "N", "", "", "", "", "", "", "", "I", "", "", "", ""],
            ["", "", "", "", "O", "", "", "", "", "", "", "", "S", "", "", "", ""],
            ["", "", "", "B", "I", "E", "N", "V", "E", "I", "L", "L", "A", "N", "T", "E", ""],
            ["", "", "", "", "X", "", "", "", "", "", "", "", "N", "", "", "", ""],
            ["", "", "", "", "", "O", "R", "D", "I", "N", "A", "T", "E", "U", "R", "", ""],
            ["", "", "", "", "", "", "", "", "", "", "N", "", "", "", "O", "", ""],
            ["", "", "", "", "", "", "S", "", "", "", "X", "", "", "", "N", "", ""],
            ["", "", "", "", "", "C", "O", "N", "D", "U", "I", "R", "E", "", "C", "", ""],
            ["", "", "", "", "", "", "L", "", "", "", "E", "", "", "", "E", "", ""],
            ["", "", "T", "", "", "", "E", "", "V", "", "T", "", "", "", "S", "U", "D"],
            ["", "C", "O", "M", "P", "L", "I", "C", "I", "T", "E", "", "", "", "", "", ""],
            ["", "", "N", "", "", "", "L", "", "O", "", "", "", "", "", "", "", ""],
            ["", "", "D", "", "", "", "", "", "L", "I", "P", "O", "M", "E", "", "", ""],
            ["C", "H", "E", "V", "E", "U", "X", "", "O", "", "", "", "", "", "", "", ""],
            ["R", "", "U", "", "", "", "", "E", "N", "F", "A", "N", "T", "S", "", "", ""],
            ["E", "", "S", "P", "O", "R", "T", "", "", "O", "", "", "", "", "", "", ""],
            ["M", "", "E", "", "", "", "", "", "B", "R", "O", "D", "E", "R", "I", "E", ""],
            ["E", "", "", "", "", "", "", "", "", "T", "", "", "", "", "", "", ""]            
        ];

        const prefilledCells = [
            { row: 3, col: 7, value: 'V' },
            { row: 0, col: 10, value: 'O' },
            { row: 3, col: 13, value: 'N' },
            { row: 17, col: 11, value: 'D' },
            { row: 5, col: 5, value: 'O' },
            { row: 5, col: 7, value: 'D' },
            { row: 11, col: 3, value: 'M' },
            { row: 11, col: 4, value: 'P' },


        ];

const numbersPosition = [
    // Mots horizontaux
    { row: 0, col: 9, number: 1 },
    { row: 3, col: 3, number: 4 },
    { row: 5, col: 5, number: 5 },
    { row: 8, col: 5, number: 9 },
    { row: 10, col: 14, number: 12 },
    { row: 11, col: 1, number: 13 },
    { row: 13, col: 8, number: 14 },
    { row: 14, col: 0, number: 15 },
    { row: 15, col: 7, number: 16 },
    { row: 16, col: 2, number: 18 },
    { row: 17, col: 8, number: 19 },
    // Mots verticaux
    { row: 0, col: 12, number: 2 },
    { row: 1, col: 4, number: 3 },
    { row: 5, col: 10, number: 6 }, 
    { row: 5, col: 14, number: 7 },
    { row: 7, col: 6, number: 8 },
    { row: 10, col: 2, number: 10 },
    { row: 10, col: 8, number: 11 },
    { row: 15, col: 9, number: 17 },

];

// Fonction pour remplir la grille avec des numéros
function displayNumbers() {
    numbersPosition.forEach(position => {
        const { row, col, number } = position;
        const div = document.querySelectorAll(`#grid .cell`)[row * cols + col];
        const numberDiv = document.createElement("span");
        numberDiv.className = "number";
        numberDiv.textContent = number;
        div.appendChild(numberDiv);
    });
}

    // Génération de la grille
const grid = document.getElementById("grid");

crossword.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
        const div = document.createElement("div");
        div.className = "cell";
        if (cell === 0) {
            div.classList.add("black");
        } else {
            const input = document.createElement("input");
            input.maxLength = 1;
            input.dataset.row = rowIndex;  
            input.dataset.col = colIndex;  
            
            const prefilled = prefilledCells.find(cell => cell.row === rowIndex && cell.col === colIndex);
            if (prefilled) {
                input.value = prefilled.value;
                input.disabled = true;
            }

            div.appendChild(input);
        }
        grid.appendChild(div);
    });
});

displayNumbers();

        // Fonction pour afficher les définitions
        function displayDefinitions() {
            const definitionsContainer = document.getElementById("definitions");
            let htmlContent = '<h3>Définitions</h3>';

            htmlContent += '<div class="definition"><strong>Horizontaux :</strong></div>';
            Object.keys(definitions.horizontal).forEach(key => {
                htmlContent += `<div>${key}. ${definitions.horizontal[key]}</div>`;
            });

            htmlContent += '<div class="definition"><strong>Verticaux :</strong></div>';
            Object.keys(definitions.vertical).forEach(key => {
                htmlContent += `<div>${key}. ${definitions.vertical[key]}</div>`;
            });

            definitionsContainer.innerHTML = htmlContent;
        }

        displayDefinitions();

      // Validation des réponses
    document.getElementById("validate").addEventListener("click", () => {
        const inputs = document.querySelectorAll(".cell input");
        let allCorrect = true;
        inputs.forEach(input => {
            const row = input.dataset.row;
            const col = input.dataset.col;
            if (input.value.toUpperCase() === answers[row][col]) {
                input.classList.add("correct");
                input.classList.remove("incorrect");
            } else {
                input.classList.add("incorrect");
                input.classList.remove("correct");
                allCorrect = false;
            }
        });

    // Afficher le message de succès avec SweetAlert2 si tout est correct
    if (allCorrect) {
        Swal.fire({
            title: 'Bravo Thanh ! ',
            text: 'Au plaisir de passer encore plein de bons moments avec toi cette année <3',
            icon: 'success',
            imageUrl: 'bravo.jpg', 
            imageWidth: 500, 
            imageHeight: 500,
            imageAlt: 'Succès',
            confirmButtonText: 'OK'
        });
    }
});
