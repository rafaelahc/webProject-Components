const leave = document.querySelector(".leaf");
const snow = document.querySelector(".snow");
const flower = document.querySelectorAll(".flower");
const container = document.querySelector(".container");

function createLeaves() {
  // const clone = leave.cloneNode(true);  
  // clone.style.paddingLeft = Math.random() * 10 + "px";
  // clone.style.animationDuration = Math.random() * 5 + 3 + "s"; 
  // clone.style.opacity = Math.random() * 1;  
  // container.append(clone); 

  const snowFlake = snow.cloneNode(true);
  snowFlake.style.paddingLeft = Math.random() * 10 + "px"; 
  snowFlake.style.animationDuration = Math.random() * 5 + 3 + "s"; 
  snowFlake.style.opacity = Math.random() * 1;
  container.append(snowFlake); 

  // flower.forEach(flor => {
  //   const flowers = flor.cloneNode(true);
  //   flowers.style.paddingLeft = Math.random() * 10 + "px"; 
  //   flowers.style.animationDuration = Math.random() * 5 + 3 + "s"; 
  //   flowers.style.opacity = Math.random() * 1;
  //   container.append(flowers); 
  // });
  
}


const s = setInterval(createLeaves, 50);

setTimeout(() => {
  clearInterval(s);
}, 5500); 