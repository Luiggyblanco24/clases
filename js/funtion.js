console.log("prueba de conexion")
//tipos de variables
//const variables constantes
const pi=3.1416;
const pulgada=2.14;
const name= "luiggy sebastian vega blanco";
// var para variables globales
var cal_days = 15;
// let para variables de bloque o locales
let j=0;
let count = 1;

//formas de impresion 
//aler
//alert(name);
//console
console.log(name);
console.log(cal_days);
console.log("15");
//pantalla - body
document.write(name);
document.getElementById("box_one").innerHTML = "<h1> luiggy sebastian vega blanco</h1>";
document.getElementById("box_two").innerText = "<h1> luiggy sebastian vega blanco</h1>";
//librerias
Swal.fire({
    icon:'info',
    tittle: 'luiggy vega',
    text: name,
    footer:name,
    showConfirmButton: false,
    timer:2000,
    position:'center-end'
})
//tipos de datos
//numericos
var number_one = 10;
var number_two = 2.3;
//string 
var text = "soy un texto";
//booleanos
var boolean =true; //falses
//array
let array_num = [1,2,3,4,5,6];
let array_text =  ["lunes","martes","miercoles"];
let array_mix =  [1,"a",2.5];
let array_mul = [
    {name:"luiggy", last_name:"vega", age:"21"},
    {name:"sebastian", last_name:"blanco", age:"22"},
    {name:"juan", last_name:"martinez", age:"23"},
]
//suma
var suma = number_one + number_two;
console.log("suma = " + suma);
//resta
var resta = number_one - number_two;
console.log("resta = " + resta);
//multiplicacion
var multi = number_one * number_two;
console.log("multiplicacion = " + multi)
//divison 
var div = number_one / number_two;
console.log("division = " + div);
//madulo
var modulo = number_one % number_two;
console.log("modulo = " + modulo);
console.log(
"suma = " + suma +"\n"+
"resta = " + resta +"\n"+
"multiplicacion = " + multi +"\n"+
"division = " + div +"\n"+
"modulo = " + modulo
)
var respuesta = "suma = " + suma +"<br>"+
"resta = " + resta +"<br>"+
"multiplicacion = " + multi +"<br>"+
"division = " + div +"<br>"+
"modulo = " + modulo;
Swal.fire(respuesta);

Swal.fire({
    showConfirmButton: false,
    background: '#fff',
    icon:'success',
    tittle: 'respuesta:',
    html: respuesta

})