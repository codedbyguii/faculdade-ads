const gato = {
    name: "Eva",
    nascimento: "26/12/20xx",
    pelagem: "Branca",
    status: {
        castrado: true,
        vacinado: true,
        vermifugado: true
    },
    miar: function(){
        console.log('miau');
    }
}

console.table(gato)
