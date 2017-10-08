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
	if(wScroll<500)
	{
		document.querySelector('#aboutMe h3').style.transform="translate(-"+wScroll/8+"px,0px)";
		document.querySelector('#aboutMe p').style.transform="translate("+wScroll/8+"px,0px)";
	}
};
window.onload = function()
{
	setTimeout(function(){
		document.querySelector('#aboutMe h3').style.transform="translate(0px,0px)";
		document.querySelector('#aboutMe h3').style.opacity="1";
		setTimeout(function() {
			document.querySelector('#aboutMe p').style.transform="translate(0px,0px)";
			document.querySelector('#aboutMe p').style.opacity="1";
			setTimeout(function(){
				document.querySelector('#aboutMe h3').style.transition="none";
				document.querySelector('#aboutMe p').style.transition="none";
			},500);
		},200);
	},500);
}