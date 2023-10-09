/*let temp;

document.getElementById("mybtn").onclick = function(){

    if(document.getElementById("cbutton").checked){
        temp = document.getElementById("textbox").value;
        temp = Number(temp)
        temp = tocelsius(temp)
        document.getElementById("finalanswer").innerHTML = temp + "°C"
    }
    else if(document.getElementById("fbutton").checked){
        temp = document.getElementById("textbox").value;
        temp = Number(temp)
        temp = tofahrenhite(temp)
        document.getElementById("finalanswer").innerHTML = temp + "°F"
    }
    else{
        document.getElementById("finalanswer").innerHTML = "Select a unit"
    }
}

function tocelsius(temp){
    return(temp - 32) * (5/9)
}
function tofahrenhite(temp){
    return temp * 9/5  + 32
}*/

/*let number = [1,2,3,4,5,6,7];
let squares = number.map(square)
squares.forEach(print)

function square(number){
    return Math.pow(number,3);
}

function print(x){
    console.log(x)
}*/

/*sum(2,3,4,displayDOM)

function sum(x,y,z,callback){
    let result = x + y + z
    callback(result)
}
 function displayconsole(output){
    console.log(output)
 }
 function displayDOM(output){
    document.getElementById("mylabel").innerHTML = output;
 }*/

/* let ages = [13,43,54,23,2,15,14,16]
 let adults = ages.filter(adult)

 adults.forEach(print)

 function adult(element){
    return element >= 13
 }
 function print(element){
    console.log(element)
 }*/

/* let prices =  [5,4,3,4,5,6,7,7,3,8,9]
 let total = prices.reduce(checkout)
 console.log(`THE TOTAL IS: $${total}`)

 function checkout(x,y){
    return x + y
 }*/

/*let grades = [100,30,70,50,80,90]
 grades = grades.sort(descendingsort)

 grades.forEach(print)

 function descendingsort(x,y){
    return y-x
 }

 function print(descending){
    console.log(descending)
 }*/
/*let count = 0;

 function incount(increase){
    count+=1
    document.getElementById("mylabel").innerHTML = count;
 }
 function reset(zero){
    count = 0
    document.getElementById("mylabel").innerHTML = count;
 }
 function decount(decrease){
    count-=1
    document.getElementById("mylabel").innerHTML = count;
 }*/
/* let grades = [100,30,70,50,80,90]
 grades = grades.sort((x,y) => y-x)

 grades.forEach((descending) =>
    console.log(descending))*/

/*  let ages = [13,43,54,23,2,15,14,16]
    let adults = ages.filter( (element) => element >= 13)
   
    adults.forEach( (element) => console.log(element))*/

/*const car = {
   model:"Benz",
   color:"black",
   year :2023,

   drive : function(){
      console.log("THIS CAR CAN DRIVE")      
   },
   brakes : function(){
      console.log("THIS CAR AS A BRAKE")      
   }
}
console.log(car.model)
console.log(car.color)
console.log(car.year),

car.drive()
car.brakes()*/

/*class workout{

   pressup = 0;
   workoutday(){
      console.log(`YOU DID ${this.pressup} today`)
   }
}

player1 = new workout()
player1.pressup+=1;
console.log(player1.pressup)
player1.workoutday();*/

/*class student{

   constructor(name, gpa, age){
      this.name = name,
      this.gpa = gpa,
      this.age = age
   }
   study(){
      console.log(`${this.name} is studying`)
   }
}

const student1 = new student("desmond",5.0,19,)

console.log(student1.name)
console.log(student1.age)
student1.study()*/

/*class goods{
   static solditems = 0;
    
   constructor(solditems){
      this.solditems = solditems
      goods.solditems+=1
   }
}   

const solditems1 =new goods("clothes")
const solditems2 =new goods("shoes")

console.log(goods.solditems)*/

/*class workout{

   static pressup = 0;

   constructor(pressup){
      this._pressup = pressup;
      workout.pressup +=1
   }
   get pressup(){
      return `${this._pressup}reps`
   }
}

let pressup1 = new workout();
let pressup2 = new workout();

console.log(workout.pressup);*/

/*document.getElementById("mybtn").onclick = function () {

   let count = 0;
   let max = "";
   max = document.getElementById("myinput").value;

   max = Number(max) + 1;

   const mytimer = setInterval(countu, 1000);

   function countu() {
      countup = document.getElementById("mycountup");
      countup.innerHTML = count
      count += 1;
      
      if(count >= max){
         clearInterval(mytimer)
      }
   }
}


const mydate = document.getElementById("mydate")

update()

setInterval(update,1000)

function update(){
   date = new Date()
   mydate.innerHTML = timeformat(date)


   function timeformat(date){
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      let amorpm = hours >= 12 ? "pm" : "am" ;

      hours =  (hours % 12) || 12;
      hours = zeros(hours);
      minutes = zeros(minutes);
      seconds = zeros(seconds);

      return`${hours}:${minutes}:${seconds} ${amorpm}`
   }
   function  zeros(time){
      time = time.toString()
      return time.length < 2 ? "0" + time :time
   }
}

const title = document.getElementById( "mytitle");

title.style.backgroundColor = "rgb(12,467,342)";
title.style.fontFamily = "consolas";
title.style.textAlign = "center"
title.style.border = "2px solid red"

const mydiv = document.getElementById("mydiv");

mydiv.addEventListener("mouseover",changered)
mydiv.addEventListener("mouseout",changeback)
function changered(){
   mydiv.style.backgroundColor = "red"
}
function changeback(){
   mydiv.style.backgroundColor = "lightgreen"
}*/

/*const Btoggle = document.getElementById("toggle");
const img     = document.getElementById("images");

Btoggle.addEventListener("click", ()=> {

   if(img.style.display == "none"){
      img.style.display = "block"
   }
   else{
      img.style.display = "none"
   }
})*/

/*const mybutton = document.getElementById("mybtn");
const box = document.getElementById("myDiv");

mybutton.addEventListener("click", begin);

function begin(){
  let timerId = null;
  let x = 0;
  let y = 0;

  timerId = setInterval(frame, 5);

  function frame() {
    if (x >= 500 || y >= 500) {
      clearInterval(timerId);
    } else {
      x+= 1;
      y+= 1;
      box.style.left = x + "px"
      box.style.top = y + "px"
    }
  }
}*/

/*let canvas = document.getElementById("mycanvas");
let context = canvas.getContext("2d");*/

/*context.beginPath();
context.moveTo(0, 0);
context.lineTo(250, 250);
context.lineTo(250, 500);
context.moveTo(500, 0);
context.lineTo(250, 250);
context.stroke();*/

/*context.beginPath();
context.moveTo(250, 0);
context.lineTo(0, 250);
context.lineTo(500, 250);
context.lineTo(250, 0);
context.stroke();*/

const start = document.getElementById("startbtn");
const pause = document.getElementById("Pausebtn");
const reset = document.getElementById("resetbtn");
const timedisplay = document.getElementById("mytimer");

let starttime = 0;
let hrs = 0;
let mins = 0;
let secs = 0;
let paused = stop;
let intervalId;
let elapsedtime = 0;
let currentime = 0;

start.addEventListener("click", () => {
  if (paused) {
    starttime = Date.now();
    intervalId = setInterval(updatetimer, 1000);
  }
});
pause.addEventListener("click", () => {
  if (paused) {
    starttime = Date.now();
    clearInterval(intervalId);
  }
});
reset.addEventListener("click", () => {
  if (paused) {
    clearInterval(intervalId);
    starttime = 0;
    elapsedtime = 0;
    hrs = 0;
    mins = 0;
    secs = 0;
    timedisplay.textContent = "00:00:00";
  }
});

function updatetimer() {
  elapsedtime = Date.now() - starttime;
  secs = Math.floor((elapsedtime / 1000) % 60);
  mins = Math.floor((elapsedtime / (1000 * 60)) % 60);
  hrs = Math.floor((elapsedtime / (1000 * 60 * 60)) % 60);

  secs = pad(secs);
  mins = pad(mins);
  hrs = pad(hrs);

  timedisplay.textContent = `${hrs}:${mins}:${secs}`;

  function pad(units) {
    return ("0" + units).length > 2 ? units : "0" + units;
  }
}


