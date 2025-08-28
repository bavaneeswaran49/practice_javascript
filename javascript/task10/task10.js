function passvalid(event) {
    event.preventDefault();
    let inp = document.getElementById("user").value;
    let inpp = document.getElementById("user1").value;
    let para = document.querySelector(".para");
    let usert = (inp.slice(0, 4));
    console.log(usert);
    let usert1 = (inpp.slice(6, 10))
    console.log(usert1);
    let upp = usert.concat(usert1);
    console.log(upp);
    para.innerHTML = "your password is:  " + upp;
    para.style.color = "red";
}
