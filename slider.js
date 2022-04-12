//numer = numer zdjęcia
var numer = Math.floor(Math.random() * 5) + 1;
function zmienslajd(){
	numer++;
	if (numer > 4){
		numer=1
	}
	var plik = `<img class="zdjecie" src="./img/${numer}.jpg">`
	slider.innerHTML = plik;
	$("#slider").fadeIn(500);
	timer1 = setTimeout("zmienslajd()", 5000);
	timer2 = setTimeout("schowaj()", 4500);
}
function schowaj() {
	$("#slider").fadeOut(500);
}