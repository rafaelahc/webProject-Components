const leave = document.querySelector(".leaf");
const snow = document.querySelector(".snow");
const flower = document.querySelectorAll(".flower");
const container = document.querySelector(".container");

function createLeaves() {
  // const clone = leave.cloneNode(true);  
  // clone.style.paddingLeft = Math.random() * 10 + "px"; // creating left padding  
  // clone.style.animationDuration = Math.random() * 5 + 3 + "s"; // animation duration between 3-5  
  // clone.style.opacity = Math.random() * 1;  
  // container.append(clone); // adding clone flake to container

  // const snowFlake = snow.cloneNode(true);
  // snowFlake.style.paddingLeft = Math.random() * 10 + "px"; // creating left padding
  // snowFlake.style.animationDuration = Math.random() * 5 + 3 + "s"; // animation duration between 3-5
  // snowFlake.style.opacity = Math.random() * 1;
  // container.append(snowFlake); // adding clone flake to container

  flower.forEach(flor => {
    const flowers = flor.cloneNode(true);
    flowers.style.paddingLeft = Math.random() * 10 + "px"; // creating left padding
    flowers.style.animationDuration = Math.random() * 5 + 3 + "s"; // animation duration between 3-5
    flowers.style.opacity = Math.random() * 1;
    container.append(flowers); // adding clone flake to container
  });

  
}


const s = setInterval(createLeaves, 50);

setTimeout(() => {
  clearInterval(s);
}, 5500); 