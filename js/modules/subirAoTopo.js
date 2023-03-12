export default function iniciarSubirAoTopo(){
    const btn = document.querySelector('[data-js-btnSubirAoTopo]');
    
    function mostrarBotao(){window.scrollY != 0 ? btn.classList.add('ativo') : btn.classList.remove('ativo');}
    window.addEventListener('scroll', mostrarBotao);

    function subir(){window.scrollTo(0,0);}
    btn.addEventListener('click', subir);

}
