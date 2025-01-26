// const container = document.querySelector(".container");
let btn = document.getElementById("mainBtn");

//ícones e imagens
const leaf = document.querySelector(".leaf");
const snow = document.querySelector(".snow");
const flower = document.querySelectorAll(".flower");

let snowContainer = document.getElementById("snow-container");

let intervalId;

let lastSeason;

// Array de objetos
const seasons = [
  {
    name: "Spring",
    background: "./img/springbg1.jpg",
  },

  { name: "Autumn", background: "./img/autumnbg.jpg"},

  { name: "Winter", background: "./img/winterbg.jpg"},

  {
    name: "Summer",
    background: "./img/summerbg.jpg"
  },
];

function getRandomSeasons(lastSeasonName) {
  const seasonsFiltered = seasons.filter(
    (season) => season.name !== lastSeasonName
  );
  console.log("Last season name:", lastSeasonName);
  console.log("Todas as estações sem filtrar:", seasons);
  console.log("Filtro das estações:", seasonsFiltered);
  const randomSeason =
    seasonsFiltered[Math.floor(Math.random() * seasonsFiltered.length)];
  console.log("Estação", randomSeason);
  return randomSeason;
}

btn.addEventListener("click", function () {
  let randomSeason = getRandomSeasons(lastSeason);
  lastSeason = randomSeason.name;
  console.log("Last", lastSeason);

  document.body.style.background = `url(${randomSeason.background})`;
  document.body.style.backgroundSize = "100% 100vh";

  if (intervalId) {
    clearInterval(intervalId);
  }

  switch (randomSeason.name) {
    case "Spring":
      btn.innerHTML = 'Spring!';
      btn.style.color = "#B6244F";
      btn.style.background = "#FFFFFF";
      let flowerContainer = document.getElementById("flowers-container");
      flowerContainer.classList.remove("hidden");
      document.getElementById("leaves-container").classList.add("hidden");
      document.getElementById("snow-container").classList.add("hidden");
      document.getElementById("sun").classList.add("hidden");
      break;
    case "Autumn":
      btn.innerHTML = 'Autumn!';
      btn.style.color = "#C47335";
      btn.style.background = "#FFFFFF";
      let leavesContainer = document.getElementById("leaves-container");
      leavesContainer.classList.remove("hidden");
      document.getElementById("flowers-container").classList.add("hidden");
      document.getElementById("snow-container").classList.add("hidden");
      document.getElementById("sun").classList.add("hidden");
      break;
    case "Winter":
      btn.innerHTML = 'Winter is here!';
      btn.style.color = "#540B0E";
      btn.style.background = "#FFFFFF";
      let snowContainer = document.getElementById("snow-container");
      snowContainer.classList.remove("hidden");
      document.getElementById("leaves-container").classList.add("hidden");
      document.getElementById("flowers-container").classList.add("hidden");
      document.getElementById("sun").classList.add("hidden");
      break;
    case "Summer":
      btn.innerHTML = 'Summer finally arrived!';
      btn.style.color = '#2660A4';
      btn.style.background = "#FFFFFF";
      let sunContainer = document.getElementById("sun");
      sunContainer.classList.remove("hidden");
      document.getElementById("leaves-container").classList.add("hidden");
      document.getElementById("snow-container").classList.add("hidden");
      document.getElementById("flowers-container").classList.add("hidden");
  }

  intervalId = setInterval(createMoreIcons(randomSeason.name), 50);

  setTimeout(() => {
    clearInterval(intervalId);
  }, 5500);
});



function createMoreIcons(seasonName) {
  switch (seasonName) {
    case "Autumn":
      for (let i = 0; i < 5; i++) {
        const clone = leaf.cloneNode(true);
        clone.classList.add("hidden");
        clone.style.paddingLeft = Math.random() * 10 + "px";
        clone.style.animationDuration = Math.random() * 5 + 3 + "s";
        clone.style.opacity = Math.random() * 1;
        document.getElementById("leaves-container").append(clone);
      }
      break;
    case "Winter":
      for (let i = 0; i < 50; i++) {
        const snowFlake = snow.cloneNode(true);
        snowFlake.style.paddingLeft = Math.random() * 10 + "px";
        snowFlake.style.animationDuration = Math.random() * 5 + 3 + "s";
        snowFlake.style.opacity = Math.random() * 1;
        document.getElementById("snow-container").append(snowFlake);
      }
      break;
    case "Spring":
      for (let i = 0; i < 5; i++) {
        flower.forEach((flor) => {
          const flowers = flor.cloneNode(true);
          flowers.style.paddingLeft = Math.random() * 10 + "px";
          flowers.style.animationDuration = Math.random() * 5 + 3 + "s";
          flowers.style.opacity = Math.random() * 1;
          document.getElementById("flowers-container").append(flowers);
        });
      }
      break;
  }
}
