var itemPrefix;
var itemType;
var itemSuffix;
var ItemName = itemPrefix + " " + itemType + " " + itemSuffix;

// This is called when the button is clicked
function GenerateItem() {


    itemPrefix = ChooseElement(ItemPrefixes);
    itemType = ChooseElement(ItemTypes);
    itemSuffix = ChooseElement(ItemSuffixes);
    var ItemName = itemPrefix + " " + itemType + " " + itemSuffix;

    function ChooseElement(p1) {
        var ran = getRndInteger(0, p1.length);
        return p1[ran];
    }

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    document.getElementById("name").style.color = GetRandomColor();

    document.getElementById("name").innerHTML = ItemName;
    document.getElementById("tier").innerHTML = "TIER " + getRndInteger(1, 7);

    document.getElementById("dmgNumber").innerHTML = getRndInteger(10, 999);
    document.getElementById("magNumber").innerHTML = getRndInteger(10, 999);

    document.getElementById("durability").innerHTML = "Durability " + getRndInteger(10, 200);
    document.getElementById("lvlreq").innerHTML = "Required Level " + getRndInteger(1, 60);

    document.getElementById("valueAmt").innerHTML = getRndInteger(100, 99999);

}

let colors = {
    1: "#727378",
    2: "#ffffff",
    3: "#27ff4b",
    4: "#1fa8ff",
    5: "#ff27d9",
    6: "#ff3701"
}
Object.freeze(colors);

// Gets random color from colors list and applies it to item color
function GetRandomColor() {
    var ran = getRndInteger(1, 7); // FIX MAGIC NUMBER THIS LATER

    return colors[ran];
}



function ChooseElement(p1) {
    var ran = getRndInteger(0, p1.length);
    return p1[ran];
}

//Get random number
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

