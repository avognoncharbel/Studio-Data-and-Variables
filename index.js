// FORK this starter file and save it to your own Repl.it account.

// Declare and initialize the 12 variables here:

let date ="Monday 2019-03-18";
let time="10:05:34 AM";
//let astronautCount = 7;
const input=require('readline-sync');
let astronautCount = Number(readline-sync.question("How many astronauts are part of the mission? "));

let astronautStatus = "ready";
let averageAstronautMassKg ="80.7";
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg =	crewMassKg + fuelMassKg + shuttleMassKg;
let fuelTempCelsius	= -225;
let fuelLevel	= "100%";
let weatherStatus= "clear";
let dash1= "---------------------------------------";
let dash2="\n"+dash1;



// Write code to generate the LC04 report here:
console.log(dash1);
console.log ("> LC04 - LAUNCH CHECKLIST");
console.log(dash1);
console.log("Date: ",date);
console.log("Time: ",time);
console.log(dash2)
console.log(">ASTRAONAUT INFO");
console.log(dash1);
console.log("* count: ",astronautCount);
console.log("* status: ",astronautStatus);
console.log(dash2);
console.log(">FUEL DATA");
console.log(dash1);
console.log("*Fuel temp celcius: ",fuelTempCelsius);
console.log("*Fuel level: ",fuelLevel);
console.log(dash2);
console.log(">MASS DATA")
console.log(dash1);
console.log("*Crew mass: ",crewMassKg);
console.log("*Fuel mass: ",fuelMassKg);
console.log("*Shuttle mass: ",shuttleMassKg);
console.log("*Total mass: ", totalMassKg);
console.log(dash2);
console.log(">FLIGHT PLAN");
console.log(dash1);
console.log("*weather: ",weatherStatus);
console.log(dash2);
console.log(">OVERALL STATUS");
console.log(dash1);
console.log("* Clear for takeoff : YES ");






// When done, have your TA check your code.




// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.