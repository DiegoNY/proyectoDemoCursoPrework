
var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var teclas = {
    UPS: 38,
    DOWNS: 40,
    LEFTS: 37,
    RIGTHS: 39 
};


var fondo = {
    url: "tile.png",
    cargaOK: false
};

var vaca = {

    url: "vaca.png",
    cargaOK: false, 
    x: [],//Creo una variable X y Y para vaca y pollo en arreglo y la de cerdo la inicializo en cero
    y: []
};

var cerdo = {

    url: "cerdo.png",
    cargaOK: false,
    x : 0,
    y : 0
};

var pollo = {

    url : "pollo.png",
    cargaOK : false,
    x: [],
    y : [] 
};

var cantidad = aleatorio(1,50);


fondo.imagen = new Image(); //creamos objetos
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);// escuchamos el evento de carga del navegador

vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load", cargarVacas);


cerdo.objeto = new Image();
cerdo.objeto.src = cerdo.url;
cerdo.objeto.addEventListener("load", cargarCerdos);

pollo.objeto = new Image();
pollo.objeto.src = pollo.url;
pollo.objeto.addEventListener("load", cargarPollo);

function cargarFondo()
{

fondo.cargaOK = true;
dibujar();

}

function cargarVacas()
{

vaca.cargaOK = true;
dibujar();

}

function cargarCerdos()
{
    cerdo.cargaOK = true ;
    dibujar();
}

function cargarPollo()
{
    pollo.cargaOK = true;
    dibujar();
}


function dibujar()
{

   if(fondo.cargaOK)
   {
       papel.drawImage(fondo.imagen, 0, 0);
   }
   if(vaca.cargaOK)//si el objeto de la vaca ya cargo se ejecuta el ciclo en donde se colocan cantidades y posiciones aleatorias
   //tambien se guardan en el arreglo las posiciones aleatorias que se generaron para posteriormente saber redibujar el objeto cuando
//movamos el cerdo en el teclado
   {   
       for(var v=0; v < cantidad; v++)
       {
             var x = (aleatorio(0, 7)* 60);
             var y = (aleatorio(0,7)*60);
             vaca.x[v] = x ; 
             vaca.y [v] = y ;
             papel.drawImage(vaca.objeto, x,y);
             console.log(cantidad);
       }
       
   }
   if(cerdo.cargaOK)
   {
    
    var x = (aleatorio (0,7)*60);
    var x = (aleatorio(0,7)*60);
    cerdo.x = x;
    cerdo.y = y;
    papel.drawImage(cerdo.objeto, x,y);

   }
   if (pollo.cargaOK)
   {
       for(var p= 0; p < cantidad; p++)
       {
        var x = (aleatorio(0,7)*60);
        var x = (aleatorio(0,7)*60);
        pollo.x[p] = x ;
        pollo.y[p] = y ;
        papel.drawImage(pollo.objeto, x, y);
        console.log(cantidad);
       }
       
   }
    
}


//mover cerdo con teclado 


function moverCerdo(x,y)
{
    papel.drawImage(cerdo.objeto,x,y);
}

//redibujamos los objetos, solo que sin el ciclo y utilizando los numero aleatorios de la funcion dibujar
function dibujarOtraVez()
{
    if(fondo.cargaOK)
    {
        papel.drawImage(fondo.imagen ,0,0);
    }
    if(vaca.cargaOK)
    {
        for( var  v = 0 ; v < cantidad ; v++)
        {
            papel.drawImage(vaca.objeto , vaca.x[v], vaca.y[v]);
            console.log(cantidad);
        }
    }
    if(pollo.cargaOK)
    {
        for(var p = 0; p< cantidad; p++)
        {
            papel.drawImage(pollo.objeto, pollo.x[p], pollo.y[p]);
            console.log(cantidad);
        }
    }
}

//identificamos el evento del teclado y restamos o sumamos posicion, segun la tecla 
document.addEventListener("keyup", moverTecla);

function moverTecla( evento)
{
    var movimiento = 5;
    switch(evento.keycode)
    {
        case teclas.UPS: 
        dibujarOtraVez();
        moverCerdo(cerdo.x,cerdo.y);
        cerdo.y = cerdo.y - movimiento; 
        break;
        
        case teclas.DOWNS: 
        dibujarOtraVez();
        moverCerdo(cerdo.x,cerdo.y);
        cerdo.y = cerdo.y + movimiento;
        break;

        case teclas.LEFTS: 
        dibujarOtraVez();
        moverCerdo(cerdo.x,cerdo.y)
        cerdo.x = cerdo.x - movimiento;

        case teclas.RIGTHS:
        dibujarOtraVez();
        moverCerdo(cerdo.x,cerdo.y);
        cerdo.x = cerdo.x + movimiento;
        break;

        default:
            console.log("otra Tecla Gil");
        break;
    }
  
}



function aleatorio(min, maxi)
{
    var resultado ;
    resultado = Math.floor(Math.random() * (maxi-min + 1)) + min ;
    return resultado;
}
