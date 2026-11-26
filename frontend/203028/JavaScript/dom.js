// ----------------------------------------------------------------------------

function getData() {
  let heading = document.getElementById("heading");
  heading.innerHTML = "Nisha Turkey";
  console.log(heading);
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

function clrChange() {
  let elm = document.getElementsByClassName("demo");
  for (let i = 0; i < elm.length; i++) {
    elm[i].style.color = "blue";
  }
}

// ----------------------------------------------------------------------------
// forEach

function clr1Change() {
  let elm = document.querySelectorAll(".demo1");

  elm.forEach((element) => {
    element.style.color = "red";
  });
}

// ----------------------------------------------------------------------------
//  innerText get

let innerTexts = document.querySelector(".innerTexts");
console.log(innerTexts);

// innerHtmls get
let innerHtmls = document.querySelector(".innerHtmls");
console.log(innerHtmls);
// innerText set
function change() {
  let innerTexts = document.querySelector(".innerTexts");
  innerTexts.innerText = "HYEE";
}
// ----------------------------------------------------------------------------
// addEventListener

let button = document.querySelector("#btn");

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

button.addEventListener("click", ()=>{
    console.log("hyee ali")
})

button.addEventListener("click", ()=>{
    console.log("hye tanish")
})

button.addEventListener("click", ()=>{
    console.log("hye nisha")
})
// ----------------------------------------------------------------------------

button.addEventListener("click",function(){
let heading = document.querySelector("#headingName")
heading.innerText = "turk"

})

// ----------------------------------------------------------------------------

let attribute1 = document.querySelector(".attribute")

attribute1.setAttribute("href","https://www.youtube.com/");

// ----------------------------------------------------------------------------

function switchDAta(){

let btnimg = document.querySelector(".btnimg")

let img1 = document.querySelector(".img1")
let imgg1 =img1.getAttribute("src")

let img2 = document.querySelector(".img2")
let imgg2 = img2.getAttribute("src")

imgg1.setAttribute("https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA4L3Jhd3BpeGVsb2ZmaWNlMl9waG90b19vZl9hX2dpcmxfc2l0dGluZ19hbmRfcmVhZGluZ19hX2Jvb2stX2hhcF9hZDU2YTFhNC1kNDQxLTRlMGQtOTNhNC02YjdkOTNkYzJkM2ZfMS5wbmc.png")
imgg2.setAttribute("https://tse1.mm.bing.net/th/id/OIP.98P6blECkZJEONOyF-NxJwAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3")

}

// ----------------------------------------------------------------------------

const checkbox = document.getElementById("agreeCheck");
const btn = document.getElementById("submitBtn");

checkbox.addEventListener("change", function () {
  btn.disabled = !checkbox.checked;
});
