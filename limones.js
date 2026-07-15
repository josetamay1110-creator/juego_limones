let canvas =document.getElementById("areajuego");
let ctx=canvas.getContext("2d");

const ALTURA_SUELO=25;
const ALTURA_PERSONAJE=60; 
const ANCHO_PERSONAJE=35;
const ANCHO_LIMON=20;
const ALTO_LIMON=20;
let  personajeX=canvas.width/2
let personajeY=canvas.height-(ALTURA_SUELO+ALTURA_PERSONAJE)
let limonX=canvas.width/2
let limonY=0;
let puntaje=0;
let vidas=3;
let velocidadCaida=200;



function iniciar(){
    setInterval(bajarLimon,velocidadCaida);//primerparametro una funcion,como segundo recibe tiempomilesegundos
    dibujarSuelo();
    dibujarPersonaje();
    aparecerLimon ();
}

function dibujarSuelo(){
    ctx.fillStyle="brown";
    ctx.fillRect(0,canvas.height-ALTURA_SUELO,canvas.width,ALTURA_SUELO);
}

function dibujarPersonaje(){
    ctx.fillStyle="yellow";
    ctx.fillRect(personajeX,personajeY, ANCHO_PERSONAJE,ALTURA_PERSONAJE);
}

function moverIzquierda(){
    personajeX=personajeX-10;
    actualizarPantalla();
    
}

function actualizarPantalla(){
     limpiarCanva();
     dibujarSuelo();
     dibujarPersonaje();
     dibujarLimon();

}
function limpiarCanva(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

function moverDerecha(){
    personajeX=personajeX+10;
    actualizarPantalla();
    
}

function dibujarLimon(){
    ctx.fillStyle="green";
    ctx.fillRect(limonX,limonY,ALTO_LIMON,ANCHO_LIMON);
}

function bajarLimon(){
    limonY=limonY +10;
    actualizarPantalla();
    detectarColision();
    detectarPiso();
}

function detectarColision(){
    if(limonX+ANCHO_LIMON>personajeX && 
        limonX<personajeX+ANCHO_PERSONAJE&&
        limonY+ALTURA_PERSONAJE>personajeY && 
        limonY<personajeY +ALTURA_PERSONAJE){
        //alert("ATRAPADO!!");
        aparecerLimon();
        puntaje=puntaje+1;
        mostrarEnSpan("txtPuntaje",puntaje);

    }
}

function detectarPiso(){
    if(limonY+ALTO_LIMON>=canvas.height-ALTURA_SUELO){
        aparecerLimon();
        vidas=vidas-1;
        mostrarEnSpan("Vidas",vidas);

    }
}

function aparecerLimon(){
    limonX=generarAleatorio(0,canvas.width-ANCHO_LIMON);
    limonY=0;
    actualizarPantalla();
}