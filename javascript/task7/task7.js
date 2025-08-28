function percent(event) {
    event.preventDefault();
    let inp1 = document.getElementById("inp1").value;
    let bar = document.getElementById("bar");

    if (inp1 >= 0 && inp1 <= 100) {
        bar.style.width = inp1 + "%";
        bar.innerHTML = inp1 + "%";
    }
    document.getElementById("inp1").value="";
}