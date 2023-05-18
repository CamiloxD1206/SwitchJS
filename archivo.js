console.log('Listado de villanos correspondientes a cada superheroe en orden');
function explicacion(){
for(i=1;i<5;i++){
let superHeroe=prompt('Dame el nombre de un superheroe');
let villano ='';
switch(superHeroe){
  case 'superman':
  villano ='lex lutor'
  break;
  case 'batman':
    villano ='El guason'
    break;
    case 'wolverine':
      villano ='Magneto'
      break;
      case 'spiderman':
        villano ='duende verde'
        break;
        default :
        villano='lo siento no reconozco ese superheroe'
}
console.log(`${villano}`)};
}