let x = 0;       
let comp;        
let comp2;       
let firstCard = null;
let score = 0;
let numcard = 0;
let time = 30;

let cards = ["tree","one","two","four","trees","ones","twos","fours"];

function selectCard(id) {
    let card = document.getElementById(id);

    card.onclick = function () {
        card.classList.replace("card", "cardv");

        if (x === 0) {
            firstCard = card;
            comp = card.classList[1];
            x++;

        } else {
            comp2 = card.classList[1];

            if (comp === comp2) {
                setTimeout(function() {
                    let elements = document.getElementsByClassName(comp);
                let temp = [];
                for (let i = 0; i < elements.length; i++) {
                    temp.push(elements[i]);
                }
                for (let i = 0; i < temp.length; i++) {
                    temp[i].classList.replace(comp, comp + "d");
                }
                }, 1000);
                score += 5;
                let xpElement = document.getElementById("xp");
                xpElement.textContent = score;
                numcard += 1;
                if (numcard == 4) {
                    setTimeout(function() {
                    window.location.href = "index.html";
                }, 3000);
                }

            } else {
                setTimeout(function() {
                    firstCard.classList.replace("cardv", "card");
                    card.classList.replace("cardv", "card");
                }, 1000);
                if (score > 0) {
                    score -= 5;
                    let xpElement = document.getElementById("xp");
                    xpElement.textContent = score;
                }
            }

            x = 0;
        }
    };
}

for (let i = 0; i < cards.length; i++) {
    selectCard(cards[i]);
}
