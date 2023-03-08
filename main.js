import GFversion from "./version/GF.mjs";
import male from "./version/male.mjs";
import female from "./version/female.mjs";


const submitButton = document.getElementById("submit");
const music = new Audio("music.mp3");

function encoder(str) {
    var encode_str = "";

    for (var index = 0; index < str.length; index++) {
        encode_str += str.charCodeAt(index);
    }

    return encode_str;
}

document.addEventListener("DOMContentLoaded", function () { // On DOM Load initiate the effect
    // setTimeout(() => type(0), newTextDelay + 250);

    submitButton.addEventListener("click", () => {
        var container = document.getElementsByClassName("container")[0];

        let userName = document.querySelector('input#text-input').value;
        let gender = document.querySelector('input[name="gender"]:checked').value;

        if (userName != "") {
            music.play();
            document.getElementsByTagName("body")[0].style.backgroundColor = "#ffc2de";

            if (encoder(userName).includes("7797105") && gender == "female") GFversion(container);
            else if (gender == "female") return female(container, userName);
            else if (gender == "male") return male(container, userName);
        }
    })
});


