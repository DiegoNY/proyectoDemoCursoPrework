var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

//var collecion es un Array par almacenar los pakimanes :3 
var coleccion = [];
//Ingresamos valoreas a la variable coneccion 
coleccion.push( new Pakiman("Cauchin", 100, 30) );
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));

//Paquimaenes en la varibel fredito uwu usar in(itera indice) o of(itera en los objetos) para cuando sirva el objeto
for(var freddito of coleccion)
{
  freddito.mostrar();
}

//mostrar la variabloe en la posicion 0 si ponemos of no serviria uu
for(var x in coleccion[0])
{
  console.log(x);
}


