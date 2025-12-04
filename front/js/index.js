let botaoInicio = document.getElementById('botao_inicio');
let botaoConta = document.getElementById('botao_conta');
let botaoAddSorvete = document.getElementById('botao_addSorvete');
let botaoEstoque = document.getElementById('botao_estoque');
let botaoConfiguracoes = document.getElementById('botao_configuracoes');

let secaoInicio = document.getElementById('inicio');
let secaoConta = document.getElementById('conta');
let secaoAddSorvete = document.getElementById('addSorvete');
let secaoEstoque = document.getElementById('estoque');
let secaoConfiguracoes = document.getElementById('configuracoes');

let botaoAtual = botaoInicio;
let secaoAtual = secaoInicio;

botaoInicio.addEventListener('click', function () {
    trocarSecao(secaoInicio, botaoInicio);
});

botaoConta.addEventListener('click', function () {
    trocarSecao(secaoConta, botaoConta);
});

botaoAddSorvete.addEventListener('click', function () {
    trocarSecao(secaoAddSorvete, botaoAddSorvete);
});

botaoEstoque.addEventListener('click', function () {
    trocarSecao(secaoEstoque, botaoEstoque);
});

botaoConfiguracoes.addEventListener('click', function () {
    trocarSecao(secaoConfiguracoes, botaoConfiguracoes);
});

function trocarSecao(secao, botao) {
    secaoAtual.style.position = 'fixed';
    secao.style.position = 'static';
    secaoAtual = secao;

    botaoAtual.classList.remove('botaoSelecionado');
    botao.classList = 'botaoSelecionado botao1';
    botaoAtual = botao;
}

$(document).ready(function () {
    $('#example').DataTable({
        language: {
            url: '//cdn.datatables.net/plug-ins/2.0.8/i18n/pt-BR.json',
        }
    });
});