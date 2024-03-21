let hrs = document.getElementById("hours");
let min = document.getElementById("mins");
let sec = document.getElementById("seconds");

setInterval(()=>{

 let currentTime = new Date();

//  console.log(currentTime.getHours());
//  console.log(currentTime.getMinutes());
//  console.log(currentTime.getSeconds());

hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.
getMinutes();
sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.
getSeconds();
},1000)