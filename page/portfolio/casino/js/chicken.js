const nombre = ['1', '1', '1', '1', '2'];
var sous = 1000;
var active = false;
var multi = 1.00;
var gain = 0;
var mise = 0

var test

var classCase = document.getElementsByClassName('.cases');

$('.cases').click(function(event) {
	if (active === true) {
		let eventClick = event.target;
		const srcImage = eventClick.getAttribute('src');
		if(srcImage === `../image/kitchen/kitchen_noir.png`) {

			eventClick.style.transitionDuration = '300ms';
			eventClick.style.transformStyle = 'preserve-3d';
			eventClick.style.transform = "rotateY(180deg)";
			eventClick.style.borderRadius = "20%";
			
			let random = Math.floor(Math.random() * nombre.length);
			var selectedNbr = nombre[random];
			
			if (selectedNbr === nombre[4]) {
				eventClick.src = `../image/kitchen/2.png`;
				eventClick.style.backgroundColor = '#2a1d1d';
				active = false;
				document.getElementById('bet').innerHTML = 'BET';
				document.getElementById('mult').innerHTML = '+ 0.00 €';
				document.getElementById('mult').style.color = 'red';
				gain = 0;
				setTimeout(() => {
					location.reload();
				}, 3000)
				
			} else {
				eventClick.src = `../image/kitchen/1.png`;
				eventClick.style.backgroundColor = '#ff5426'; 
				multi = multi + 0.20;
				gain = multi.toFixed(2) * mise;
				document.getElementById('mult').innerHTML = 'x ' + multi.toFixed(2);
				document.getElementById('mult').style.color = 'green';
			}
		}
	}
})

function jeu() {
	if (document.getElementById('bet').innerHTML === 'BET') {
		mise = document.getElementById("mise").value;
		document.getElementById('mise').value = '';
		document.getElementById('bet').innerHTML = 'STOP';
		if (mise > sous) {
			alert( "Vous ne pouvez pas miser plus que ce que vous poussezdez" );
			return active;
		} else if (mise == "" || mise <= 0 || mise > 100) {
			alert( "Vous devez saisir un nombre comprit entre 0 et 100");
			return active;
		} else {

			sous -= mise;

			active = true;

			return active;

		}
	} else if (document.getElementById('bet').innerHTML === 'STOP') {
		document.getElementById('bet').innerHTML = 'BET';
		document.getElementById('mult').innerHTML = '+ ' + gain + ' €';
		setTimeout(() => {
            location.reload();
        }, 3000)
	}
}
