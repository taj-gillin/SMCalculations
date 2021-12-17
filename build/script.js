var PayoffValues = {
    "1Cherry": 2,
    "2Cherries": 5,
    "3Cherries": 10,
    "3Oranges": 15,
    "3Watermelons": 20,
    "3Bells": 30,
    "3Bars": 30,
    "3SingleBars": 50,
    "3DoubleBars": 100,
    "3TripleBars": 200
};
var Wheel1 = new Array();
var Wheel2 = new Array();
var Wheel3 = new Array();
Wheel1 = ["Cherry", "Orange", "Orange", "Orange", "Orange", "Orange", "Orange", "Orange", "Orange", "Orange", "Orange", "Orange", "Orange", "Orange", "Watermelon", "Bell", "Single Bar", "Single Bar", "Double Bars", "Triple Bars", "Triple Bars", "Triple Bars"];
Wheel2 = ["Cherry", "Orange", "Watermelon", "Watermelon", "Watermelon", "Watermelon", "Watermelon", "Watermelon", "Watermelon", "Watermelon", "Watermelon", "Watermelon", "Watermelon", "Watermelon", "Watermelon", "Bell", "Single Bar", "Single Bar", "Double Bars", "Triple Bars", "Triple Bars", "Triple Bars"];
Wheel3 = ["Cherry", "Orange", "Watermelon", "Bell", "Bell", "Bell", "Bell", "Bell", "Bell", "Bell", "Bell", "Bell", "Bell", "Bell", "Bell", "Bell", "Bell", "Bell", "Single Bar", "Single Bar", "Double Bars", "Triple Bars"];
// Wheel1 = ["Cherry", "Orange", "Orange", "Orange", "Orange", "Orange", "Orange", "Orange", "Orange", "Orange", "Orange", "Orange", "Orange","Orange", "Orange", "Watermelon", "Bell", "Single Bar", "Double Bars", "Triple Bars"]
// Wheel2 = ["Cherry", "Orange", "Watermelon","Watermelon", "Watermelon", "Watermelon", "Watermelon", "Watermelon", "Watermelon", "Watermelon", "Watermelon", "Watermelon", "Bell","Bell", "Bell", "Bell", "Single Bar","Double Bars", "Double Bars", "Triple Bars"]
// Wheel3 = ["Cherry", "Orange", "Orange", "Orange", "Orange", "Watermelon", "Bell", "Bell", "Bell", "Bell", "Bell", "Bell", "Bell", "Single Bar", "Single Bar", "Single Bar", "Single Bar", "Single Bar", "Double Bars", "Triple Bars"]
console.log(Wheel1.length);
console.log(Wheel2.length);
console.log(Wheel3.length);
var Combinations = new Array();
for (var i = 0; i < Wheel1.length; i++) {
    for (var j = 0; j < Wheel2.length; j++) {
        for (var k = 0; k < Wheel3.length; k++) {
            Combinations.push([Wheel1[i], Wheel2[j], Wheel3[k]]);
        }
    }
}
var PayoffOccurances = {
    "1Cherry": 0,
    "2Cherries": 0,
    "3Cherries": 0,
    "3Oranges": 0,
    "3Watermelons": 0,
    "3Bells": 0,
    "3Bars": 0,
    "3SingleBars": 0,
    "3DoubleBars": 0,
    "3TripleBars": 0
};
//Cherries
Combinations.forEach(function (combination) {
    var cherryCount = 0;
    for (var i = 0; i < combination.length; i++) {
        if (combination[i] == "Cherry") {
            cherryCount++;
        }
    }
    switch (cherryCount) {
        case 1:
            PayoffOccurances["1Cherry"]++;
            break;
        case 2:
            PayoffOccurances["2Cherries"]++;
            break;
        case 3:
            PayoffOccurances["3Cherries"]++;
            break;
    }
});
//3Bars
Combinations.forEach(function (combination) {
    var barCount = 0;
    for (var i = 0; i < combination.length; i++) {
        if (combination[i] == "Single Bar" || combination[i] == "Double Bars" || combination[i] == "Triple Bars") {
            barCount++;
        }
    }
    if (barCount == 3 && !(combination[0] == combination[1] && combination[1] == combination[2])) {
        PayoffOccurances["3Bars"]++;
    }
});
//Triples
Combinations.forEach(function (combination) {
    if (combination[0] == combination[1] && combination[1] == combination[2]) {
        switch (combination[0]) {
            case "Orange":
                PayoffOccurances["3Oranges"]++;
                break;
            case "Watermelon":
                PayoffOccurances["3Watermelons"]++;
                break;
            case "Bell":
                PayoffOccurances["3Bells"]++;
                break;
            case "Single Bar":
                PayoffOccurances["3SingleBars"]++;
                break;
            case "Double Bars":
                PayoffOccurances["3DoubleBars"]++;
                break;
            case "Triple Bars":
                PayoffOccurances["3TripleBars"]++;
                break;
        }
    }
});
var Payoff = {
    "1Cherry": PayoffOccurances["1Cherry"] * PayoffValues["1Cherry"] / Combinations.length,
    "2Cherries": PayoffOccurances["2Cherries"] * PayoffValues["2Cherries"] / Combinations.length,
    "3Cherries": PayoffOccurances["3Cherries"] * PayoffValues["3Cherries"] / Combinations.length,
    "3Oranges": PayoffOccurances["3Oranges"] * PayoffValues["3Oranges"] / Combinations.length,
    "3Watermelons": PayoffOccurances["3Watermelons"] * PayoffValues["3Watermelons"] / Combinations.length,
    "3Bells": PayoffOccurances["3Bells"] * PayoffValues["3Bells"] / Combinations.length,
    "3Bars": PayoffOccurances["3Bars"] * PayoffValues["3Bars"] / Combinations.length,
    "3SingleBars": PayoffOccurances["3SingleBars"] * PayoffValues["3SingleBars"] / Combinations.length,
    "3DoubleBars": PayoffOccurances["3DoubleBars"] * PayoffValues["3DoubleBars"] / Combinations.length,
    "3TripleBars": PayoffOccurances["3TripleBars"] * PayoffValues["3TripleBars"] / Combinations.length
};
var AveragePayoff = Payoff["1Cherry"] + Payoff["2Cherries"] + Payoff["3Cherries"] + Payoff["3Oranges"] + Payoff["3Watermelons"] + Payoff["3Bells"] + Payoff["3Bars"] + Payoff["3SingleBars"] + Payoff["3DoubleBars"] + Payoff["3TripleBars"];
// AveragePayoff /= Combinations.length;
console.log(Payoff);
console.log("There are " + Combinations.length + " possible combinations, the average payoff is " + AveragePayoff);
