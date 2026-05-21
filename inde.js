
const Api = "https://jsonplaceholder.typicode.com/users";
let usersData = [];

const getData = async (urls) => {
   try {
       const res = await fetch(urls);
       const data = await res.json();
       usersData = data;
       renderData();
   } catch (err) {
       console.log("Xato:", err);
   }
}
function tekshirBasket() {

    const basket = document.querySelector(".bosket-el");

    if (basket.children.length === 0) {

        alert("Xatolik");

    } else {

        window.location.href = "./olish.html";

    }

}
function renderData() {
  
    document.getElementById("text1").innerHTML = usersData[0].name;
    document.getElementById("p1").innerHTML = usersData[0].username;

    document.getElementById("text2").innerHTML = usersData[1].name;
    document.getElementById("p2").innerHTML = usersData[1].username;

    document.getElementById("text3").innerHTML = usersData[3].name;
    document.getElementById("p3").innerHTML = usersData[3].username;

    document.getElementById("text4").innerHTML = usersData[4].name;
    document.getElementById("p4").innerHTML = usersData[4].username;

    document.getElementById("text5").innerHTML = usersData[5].name;
    document.getElementById("p5").innerHTML = usersData[5].username;

    document.getElementById("text6").innerHTML = usersData[6].name;
    document.getElementById("p6").innerHTML = usersData[6].username;

    document.getElementById("text7").innerHTML = usersData[7].name;
    document.getElementById("p7").innerHTML = usersData[7].username;

    document.getElementById("text8").innerHTML = usersData[8].name;
    document.getElementById("p8").innerHTML = usersData[8].username;

    document.getElementById("text9").innerHTML = usersData[6].name;
    document.getElementById("p9").innerHTML = usersData[6].username;

    document.getElementById("text10").innerHTML = usersData[7].name;
    document.getElementById("p10").innerHTML = usersData[7].username;

    document.getElementById("text11").innerHTML = usersData[2].name;
    document.getElementById("p11").innerHTML = usersData[2].username;

    document.getElementById("text12").innerHTML = usersData[6].name;
    document.getElementById("p12").innerHTML = usersData[6].username;
}

getData(Api);


function basketOpen() {
    document.querySelector(".bosket").classList.add("active");
}

function basketClosse() {
    document.querySelector(".bosket").classList.remove("active");
} 

function basket1(e) {
    let box = e.parentElement; 
    let img = box.querySelector("img").src;
    let name = box.querySelector("h1").innerHTML;

    let ul = document.querySelector(".bosket-el");

    ul.innerHTML += "<li><img width='50px' src=" + img + " alt=''><div class='basket-el'><h3>" + name + "</h3><p></p></div></li>";
}

