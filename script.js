// Fonctionnalité 1 //

let clickerFooter= document.getElementsByTagName("footer");

let count = 0

clickerFooter[0].addEventListener("click", function(){console.log(`clique`)});

clickerFooter[0].addEventListener("click", function(){console.log(`clique numéro ${count += 1}`)});

// Fonctionnalité 2 //

let navbarClicker = document.getElementById("navbarHeader");

let navbarToggler = document.getElementsByClassName("navbar-toggler");

console.log(navbarClicker);

console.log(navbarToggler);

console.log(navbarClicker.className);

console.log(navbarClicker.classList.contains('collapse')); 

navbarToggler[0].addEventListener("click", () => {
    navbarClicker.classList.toggle('collapse');
  });


// Fonctionnalité 3 //

let clickerButton= document.getElementsByClassName("btn btn-sm btn-outline-secondary");
console.log(clickerButton)

let firstCard= document.getElementsByClassName("card-text");
console.log(firstCard)

clickerButton[0].addEventListener("click", () => {
  firstCard[0].style.color = "red";
  });

// Fonctionnalité 4 //

let secondCard= document.getElementsByClassName("card-text");
console.log(secondCard)

let cardStatus = false;

clickerButton[1].addEventListener("click", () => {
  if(cardStatus == false) {
      secondCard[1].style.color = "green";
      cardStatus = true;
    }
  else if (cardStatus == true) {
    secondCard[1].style.color = "black";
    cardStatus = false;
    }
});

// Fonctionnalité 5 //

let navbarNuke= document.getElementsByClassName("navbar-dark");
console.log(navbarNuke[0])

let stylesheetClicker = document.getElementsByTagName('link');

console.log(stylesheetClicker[0]);

let NukeStatus = false;


navbarNuke[0].addEventListener("dblclick", () => {
    if(NukeStatus == false) {
        stylesheetClicker[0].disabled = true;
        NukeStatus = true;
      }
    else if (NukeStatus == true) {
        stylesheetClicker[0].disabled = false;
        NukeStatus = false;
      }
  });
  

// Fonctionnalité 6 //

