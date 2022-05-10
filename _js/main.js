/*Codigo para diminuir a frequencia do evento*/
const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
/*Fim* */

const target = document.querySelectorAll("[data-anime]");
const animationClass = 'animate';

function animeScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4); /*pegando a distancia do top com pageyoffset*/
    target.forEach(function(element){
        if((windowTop) > element.offsetTop){
            element.classList.add(animationClass);
        }else{
            element.classList.remove(animationClass);
        }
       
    })
}
animeScroll();/*ativando a função sempre que entrar no site*/ 

if(target.length){/*só executara a função onde tiver o target*/
    window.addEventListener('scroll', debounce( function(){
        animeScroll();
        console.log('asda')
    }, 200));
}