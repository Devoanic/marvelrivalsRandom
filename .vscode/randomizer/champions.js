const ogChars = [
"Adam Warlock",
"Black Panther",
"Black Widow",
"Blade",
"Captain America",
"Cloak and Dagger",
"Doctor Strange",
"Emma Frost",
"Groot",
"Hawkeye",
"Hela",
"Hulk",
"Human Torch",
"Invisible Woman",
"Iron Fist",
"Iron Man",
"Jeff the Land Shark",
"Loki",
"Luna Snow",
"Magik",
"Magneto",
"Mantis",
"Mister Fantastic",
"Moon Knight",
"Namor",
"Peni Parker",
"Phoenix",
"Psylocke",
"The Punisher",
"The Thing",
"Rocket Raccoon",
"Scarlet Witch",
"Squirrel Girl",
"Spider Man",
"Star Lord",
"Storm",
"Thor",
"Ultron",
"Venom",
"Winter Soldier",
"Wolverine"
]

let chars = [...ogChars];

let char = null;

function getRandomChampion() {
    const randomIndex = Math.floor(Math.random() * chars.length);
    return chars[randomIndex];
}

function showChampion() {
    if(chars.length == 0) {
        document.getElementById("champion-name").innerText = "No more characters left!";
        return;
    }
    char = getRandomChampion();
    document.getElementById("champion-name").innerText = char;
    document.getElementById("champion-remove").innerText = "";
}

function removeChampion() {
    if(char == null) {
        return;
    }
    const index = chars.indexOf(char);
    if(index != -1) {
        chars.splice(index,1);
        document.getElementById("champion-remove").innerText = char + " is removed!";
        char = null;
    }
}

function resetChampion() {
    chars = [...ogChars];
    document.getElementById("champion-name").innerText = "List has been reset";
    document.getElementById("champion-remove").innerText = "";
    char = null;
}


