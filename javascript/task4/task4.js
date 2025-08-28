function showImage(event) {
    event.preventDefault();

    let img = document.getElementById("img").value;
    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";

    let image = document.createElement("img");
    image.src = img;
    image.width = 250;

    resultDiv.appendChild(image);
}