function bavan() {
    let inp1 = document.getElementById("inp").value;
    let para = document.querySelector("#para");
    para.innerHTML += inp1;
    document.getElementById("inp").value = "";
}