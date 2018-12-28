var modalTitle = document.getElementById("modalTitle");
var modalBody = document.getElementById("modalBody");
var modalTitle = document.getElementById("modalTitle");
var robot = document.getElementById("robot");
var armourId = document.getElementById("armourId");
var robotArmour = document.getElementById("robotArmour");
var robotLegOne = document.getElementById("robotLegOne");
var imgPressed;
var weightId = document.getElementById("weightId");
var healthId = document.getElementById("healthId");

function itemsModal(imgId, slot) {
    imgPressed = document.getElementById(imgId);
    modalTitle.innerText = slot;
    if (slot == "Armours") {
        getAllItems(slot, armours, 'm-8');
    }
    if (slot == "Legs") {
        getAllItems(slot, legs, 'm-20');
    }
    if (slot == "Drones") {
        getAllItems(slot, drones, 'm-4');
    }
    if (slot == "SideWeapons") {
        getAllItems(slot, sideWeapons, 'm-2');
    }
    if (slot == "Hook") {
        getAllItems(slot, hooks, 'm-2');
    }
    if (slot == "Charge") {
        getAllItems(slot, charge, 'm-2');
    }
    if (slot == "Teleport") {
        getAllItems(slot, teleport, 'm-2');
    }
    if (slot == "Shield") {
        getAllItems(slot, shield, 'm-2');
    }
    if (slot == "Modules") {
        getAllItems(slot, modules, 'm-2');

    }
    if (slot == "TopWeapons") {
        getAllItems(slot, topWeapons, 'm-2');
    }
}
var nam;
function getAllItems(folder, array, margin) {
    nam = folder;
    $('#modalBody').empty();
    for (let i = 0; i < array.length; i++) {
        $('#modalBody').append(
            `
                    <div  class="slot-modal ${margin} ">
                        <img id='imgId${i}' name=${[i]} title=${array[i].name} onclick=console('imgId${i}') data-toggle="modal" data-target="#myModal"
                        class="img-responsive img item" src="img/${folder}/${array[i].name}.png" alt=""/>      
                    </div> 
                `
        )
    }
    $(".item").hover(function () {
        $('#modalTitle').text($(this).attr('title'))
    });
}
function console(imgModal) {
    var image = document.getElementById(imgModal);
    imgPressed.src = image.src;
    changeRobotArmour(image);
    changeRobotLegs(image);
    changeRobotDrone(image);
    changeRobotSideWepFour(image);
    changeRobotSideWepThree(image);
    changeRobotSideWepTwo(image);
    changeRobotSideWepOne(image);
    changeRobotTopWepOne(image);
    changeRobotTopWepTwo(image);

    // divId , image from this function, array element, array
    // modules
    changeItemStats('moduleOne', image, 'module1', modules);
    changeItemStats('moduleTwo', image, 'module2', modules);
    changeItemStats('moduleThree', image, 'module3', modules);
    changeItemStats('moduleFour', image, 'module4', modules);
    changeItemStats('moduleFive', image, 'module5', modules);
    changeItemStats('moduleSix', image, 'module6', modules);
    changeItemStats('moduleSeven', image, 'module7', modules);
    changeItemStats('moduleEight', image, 'module8', modules);
    // utility
    changeItemStats('telepId', image, 'teleport', teleport);
    changeItemStats('chargeId', image, 'charge', charge);
    changeItemStats('hookId', image, 'hook', hooks);

    // armours
    changeItemStats('armourId', image, 'armour', armours);

    // legs

    changeItemStats('legsId', image, 'legs', legs);


    var legsId = document.getElementById("legsId");
    if (armourId.src.includes('Nothing') || legsId.src.includes('Nothing')) {
        robot.style.display = 'none';
    }
}
function changeItemStats(name, image, core, arr) {
    // ================== Info ================= //
    // name  == divId, image == element pressed,
    // core == array element, arr = array
    if (imgPressed.id == name) {
        arrWeight[0][core] = arr[image.name].weight;
        arrHp[0][core] = arr[image.name].hp;
        arrEnergy[0][core] = arr[image.name].energy;
        arrEnergyRegen[0][core] = arr[image.name].engRegen;
        arrHeat[0][core] = arr[image.name].heat;
        arrCooling[0][core] = arr[image.name].cooling;
        arrPysRes[0][core] = arr[image.name].psyResist;
        arrEleRes[0][core] = arr[image.name].electricResist;
        arrExpRes[0][core] = arr[image.name].explosionResist;

        weightId.innerText = calculateStats(arrWeight);
        healthId.innerText = calculateHp();
        energyId.innerText = calculateEnergy();
        energyRegenId.innerText = calculateEngRegen();
        heatId.innerText = calculateHeat();
        coolingId.innerText = calculateCooling();
        pysId.innerText = calculatePysRes();
        eleId.innerText = calculateEleRes();
        expId.innerText = calculateExpRes();
    }
}
function changeRobotArmour(image) {
    var divRobotArmour = document.getElementById("divRobotArmour");
    if (nam == 'Armours') {
        robot.style.display = 'block';
        robotArmour.style.display = 'block';
        robotArmour.src = armourId.src;
        divRobotArmour.style.top = armours[image.name].top;
        divRobotArmour.style.left = armours[image.name].left;
        divRobotArmour.style.width = armours[image.name].width;

    } if (nam == 'Armours' && image.src.includes('Nothing')) {
        robot.style.display = 'none';
    } if (nam == 'Armours' && robotLegOne.src.includes('Nothing')) {
        robot.style.display = 'none';
    }
}
function changeRobotDrone(image) {
    var robotDrone = document.getElementById("robotDrone");
    if (nam == 'Drones') {
        robotDrone.style.display = 'block';
        robotDrone.src = droneId.src;
        arrWeight[0].drone = drones[image.name].weight;
        weightId.innerText = calculateStats(arrWeight);
    } if (nam == 'Drones' && robotLegOne.src.includes('Nothing')) {
        robot.style.display = 'none';
    } if (nam == 'Drones' && robotArmour.src.includes('Nothing')) {
        robot.style.display = 'none';
    } if (nam == 'Drones' && robotDrone.src.includes('Nothing')) {
        robotDrone.style.display = 'none';
    }
}
function changeRobotLegs(image) {
    var robotLegTwo = document.getElementById("robotLegTwo");
    var misc = document.getElementById("misc");
    var divRobotLegTwo = document.getElementById("divRobotLegTwo");
    var divRobotLegOne = document.getElementById("divRobotLegOne");

    if (nam == 'Legs') {
        robot.style.display = 'block';
        robotLegOne.style.display = 'block';
        robotLegTwo.style.display = 'block';
        divRobotLegTwo.style.display = "block";
        robot.style.top = legs[image.name].robotTop;
        misc.style.top = legs[image.name].robotMiscTop;

        robotLegOne.src = legsId.src;
        robotLegTwo.src = legsId.src;

        divRobotLegOne.style.top = legs[image.name].top;
        divRobotLegOne.style.left = legs[image.name].left;
        divRobotLegOne.style.width = legs[image.name].width;

        divRobotLegTwo.style.top = legs[image.name].top;
        divRobotLegTwo.style.left = legs[image.name].leftLegTwo;
        divRobotLegTwo.style.width = legs[image.name].width;
        
    } if (nam == 'Legs' && image.src.includes('THE_CLAW')) {
        divRobotLegTwo.style.display = "none";
    } if (nam == 'Legs' && image.src.includes('Nothing')) {
        robot.style.display = 'none';
    } if (nam == 'Legs' && robotArmour.src.includes('Nothing')) {
        robot.style.display = 'none';
    }

}
function changeRobotSideWepThree(image) {
    if (imgPressed.id == 'sideWepThree') {
        if (nam == 'SideWeapons') {
            robotSideWep3.style.display = 'block';
            robotSideWep3.src = sideWepThree.src;

            
            divSideWepThree.style.top = sideWeapons[image.name].side34Top;
            divSideWepThree.style.left = sideWeapons[image.name].side13Left;
            divSideWepThree.style.width = sideWeapons[image.name].width;

            arrWeight[0].sideWepThree = sideWeapons[image.name].weight;
            weightId.innerText = calculateStats(arrWeight);
        } if (nam == 'SideWeapons' && image.src.includes('Nothing')) {
            robotSideWep3.style.display = 'none';
        } if (nam == 'SideWeapons' && robotLegOne.src.includes('Nothing')) {
            robot.style.display = 'none';
        } if (nam == 'SideWeapons' && robotArmour.src.includes('Nothing')) {
            robot.style.display = 'none';
        }
    }
}
function changeRobotSideWepFour(image) {
    if (imgPressed.id == 'sideWepFour') {
        if (nam == 'SideWeapons') {
            robotSideWep4.style.display = 'block';
            robotSideWep4.src = sideWepFour.src;
            arrWeight[0].sideWepFour = sideWeapons[image.name].weight;

            divSideWepFour.style.top = sideWeapons[image.name].side34Top;
            divSideWepFour.style.left = sideWeapons[image.name].side24Left;
            divSideWepFour.style.width = sideWeapons[image.name].width;

            weightId.innerText = calculateStats(arrWeight);
        } if (nam == 'SideWeapons' && image.src.includes('Nothing')) {
            robotSideWep4.style.display = 'none';
        } if (nam == 'SideWeapons' && robotLegOne.src.includes('Nothing')) {
            robot.style.display = 'none';
        } if (nam == 'SideWeapons' && robotArmour.src.includes('Nothing')) {
            robot.style.display = 'none';
        }
    }
}
function changeRobotSideWepTwo(image) {
    if (imgPressed.id == 'sideWepTwo') {
        if (nam == 'SideWeapons') {
            robotSideWep2.style.display = 'block';
            robotSideWep2.src = sideWepTwo.src;

            divSideWepTwo.style.top = sideWeapons[image.name].side12Top;
            divSideWepTwo.style.left = sideWeapons[image.name].side34Left;
            divSideWepTwo.style.width = sideWeapons[image.name].width;

            arrWeight[0].sideWepTwo = sideWeapons[image.name].weight;
            weightId.innerText = calculateStats(arrWeight);
        } if (nam == 'SideWeapons' && image.src.includes('Nothing')) {
            robotSideWep2.style.display = 'none';
        } if (nam == 'SideWeapons' && robotLegOne.src.includes('Nothing')) {
            robot.style.display = 'none';
        } if (nam == 'SideWeapons' && robotArmour.src.includes('Nothing')) {
            robot.style.display = 'none';
        }
    }
}
function changeRobotSideWepOne(image) {
    var divSideWepOne = document.getElementById("divSideWepOne");
    if (imgPressed.id == 'sideWepOne') {
        if (nam == 'SideWeapons') {
            robotSideWep1.style.display = 'block';
            robotSideWep1.src = sideWepOne.src;

            divSideWepOne.style.top = sideWeapons[image.name].side12Top;
            divSideWepOne.style.left = sideWeapons[image.name].side13Left;
            divSideWepOne.style.width = sideWeapons[image.name].width;

            arrWeight[0].sideWepOne = sideWeapons[image.name].weight;
            weightId.innerText = calculateStats(arrWeight);
        } if (nam == 'SideWeapons' && image.src.includes('Nothing')) {
            robotSideWep1.style.display = 'none';
        } if (nam == 'SideWeapons' && robotLegOne.src.includes('Nothing')) {
            robot.style.display = 'none';
        } if (nam == 'SideWeapons' && robotArmour.src.includes('Nothing')) {
            robot.style.display = 'none';
        }
    }
}
function changeRobotTopWepOne(image) {
    var divTopLeft = document.getElementById("divTopLeft");
    if (imgPressed.id == 'topWepLeft') {
        if (nam == 'TopWeapons') {
            robotTopWepOne.style.display = 'block';
            robotTopWepOne.src = topWepLeft.src;

            divTopLeft.style.top = topWeapons[image.name].div12Top;
            divTopLeft.style.left = topWeapons[image.name].div1TopLeft;
            divTopLeft.style.width = topWeapons[image.name].width;

            arrWeight[0].topWepOne = topWeapons[image.name].weight;
            weightId.innerText = calculateStats(arrWeight);
        } if (nam == 'TopWeapons' && image.src.includes('Nothing')) {
            robotTopWepOne.style.display = 'none';
        } if (nam == 'TopWeapons' && robotLegOne.src.includes('Nothing')) {
            robot.style.display = 'none';
        } if (nam == 'TopWeapons' && robotArmour.src.includes('Nothing')) {
            robot.style.display = 'none';
        }
    }
}
function changeRobotTopWepTwo(image) {
    var divTopRight = document.getElementById("divTopRight")
    if (imgPressed.id == 'topWepRight') {
        if (nam == 'TopWeapons') {
            robotTopWepTwo.style.display = 'block';
            robotTopWepTwo.src = topWepRight.src;

            divTopRight.style.top = topWeapons[image.name].div12Top;
            divTopRight.style.left = topWeapons[image.name].div2TopLeft;
            divTopRight.style.width = topWeapons[image.name].width;

            arrWeight[0].topwepTwo = topWeapons[image.name].weight;
            weightId.innerText = calculateStats(arrWeight);
        } if (nam == 'TopWeapons' && image.src.includes('Nothing')) {
            robotTopWepTwo.style.display = 'none';
        } if (nam == 'TopWeapons' && robotLegOne.src.includes('Nothing')) {
            robot.style.display = 'none';
        } if (nam == 'TopWeapons' && robotArmour.src.includes('Nothing')) {
            robot.style.display = 'none';
        }
    }
}

