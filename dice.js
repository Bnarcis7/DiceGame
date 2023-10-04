function refreshPage() {
    // window.location.reload();
    setDiceImagesAndWinnerText();
}

function randomNumber() {
    var randomNumber = Math.floor(Math.random() * 6 + 1);
    console.log(randomNumber)
    return randomNumber;
}

function setDiceImagesAndWinnerText() {
    var randomNumber1 = randomNumber();
    var randomNumber2 = randomNumber();

    for (i = 1; i <= 6; i++) {

        if (randomNumber1 === i)
        {
            document.getElementsByClassName("img1")[0].src = "images/dice"+i+".png";

        }
        if (randomNumber2 === i) 
        {
            document.getElementsByClassName("img2")[0].src = "images/dice"+i+".png";
        }
    }

    if (randomNumber1 > randomNumber2) {
        document.getElementsByTagName("h1")[0].innerHTML = "😀 Player 1 wins!"
    } else if (randomNumber1 < randomNumber2) {
        document.getElementsByTagName("h1")[0].innerHTML = "Player 2 wins! <i class='flag'></i> 😀"
    } else {
        document.getElementsByTagName("h1")[0].innerHTML = "It's a tie!"

    }
}
