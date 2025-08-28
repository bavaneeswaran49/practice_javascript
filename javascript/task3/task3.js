//task 3
function showImages(event) {
    event.preventDefault(); 

    let img1 = document.getElementById("img1").value;
    let img2 = document.getElementById("img2").value;

    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = ""; 


    let image1 = document.createElement("img");
    image1.src = img1;
    image1.width = 200;

    let image2 = document.createElement("img");
    image2.src = img2;
    image2.width = 200;


    resultDiv.appendChild(image1);
    resultDiv.appendChild(image2);
}