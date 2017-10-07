window.onscroll = function(){

	var wScroll = this.pageYOffset;
	if(wScroll<200)
	{
		document.querySelector('.logoNombre').style.transform="translate(0px, "+ wScroll/2 +"%)";
		document.querySelector('.lineaLogo>hr').style.transform="rotate(-"+ (wScroll+90) +"deg)";

		document.querySelector('.slogan1').style.transform="translate(0px,-"+wScroll+"px)";
		document.querySelector('.slogan2').style.transform="translate(0px,-"+wScroll+"px)";
		document.querySelector('.slogan3').style.transform="translate(0px,-"+wScroll+"px)";
		document.querySelector('.slogan4').style.transform="translate(0px,-"+wScroll+"px)";
	}
};