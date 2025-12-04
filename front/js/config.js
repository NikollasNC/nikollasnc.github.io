let botaoTema = document.getElementById('botao_tema');

botaoTema.addEventListener('click', function() {
    document.body.classList.toggle('tema_escuro');

    if(document.getElementById('img_home').src.includes('img/img_index/navBar/home.png')) {
        document.getElementById('img_home').src = 'img/img_index/navBar/home_branca.png';
        document.getElementById('img_conta').src = 'img/img_index/navBar/user_branco.png';
        document.getElementById('img_sorvete').src = 'img/img_index/navBar/add_circle_branco.png';
        document.getElementById('img_estoque').src = 'img/img_index/navBar/package_branco.png';
        document.getElementById('img_configurações').src = 'img/img_index/navBar/settings_branca.png';

        document.getElementById('img_tema').src = 'img/config/light_mode.png';
    } else {
        document.getElementById('img_home').src = 'img/img_index/navBar/home.png';
        document.getElementById('img_conta').src = 'img/img_index/navBar/user.png';
        document.getElementById('img_sorvete').src = 'img/img_index/navBar/add_circle.png';
        document.getElementById('img_estoque').src = 'img/img_index/navBar/package.png';
        document.getElementById('img_configurações').src = 'img/img_index/navBar/settings.png';

        document.getElementById('img_tema').src = 'img/config/dark_mode.png';
    }
});