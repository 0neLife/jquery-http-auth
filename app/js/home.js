$(document).ready(function(){
	$('.flex-container .btn-main').on('click', function(){
		$('.wrapper').html('').load(loginPage);
		sessionStorage.clear();
	});
});