window.onload = function()
{
  window.scroll(0, 0);
  if (screen.width<1024)
  {
    document.querySelector("header>#FotoPerfil").style.width="6em";
    document.querySelector("header>#FotoPerfil").style.height="6em";
    document.querySelector("header>#FotoPerfil").style.borderRadius="3em";
    document.querySelector("main>.bloque>article>h2").style.paddingLeft="10%";
    document.querySelector("main>.bloque>article>div>p").style.width="80%";
    document.querySelector("main>.bloque>article>div>p").style.margin="0 auto";
  }
}