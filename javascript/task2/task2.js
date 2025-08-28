function changeColor(event) {
    event.preventDefault(); // stops page refresh
    let name1 = document.getElementById("name").value;
    let result = document.querySelector("#result");
    result.innerHTML = name1;
    result.style.backgroundColor = "yellow";
    result.style.color = "red";
    document.getElementById("name").value = "";
}