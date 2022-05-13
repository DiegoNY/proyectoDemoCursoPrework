 var teclas = {
     UP: 38,
     DOWN: 40,
     LEFT: 37,
     RIGTH: 39 
 }

 console.log(teclas);

 document.addEventListener("keydown", dibujarTeclado);
 var cuadrito = document.getElementById("area_de_dibujo");
 var papel = cuadrito.getContext("2d");
 var x = 100;
 var y = 100;

 dibujarLinea("red", x-1, y- 1,x+1,y+1, papel);

 function dibujarLinea(color , xinicial, yinicial, xfinal, yfinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
 
}

 function dibujarTeclado(evento)
 {
    var colorcito = "blue";
    var movimiento = 1;
   switch(evento.keyCode)
   {
        case teclas.UP:
            dibujarLinea(colorcito, x, y, x, y-movimiento, papel);
            y = y - movimiento;
        break;

        case teclas.DOWN:
            console.log("abajo")
            dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
            y = y + movimiento;
        break;

        case teclas.LEFT:
            console.log("izquierda")
            dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
            x = x - movimiento;
        break;

        case teclas.RIGTH:
            console.log("derecha")
            console.log("izquierda")
            dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
            x = x + movimiento;
        break;
        default:
            console.log("otra tecla")
        break;
   }
 }