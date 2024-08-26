function toggleVisibility(id) {
    var element = document.getElementById(id);
    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
    } else {
        element.classList.add('hidden');
    }
}
function toggleTabelaSecundario(show) {
    var tabela = document.getElementById('tabela_secundario');
    if (show) {
        tabela.classList.remove('hidden');
    } else {
        tabela.classList.add('hidden');
    }
}

function toggleTabelaBeneficiado(show) {
    var tabela = document.getElementById('tabela_beneficiado');
    if (show) {
        tabela.classList.remove('hidden');
    } else {
        tabela.classList.add('hidden');
    }
}

function salvar() {
    let form = document.getElementById('formulario1955');
    let inputs = form.querySelectorAll('input[required], textarea[required]');
    let todosPreenchidos = true;

    inputs.forEach(function(input) {
        if (!input.value) {
            todosPreenchidos = false;
            input.classList.add('is-invalid');
        } else {
            input.classList.remove('is-invalid');
        }
    });
    //Salvar e avancar
    if (todosPreenchidos) {
        alert('Formulário salvo com sucesso! Avançando para a próxima página.');
        window.location.href = "index3.html";
    } else {
        alert('Por favor, preencha todos os campos obrigatórios.');
    }
}
