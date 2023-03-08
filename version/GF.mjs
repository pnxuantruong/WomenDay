import type from "../type.mjs";
const imagesSrc = [
    "https://scontent.fhan3-4.fna.fbcdn.net/v/t39.30808-6/275551594_1136450330450544_5351094314690971083_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=qYfeoZFL5tAAX-aS0K3&_nc_ht=scontent.fhan3-4.fna&oh=00_AfDuxlnFaU_HQKGzMnhVtkvICgoKWXf0vG7Ln1JwsE7HvQ&oe=640E68E4",
    "./images/mai.png",
    "https://scontent.xx.fbcdn.net/v/t39.30808-6/324581485_1908327976184299_5612286871263424418_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=i-13tk3En4UAX_JVXEp&_nc_ht=scontent.fhan3-2.fna&oh=00_AfBIdqH5nZkfWDqwuxcC15ZAJzi9qk_cWZuMdQG6_i4r0w&oe=640D8447&_nc_fr=fhan3c02"
]

function GFversion(container) {
    container.innerHTML = "";


    var textArray = [
        "Gửi Thanh Mai",
        "Mai là người con gái tuyệt vời thứ nhì mà tui gặp (thứ nhất là mẹ :3).",
        "Chúc bạn luôn có đủ thời gian và cơ hội để làm những điều mình yêu thích, và luôn có niềm tin và sức mạnh để vượt qua mọi khó khăn.",
        "Cuối cùng, chúc bạn luôn khỏe mạnh, vui vẻ và xinh đẹp như những bông hoa đầu mùa xuân.",
        "Chúc bạn một ngày 8/3 thật vui vẻ và ý nghĩa!",
        "Bữa nào cho hun miếng :3"
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
    var imageIndex = 0;
    image.src = imagesSrc[imageIndex];
    container.appendChild(image);

    setInterval(() => {
        imageIndex = (imageIndex + 1)%imagesSrc.length;
        image.src = imagesSrc[imageIndex];
    }, 5000)

    type(textArray, typedTextSpans);
}

export default GFversion