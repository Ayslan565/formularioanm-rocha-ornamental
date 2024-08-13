                        const produtoBruto = document.getElementById('sim-sub-aprovada');
                        const produtoBeneficiado = document.getElementById('nao-sub-aprovada');
                        const tabelaBruto = document.getElementById('tabela-bruto');
                        const tabelaBeneficiado = document.getElementById('tabela-beneficiado');
                 
                        produtoBruto.addEventListener('change', function() {
                            if (this.checked) {
                                tabelaBruto.classList.remove('hidden');
                                tabelaBeneficiado.classList.add('hidden');
                            }
                        });
                 
                        produtoBeneficiado.addEventListener('change', function() {
                            if (this.checked) {
                                tabelaBeneficiado.classList.remove('hidden');
                                tabelaBruto.classList.add('hidden');
                            }
                        });