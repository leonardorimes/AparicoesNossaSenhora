function initTabNav(){
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabContent section');


  if(tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');

  function activeTab(index){
    tabContent.forEach((section, index) => {
      section.classList.remove('ativo');
      })
    tabContent[index].classList.add('ativo');
  }

  tabMenu.forEach((itemMenu, index)=>{
      itemMenu.addEventListener('click',()=>{
        activeTab(index);
      })
  })
  }
}

initTabNav();

function initAccordion() {
    const accordionList = document.querySelectorAll(".js-accordion dt");
    const activeClass = 'ativo'
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);
    function activeAccordion(){

    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
    }


    accordionList.forEach((item) => {
    item.addEventListener('click', activeAccordion);
})
  
}

initAccordion();

const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

function initScrollSuave(){
function scrollToSection(event){
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href');
  const section = document.querySelector(href);
  const topo = section.offsetTop// pega o valor do topo
 
  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
 
  /*window.scrollTo({
    top: topo,
    behavior: 'smooth',
  }); forma alternativa*/ 
}

linksInternos.forEach((link) =>{
  link.addEventListener('click', scrollToSection);
})

}

initScrollSuave();

function initAnimacaoScroll(){
const section = document.querySelectorAll('.js-scroll');

if(section.length){
  const windowMetade = window.innerHeight * 0.6;

  function animaScroll(){
    section.forEach((section) =>{
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - windowMetade) <0;
      if(isSectionVisible){
        section.classList.add('ativo');
      }else{
        section.classList.remove('ativo');
      }
    })
  }

  animaScroll()

  window.addEventListener('scroll', animaScroll)

}

}

initAnimacaoScroll();