/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});

/*SCROLL WORK*/
sr.reveal('.work__img',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200});

// const form = document.querySelector('.contact__form');

// //function to send the message when click on button send
// function sendMsg(e) {
//     e.preventDefault();
//      const name = document.querySelector('.contact__input'),
//            email = document.querySelector('.contact__input'),
//            msg = document.querySelector('.contact__input'),

// //function Send Email...
// function send(event) {
//     event.preventDefault();
//     Email.send({
//     name:document.getElementById('name').value,
//     SecureToken : "3707dcb3-a954-416b-879a-9bd0be523b91",
//     Host: "smtp.gmail.com",
//     UserName: "anarbekovaaijamal95@gmail.com",
//     Password: "18658867451aaa",
//     To : 'anarbekovaaijamal95@gmail.com',
//     From : document.getElementById('email').value,
//     Subject : document.getElementById('subject').value,
//     Body : document.getElementById('message').value
// }).then(function(responce) {
//     if (responce == 'OK') {
//         alert("Your message has been sent succeessfully");
//     } else {
//         alert(response.statusText);
//         throw new Error("Error:" + responce);
//     }
// });
// }

// }

// //add the event Listener submit
// form.addEventListener('submit', sendMsg);

//2й вариант
// document.querySelector("submit").onclick = function(){
//     alert("Thank you!");
// }
// function alerted(){
//     alert("Thank you!");
//   }

document.addEventListener('DOMContentLoaded', function () {
   const form = document.getElementById('form');
   form.addEventListener('submit', formSend);

   async function formSend(e) {
       e.preventDefault();

       let error = formValidate(form);

       let formData = new FormData(form);

       if (error === 0) {
           form.classList.add('_sending');
           let response = await fetch ('sendmail.php', {
               method: 'POST',
               body: formData
           });
           if (response.ok) {
              let result = await response.json();
              alert(result.message);
              formPreview.innerHTML = '',
              form.reset();
              form.classList.remove('_sending');
           } else {
             alert("Error");
             form.classList.remove('_sending');
           }

       } else {
           alert('Please fill in all fields');

       }
       
}

   
function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('._req');

    for (let index = 0; index < formReq.length; index++) {
        const input = formReq[index];
        formRemoveError(input);

        if(input.classList.contains('_email')) {
           if(emailTest(input)) {
               formAddError(input);
               error++;
           }
        }

        if(input.classList.contains('_name')) {
            if(nameTest(input)) {
                formAddError(input);
                error++;
            }
         }

    }
    return error;

}
function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
}
function formRemoveError(input) {
    input.parentElement.classList.remove('.error');
    input.classList.remove('.error');
}
//function test email
function emailTest(input) {
    return !/^w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}

function nameTest(input) {
    return !/^w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}

});
function nameTest(input) {
    return
}
