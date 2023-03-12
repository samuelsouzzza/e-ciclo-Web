export default function iniciarMostrarMenuMobile(){
    const iconeMobile = document.querySelector('[data-js-iconeMobile]');
    const menuMobile = document.querySelector('[data-js-menuMobile]');

    function mostrarMenuMobile(){
        
        function ocultarMenuMobile(e){
            if(!iconeMobile.contains(e.target))menuMobile.classList.toggle('ativo');
        }
        window.addEventListener('click', ocultarMenuMobile);
        menuMobile.classList.add('ativo');
    }
    iconeMobile.addEventListener('click', mostrarMenuMobile);
   
}