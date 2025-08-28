function comparision(event) {
    event.preventDefault();
let input = document.getElementById("two").value.toLowerCase();
let languages = ["javascript", "html", "css"];

let index = languages.indexOf(input);

if (index !== -1) {
    let present = languages[index];
    let past = languages[(index + 1) % languages.length];
    let next = languages[(index + 2) % languages.length];
    document.getElementById("para").innerHTML = "present value: " + present;
    document.getElementById("para1").innerHTML = "past value: " + past;
    document.getElementById("para2").innerHTML = "next value: " + next;
}
else {
    document.getElementById("para").innerHTML = "Language not found!";
    document.getElementById("para1").innerHTML = "";
    document.getElementById("para2").innerHTML = "";
  }
}
