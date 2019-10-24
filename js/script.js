// часы
function clock(){
	var d = new Date();
	var day = d.getDate();
	var hrs = d.getHours();
	var min = d.getMinutes();
	var sec = d.getSeconds();

	var mnt = new Array('января', 'февраля', 'марта', 'апреля',
		'мая', 'июня', 'июля', 'августа', 'сентября', 'октября',
		 'ноября', 'декабря');
	if (day <= 9) {day = '0' + day};
	if (hrs <= 9) {hrs = '0' + hrs};
	if (min <= 9) {min = '0' + min};
	if (sec <= 9) {sec = '0' + sec};

	$('.time').html('Cейчас: ' + hrs + ':' + min + ':' + sec +' &nbsp;&nbsp;&nbsp;' + day + '-го ' + mnt[d.getMonth()] + ' ' + d.getFullYear() + ' г.' );
  }
  setInterval(clock , 1000);
  clock();


// popup-menu
(function () {
 let link = document.querySelector('.promo__btns__link--1');
 let popup = document.querySelector('.technology__popup');
 let close = document.querySelector('.promo__btns__link--2');
 let close2 = document.querySelector('.promo__btns__link--3');

link.addEventListener("click" , function(event){
	event.preventDefault();
	popup.classList.add('modal-content__show');
});
close.addEventListener("click" , function(event){
	event.preventDefault();
	popup.classList.remove('modal-content__show');
}); 

close2.addEventListener("click" , function(event){
	event.preventDefault();
	popup.classList.remove('modal-content__show');
}); 
})();

(function () {
 let link = document.querySelector('.promo__btns__link--2');
 let popup = document.querySelector('.aboutme__popup');
 let close = document.querySelector('.promo__btns__link--3');
 let close2 = document.querySelector('.promo__btns__link--1');

link.addEventListener("click" , function(event){
	event.preventDefault();
	popup.classList.add('modal-content__show');
});
close.addEventListener("click" , function(event){
	event.preventDefault();
	popup.classList.remove('modal-content__show');
});
close2.addEventListener("click" , function(event){
	event.preventDefault();
	popup.classList.remove('modal-content__show');
});  
})();

(function () {
 let link = document.querySelector('.promo__btns__link--3');
 let popup = document.querySelector('.contacts__popup');
 let close = document.querySelector('.promo__btns__link--1');
 let close2 = document.querySelector('.promo__btns__link--2')

link.addEventListener("click" , function(event){
	event.preventDefault();
	popup.classList.add('modal-content__show');
});
close.addEventListener("click" , function(event){
	event.preventDefault();
	popup.classList.remove('modal-content__show');
}); 
close2.addEventListener("click" , function(event){
	event.preventDefault();
	popup.classList.remove('modal-content__show');
});
})();

(function () {
let link = document.querySelector('.page-nav__link');
 let popup = document.querySelector('.popup-block');
 let close = document.querySelector('.popup-block__close')

link.addEventListener("click" , function(event){
	event.preventDefault();
	popup.classList.toggle('modal-content__show');
});
close.addEventListener("click" , function(event){
	event.preventDefault();
	popup.classList.remove('modal-content__show');
});
 })();

 // медленно выезжающая менюшка
$ (function(){
$ ('.page-nav__link').click(function(){
$ ('.modal-content__show').hide().show(500);
  });
}); 

// слайдер
$ (function(){
$('.next').click(function(){
	let currentImage = $('.curry');
	let currentImageIndex = $('.curry').index();
	let nextImageIndex = currentImageIndex + 1;
	let nextImage = $('.slider__item').eq(nextImageIndex);
	currentImage.fadeOut(700);
	currentImage.removeClass('curry');
	

if (nextImageIndex == $('.slider__item:last').index()+1){
	$('.slider__item').eq(0).fadeIn(700);
	$('.slider__item--1').addClass('curry');
} else {
	nextImage.fadeIn(700);
	nextImage.addClass('curry');
   }
 });

$('.prev').click(function(){
	let currentImage = $('.curry');
	let currentImageIndex = $('.curry').index();
	let nextImageIndex = currentImageIndex - 1;
	let nextImage = $('.slider__item').eq(nextImageIndex);
	currentImage.fadeOut(700);
	currentImage.removeClass('curry');

if (nextImageIndex == $('.slider__item:first').index()-1){
	$('.slider__item').eq(3).fadeIn(700);
	$('.slider__item--4').addClass('curry');
} else {
	nextImage.fadeIn(700);
	nextImage.addClass('curry');
   }
 });

});
// ещё один слайдер 

$ (function(){
$('.next--aphorism').click(function(){
	let currentImage = $('.current');
	let currentImageIndex = $('.current').index();
	let nextImageIndex = currentImageIndex + 1;
	let nextImage = $('.aphorism__block').eq(nextImageIndex);
	currentImage.hide();
	currentImage.removeClass('current');
	

if (nextImageIndex == $('.aphorism__block:last').index()+1){
	$('.aphorism__block').eq(0).show(500);
	$('.aphorism__block--1').addClass('current');
} else {
	nextImage.show(500);
	nextImage.addClass('current');
   }
 });

$('.prev--aphorism').click(function(){
	let currentImage = $('.current');
	let currentImageIndex = $('.current').index();
	let nextImageIndex = currentImageIndex - 1;
	let nextImage = $('.aphorism__block').eq(nextImageIndex);
	currentImage.hide();
	currentImage.removeClass('current');

if (nextImageIndex == $('.aphorism__block:first').index()-1){
	$('.aphorism__block').eq(5).show(500);
	$('.aphorism__block--6').addClass('current');
} else {
	nextImage.show(500);
	nextImage.addClass('current');
   }
 });
});



