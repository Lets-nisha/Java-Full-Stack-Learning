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
// for loop

function clrChange(){
let elm = document.getElementsByClassName("demo");
    for (let i = 0; i < elm.length; i++) {
        elm[i].style.color = "blue";
    }
}

// ----------------------------------------------------------------------------
// forEach

function clr1Change(){
let elm = document.querySelectorAll(".demo1");
    
    elm.forEach(element => {
        element.style.color = "red"
    });
}

// ----------------------------------------------------------------------------
//  innerText get

let innerTexts = document.querySelector(".innerTexts");
console.log(innerTexts)

// innerHtmls get 
let innerHtmls = document.querySelector(".innerHtmls");
console.log(innerHtmls

)
// innerText set 
function change(){
let innerTexts = document.querySelector(".innerTexts");
innerTexts.innerText = "HYEE"

}
// ----------------------------------------------------------------------------
// addEventListener 

let button = document.querySelector("#btn")

// onclick issue 

// button.onclick = ()=>{
//     console.log("hyee ali")
// }
// button.onclick = ()=>{
//     console.log("hyee nisha")
// }
// button.onclick = ()=>{
//     console.log("hyee tanish")

// }

// ----------------------------------------------------------------------------


// addEventListener

// button.addEventListener("click", ()=>{
//     console.log("hyee ali")
// })

// button.addEventListener("click", ()=>{
//     console.log("hye tanish")
// })

// button.addEventListener("click", ()=>{
//     console.log("hye nisha")
// })
// ----------------------------------------------------------------------------

button.addEventListener("click",function(){
let heading = document.querySelector("#headingName")
heading.innerText = "turk"

})
