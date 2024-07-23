$('#form-pg1').submit(function(){
    var Nup = $('#NUP');
    var erro = $('.alert');
    var campo = $('#campo-erro');
    erro.addClass('d-none')
    if (nome.val() =='');{
        erro.removeClass('d-none');
        campo.html('NUP');
        return false;
    }
        return false;
});