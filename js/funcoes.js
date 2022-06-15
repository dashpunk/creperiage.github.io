/* Inserir imagem da galeria no modal */
$(function(){
	$('section.galeria a img').click(function(){
	    $(this).clone().prependTo('.modal-body');
	});
	$('.modal').mouseleave(function(){
		$('.modal-body img').remove();
	});
});