window.onscroll = function(){

	var wScroll = this.pageYOffset;
	if(wScroll<300)
	{
		document.querySelector('.logoNombre').style.transform="translate(0px, "+ wScroll/2 +"%)";

		document.querySelector('.slogan1').style.transform="translate(0px,-"+wScroll+"px)";
		document.querySelector('.slogan2').style.transform="translate(0px,-"+wScroll+"px)";
		document.querySelector('.slogan3').style.transform="translate(0px,-"+wScroll+"px)";
		document.querySelector('.slogan4').style.transform="translate(0px,-"+wScroll+"px)";
	}
};