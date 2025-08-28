function passwordStrength(event) {
    event.preventDefault();
    let password1 = document.getElementById("password").value;
    let para = document.querySelector("#para");

    if (password1.length >= 0 && password1.length <= 3) {

        para.innerHTML = "week";
    }
    else if (password1.length >= 4 && password1.length <= 6) {
        para.innerHTML = "medium";
    }
    else {
        para.innerHTML = "strong";

    }
}