//decalring required variables
let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const weapon = [
    {
        name: "stick",
        power: 5
    },
    {
        name: "dagger",
        power: 30
    },
    {
        name: "claw hammer",
        power: 50
    },
    {
        name: "sword",
        power: 100
    }
]

const locations = [
    
    {
        name: "town square",
        "button text":  ["go to Store","go to Cave","Fight Dragon"],
        "button functions": [goStore,goCave,fightDragon],
        text: "You are in the \"Town Square\"..."
    },

    {
        name: "Store",
        "button text": ["Buy 10 health (10 Gold)","Buy a weapon (30 Gold)","Go to town square"],
        "button functions": [buyHealth,buyWeapon,goTown],
        text: "You entered the \"store\"..."
    },

    {
        name: "Cave",
        "button text": ["Fight slime","Fight fanged beast","Go to town square"],
        "button functions": [fightSlime,fightBeast,goTown],
        text: "You entered the \"Cave\"...\nYou See \"Monsters\"."
    }
]

//getting html document elements
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterNameText");
const monsterHealthText = document.querySelector("#monsterHealthText");

//initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

//function to update buttons and text
function update(location) {
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button1.onclick = location["button funtions"][0];
    button2.onclick = location["button funtions"];
    button3.onclick = location["button funtions"];
    text.innerText = location.text;
}

//function for goTown
function goTown() {
    console.log("going to Town");
    update(locations[0]);
}

//function for goStore
function goStore() {
    console.log("Going to Store...");
    update(locations[1]);
}

//function for goCave
function goCave() {
    console.log("Going to Cave...");
    update(locations[2])
}

//function for fightDragon
function fightDragon() {
    console.log("Fighting Dragon...");
}

//function for buyHealth
function buyHealth() {
    console.log("Buying Health");
    if ( gold >=10 ) {
        if ( health<=190 ){
            console.log("Healing");
            gold -= 10;
            health += 10;
            goldText.innerText = gold;
            healthText.innerText = health;
        } else{
            console.log("Buying Health Failed");
            text.innerText = "You Have \"Maximum Health\"";
        }
    } else{
        console.log("Buying Health Failed");
        text.innerText = "You Don't Have Enough \"Gold\" To Buy \"Health\"";
    }
}

//function for buyWeapon
function buyWeapon() {
    console.log("buying Weapon");
    if (gold >= 30) {
            gold -= 30;
            currentWeapon += 1;
    }

}

//funtion for fightSlime
function fightSlime() {
    console.log("Fighting Slime...");
}


//funtion for fightBeast
function fightBeast() {
    console.log("Fighting Beast...");
}