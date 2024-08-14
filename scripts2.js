//index 2

let reserv_provada = document.querySelector('#reserv_provada');
let labelReservProvada = document.querySelector('#label_reserv_provada');
let validReservProvada = false;

let reserv_provavel = document.querySelector('#reserv_provavel');
let labelReservProvavel = document.querySelector('#label_reserv_provavel');
let validReservProvavel = false;

let planilha_01 = document.querySelector('#planilha_01');
let labelPlanilha01 = document.querySelector('#label_planilha_01');
let validPlanilha01 = false;

let prod_bruto = document.querySelector('#prod_bruto');
let prod_beneficiado = document.querySelector('#prod_beneficiado');
let labelTipoProdutoPrincipal = document.querySelector('#label_tipo_produto_principal');
let validTipoProdutoPrincipal = false;

let planilha_2_1 = document.querySelector('#planilha_2_1');
let labelPlanilha21 = document.querySelector('#label_planilha_2_1');
let validPlanilha21 = false;

let planilha_2_2 = document.querySelector('#planilha_2_2');
let labelPlanilha22 = document.querySelector('#label_planilha_2_2');
let validPlanilha22 = false;

let tips_produt_sec_gerado = document.querySelector('#tips_produt_sec_gerado');
let labelTipsProdutoSecGerado = document.querySelector('#label_tips_produt_sec_gerado');
let validTipsProdutoSecGerado = false;

let observacao = document.querySelector('#observacao');
let labelObservacao = document.querySelector('#label_observacao');
let validObservacao = false;

let planilha_3 = document.querySelector('#planilha_3');
let labelPlanilha3 = document.querySelector('#label_planilha_3');
let validPlanilha3 = false;

function salvar() {
    let form = document.getElementById('formulario2');
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

        window.location.href = index3.html ; 
    } else {
        alert('Por favor, preencha todos os campos obrigatórios.');
    }
}
