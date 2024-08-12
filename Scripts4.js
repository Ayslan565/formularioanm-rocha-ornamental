// Seleciona os campos e labels
let diametro_furos = document.querySelector('#diametro_furos');
let label_diametro_furos = document.querySelector('#label_diametro_furos');
let valid_diametro_furos = false;

let afastamento_furos = document.querySelector('#afastamento_furos');
let label_afastamento_furos = document.querySelector('#label_afastamento_furos');
let valid_afastamento_furos = false;

let espacamento_furos = document.querySelector('#espaco_furos');
let label_espaco_furos = document.querySelector('#label_espaco_furos');
let valid_espaco_furos = false;

let profundidade_furos = document.querySelector('#profundidade_furos');
let label_profundidade_furos = document.querySelector('#label_profundidade_furos');
let valid_profundidade_furos = false;

let numero_furos = document.querySelector('#numero_furos');
let label_numero_furos = document.querySelector('#label_numero_furos');
let valid_numero_furos = false;

let martelete_pneumatico = document.querySelector('#martelete_pneumatico');
let label_martelete_pneumatico = document.querySelector('#label_martelete_pneumatico');
let valid_martelete_pneumatico = false;

let peruratriz_fundo_furo = document.querySelector('#peruratriz_fundo_furo');
let label_peruratriz_fundo_furo = document.querySelector('#label_peruratriz_fundo_furo');
let valid_peruratriz_fundo_furo = false;

let banqueadora = document.querySelector('#banqueadora');
let label_banqueadora = document.querySelector('#label_banqueadora');
let valid_banqueadora = false;

let compressor_portatil = document.querySelector('#compressor_portatil');
let label_compressor_portatil = document.querySelector('#label_compressor_portatil');
let valid_compressor_portatil = false;

let compressor_estacionario = document.querySelector('#compressor_estacionario');
let label_compressor_estacionario = document.querySelector('#label_compressor_estacionario');
let valid_compressor_estacionario = false;

let maquina_fio_diamantado = document.querySelector('#maquina_fio_diamantado');
let label_maquina_fio_diamantado = document.querySelector('#label_maquina_fio_diamantado');
let valid_maquina_fio_diamantado = false;

let esquadrejadora = document.querySelector('#esquadrejadora');
let label_esquadrejadora = document.querySelector('#label_esquadrejadora');
let valid_esquadrejadora = false;

let perfuratriz_hidraulica = document.querySelector('#perfuratriz_hidraulica');
let label_perfuratriz_hidraulica = document.querySelector('#label_perfuratriz_hidraulica');
let valid_perfuratriz_hidraulica = false;

let cortadeira_disc_diamantado = document.querySelector('#cortadeira_disc_diamantado');
let label_cortadeira_disc_diamantado = document.querySelector('#label_cortadeira_disc_diamantado');
let valid_cortadeira_disc_diamantado = false;

let outros_equipamentos = document.querySelector('#outros_equipamentos');
let label_outros_equipamentos = document.querySelector('#label_outros_equipamentos');
let valid_outros_equipamentos = false;

let perfuracao_explosivos = document.querySelector('#perfuracao_explosivos');
let label_perfuracao_explosivos = document.querySelector('#label_perfuracao_explosivos');
let valid_perfuracao_explosivos = false;

let perfuracao_massa_expansiva = document.querySelector('#perfuracao_massa_expansiva');
let label_perfuracao_massa_expansiva = document.querySelector('#label_perfuracao_massa_expansiva');
let valid_perfuracao_massa_expansiva = false;

let perfuracao_cunha = document.querySelector('#perfuracao_cunha');
let label_perfuracao_cunha = document.querySelector('#label_perfuracao_cunha');
let valid_perfuracao_cunha = false;

let perfuracao_continua = document.querySelector('#perfuracao_continua');
let label_perfuracao_continua = document.querySelector('#label_perfuracao_continua');
let valid_perfuracao_continua = false;

let corte_fio_helicoidal = document.querySelector('#corte_fio_helicoidal');
let label_corte_fio_helicoidal = document.querySelector('#label_corte_fio_helicoidal');
let valid_corte_fio_helicoidal = false;

let corte_fio_diamantado = document.querySelector('#corte_fio_diamantado');
let label_corte_fio_diamantado = document.querySelector('#label_corte_fio_diamantado');
let valid_corte_fio_diamantado = false;

let corte_water_jet = document.querySelector('#corte_water_jet');
let label_corte_water_jet = document.querySelector('#label_corte_water_jet');
let valid_corte_water_jet = false;

let corte_corrente_diamantada = document.querySelector('#corte_corrente_diamantada');
let label_corte_corrente_diamantada = document.querySelector('#label_corte_corrente_diamantada');
let valid_corte_corrente_diamantada = false;

let corte_disco_diamantado = document.querySelector('#corte_disco_diamantado');
let label_corte_disco_diamantado = document.querySelector('#label_corte_disco_diamantado');
let valid_corte_disco_diamantado = false;

let outros_tecnologia = document.querySelector('#outros_tecnologia');
let label_outros_tecnologia = document.querySelector('#label_outros_tecnologia');
let valid_outros_tecnologia = false;

let desmonte_secundario = document.querySelector('#desmonte_secundario');
let label_desmonte_secundario = document.querySelector('#label_desmonte_secundario');
let valid_desmonte_secundario = false;

let esfera_aco = document.querySelector('#esfera_aco');
let label_esfera_aco = document.querySelector('#label_esfera_aco');
let valid_esfera_aco = false;

let rombedor_hidraulico = document.querySelector('#rombedor_hidraulico');
let label_rombedor_hidraulico = document.querySelector('#label_rombedor_hidraulico');
let valid_rombedor_hidraulico = false;

let explosivo = document.querySelector('#explosivo');
let label_explosivo = document.querySelector('#label_explosivo');
let valid_explosivo = false;

let massa_expansiva = document.querySelector('#massa_expansiva');
let label_massa_expansiva = document.querySelector('#label_massa_expansiva');
let valid_massa_expansiva = false;

let outra_forma_execucao = document.querySelector('#outra_forma_execucao');
let label_outra_forma_execucao = document.querySelector('#label_outra_forma_execucao');
let valid_outra_forma_execucao = false;

let outra_forma_desmonte = document.querySelector('#outra_forma_desmonte');
let label_outra_forma_desmonte = document.querySelector('#label_outra_forma_desmonte');
let valid_outra_forma_desmonte = false;

let desmonte_mecanico = document.querySelector('#desmonte_mecanico');
let label_desmonte_mecanico = document.querySelector('#label_desmonte_mecanico');
let valid_desmonte_mecanico = false;

let desmonte_massa_expansiva = document.querySelector('#desmonte_massa_expansiva');
let label_desmonte_massa_expansiva = document.querySelector('#label_desmonte_massa_expansiva');
let valid_desmonte_massa_expansiva = false;

let desmonte_nenhum = document.querySelector('#desmonte_nenhum');
let label_desmonte_nenhum = document.querySelector('#label_desmonte_nenhum');
let valid_desmonte_nenhum = false;

let planilha_04 = document.querySelector('#planilha_04');
let label_planilha_04 = document.querySelector('#label_planilha_04');
let valid_planilha_04 = false;


function salvar() {
//Preenchimento Obrigatorio
    let form = document.getElementById('formulario4');
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
//Salvar e avancar 

    if (todosPreenchidos) {
        alert('Formulário salvo com sucesso! Avançando para a próxima página.');

        window.location.href = 'proxima_pagina.html'; 
    } else {
        alert('Por favor, preencha todos os campos obrigatórios.');
    }
}
