/*Indica si el codigo html se ejecuto antes de ejecutar la fncion*/
$(document).ready(function(){
	


	/*Efecto del menú*/
	$('.menu a').each(function(index, elemento){
		$(this).css({
			'top':'-200px'
		});

		$(this).animate({
			top:'0'
		},1500 + (index*500));

	});	

	/*Efecto del header*/
	if( $(window).width() >= 750){
		$('header .texto').css({
			opacity:0,
			marginTop:0
		});


		$('header .texto').animate({
			opacity:1,
			marginTop:'-52px'
		},1500);

	}

	/*Enlaces elementos del menu*/
	var varAcercaDe = $('#acerca-de').offset().top; /*Posicion en pantalla de ese elemento*/
	var varServicios = $('#servicios').offset().top; /*Posicion en pantalla de ese elemento*/
	var varMenu = $('#menu').offset().top; /*Posicion en pantalla de ese elemento*/
	var varUbicacion = $('#ubicacion').offset().top; /*Posicion en pantalla de ese elemento*/

	$('#btn-acerca-de').on('click',
		function(e){
			e.preventDefault(); /*Evita la accio href de la página*/
			$('html, body').animate({
				scrollTop:varAcercaDe - 150
			},500);
	});

	$('#btn-servicios').on('click',
		function(e){
			e.preventDefault(); /*Evita la accio href de la página*/
			$('html, body').animate({
				scrollTop:varServicios + 400
			},500);
	});

	$('#btn-menu').on('click',
		function(e){
			e.preventDefault(); /*Evita la accio href de la página*/
			$('html, body').animate({
				scrollTop:varMenu
			},500);
	});

	$('#btn-contacto').on('click',
		function(e){
			e.preventDefault(); /*Evita la accio href de la página*/
			$('html, body').animate({
				scrollTop:varUbicacion
			},500);
	});



	

});