import type from "../type.mjs";

function female(container, userName) {

    container.innerHTML = "";
    console.log("female");


    var textArray = [
        "Gửi " + userName,
        "Chúc bạn luôn tự tin và tỏa sáng như những ngôi sao trên trời đêm.",
        "Chúc bạn mãi mãi vững vàng trong tình yêu, hạnh phúc và thành công trong cuộc sống.",
        "Chúc bạn luôn được bao quanh bởi tình thân, sự ấm áp và niềm vui đầy tràn.",
        "Chúc bạn luôn có đủ thời gian và cơ hội để làm những điều mình yêu thích, và luôn có niềm tin và sức mạnh để vượt qua mọi khó khăn.",
        "Cuối cùng, chúc bạn luôn khỏe mạnh, vui vẻ và xinh đẹp như những bông hoa đầu mùa xuân.",
        "Hãy luôn yêu thương bản thân và những người xung quanh bạn, và hãy cùng nhau tạo ra một thế giới tốt đẹp hơn cho phụ nữ.", 
        "Chúc bạn một ngày 8/3 thật vui vẻ và ý nghĩa!"
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

export default female