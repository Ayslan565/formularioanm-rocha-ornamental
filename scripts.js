let NUP = document.querySelector('#NUP')
let labelNUP = document.querySelector('#label-NUP')
let valid_NUP = false

let Nome_empresa = document.querySelector('#Nome-empresa')
let label_Nome_empresa = document.querySelector('#labelNome-empresa')
let valid_Nome_empresa = false

let uf = document.querySelector('#uf')
let label_uf = document.querySelector('#labeluf')
let valid_uf = false

let localidade_Coordenadas = document.querySelector('#localidade-coordenadas')
let valid_localidade_Coordenadas = false
let label_localidade_Coordenadas = document.querySelector('#label-localidade-coordenadas')

let municipio = document.querySelector('#municipio')
let valid_municipio = false
let label_municipio = document.querySelector('#label-municipio')

let substancia = document.querySelector('#substancia')
let label_substancia = document.querySelector('#label-substancia')
let valid_substancia = false

let uso_substancia = document.querySelector('#uso-substancia')
let label_uso_substancia = document.querySelector('#label-uso-substancia')
let valid_uso_substancia = false

let label_sub_aprov = document.querySelector('#label-sub-aprov')
let sim_sub_aprovada = document.querySelector('#sim-sub-aprovada')
let label_Subs_aprv_sim = document.querySelector('#labelSubs-aprv-sim')
let nao_subs_aprovada = document.querySelector('#nao-sub-aprovada')
let label_Subs_aprv_nao = document.querySelector('#labelSubs-aprv-nao')

let label_data_rtf = document.querySelector('#labeldata-rtf')
let data_rtf = document.querySelector('#data-rtf')

let rcl = document.querySelector('#rcl')
let label_data_rcl = document.querySelector('#labeldata-rcl')

let publ_DOU = document.querySelector('#publ-DOU')
let label_publ_DOU = document.querySelector('#labelpubl-DOU')
let valid_publ_DOU = false

let proc_mine_ori_parc = document.querySelector('#proc-mine-ori-parc')
let label_proc_mine_ori_parc = document.querySelector('#labelproc-mine-ori-parc')
let valid_proc_mine_ori_parc = false

let proc_mine_orig_total = document.querySelector('#proc-mine-orig-total')
let label_proc_mine_orig_total = document.querySelector('#labelproc-mine-orig-total')
let valid_proc_mine_orig_total = false

let proc_assoc_engl_areas = document.querySelector('#proc-assoc-engl-areas')
let label_proc_assoc_engl_areas = document.querySelector('#labelproc-assoc-engl-areas')
let valid_proc_assoc_engl_areas = false

let Alv_pesq = document.querySelector('#Alv-pesq')
let label_Alv_pesq = document.querySelector('#labelAlv-pesq')
let valid_Alv_pesq = false

let minuta_porta_lavra = document.querySelector('#minuta-porta-lavra')
let labelminutaportalavra = document.querySelector('#labelminuta-porta-lavra')
let valid_minuta_porta_lavra = false

let cessao_p_t = document.querySelector('#cessao-p-t')
let label_cessao_p_t = document.querySelector('#labelcessao-p-t')
let valid_cessao_p_t = false

let label_proc_mine_cedent = document.querySelector('#labelproc-mine-cedent')
let proc_mine_cedent = document.querySelector('#proc-mine-cedent')
let valid_proc_mine_cedent = false

let label_nome_cedent = document.querySelector('#labelnome-cedent')
let nome_cedent = document.querySelector('#nome-cedent')
let valid_nome_cedent = false

let label_nome_cessio = document.querySelector('#labelnome-cessio')
let nome_cessio = document.querySelector('#nome-cessio')
let valid_nome_cessio = false

NUP.addEventListener('keyup', () => {
    if (NUP.value.length <= 7) {
        labelNUP.setAttribute('style', 'color: red')
        labelNUP.innerHTML = 'NUP *Insira todos os números'
        NUP.setAttribute('style', 'border-color: red')
        valid_NUP = false
    } else {
        labelNUP.setAttribute('style', 'color: green')
        NUP.setAttribute('style', 'border-color: green')
        valid_NUP = true
    }
})

Nome_empresa.addEventListener('keyup', () => {
    if (Nome_empresa.value.length < 3) {
        label_Nome_empresa.setAttribute('style', 'color: red')
        label_Nome_empresa.innerHTML = 'Nome da Empresa *Insira um nome válido'
        Nome_empresa.setAttribute('style', 'border-color: red')
        valid_Nome_empresa = false
    } else {
        label_Nome_empresa.setAttribute('style', 'color: green')
        Nome_empresa.setAttribute('style', 'border-color: green')
        valid_Nome_empresa = true
    }
})

function salvar() {
    const requiredFields = document.querySelectorAll('#formulario [required]');
    let allValid = true;

    requiredFields.forEach(field => {
        if (!field.value) {
            allValid = false;
            field.classList.add('is-invalid');
        } else {
            field.classList.remove('is-invalid');
            field.classList.add('is-valid');
        }
    });

    if (allValid) {
        // Process the form data or move to the next step
        alert('Formulário válido! Prosseguindo para a próxima etapa.');
    } else {
        alert('Por favor, preencha todos os campos obrigatórios.');
    }
}
