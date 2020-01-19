// Boton de Agregar item al Shopping List
$(".agregar").on('click',function(event){
    event.preventDefault();
    let texto = $("#newText").val();
    if(texto != ""){
        $(".Lista").append(`
        <div clas = "shopItem">
        <li class = "lis">
        <p class = "itemShop">${texto}</p>
        <button class = "checar" type = "text">
            Check
        </button>
        <button class = "del" type = "text">
            Delete
        </button>
        <p></P>
    `);
    }
})
// Boton check para tachar el item de la lista
$(".Lista").on('click','.checar', function(event){
    event.preventDefault();
    $(this).parent().toggleClass('chec')
})

//Boton delete para borrar el item de la lista
$(".Lista").on('click','.del',function(event){
    event.preventDefault();
    $(this).parent().remove();
})