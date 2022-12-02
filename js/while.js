let i = 1
while(i <= 16){
    console.log(2 ** i);
    i++;
}

const coneMaxInventory = 100;
const coneMinInventory = 50;
let allCones = Math.floor(Math.random() * (coneMaxInventory - coneMinInventory + 1) + coneMinInventory);
console.log(`I have ${allCones} cones to start`);
do {
    let conesSold = Math.floor(Math.random() * 5) + 1;
    if (allCones - conesSold > 0) {
        allCones -= conesSold
        console.log(`Now I have ${allCones} because I just sold ${conesSold}`);
    } if (allCones < conesSold) {
        console.log(`Sorry, I only have ${allCones}, you requested ${conesSold}`);
        continue;
    } if (allCones - conesSold === 0) {
        console.log(`I am selling you my last ${allCones}, now I have ${allCones - conesSold} cones left! I sold them all!`);
        break;
    };
} while (allCones > 0)
