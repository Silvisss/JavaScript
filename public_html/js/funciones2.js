

window.onload = function () {
	document.getElementById("Fnombre").onfocus = parrafoFocus;
	document.getElementById("Fnombre").onblur = parrafoBlur;

	function parrafoFocus() {
		document.getElementById("nombreFocus").innerHTML = "el campo ha recibido el foco";
		document.getElementById("Fnombre").style.backgroundColor = "red";
		document.getElementById("Fnombre").style.borderColor = "black";

		function parrafoBlur() {
			document.getElementById("nombreFocus").innerHTML = "el campo ha recibido el foco";
			document.getElementById("Fnombre").style.backgroundColor = "green";
			document.getElementById("Fnombre").style.borderColor = "black";
		}


		window.onload = function () {
			document.getElementById("nombre_form").onchange = funcionChange;


			function funcion_changen() {
				var x = document.getElementById("nombre_form");
				//obtenemos la propiedad value del formulario y con ella el valor intodocido por el usuario
				x.value = x.value.toUpperCase();
				document.getElementById("valor_usuario").innerHTML = x.value;
			}

			
			window.onload = funcion() {
				
				document.getElementById("reseteo").onclick = resetear;
			}
			function resetear() {
				document.getElementById("myform").onreset = confirmar;
			}

			function confirmar() {
				alert("el formulario se va a resetear");
			}
