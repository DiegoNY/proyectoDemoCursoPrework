import cafecito from "express";
var aplicacion = react();

aplicacion.get("/", inicio);

//creando url
function inicio(peticion, resultado)
{
    resultado.send("Ete es el <strong>home</strong>");
}

function inicio(peticion, resultado)
{
    resultado.send("EStos son los <strong>cursos</strong>");
}
//corriendo servidor 
aplicacion.listen(8989);