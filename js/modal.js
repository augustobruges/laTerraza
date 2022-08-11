$(document).ready(function(){


	var abrirModal = document.querySelector('.modal'); /*Obtenemos el objeto que tiene la clase*/
	var cerrarModal = document.querySelector('.cerrar-modal'); /*Obtenemos el objeto que tiene la clase*/

	function mostrarModal(){
		abrirModal.classList.add('modal-show');
	}

	//Ponemos un envento al boton cerrar del modal
	$('#cerrar-modal').on('click',
		function(e){
			e.preventDefault(); /*Evita la accio href de la página*/
			abrirModal.classList.remove('modal-show');
	});


	setTimeout(mostrarModal,4000);

	/*$(window).scroll(function(){

		var scroll = $(window).scrollTop(); //Ubicacion del scroll

		if(scroll > 200){			
			abrirModal.classList.add('modal-show');
		}

	});*/

});