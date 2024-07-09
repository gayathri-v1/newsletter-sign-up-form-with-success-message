    const form = document.getElementById('emailForm');
    const emailInput = document.getElementById('email');
    const sbutton = document.getElementById('subsbutton');
    const cont1= document.getElementById('cont');
    const cont2= document.getElementById('success');
    const dbutton= document.getElementById('dismissbtn');
    const confmail= document.getElementById('confirm');
    const error =document.querySelector(".error");

    const x = window.matchMedia("(min-width: 376px)");

    sbutton.addEventListener('click', function(event) {
        event.preventDefault();
        const email = emailInput.value.trim();
  
        if (isValidEmail(email)) {
          
            cont1.style.display = "none";
            cont2.style.display = "block";
            confmail.textContent=email;
      
        } else {
          error.style.display="block";
          emailInput.style.border = '1px solid hsl(4, 100%, 67%)';
          emailInput.style.color = 'hsl(4, 100%, 67%)';
          emailInput.style.backgroundColor = 'hsl(4, 100%, 88%)';

        }
      });

      dbutton.addEventListener('click', back); 
      function back(){
        if (x.matches) { 
        cont1.style.display = "flex";
        }
        else {
            cont1.style.display = "block";
        }
        cont2.style.display = "none";
        emailInput.value = '';
    }

function isValidEmail(email) {
    // Simple email validation using regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }