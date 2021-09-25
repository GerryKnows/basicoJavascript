 
 
var hombre = piedra;
var options = [piedra, papel, tijera];
var maquina = options[Math.floor(Math.random() * 3)];


 var piedra = "piedra";
 var papel = "papel";
 var tijera = "tijera";


switch (true) {
    case (hombre === maquina):
    console.log( "es un empate alaverga")
    break;

    case (hombre === papel  && maquina === piedra):
    console.log( "ah perrruuu, ganaste con " + hombre)
    break;

    case (hombre === piedra   && maquina === tijera):
    console.log( "ah perrruuu, ganaste con " + hombre)
    break;

     case (hombre === tijera   && maquina === papel):
    console.log( "ah perrruuu, ganaste con " + hombre)
    break;

    default:
    console.log ("perdiste xD");
}