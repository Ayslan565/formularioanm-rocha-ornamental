// Index 1
let NUP = document.querySelector('#nup'); 45455454
let labelNUP = document.querySelector('#label-nup');
let valid_NUP = false;

let Nome_empresa = document.querySelector('#nome-empresa');
let label_Nome_empresa = document.querySelector('#label-nome-empresa');
let valid_Nome_empresa = false;

let uf = document.querySelector('#uf');
let label_uf = document.querySelector('#label-uf');
let valid_uf = false;

let localidade_Coordenadas = document.querySelector('#localidade-coordenadas');
let valid_localidade_Coordenadas = false;
let label_localidade_Coordenadas = document.querySelector('#label-localidade-coordenadas');

let municipio = document.querySelector('#municipio');
let valid_municipio = false;
let label_municipio = document.querySelector('#label-municipio');

let substancia = document.querySelector('#substancia'); 
let label_substancia = document.querySelector('#label-substancia');
let valid_substancia = false;

let uso_substancia = document.querySelector('#uso-substancia');
let label_uso_substancia = document.querySelector('#label-uso-substancia');
let valid_uso_substancia = false;

let publ_DOU = document.querySelector('#publ-dou');
let label_publ_DOU = document.querySelector('#label-publ-dou');
let valid_publ_DOU = false;

let proc_mine_ori_parc = document.querySelector('#proc-mine-ori-parc');
let label_proc_mine_ori_parc = document.querySelector('#label-proc-mine-ori-parc');
let valid_proc_mine_ori_parc = false;

let proc_mine_orig_total = document.querySelector('#proc-mine-orig-total');
let label_proc_mine_orig_total = document.querySelector('#label-proc-mine-orig-total');
let valid_proc_mine_orig_total = false;

let proc_assoc_engl_areas = document.querySelector('#proc-assoc-engl-areas');
let label_proc_assoc_engl_areas = document.querySelector('#label-proc-assoc-engl-areas');
let valid_proc_assoc_engl_areas = false;

let Alv_pesq = document.querySelector('#alv-pesq');
let label_Alv_pesq = document.querySelector('#label-alv-pesq');
let valid_Alv_pesq = false;

let minuta_porta_lavra = document.querySelector('#minuta-porta-lavra');
let labelminutaportalavra = document.querySelector('#label-minuta-porta-lavra');
let valid_minuta_porta_lavra = false;

let cessao_p_t = document.querySelector('#cessao-p-t');
let label_cessao_p_t = document.querySelector('#label-cessao-p-t');
let valid_cessao_p_t = false;

let proc_mine_cedent = document.querySelector('#proc-mine-cedent');
let label_proc_mine_cedent = document.querySelector('#label-proc-mine-cedent');
let valid_proc_mine_cedent = false;

let nome_cedent = document.querySelector('#nome-cedent');
let label_nome_cedent = document.querySelector('#label-nome-cedent');
let valid_nome_cedent = false;

let nome_cessio = document.querySelector('#nome-cessio');
let label_nome_cessio = document.querySelector('#label-nome-cessio');
let valid_nome_cessio = false;

// Validação de campos individuais
NUP.addEventListener('keyup', () => {
    if (NUP.value.length <= 7) {
        labelNUP.setAttribute('style', 'color: red');
        labelNUP.innerHTML = 'NUP *Insira todos os números';
        NUP.setAttribute('style', 'border-color: red');
        valid_NUP = false;
    } else {
        labelNUP.setAttribute('style', 'color: green');
        NUP.setAttribute('style', 'border-color: green');
        valid_NUP = true;
    }
});

Nome_empresa.addEventListener('keyup', () => {
    if (Nome_empresa.value.length < 3) {
        label_Nome_empresa.setAttribute('style', 'color: red');
        label_Nome_empresa.innerHTML = 'Nome da Empresa *Insira um nome válido';
        Nome_empresa.setAttribute('style', 'border-color: red');
        valid_Nome_empresa = false;
    } else {
        label_Nome_empresa.setAttribute('style', 'color: green');
        Nome_empresa.setAttribute('style', 'border-color: green');
        valid_Nome_empresa = true;
    }
});

// Similar event listeners should be added for other fields if necessary

function salvar() {
    const requiredFields = document.querySelectorAll('#formulario [required]');
    let todosPreenchidos = true;

    requiredFields.forEach(field => {
        if (!field.value) {
            todosPreenchidos = false;
            field.classList.add('is-invalid');
            field.classList.remove('is-valid');
        } else {
            field.classList.remove('is-invalid');
            field.classList.add('is-valid');
        }
    });

    if (todosPreenchidos) {
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');
        listaUser.push({
            NUP_Cad: NUP.value,
            Nome_empresa_Cad: Nome_empresa.value,
            uf_Cad: uf.value,
            localidade_Coordenadas_Cad: localidade_Coordenadas.value,
            municipio_Cad: municipio.value,
            substancia_Cad: substancia.value,
            uso_substancia_Cad: uso_substancia.value,
            publ_DOU_Cad: publ_DOU.value,
            proc_mine_ori_parc_Cad: proc_mine_ori_parc.value,
            proc_mine_orig_total_Cad: proc_mine_orig_total.value,
            proc_assoc_engl_areas_Cad: proc_assoc_engl_areas.value,
            Alv_pesq_Cad: Alv_pesq.value,
            minuta_porta_lavra_Cad: minuta_porta_lavra.value,
            cessao_p_t_Cad: cessao_p_t.value,
            proc_mine_cedent_Cad: proc_mine_cedent.value,
            nome_cedent_Cad: nome_cedent.value,
            nome_cessio_Cad: nome_cessio.value
        });
        localStorage.setItem('listaUser', JSON.stringify(listaUser));

        alert('Formulário válido! Prosseguindo para a próxima etapa.');
        window.location.href = 'index2.html';
    } else {
        alert('Por favor, preencha todos os campos obrigatórios.');
    }
}