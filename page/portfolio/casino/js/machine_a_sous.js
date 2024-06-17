const nombre = ['0', '1', '2','3','4','5','6','7','8','9'];
const manche = document.querySelector(".manche")
var banque = 1000;                                                        ////////////////////////////////////////
var sous = 100;                                                           // Définition des variables globales //
let result = [0,0,0];                                                     //////////////////////////////////////

function nbAlea(imgEl, time) {
    let random = Math.floor(Math.random() * nombre.length)
    let selectedNbr = nombre[random]

    const timeInterval = setInterval(function() {
        imgEl.classList.remove('animate')                               //////////////////////////////////////////////////////////////////////////
        let selectedNbr = Math.floor(Math.random() * nombre.length)     // Fonction NbAlea -> Retourne un nombre aléatoire | Permet l'animation //
        imgEl.src = `../image/machine/${selectedNbr}.png`               //////////////////////////////////////////////////////////////////////////
        imgEl.classList.add('animate')
    }, 100)
    setTimeout(() => {
        imgEl.src = `../image/machine/${nombre[random]}.png`
        imgEl.classList.remove('animate')
        clearInterval(timeInterval)
    }, time)
    return selectedNbr;
}

function regles() {
    let regleButton = document.getElementById("regleButton");
    let regleDIV = document.getElementById("regleDIV");

    let machine = document.getElementById("machine");
    let machineTitle = document.getElementById("machineTitle");
    let container = document.getElementById("container");
    let panel = document.getElementById("panel");

    let containerButton = document.getElementById("containerButton");
    if(getComputedStyle(regleDIV).opacity != "0"){                          ///////////////////////////////////////////////////////////////////////
        regleDIV.style.opacity = "0";                                       // Fonction Règles -> Permet d'afficher les règles et cacher le jeu //
        regleDIV.style.zIndex = "3";                                        //////////////////////////////////////////////////////////////////////

        machine.style.opacity = "100";
        machineTitle.style.opacity = "100";
        container.style.opacity = "100";
        panel.style.opacity = "100";

        containerButton.style.opacity = "100";
        containerButton.style.zIndex = "5";
    } else {
        regleDIV.style.opacity = "100";
        regleDIV.style.zIndex = "10";

        machine.style.opacity = "0";
        machineTitle.style.opacity = "0";
        container.style.opacity = "0";
        panel.style.opacity = "0";

        containerButton.style.opacity = "0";
        containerButton.style.zIndex = "1";
    }
}

function gain(result, mise) {
    if (result[0] === 9 && result[1] === 9 && result[2] === 9) {
        var _gain = banque;
    } else if (result[0] === result[1] && result[0] === result[2] && result[1] === result[2]) {
        var _gain = mise*6;                                                                                /////////////////////////////////////////////////////
    } else if (result[0] === result[1] || result[0] === result[2] || result[1] === result[2]) {            // Fonction Gain -> Retourne les gains du joueurs //
        var _gain = mise*3;                                                                                ///////////////////////////////////////////////////
    } else {
        var _gain = 0;
    }
    return _gain;
}

function jeu() {
    var mise = document.getElementById("mise").value;
    if (mise > sous) {
        alert( "Vous ne pouvez pas miser plus que ce que vous poussezdez" );
    } else if (mise == "" || mise <= 0 || mise > 100) {
        alert( "Vous devez saisir un nombre comprit entre 0 et 100");
    } else {

        manche.classList.toggle('press');
        setTimeout(() => {
            manche.classList.toggle('press');
        }, 300)
    
        document.querySelectorAll('.numero').forEach((imgEl, index) => {
            const randomTime = 1000 + 1000 * index                                      ////////////////////////////////////////////////////////
            result[index] = nbAlea(imgEl, randomTime);                                 // Fonction Jeu -> Permet l'utilisation de la machine //
        })                                                                             ////////////////////////////////////////////////////////

        mise = parseInt(mise);
        document.getElementById("miseSpan").innerHTML=mise;
        document.getElementById('mise').value = '';
        sous -= mise;
        banque += mise;

        var _gain = gain(result, mise);

        banque -= _gain;
        sous += _gain;

        document.getElementById("banqueSpan").innerHTML=banque;
        document.getElementById("sousSpan").innerHTML=sous;
    }
}