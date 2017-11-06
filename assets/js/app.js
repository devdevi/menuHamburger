var boton = document.getElementById('btn');

function showMenu(){
	//para pobear que la funcion sirve !! alert('vamos bebe')
	var menu = document.getElementById('opcs-menu');
	if (menu.classList.contains('disable-menu')) {
		menu.classList.remove('disable-menu');
		menu.classList.add('enable-menu');
	}else{
		menu.classList.remove('enable-menu');
		menu.classList.add('disable-menu');
	}


};

boton.addEventListener('click', showMenu);
