get("http://localhost8080/contatos", function (data){
    document.getElementById('ajax').innerHTML = data;
});