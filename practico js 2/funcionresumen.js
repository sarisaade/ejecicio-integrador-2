const cantidadEntradas = document.getElementById('cantidadEntradas')
const botonCalcular = document.getElementById('botonCalcular')
const categoria= document.getElementById('category')
const totalCompra= document.getElementById('totalCompra')
const botonBorrar =document.getElementById('')

function resumen()

    
 {
    console.log(categoria.value)
    console.log(cantidadEntradas.value)
    cantidadEntradas.value
    if(categoria.value == "estudiante") {
        totalCompra.innerHTML=(cantidadEntradas.value *200 * 0.20)
    }else if (categoria.value == "junior"){
        totalCompra.innerHTML=(cantidadEntradas.value *200 * 0.85)}
        else if (categoria.value == "trainee") {
            totalCompra.innerHTML=(cantidadEntradas.value *200 * 0.50)
       }
}
function borrar(){
    totalCompra.innerHTML=(botonBorrar)
}
