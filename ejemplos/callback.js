function uno () {
    console.log("uno");
    setTimeout(dos, 2000);
}

function dos () {
    console.log("dos");
    setTimeout(tres, 2000);
}

function tres () {
    console.log("tres");
    setTimeout(cuatro, 2000);
}

function cuatro () {
    console.log("cuatro");
    setTimeout(cinco, 2000);
}

function cinco(){
    console.log("cinco");
}

//callback
setTimeout(() => uno(dos), 5000); //sin paréntesis porque si no se ejecuta inmediatamente, y los 5000 es en milisegundos

//arrow function
() => console.log();

//callback hell
setTimeout(()=>uno(
    ()=>dos(
        ()=>tres(
            ()=>cuatro(
                ()=>cinco(),
            )
        )
    )
), 3000);
//no se recomienda esta estructura, porque se vuelve poco legible en caso de haber un error sintáctico

//ejemplos de tipos de funciones
const nombre = function(){console.log("nombre");}
nombre();

const persona = () => {console.log("Barbara")}
persona();

