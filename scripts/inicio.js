window.onload = function()
{
  if(screen.width<1024)
  {
    document.querySelector("header>#FotoPerfil").style.width="6em";
    document.querySelector("header>#FotoPerfil").style.height="6em";
    document.querySelector("header>#FotoPerfil").style.borderRadius="3em";
  }
  animacionTitulo();
}
function animacionTitulo()
{
  var titulo;
  var tiempomax=500;
  var tiempomin=80;
  var transformacion =  document.querySelector("header>h1>span").style.transform="scale(1,1.5)";
  titulo = document.querySelector("header>h1");
  setTimeout(function()
  {
    titulo.innerHTML="B<span>I</span>";
    transformacion;
    setTimeout(function()
    {
      titulo.innerHTML="BI<span>I</span>";
      transformacion;
      setTimeout(function()
      {
        titulo.innerHTML="BIE<span>I</span>";
        transformacion;
        setTimeout(function()
        {
          titulo.innerHTML="BIEN<span>I</span>";
          transformacion;
          setTimeout(function()
          {
            titulo.innerHTML="BIENV<span>I</span>";
            transformacion;
            setTimeout(function()
            {
              titulo.innerHTML="BIENVE<span>I</span>";
              transformacion;
              setTimeout(function()
              {
                titulo.innerHTML="BIENVEN<span>I</span>";
                transformacion;
                setTimeout(function()
                {
                  titulo.innerHTML="BIENVENI<span>I</span>";
                  transformacion;
                  setTimeout(function()
                  {
                    titulo.innerHTML="BIENVENID<span>I</span>";
                    transformacion;
                    setTimeout(function()
                    {
                      titulo.innerHTML="BIENVENIDO<span>I</span>";
                      transformacion;
                      setTimeout(function()
                      {
                        titulo.innerHTML="BIENVENIDO A<span>I</span>";
                        transformacion;
                        setTimeout(function()
                        {
                          titulo.innerHTML="BIENVENIDO AL</br><span>I</span>";
                          transformacion;
                          setTimeout(function()
                          {
                            transformacion;
                            setTimeout(function()
                            {
                              titulo.innerHTML="BIENVENIDO AL</br>B<span>I</span>";
                              transformacion;
                              mostrarPag();
                              setTimeout(function()
                              {
                                titulo.innerHTML="BIENVENIDO AL</br>BL<span>I</span>";
                                transformacion;
                                setTimeout(function()
                                {
                                  titulo.innerHTML="BIENVENIDO AL</br>BLO<span>I</span>";
                                  transformacion;
                                  document.querySelector("header>#FotoPerfil").style.transform="scale(1)";
                                  setTimeout(function()
                                  {
                                    titulo.innerHTML="BIENVENIDO AL</br>BLOG<span>I</span>";
                                    transformacion;
                                    setTimeout(function()
                                    {
                                      titulo.innerHTML="BIENVENIDO AL</br>BLOG <span>I</span>";
                                      transformacion;
                                      setTimeout(function()
                                      {
                                        titulo.innerHTML="BIENVENIDO AL</br>BLOG D<span>I</span>";
                                        transformacion;
                                        setTimeout(function()
                                        {
                                          titulo.innerHTML="BIENVENIDO AL</br>BLOG DE<span>I</span>";
                                          transformacion;
                                          setTimeout(function()
                                          {
                                            titulo.innerHTML="BIENVENIDO AL</br>BLOG DE J<span>I</span>";
                                            transformacion;
                                            setTimeout(function()
                                            {
                                              titulo.innerHTML="BIENVENIDO AL</br>BLOG DE JA<span>I</span>";
                                              transformacion;
                                              setTimeout(function()
                                              {
                                                titulo.innerHTML="BIENVENIDO AL</br>BLOG DE JAV<span>I</span>";
                                                transformacion;
                                                setTimeout(function()
                                                {
                                                  document.querySelector("header>h1>span").style.transition="all 1s";
                                                  document.querySelector("header>h1>span").style.transform="scale(1,1)";
                                                  setTimeout(function()
                                                  {
                                                    document.querySelector("header>h1>span").style.transition="none";
                                                  },1000);
                                                },tiempomin);
                                              },tiempomin);
                                            },tiempomin);
                                          },tiempomin);
                                        },tiempomin);
                                      },tiempomin);
                                    },tiempomin);
                                  },tiempomin);
                                },tiempomin);
                              },tiempomin);
                            },tiempomin);
                          },tiempomin);
                        },tiempomin);
                      },tiempomin);
                    },tiempomin);
                  },tiempomin);
                },tiempomin);
              },tiempomin);
            },tiempomin);
          },tiempomin);
        },tiempomin);
      },tiempomin);
    },tiempomin);
  },tiempomax);
}
function mostrarPag()
{
  document.querySelector("main>.bloque:nth-child(1)>article>h2").style.transition="all 1s";
  document.querySelector("main>.bloque:nth-child(1)>article>h2").style.opacity="1";
  document.querySelector("main>.bloque:nth-child(1)>article>h2").style.transform="translateX(0)";
  document.querySelector("main>.bloque:nth-child(1)>article>div").style.transition="all 1s";
  document.querySelector("main>.bloque:nth-child(1)>article>div").style.opacity="1";
  document.querySelector("main>.bloque:nth-child(1)>article>div").style.transform="translateX(0)";
  setTimeout(function(){
    document.querySelector("main>.bloque:nth-child(1)>article>h2").style.transition="none";
    document.querySelector("main>.bloque:nth-child(1)>article>div").style.transition="none";
  },1000)
}
window.onscroll = function()
{
  var wScroll = this.pageYOffset;
  if(wScroll<230)
  {
    document.querySelector("header").style.backgroundPositionX="-"+wScroll+"px";
    document.querySelector("header>#FotoPerfil").style.backgroundPositionY="-"+wScroll+"px";
  }
  if(wScroll<400)
  {
    document.querySelector("main>.bloque:nth-child(1)>article>h2").style.transform="translateX("+wScroll/8+"px)";
    document.querySelector("main>.bloque:nth-child(1)>article>div").style.transform="translateX(-"+wScroll/8+"px)";
    document.querySelector("main>.bloque:nth-child(1)>article>h2").style.opacity=1/(wScroll/300);
    document.querySelector("main>.bloque:nth-child(1)>article>div").style.opacity=1/(wScroll/300);
  }
}
