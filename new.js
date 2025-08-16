function registration() {
    let inp=document.getElementById("inp1").value;
    let para1=document.querySelector("#para1");
    let inpp=document.getElementById("inp2").value;
    let para2=document.querySelector("#para2");
    let inppp=document.getElementById("inp3").value;
    let para3=document.querySelector("#para3");
    let inpppp=document.getElementById("inp4").value;
    let para4=document.querySelector("#para4");
    para1.innerHTML=inp;
    para2.innerHTML=inpp;
    para3.innerHTML=inppp;
    para4.innerHTML=inpppp;
    document.getElementById("inp1").value="";
    document.getElementById("inp2").value="";
    document.getElementById("inp3").value="";
     document.getElementById("inp4").value="";
}
