const menuBotons = document.querySelectorAll(".menu-options");

const menuBotonsClick = function (evento) {
	console.log("Oprimi un boton");
}

menuBotons.forEach(boton => {
	boton.addEventListener("click", menuBotonsClick);
});