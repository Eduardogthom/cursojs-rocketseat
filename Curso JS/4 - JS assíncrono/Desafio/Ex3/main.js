var buttonVisualizar = document.getElementById('visualiza');
var buttonLimpar = document.getElementById('limpar');
var inputUser = document.getElementById('user');
var ul = document.createElement('ul');

buttonVisualizar.onclick = function() {
    document.getElementById('app').appendChild(ul);
    var user = inputUser.value;
    var li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML += "Carregando...";

    axios.get('https://api.github.com/users/' + user + '/repos')
        .then(function(response) {
            while (ul.hasChildNodes()) {
                ul.removeChild(ul.lastChild);
            }
            listaRepositorios = response.data;
            listaRepositorios.forEach(function(itemLista) {
                var li = document.createElement('li');
                ul.appendChild(li);
                li.innerHTML += itemLista.name;
            })
        })
        .catch(function(error) {
            alert('Erro: Repositorio Inexistente!');
        });
}

//Não limpa totalmente apenas remove a lista da tela
buttonLimpar.onclick = function() {
    while (ul.hasChildNodes()) {
        ul.removeChild(ul.lastChild);
    }
    inputUser.value = '';
}