//baterry charge function
function recharge() {
  let battery = document.getElementById('battery');
  battery.innerHTML = "&#xf244;";

  //set timeout 
  setTimeout(()=>{
    battery.innerHTML = "&#xf243;";
  },1000);
  setTimeout(()=>{
    battery.innerHTML = "&#xf242;";
  },2000);
  setTimeout(()=>{
    battery.innerHTML = "&#xf241;";
  },3000);
  setTimeout(()=>{
    battery.innerHTML = "&#xf240;";
  },4000);
};
//set interval
setInterval(recharge, 5000);
// call function 
recharge();

// hourGlass Function

function hourGlass(){
  let hourGlass = document.querySelector("#hourGlass");
  hourGlass.innerHTML = "&#xf251;";

  //set timeout function
  setTimeout(() => {
    hourGlass.innerHTML = "&#xf252;";
  }, 1000);
  setTimeout(() => {
    hourGlass.innerHTML = "&#xf253;";
  }, 2000);
};
setInterval(hourGlass,3000);
//call hourGlass
hourGlass();