var buttonVerifica = document.getElementById('verifica');
var inputIdade = document.getElementById('inputIdade');

var minhaPromise =  function(idade) {
    return new Promise(function(resolve, reject) {
        
        if (idade >= 18) {
            resolve(idade + ' é maior do que 18 anos');
        } else {
            reject(idade + ' é menor do que 18 anos');
        }

    });

}

buttonVerifica.onclick = function(){
    var idade = inputIdade.value;
    
    inputIdade.value = '';
    minhaPromise(idade)
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.log(error);
    });
}


