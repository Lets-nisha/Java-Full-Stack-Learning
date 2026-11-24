// ----------------------------------------------------------------------------

function getData(){
    let heading = document.getElementById("heading");
heading.innerHTML = "Nisha Turkey"
console.log(heading)
}

// ---------------------------------------------------------------------------

let a1 = document.getElementsByClassName("demo");
console.log(a1[1].innerHTML);

// ---------------------------------------------------------------------------

let a2 = document.getElementsByTagName("p");
console.log(a2[0].innerHTML);

// ---------------------------------------------------------------------------

let demo = document.querySelector(".demo");
console.log(demo);

let demo1 = document.querySelectorAll(".demo");
console.log(demo1);

// ---------------------------------------------------------------------------

function clrChange(){
let elm = document.getElementsByClassName("demo");
    for (let i = 0; i < elm.length; i++) {
        elm[i].style.color = "blue";
    }
}

// ----------------------------------------------------------------------------