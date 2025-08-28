function full(event) {
    event.preventDefault();
    let inp = document.getElementById("inp1").value;
    let para1 = document.querySelector("#para1");
    para1.innerHTML = "User Name:" + inp;
    document.getElementById("inp1").value = "";
    let inpp = document.getElementById("inp2").value;
    let para2 = document.querySelector("#para2");
    para2.innerHTML = "Last Name:" + inpp;
    document.getElementById("inp2").value = "";
    let inppp = document.getElementById("inp3").value;
    let para3 = document.querySelector("#para3");
    para3.innerHTML = "DOB:" + inppp
    document.getElementById("inp3").value = "";
    let inpppp = document.getElementById("inp4").value;
    let para4 = document.querySelector("#para4");
    para4.innerHTML = "Father Name:" + inpppp;
    document.getElementById("inp4").value = "";
    let inppppp = document.getElementById("inp5").value;
    let para5 = document.querySelector("#para5");
    para5.innerHTML = "Mother Name:" + inppppp;
    document.getElementById("inp5").value = "";
    let inpppppp = document.getElementById("inp6").value;
    let para6 = document.querySelector("#para6");
    para6.innerHTML = "Mobile No :" + inpppppp;
    document.getElementById("inp6").value = "";
    let inppppppp = document.getElementById("inp7").value;
    let para7 = document.querySelector("#para7");
    para7.innerHTML = "Email ID:" + inppppppp;
    document.getElementById("inp7").value = "";
    let inpppppppp = document.getElementById("inp8").value;
    let para8 = document.querySelector("#para8");
    para8.innerHTML = "Age :" + inpppppppp;
    document.getElementById("inp8").value="";

    let radio = document.getElementById("para9");
    if (document.getElementById("abc1").checked) {
        radio.innerHTML = "Hobbies:" + document.getElementById("abc1").value;
    }
    else if (document.getElementById("abc2").checked) {
        radio.innerHTML = "Hobbies:" + document.getElementById("abc2").value;
    }
    else if (document.getElementById("abc3").checked) {
        radio.innerHTML = "Hobbies:" + document.getElementById("abc3").value;
    }
    else {
        radio.innerHTML = "Hobbies: Not selected a specific hobbie."
    }

    let gender = document.getElementById("para10"); {
        if ((document.getElementById("ab1").checked) && (document.getElementById("ab2").checked)) {
            gender.innerHTML = "Gender :Male,Female";
        }
        else if (document.getElementById("ab1").checked) {
            gender.innerHTML = "Gender :" + document.getElementById("ab1").value;
        }
        else if (document.getElementById("ab2").checked) {
            gender.innerHTML = "Gender:" + document.getElementById("ab2").value;
        }
        else{
            gender.innerHTML="Gender: Gender not Selected"
        }
    }
}