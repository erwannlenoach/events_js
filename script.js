// Fonctionnalité 1 //

let clickerFooter= document.getElementsByTagName("footer");

let count = 0

clickerFooter[0].addEventListener("click", function(){console.log(`clique numéro ${count += 1}`)});

// Fonctionnalité 2 //

let navbarClicker = document.getElementById("navbarHeader");

let navbarToggler = document.getElementsByClassName("navbar-toggler");

navbarToggler[0].addEventListener("click", () => {
    navbarClicker.classList.toggle('collapse');
  });

// Fonctionnalité 3 //

let clickerButton= document.getElementsByClassName("btn btn-sm btn-outline-secondary");

let Card = document.getElementsByClassName("card-text");

clickerButton[0].addEventListener("click", () => {
  Card[0].style.color = "red";
  });

// Fonctionnalité 4 //

let cardStatus = false;

clickerButton[1].addEventListener("click", () => {
  if(cardStatus == false) {
      Card[1].style.color = "green";
      cardStatus = true;
    }
  else if (cardStatus == true) {
    Card[1].style.color = "black";
    cardStatus = false;
    }
});

// Fonctionnalité 5 //

let navbarNuke= document.getElementsByClassName("navbar-dark");

let stylesheetClicker = document.getElementsByTagName('link');

let nukeStatus = false;

navbarNuke[0].addEventListener("dblclick", () => {
    if(nukeStatus == false) {
        stylesheetClicker[0].disabled = true;
        nukeStatus = true;
      }
    else if (nukeStatus == true) {
        stylesheetClicker[0].disabled = false;
        nukeStatus = false;
      }
  });
  
// Fonctionnalité 6 //

let buttonView= document.getElementsByClassName("btn btn-sm btn-success");

let text = document.getElementsByClassName("card-text")

console.log(text[0])

let viewStatus = false;

buttonView[0].addEventListener("mouseover", () => {
   if(viewStatus == false) {
        text[0].innerHTML = " "
        Card[0].style.width = "20%";
        viewStatus = true;
      }
    else if (viewStatus == true) {
        Card[0].style.width = "100%";
        viewStatus = false;
      }
    
  }
  );


  
