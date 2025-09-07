const ogChars = [
  { name: "Adam Warlock", img: "images/adam_warlock.png" },
  { name: "Black Panther", img: "images/black_panther.png" },
  { name: "Black Widow", img: "images/black_widow.png" },
  { name: "Blade", img: "images/blade.png" },
  { name: "Captain America", img: "images/captain_america.png" },
  { name: "Cloak and Dagger", img: "images/cloak_and_dagger.png" },
  { name: "Doctor Strange", img: "images/doctor_strange.png" },
  { name: "Emma Frost", img: "images/emma_frost.png" },
  { name: "Groot", img: "images/groot.png" },
  { name: "Hawkeye", img: "images/hawkeye.png" },
  { name: "Hela", img: "images/hela.png" },
  { name: "Hulk", img: "images/hulk.png" },
  { name: "Human Torch", img: "images/human_torch.png" },
  { name: "Invisible Woman", img: "images/invisible_woman.png" },
  { name: "Iron Fist", img: "images/Ironfist.png" },
  { name: "Iron Man", img: "images/iron_man.png" },
  { name: "Jeff the Land Shark", img: "images/jeff_the_land_shark.png" },
  { name: "Loki", img: "images/loki.png" },
  { name: "Luna Snow", img: "images/luna_snow.png" },
  { name: "Magik", img: "images/magik.png" },
  { name: "Magneto", img: "images/magneto.png" },
  { name: "Mantis", img: "images/mantis.png" },
  { name: "Mister Fantastic", img: "images/mister_fantastic.png" },
  { name: "Moon Knight", img: "images/moon_knight.png" },
  { name: "Namor", img: "images/namor.png" },
  { name: "Peni Parker", img: "images/peni_parker.png" },
  { name: "Phoenix", img: "images/phoenix.png" },
  { name: "Psylocke", img: "images/psylocke.png" },
  { name: "The Punisher", img: "images/the_punisher.png" },
  { name: "The Thing", img: "images/the_thing.png" },
  { name: "Rocket Raccoon", img: "images/rocket_raccoon.png" },
  { name: "Scarlet Witch", img: "images/scarlet_witch.png" },
  { name: "Squirrel Girl", img: "images/squirrel_girl.png" },
  { name: "Spider Man", img: "images/spider_man.png" },
  { name: "Star Lord", img: "images/star_lord.png" },
  { name: "Storm", img: "images/storm.png" },
  { name: "Thor", img: "images/thor.png" },
  { name: "Ultron", img: "images/ultron.png" },
  { name: "Venom", img: "images/venom.png" },
  { name: "Winter Soldier", img: "images/winter_soldier.png" },
  { name: "Wolverine", img: "images/wolverine.png" }
];


let chars = [...ogChars];

let char = null;

function getRandomChampion() {
  const randomIndex = Math.floor(Math.random() * chars.length);
  return chars[randomIndex];
}

function showChampion() {
  if (chars.length == 0) {
    document.getElementById("champion-name").innerText =
      "No more characters left!";
    return;
  }
  char = getRandomChampion();
  document.getElementById("champion-name").innerText = char.name;
  document.getElementById("champion-remove").innerText = "";
  if (char.img) {
    document.getElementById("champion-img").src = char.img;
    } else {
    document.getElementById("champion-img").src = "";
    }
}

function removeChampion() {
  if (char == null) {
    document.getElementById("champion-name").innerText = "Nothing to remove!";
    document.getElementById("champion-remove").innerText = "";
    document.getElementById("champion-img").src = "";
    return;
  }
  const index = chars.indexOf(char);
  if (index != -1) {
    chars.splice(index, 1);
    document.getElementById("champion-remove").innerText =
      char.name + " is removed!";
    char = null;
    document.getElementById("champion-img").src = "";
  }
}

function resetChampion() {
  chars = [...ogChars];
  document.getElementById("champion-name").innerText = "List has been reset";
  document.getElementById("champion-remove").innerText = "";
  document.getElementById("champion-img").src = "";
  char = null;
}
