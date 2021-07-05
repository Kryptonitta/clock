function reloj() {
	time = new Date();
	horas = time.getHours();
	minutos = time.getMinutes();
	segundos = time.getSeconds();

	if (horas <= 12) {
		//Ejemplo --> 6 horas / 12 = 0.5*360 = 180 grados --> apunta para abajo
		porcentajeHoras = (horas / 12) * 360;
	} else {
		//Ejemplo --> 24 horas / 24 = 1*360 = 360 gradoss --> apunta para arriba
		porcentajeHoras = (horas / 24) * 360;
	}

	porcentajeHoras += (minutos / 60) * 30; //30 son los grados que hay cada 5 minutos
	porcentajeMinutos = (minutos / 60) * 360; //acá multiplico por 360
	porcentajeSegundos = (segundos / 60) * 360; //acá multiplico por 360

	document.getElementById("horas").style.transform =
		"rotate(" + porcentajeHoras + "deg)"; //Lo que le estoy diciendo es que rote las agujas la cantidad de grados calculada antes
	document.getElementById("minutos").style.transform =
		"rotate(" + porcentajeMinutos + "deg)";
	document.getElementById("segundos").style.transform =
		"rotate(" + porcentajeSegundos + "deg)";

	document.getElementById("segundos").style.transform =
		"rotate(" + porcentajeSegundos + "deg)";
	document.getElementById("p-content").innerHTML =
		horas + ":" + minutos + ":" + segundos;
}

setInterval(reloj, 1000); //me actualiza la función cada 1 segundo
