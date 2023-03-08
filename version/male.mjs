import type from "../type.mjs";

function male(container, userName) {
    container.innerHTML = "";
    console.log("male");

    var textArray = ["Hôm nay, tôi muốn gửi đến những người phụ nữ trong gia đình của " + userName + " những lời chúc tốt đẹp nhất.",
        "Chúc các bà, các mẹ, các chị, các em luôn mạnh khỏe, nhiều năng lượng và tươi cười.",
        "Chúc họ luôn được yêu thương, quan tâm và ủng hộ từ những người xung quanh.",
        "Chúc họ luôn đạt được những thành công và hạnh phúc trong cuộc sống của mình.",
        "Chúc các bà, các mẹ, các chị, các em luôn biết cách quan tâm, chăm sóc và yêu thương gia đình của mình một cách tốt nhất."
    ]

    var typedTextSpans = [];
    var textContainer = document.createElement("div");
    textContainer.className = "text-container";
    for (var i = 0; i < textArray.length; i++) {
        var paragraph = document.createElement("div");
        var line = document.createElement("p");

        paragraph.className = "paragraph";
        line.className = "typed-text";


        paragraph.appendChild(line);
        typedTextSpans.push(paragraph);
        textContainer.appendChild(paragraph);
    }
    container.appendChild(textContainer);

    var image = document.createElement("img");
    image.src = "./images/girl.png"
    container.appendChild(image);

    type(textArray, typedTextSpans);

}

export default male