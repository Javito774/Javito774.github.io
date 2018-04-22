if (screen.width<1024)
{
    document.querySelector("main>.bloque>article>h2").style.paddingLeft="10%";
    var parrafos = document.querySelectorAll("main>.bloque>article>div>p")
    for(var i=0;i<parrafos.length;i++)
    {
    	parrafos[i].style.width="80%";
    	parrafos[i].style.margin="0 auto";
    }
}