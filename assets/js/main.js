/*=============== MOSTRAR MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MOSTRAR MENU =====*/
/* Validar se existe constante */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}


/*=============== PERGUNTAS FREQUENTES ===============*/ 
let accordions = document.querySelectorAll('.accordion-container .accordion');

accordions.forEach(acco =>{
    acco.onclick = () =>{
        accordions.forEach(subAcco => { subAcco.classList.remove('active') });
        acco.classList.add('active');
    }
})



/*===== MENU OCULTO =====*/
/* Validar se existe constante */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVER MENU MÓVEL ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // Quando clicamos em cada link de navegação, removemos a classe show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SOMBRA NO CABEÇALHO ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    // Quando a rolagem for maior que 50 altura da janela de visualização, adicione a classe shadow-header à tag de cabeçalho
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)


/*=============== API EMAIL JS ===============*/

const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_b3b7qhe', 'template_stuif8v', '#contact-form', 'cLetlswmMCpudhMWX')
    .then(() =>{ 
        // Monstrar mensagem após enviar
        contactMessage.textContent = 'mensagem enviada com sucesso ✅'

        // remover mensagem depois de 5 segundos
      setTimeout(() =>{ 
            contactMessage.textContet = ' '  
        }, 5000)

        // Limpar campo de input
        contactForm.reset()

    }, () => {   
     // Mostrar mensagem de erro
     contactMessage.textContent = 'Mensagem não enviada (erro de serviço) ❌'
    })
}

contactForm.addEventListener('submit', sendEmail)


/*=============== MOSTRAR SCROLL PARA CIMA ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // Quando a rolagem for superior a 350 altura da janela de visualização, adicione a classe show-scroll à tag a com a classe scroll up
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== LINK ATIVO DAS SEÇÕES DE ROLAGEM ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link') 
		}                                                    
	})
}


const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 900,
    delay: 400,
    reset: true // Repetir animações
})

sr.reveal(`.home__perfil`, {duration: 800, origin: `right`})
sr.reveal(`.home__name, home__info`, {origin: `left`})
sr.reveal('.home__description, .description-3', {duration: 650, origin: `left`})
sr.reveal('.description-3', {duration: 1050, origin: `left`})
sr.reveal('.home__scroll', {duration: 1100, origin: `left`})
sr.reveal('.contact__social-links-2', {duration: 1400, origin: `left`})
sr.reveal('.footer__container', {duration: 1900, origin: `bottom`})

sr.reveal('.video', {duration: 600, origin: `bottom`})

sr.reveal('.section__title-2', {duration: 600, origin: `bottom`})
sr.reveal('.section-contact-3', {duration: 900, origin: `bottom`})

sr.reveal('.contact__social-data', {duration: 1200, origin: `bottom`})
