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
		document.querySelector('#aboutMe p:nth-child(2)').style.transform="translate("+wScroll/8+"px,0px)";
		document.querySelector('#aboutMe p:nth-child(3)').style.transform="translate("+wScroll/8+"px,0px)";
		document.querySelector('#aboutMe p:nth-child(4)').style.transform="translate("+wScroll/8+"px,0px)";
		document.querySelector('#FotoPerfil').style.backgroundPositionY="-"+wScroll/2+"px";
	}
	if(wScroll > document.querySelector('#Estudios').offsetTop)
	{
		document.querySelector('#Estudios .titulo').style.transform="translate(0px,0px)";
		document.querySelector('#Estudios .titulo').style.opacity="1";
		setTimeout(function(){
			document.getElementById('Estudios').getElementsByClassName('estudios')[0].style.transform="translate(0px,0px)";
			document.getElementById('Estudios').getElementsByClassName('estudios')[0].style.opacity="1";
			setTimeout(function(){
				document.getElementById('Estudios').getElementsByClassName('estudios')[1].style.transform="translate(0px,0px)";
				document.getElementById('Estudios').getElementsByClassName('estudios')[1].style.opacity="1";
				setTimeout(function(){
					document.getElementById('Estudios').getElementsByClassName('estudios')[2].style.transform="translate(0px,0px)";
					document.getElementById('Estudios').getElementsByClassName('estudios')[2].style.opacity="1";
					setTimeout(function(){
						document.querySelector('#Estudios .estudios').style.transition="none";
					},500);
				},500);
			},500);
		},500);
		setTimeout(function(){
			document.querySelector('#Estudios .titulo').style.transition="none";
		},500);
		document.querySelector('#Estudios .estudios .img1').style.backgroundPositionY="-"+wScroll/2+"px";
		document.querySelector('#Estudios .estudios .img2').style.backgroundPositionY=wScroll/2+"px";
	}
};
window.onload = function()
{
	setTimeout(function(){
		document.querySelector('#aboutMe h3').style.transform="translate(0px,0px)";
		document.querySelector('#aboutMe h3').style.opacity="1";
		setTimeout(function() {
			document.querySelector('#aboutMe p:nth-child(2)').style.transform="translate(0px,0px)";
			document.querySelector('#aboutMe p:nth-child(2)').style.opacity="1";
			document.querySelector('#aboutMe p:nth-child(3)').style.transform="translate(0px,0px)";
			document.querySelector('#aboutMe p:nth-child(3)').style.opacity="1";
			document.querySelector('#aboutMe p:nth-child(4)').style.transform="translate(0px,0px)";
			document.querySelector('#aboutMe p:nth-child(4)').style.opacity="1";
			setTimeout(function(){
				document.querySelector('#aboutMe h3').style.transition="none";
				document.querySelector('#aboutMe p:nth-child(2)').style.transition="none";
				document.querySelector('#aboutMe p:nth-child(3)').style.transition="none";
				document.querySelector('#aboutMe p:nth-child(4)').style.transition="none";
			},500);
		},200);
	},500);
}