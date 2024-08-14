// Seleção dos elementos do formulário
let comprimento_lajao = document.querySelector('#comprimento_lajao');
let label_comprimento_lajao = document.querySelector('#label_comprimento_lajao');
let valid_comprimento_lajao = false;

let largura_lajao = document.querySelector('#largura_lajao');
let label_largura_lajao = document.querySelector('#label_largura_lajao');
let valid_largura_lajao = false;

let espessura_lajao = document.querySelector('#espessura_lajao');
let label_espessura_lajao = document.querySelector('#label_espessura_lajao');
let valid_espessura_lajao = false;

let volume_lajao = document.querySelector('#volume_lajao');
let label_volume_lajao = document.querySelector('#label_volume_lajao');
let valid_volume_lajao = false;

let quantidade_bruta_lajao_mes = document.querySelector('#quantidade_bruta_lajao_mes');
let label_quantidade_bruta_lajao_mes = document.querySelector('#label_quantidade_bruta_lajao_mes');
let valid_quantidade_bruta_lajao_mes = false;

let quantidade_bruta_lajao_mes2 = document.querySelector('#quantidade_bruta_lajao_mes2');
let label_quantidade_bruta_lajao_mes2 = document.querySelector('#label_quantidade_bruta_lajao_mes2');
let valid_quantidade_bruta_lajao_mes2 = false;

let recuperacao_lavra = document.querySelector('#recuperacao_lavra');
let label_recuperacao_lavra = document.querySelector('#label_recuperacao_lavra');
let valid_recuperacao_lavra = false;

let volume_total_liquido_mes = document.querySelector('#volume_total_liquido_mes');
let label_volume_total_liquido_mes = document.querySelector('#label_volume_total_liquido_mes');
let valid_volume_total_liquido_mes = false;

let densidade_in_situ = document.querySelector('#densidade_in_situ');
let label_densidade_in_situ = document.querySelector('#label_densidade_in_situ');
let valid_densidade_in_situ = false;

let quantidade_total_liquido_mes = document.querySelector('#quantidade_total_liquido_mes');
let label_quantidade_total_liquido_mes = document.querySelector('#label_quantidade_total_liquido_mes');
let valid_quantidade_total_liquido_mes = false;

let numero_lajoes_mes = document.querySelector('#numero_lajoes_mes');
let label_numero_lajoes_mes = document.querySelector('#label_numero_lajoes_mes');
let valid_numero_lajoes_mes = false;

let forma_bancadas = document.querySelectorAll('input[name="forma_bancadas"]');
let label_forma_bancadas = document.querySelectorAll('[id="label_lavra_"]');
let valid_forma_bancadas = false;

let numero_medio_bancadas = document.querySelector('#numero_medio_bancadas');
let label_numero_medio_bancadas = document.querySelector('#label_numero_medio_bancadas');
let valid_numero_medio_bancadas = false;

let numero_medio_bancadas2 = document.querySelector('#numero_medio_bancadas2');
let label_numero_medio_bancadas2 = document.querySelector('#label_numero_medio_bancadas2');
let valid_numero_medio_bancadas2 = false;

//Preenchimento Obrigatorio
function salvar() {
    let form = document.getElementById('formulario3');
    let inputs = form.querySelectorAll('input[required], textarea[required]');
    let todosPreenchidos = true;

    inputs.forEach(function(input) {
        if (!input.value.trim()) {
            todosPreenchidos = false;
            input.classList.add('is-invalid');
        } else {
            input.classList.remove('is-invalid');
        }
    });
 // salvar e avançar
    if (todosPreenchidos) {
        alert('Formulário salvo com sucesso! Avançando para a próxima página.');

        window.location.href = 'proxima_pagina.html'; // Substitua 'proxima_pagina.html' pelo URL da próxima página
    } else {
        alert('Por favor, preencha todos os campos obrigatórios.');
    }
}
