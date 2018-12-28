function tutorialMenu(evt) {
    $("#aboutId").removeClass("btn-clicked")
    $("#howToId").removeClass("btn-clicked")
    // $("#statsInfoId").removeClass("btn-clicked")

    $(evt.target).toggleClass("btn-clicked")
    $("#contentId").empty();

}

function aboutContent() {
    $("#contentId").append(
        `<div>
    <h4 class="text-center">What is the purpouse of the simulator ?</h4>
    <p>The simulator app was designed for supermech game players to improve their robots from game.
        It brings the posibility to design/edit your actual or future robot game.
    </p>
    <h4 class="text-center">What is the supermech game?</h4>
    <p>Is a MMORPG game where you have to build robots/fight against players and environment.</p>
    <h4 class="text-center">If you are new to supermech game</h4>
    <p>This tutorial may help you to understand what all of these are for,
        and how can you build your robot.</p>
    </div>`
    )
}

function howItWorks() {
    $("#contentId").append(
        `
        <div>
            <h4>How it works ?</h4>
            
                <div class="info-div">
                    <span>Any new creation must have at least an</span>
                    <div class="d-tutorial">
                    <div class="div-ability">
                        <div class="slot">
                            <img class="image-hmax" src="img/armours/Nothing.png" alt=""/>
                        </div>
                        <span>Armour</span>
                    </div>
                       <span> and </span>
                    <div class="div-ability">
                        <div class="slot">
                            <img class="image-hmax" src="img/legs/Nothing.png" alt=""/>
                        </div>
                        <span>Legs</span>
                    </div>
                    </div>
                </div>

                <div class="info-div">
                    <span>You can add weapons to your robot.</span>
                    <div class="d-tutorial">
                    <div class="slot">
                        <img class="image-hmax" src="img/SideWeapons/Nothing.png" alt=""/>
                    </div>
                    <div class="slot">
                        <img class="image-hmax" src="img/SideWeapons/Nothing_R.png" alt=""/>
                    </div>
                    <div class="slot">
                        <img class="image-hmax" src="img/topWeapons/Nothing.png" alt=""/>
                    </div>
                    <div class="slot">
                        <img class="image-hmax" src="img/topWeapons/Nothing_R.png" alt=""/>
                    </div>
                    </div>
                </div>

                <div class="info-div">
                    <span>Your robot can have a flying drone</span>
                    <div class="d-responsive">
                    <div class="div-ability">
                        <div class="slot">
                            <img class="image-hmax" src="img/drones/Nothing.png" alt=""/>
                        </div>
                        <span>Drone</span>
                    </div>
                    </div>
                </div>

                <div class="info-div">
                    <span>You can add new abilities to your robot</span>
                    <div class="d-tutorial">
                    <div class="div-ability">
                        <div class="slot">
                            <img class="image-hmax" src="img/teleport/Nothing_teleport.png" alt=""/>
                        </div>
                    <span>Teleport</span>
                    </div>

                    <div class="div-ability">
                        <div class="slot">
                            <img class="image-hmax" src="img/charge/Nothing_charge.png" alt=""/>
                        </div>
                     <span>Charge</span>
                    </div>

                    <div class="div-ability">
                        <div class="slot">
                            <img class="image-hmax" src="img/hook/Nothing_hook.png" alt=""/>
                        </div>
                    <span>Hook</span>
                    </div>

                    <div class="div-ability">
                        <div class="slot">
                            <img class="image-hmax" src="img/shield/Nothing_shield.png" alt=""/>
                        </div>
                    <span>Shield</span>
                    </div>
                    </div>

                </div>
                
                <h4 class="h4-stats"> Each item like (armour, legs, drone.. etc) have custom stats.</h4>

                <div class="div-info-stats">
                <div class="div-ability">
                <img class="img-icon" src="img/Miscs(icons)/weight.png" alt="" />
                    <span class="span-info">Weight</span>
                </div>

                <div class="div-ability">
                <img class="img-icon" src="img/Miscs(icons)/hp.png" alt="" />
                    <span class="span-info">Health</span>
                </div>

                <div class="div-ability">
                <img class="img-icon" src="img/Miscs(icons)/energy.png" alt="" />
                    <span class="span-info">Energy</span>
                </div>

                <div class="div-ability">
                <img class="img-icon" src="img/Miscs(icons)/energy_regen.png" alt="" />
                    <span class="span-info">Energy Regen</span>
                </div>

                <div class="div-ability">
                <img class="img-icon" src="img/Miscs(icons)/heat.png" alt="" />
                    <span class="span-info">Heat</span>
                </div>

                <div class="div-ability">
                <img class="img-icon" src="img/Miscs(icons)/cooling.png" alt="" />
                    <span class="span-info">Cooling</span>
                </div>

                <div class="div-ability">
                <img class="img-icon" src="img/Miscs(icons)/pysresist.png" alt="" />
                    <span class="span-info">Psyhical Resistance</span>
                </div>

                <div class="div-ability">
                <img class="img-icon" src="img/Miscs(icons)/expresist.png" alt="" />
                    <span class="span-info">Explosion Resistance</span>
                </div>

                <div class="div-ability">
                <img class="img-icon" src="img/Miscs(icons)/eleresist.png" alt="" />
                    <span class="span-info">Electric Resistance</span>
                </div>
                </div>

                <div class="info-div">
                <span>You can boost these stats by selecting different</span>
                <div class="div-ability">
                <div class="slot">
                    <img class="image-hmax" src="img/modules/Nothing.png" alt=""/>
                </div>
                <span>Module</span>
                </div>
                </div>
            </div>
            
        </div>
`
    )
}