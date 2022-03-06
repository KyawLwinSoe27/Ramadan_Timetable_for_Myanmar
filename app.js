const myanmar = document.getElementById("regions");
const answer = document.getElementById("answer");
const btn = document.getElementById("btn");
let Sehri = document.querySelectorAll(".sehri");

btn.addEventListener("click", () => {
    answer.innerText = myanmar.value;
    if(answer.innerText == "Yangon"){
        Sehri[0].innerText = "Sehri - 4:05";
        Sehri[1].innerText = "Sehri - 4:07";
        Sehri[2].innerText = "Sehri - 4:08";
        Sehri[3].innerText = "Sehri - 4:10";
        Sehri[0].innerText = "Sehri - 4:05";
        Sehri[0].innerText = "Sehri - 4:05";
    } else if(answer.innerText == "Mawlamyine"){
        Sehri[0].innerText = "Sehri - 4:10";
        Sehri[1].innerText = "Sehri - 4:15";
        Sehri[2].innerText = "Sehri - 4:17";
        Sehri[3].innerText = "Sehri - 4:21";
        Sehri[0].innerText = "Sehri - 4:25";
        Sehri[0].innerText = "Sehri - 4:25";
    }
});