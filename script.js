// SISTEMA DE BANNER DINAMICO 
// @author Gabriel Araujo
// @data 2019/09/17

$(document).ready(function() {

    // Se sair do carrinho, faz com que desapareça o banner
    $('.btn-place-order-wrapper').on('click', function() {
        $('section#fretegratis').hide()
    });
    
    // Verifica se está na página de carrinho procurando o elemento    
    if ($('.cart-template-holder').length > 0) {
    
      //Executa ao clicar no botão calcular após preenchimento do CEP 
        $('#cart-shipping-calculate').on('click', function() {
        
            var helper = {
                // Formata o valor no padrão em R$
                toReal: function(val) {
                    val = val / 100;
                    val = val.toFixed(2).toString().replace('.', ',');
                    val = val.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
                    return val
                },
                // Formata o CEP, deixando somente números
                formatarCep: function(val) {
                    cep = val.replace(/\D/g, '')
                    return cep
                },
            }
            
            
            var cep = helper.formatarCep($('#summary-postal-code').val());
            var validacep = /^[0-9]{8}$/;
            var valorFreteGratis;
            
            // Se existir o CEP
            if (cep) {
            
                // Verifica se o CEP é válido e está no padrão
                if (validacep.test(cep)) {
                
                  // Puxa as informações baseado no CEP informado 
                  // Foi utilizado a API do VIACEP
                    $.getJSON("https://viacep.com.br/ws/" + cep + "/json/?callback=", function(dados) {
                      // Verifica se não teve retorno de erro
                        if (!("erro" in dados)) {
                            if (dados.uf == "AC") {
                                if (dados.localidade == "Rio Branco") {
                                    valorFreteGratis = 14900
                                } else {
                                    valorFreteGratis = 24900
                                }
                            }
                            if (dados.uf == "AP") {
                                if (dados.localidade == "Macapá") {
                                    valorFreteGratis = 14900
                                } else {
                                    valorFreteGratis = 24900
                                }
                            }
                            if (dados.uf == "AM") {
                                if (dados.localidade == "Manaus") {
                                    valorFreteGratis = 14900
                                } else {
                                    valorFreteGratis = 24900
                                }
                            }
                            if (dados.uf == "PA") {
                                if (dados.localidade == "Belém") {
                                    valorFreteGratis = 14900
                                } else {
                                    valorFreteGratis = 24900
                                }
                            }
                            if (dados.uf == "RO") {
                                if (dados.localidade == "Porto Velho") {
                                    valorFreteGratis = 14900
                                } else {
                                    valorFreteGratis = 24900
                                }
                            }
                            if (dados.uf == "RR") {
                                if (dados.localidade == "Boa Vista") {
                                    valorFreteGratis = 14900
                                } else {
                                    valorFreteGratis = 24900
                                }
                            }
                            if (dados.uf == "TO") {
                                if (dados.localidade == "Palmas") {
                                    valorFreteGratis = 14900
                                } else {
                                    valorFreteGratis = 24900
                                }
                            }
                            if (dados.uf == "AL") {
                                if (dados.localidade == "Maceió") {
                                    valorFreteGratis = 14900
                                } else {
                                    valorFreteGratis = 24900
                                }
                            }
                            if (dados.uf == "BA") {
                                if (dados.localidade == "Salvador") {
                                    valorFreteGratis = 14900
                                } else {
                                    valorFreteGratis = 24900
                                }
                            }
                            if (dados.uf == "CE") {
                                if (dados.localidade == "Fortaleza") {
                                    valorFreteGratis = 14900
                                } else {
                                    valorFreteGratis = 24900
                                }
                            }
                            if (dados.uf == "MA") {
                                if (dados.localidade == "São Luís") {
                                    valorFreteGratis = 14900
                                } else {
                                    valorFreteGratis = 24900
                                }
                            }
                            if (dados.uf == "PB") {
                                if (dados.localidade == "João Pessoa") {
                                    valorFreteGratis = 14900
                                } else {
                                    valorFreteGratis = 24900
                                }
                            }
                            if (dados.uf == "PE") {
                                if (dados.localidade == "Recife") {
                                    valorFreteGratis = 14900
                                } else {
                                    valorFreteGratis = 24900
                                }
                            }
                            if (dados.uf == "PI") {
                                if (dados.localidade == "Teresina") {
                                    valorFreteGratis = 14900
                                } else {
                                    valorFreteGratis = 24900
                                }
                            }
                            if (dados.uf == "RN") {
                                if (dados.localidade == "Natal") {
                                    valorFreteGratis = 14900
                                } else {
                                    valorFreteGratis = 24900
                                }
                            }
                            if (dados.uf == "SE") {
                                if (dados.localidade == "Aracaju") {
                                    valorFreteGratis = 14900
                                } else {
                                    valorFreteGratis = 24900
                                }
                            }
                            if (dados.uf == "GO") {
                                if (dados.localidade == "Goiânia") {
                                    valorFreteGratis = 9900
                                } else {
                                    valorFreteGratis = 12900
                                }
                            }
                            if (dados.uf == "MT") {
                                if (dados.localidade == "Cuiabá") {
                                    valorFreteGratis = 12900
                                } else {
                                    valorFreteGratis = 14900
                                }
                            }
                            if (dados.uf == "MS") {
                                if (dados.localidade == "Campo Grande") {
                                    valorFreteGratis = 12900
                                } else {
                                    valorFreteGratis = 14900
                                }
                            }
                            if (dados.uf == "DF") {
                                if (dados.localidade == "Brasília") {
                                    valorFreteGratis = 12900
                                } else {
                                    valorFreteGratis = 14900
                                }
                            }
                            if (dados.uf == "ES") {
                                if (dados.localidade == "Vitória") {
                                    valorFreteGratis = 14900
                                } else {
                                    valorFreteGratis = 19900
                                }
                            }
                            if (dados.uf == "MG") {
                                if (dados.localidade == "Belo Horizonte") {
                                    valorFreteGratis = 14900
                                } else {
                                    valorFreteGratis = 19900
                                }
                            }
                            if (dados.uf == "SP") {
                                if (dados.localidade == "São Paulo") {
                                    valorFreteGratis = 14900
                                } else {
                                    valorFreteGratis = 19900
                                }
                            }
                            if (dados.uf == "RJ") {
                                if (dados.localidade == "Rio de Janeiro") {
                                    valorFreteGratis = 14900
                                } else {
                                    valorFreteGratis = 19900
                                }
                            }
                            if (dados.uf == "PR") {
                                if (dados.localidade == "Curitiba") {
                                    valorFreteGratis = 14900
                                } else {
                                    valorFreteGratis = 19900
                                }
                            }
                            if (dados.uf == "RS") {
                                if (dados.localidade == "Porto Alegre") {
                                    valorFreteGratis = 14900
                                } else {
                                    valorFreteGratis = 19900
                                }
                            }
                            if (dados.uf == "SC") {
                                if (dados.localidade == "Florianópolis") {
                                    valorFreteGratis = 14900
                                } else {
                                    valorFreteGratis = 19900
                                }
                            }
                            if (valorFreteGratis) {
                                vtexjs.checkout.getOrderForm().done(function(orderForm, val) {
                                    var valor = orderForm.value;
                                    var faltam = valorFreteGratis - valor;
                                    if (faltam <= 0) {
                                        $('.texto').html('Seu carrinho');
                                        $('.para-ganhar').html('você ganhou');
                                        $('.valor').html('<sup>R$ </sup>' + helper.toReal(valor))
                                    } else {
                                        $('.texto').html('Faltam apenas');
                                        $('.para-ganhar').html('para você ganhar');
                                        $('.valor').html('<sup>R$ </sup>' + helper.toReal(faltam))
                                    }
                                })
                            }
                        }
                    })
                }
            }
            $('section#fretegratis').show()
        })
    } else {
        $('section#fretegratis').hide()
    }
})
