/*Indica si el codigo html se ejecuto antes de ejecutar la fncion*/
$(document).ready(function(){


	$(window).scroll(function(){
		var anchoVentana = $(window).width();

		if(anchoVentana > 750){
			var scroll = $(window).scrollTop(); /*Ubicacion del scroll*/

			$('header .texto').css({
				'transform':'translate(0px, '+(scroll / 3)+'%)'
			});


			$('.acerca-de article').css({
				'transform':'translate(0px, -'+(scroll / 5)+'%)'  /*El negativo hace que vaya en sentido contrario*/
			});

		}
	});

	

});