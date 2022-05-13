//optimizar codigo reto 
//tcrear imagenes y mostrarlos 
//cada que tengo dinero restarlos y saber cuanto dinero tengo 
class Billete 
{
    constructor(v,c)
    {
        this.valor = v ;
        this.cantidad = c; 
    }
}

function entregarDinero()
{
    //obtenemos valor de la variable t que es la caja de texto
    var t = document.getElementById("dinero");
    //declaramos variable dinero y el valor del texto de la variable t lo 
    //volvemos en entero para poder utilizarlo 
    dinero = parseInt(t.value);
    /*recorremos la clase billete en la caja 
    bi(es billetoes como un i una variable para poder recorrer el Array en este caso caja)*/
    for(var bi of caja)
    {
        if(dinero> 0)
        {
             //floor para retornar valor entero en la division 
            div = Math.floor(dinero/bi.valor);
            //si la division es mayor que la cantidad de billete guardamos cantidad en papeles
            //papeles es la cantidad de peples/billetes barras v: 
            if(div > bi.cantidad)
            {
                papeles = bi.cantidad;
            }
            //si no pepeles seguira siendo el valor de la division
            else
            {                
                papeles = div;
            }
            //ingresamos el valor en el Array entregado para poder mostrar los billetes que debemos entregar 
            entregado.push(new Billete(bi.valor, papeles));
            //restamos el dinero - el billete ingresado para que el ciclo continue y se repita
            dinero  = dinero - (bi.valor * papeles);
        }
    }
    //preguntamos si el dinero es mayor que 0 imprimimos no tengo dinero soryyy PUTOOOO!
    if(dinero > 0)
    {
        resultado.innerHTMl = "no tengo cashh sorry puto" ;
    }
    /*si no recorremos el array entregado preguntamos si la cantidad de entregado es 0 imprimimos
     cantidad mas billetes 
    mas el valor*/
    else
    {
        for(var e of entregado)
        {
            if(e.cantidad > 0)
            {
             resultado.innerHTML += + e.cantidad + " Billetes de $ " + e.valor + " <br/ >" ;
            }       
        }
    }
}

var caja = [];
var entregado = [];
caja.push(new Billete(50,10));
caja.push(new Billete(20,30));
caja.push(new Billete(10,10));
var dinero = 0;
var div = 0; 
var papeles =0;

//traemos del html la caja resultado para poder mostrar nuestro resultado
var resultado = document.getElementById("resultado"); 
//traemos del html el boton extraer para poder activar nuestra funcion entregar dinero
var b = document.getElementById("extraer");
//activando la funcion :D
b.addEventListener("click",entregarDinero);

