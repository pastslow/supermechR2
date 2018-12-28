

var arrProcent = [
    {
        procentHeat: 0,
        procentCooling: 0,
        procentEnergy: 0,
        procentEngRegen: 0,
        procentExpResist: 0,
        procentEleResist: 0,
        procentPysResist: 0,
        procentHp: 0
    }
]
var arenaStats = {
    procent0: 0,
    procent1: 1,
    procent3: 3,
    procent5: 5,
    procent6: 6,
    procent7: 7,
    procent9: 9,
    procent10: 10,
    procent11: 11,
    procent13: 13,
    procent14: 14,
    procent15: 15,
    procent17: 17,
    procent18: 18,
    procent20: 20,
    procent22: 22,
    procent26: 26,
    procent30: 30,
    procent34: 34,
    procent40: 40,
    level0: 0,
    level1: 20,
    level2: 40,
    level3: 60,
    level4: 90,
    level5: 120,
    level6: 150,
    level7: 180,
    level8: 220,
    level9: 260,
    level10: 300,
};

// State
var arrWeight = [
    {
        armour: 0,
        drone: 0,
        legs: 0,
        topWepOne: 0,
        topwepTwo: 0,
        sideWepOne: 0,
        sideWepTwo: 0,
        sideWepThree: 0,
        sideWepFour: 0,
        teleport: 0,
        charge: 0,
        hook: 0,
        shield: 0,
        module1: 0,
        module2: 0,
        module3: 0,
        module4: 0,
        module5: 0,
        module6: 0,
        module7: 0,
        module8: 0,
    },
]
var arrHp = [
    {
        armour: 0,
        legs: 0,
        drone: 0,
        topWepOne: 0,
        topwepTwo: 0,
        sideWepOne: 0,
        sideWepTwo: 0,
        sideWepThree: 0,
        sideWepFour: 0,
        teleport: 0,
        charge: 0,
        hook: 0,
        shield: 0,
        module1: 0,
        module2: 0,
        module3: 0,
        module4: 0,
        module5: 0,
        module6: 0,
        module7: 0,
        module8: 0,
    },
]
var arrEnergy = [
    {
        armour: 0,
        legs: 0,
        drone: 0,
        topWepOne: 0,
        topwepTwo: 0,
        sideWepOne: 0,
        sideWepTwo: 0,
        sideWepThree: 0,
        sideWepFour: 0,
        teleport: 0,
        charge: 0,
        hook: 0,
        shield: 0,
        module1: 0,
        module2: 0,
        module3: 0,
        module4: 0,
        module5: 0,
        module6: 0,
        module7: 0,
        module8: 0,
    },
]
var arrHeat = [
    {
        armour: 0,
        legs: 0,
        drone: 0,
        topWepOne: 0,
        topwepTwo: 0,
        sideWepOne: 0,
        sideWepTwo: 0,
        sideWepThree: 0,
        sideWepFour: 0,
        teleport: 0,
        charge: 0,
        hook: 0,
        shield: 0,
        module1: 0,
        module2: 0,
        module3: 0,
        module4: 0,
        module5: 0,
        module6: 0,
        module7: 0,
        module8: 0,
    },
]
var arrCooling = [
    {
        armour: 0,
        legs: 0,
        drone: 0,
        topWepOne: 0,
        topwepTwo: 0,
        sideWepOne: 0,
        sideWepTwo: 0,
        sideWepThree: 0,
        sideWepFour: 0,
        teleport: 0,
        charge: 0,
        hook: 0,
        shield: 0,
        module1: 0,
        module2: 0,
        module3: 0,
        module4: 0,
        module5: 0,
        module6: 0,
        module7: 0,
        module8: 0,
    },
]
var arrEnergyRegen = [
    {
        armour: 0,
        legs: 0,
        drone: 0,
        topWepOne: 0,
        topwepTwo: 0,
        sideWepOne: 0,
        sideWepTwo: 0,
        sideWepThree: 0,
        sideWepFour: 0,
        teleport: 0,
        charge: 0,
        hook: 0,
        shield: 0,
        module1: 0,
        module2: 0,
        module3: 0,
        module4: 0,
        module5: 0,
        module6: 0,
        module7: 0,
        module8: 0,
    },
]
var arrPysRes = [
    {
        armour: 0,
        legs: 0,
        drone: 0,
        topWepOne: 0,
        topwepTwo: 0,
        sideWepOne: 0,
        sideWepTwo: 0,
        sideWepThree: 0,
        sideWepFour: 0,
        teleport: 0,
        charge: 0,
        hook: 0,
        shield: 0,
        module1: 0,
        module2: 0,
        module3: 0,
        module4: 0,
        module5: 0,
        module6: 0,
        module7: 0,
        module8: 0,
    },
]
var arrExpRes = [
    {
        armour: 0,
        legs: 0,
        drone: 0,
        topWepOne: 0,
        topwepTwo: 0,
        sideWepOne: 0,
        sideWepTwo: 0,
        sideWepThree: 0,
        sideWepFour: 0,
        teleport: 0,
        charge: 0,
        hook: 0,
        shield: 0,
        module1: 0,
        module2: 0,
        module3: 0,
        module4: 0,
        module5: 0,
        module6: 0,
        module7: 0,
        module8: 0,
    },
]
var arrEleRes = [
    {
        armour: 0,
        legs: 0,
        drone: 0,
        topWepOne: 0,
        topwepTwo: 0,
        sideWepOne: 0,
        sideWepTwo: 0,
        sideWepThree: 0,
        sideWepFour: 0,
        teleport: 0,
        charge: 0,
        hook: 0,
        shield: 0,
        module1: 0,
        module2: 0,
        module3: 0,
        module4: 0,
        module5: 0,
        module6: 0,
        module7: 0,
        module8: 0,
    },
]
function calculateStats(arr) {
    changeWeightColor();
    return arr[0].armour + arr[0].drone + arr[0].topWepOne +
        arr[0].topwepTwo + arr[0].sideWepOne + arr[0].sideWepTwo +
        arr[0].sideWepThree + arr[0].sideWepFour + arr[0].teleport +
        arr[0].charge + arr[0].shield + arr[0].module1 +
        arr[0].module2 + arr[0].module3 + arr[0].module4 +
        arr[0].module5 + arr[0].module6 + arr[0].module7 +
        arr[0].module8 + arr[0].legs + arr[0].hook;
}
function calculateHp() {
    return calculateStats(arrHp) + arrProcent[0].procentHp
}
function calculateHeat() {
    var procent = (calculateStats(arrHeat) * arrProcent[0].procentHeat) / 100;
    return (calculateStats(arrHeat) + Math.round(procent));
}
function calculateCooling() {
    var procent = (calculateStats(arrCooling) * arrProcent[0].procentCooling) / 100;
    return (calculateStats(arrCooling) + Math.round(procent));
}
function calculateEnergy() {
    var procent = (calculateStats(arrEnergy) * arrProcent[0].procentEnergy) / 100;
    return (calculateStats(arrEnergy) + Math.round(procent));
}
function calculateEngRegen() {
    var procent = (calculateStats(arrEnergyRegen) * arrProcent[0].procentEngRegen) / 100;
    return (calculateStats(arrEnergyRegen) + Math.round(procent));
}
function calculateExpRes() {
    var procent = (calculateStats(arrExpRes) * arrProcent[0].procentExpResist) / 100;
    return (calculateStats(arrExpRes) + Math.round(procent));
}
function calculateEleRes() {
    var procent = (calculateStats(arrEleRes) * arrProcent[0].procentEleResist) / 100;
    return (calculateStats(arrEleRes) + Math.round(procent));
}
function calculatePysRes() {
    var procent = (calculateStats(arrPysRes) * arrProcent[0].procentPysResist) / 100;
    return (calculateStats(arrPysRes) + Math.round(procent));
}
function changeWeightColor() {
    var weightId = document.getElementById("weightId");
    if (weightId.innerText > 1000) {
        weightId.style.color = "red";
    } else {
        weightId.style.color = "greenyellow";
    }
}
function changeProcent(procent, listId) {
    var listId = document.getElementById(listId)
    arrProcent[0][procent] = arenaStats[listId.value]
    healthId.innerText = calculateHp();
    energyId.innerText = calculateEnergy();
    energyRegenId.innerText = calculateEngRegen();
    heatId.innerText = calculateHeat();
    coolingId.innerText = calculateCooling();
    pysId.innerText = calculatePysRes();
    eleId.innerText = calculateEleRes();
    expId.innerText = calculateExpRes();
}
function changeStats() {
    document.getElementById("heatArena").options.selectedIndex = 10;
    document.getElementById("coolingArena").options.selectedIndex = 10;
    document.getElementById("energyArena").options.selectedIndex = 10;
    document.getElementById("energyRegenArena").options.selectedIndex = 10;
    document.getElementById("pysResArena").options.selectedIndex = 10;
    document.getElementById("expResArena").options.selectedIndex = 10;
    document.getElementById("eleResArena").options.selectedIndex = 10;
    document.getElementById("hpArena").options.selectedIndex = 10;

    arrProcent[0].procentHp = arenaStats[hpArena.value]
    arrProcent[0].procentHeat = arenaStats[heatArena.value]
    arrProcent[0].procentCooling = arenaStats[coolingArena.value]
    arrProcent[0].procentEnergy = arenaStats[energyArena.value]
    arrProcent[0].procentEngRegen = arenaStats[energyRegenArena.value]
    arrProcent[0].procentExpResist = arenaStats[expResArena.value]
    arrProcent[0].procentEleResist = arenaStats[eleResArena.value]
    arrProcent[0].procentPysResist = arenaStats[pysResArena.value]

    healthId.innerText = calculateHp();
    energyId.innerText = calculateEnergy();
    energyRegenId.innerText = calculateEngRegen();
    heatId.innerText = calculateHeat();
    coolingId.innerText = calculateCooling();
    pysId.innerText = calculatePysRes();
    eleId.innerText = calculateEleRes();
    expId.innerText = calculateExpRes();

    var simulatorArenaId = document.getElementById("simulatorArenaId");
    simulatorArenaId.style.display = "flex";
}