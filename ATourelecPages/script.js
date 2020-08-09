const items = document.querySelectorAll('#timeline li');

const isInViewport = el => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const run = () =>
  items.forEach(item => {
    if (isInViewport(item)) {
      item.classList.add('show');
    }
  });

// Events
window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);
/*-------------------------------------------------------------------------------------------------------------------*/

/*Partie Menu Hamburguer Show And Close */

const menuBtn = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');
const innerItems=document.querySelectorAll('.inner-item');



/* AddEventListener For Menu*/
let showMenu= false;
menuBtn.addEventListener('click',toggleMenu);

function toggleMenu()
{
    if(!showMenu)
    {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));
        innerItems.forEach(inner => inner.classList.add('show'));

        showMenu = true;

    } else{

        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));
        innerItems.forEach(inner => inner.classList.remove('show'));


        showMenu = false;
    }
}

/*-------------------------------------------------------------------------------------------------*/
const firstBox=document.getElementById('first');
const firstSousList=document.querySelectorAll('.sous-list')[0];
const fristLine=document.querySelectorAll('.invisible-line')[0];
const firstInner=document.querySelectorAll('.inner-item')[0];

const secondBox=document.getElementById('second');
const secondSousList=document.querySelectorAll('.sous-list')[1];
const secondLine=document.querySelectorAll('.invisible-line')[1];
const secondInner=document.querySelectorAll('.inner-item')[1];

const thirdBox=document.getElementById('third');
const thirdSousList=document.querySelectorAll('.sous-list')[2];
const thirdLine=document.querySelectorAll('.invisible-line')[2];
const thirdInner=document.querySelectorAll('.inner-item')[2];

const fourthBox=document.getElementById('fourth');
const fourthSousList=document.querySelectorAll('.sous-list')[3];
const fourthLine=document.querySelectorAll('.invisible-line')[3];
const fourthInner=document.querySelectorAll('.inner-item')[3];

const fiveBox=document.getElementById('fiveth');
const fiveSousList=document.querySelectorAll('.sous-list')[4];
const fiveLine=document.querySelectorAll('.invisible-line')[4];
const fiveInner=document.querySelectorAll('.inner-item')[4];

const lastBox=document.getElementById('last');
const lastSousList=document.querySelectorAll('.sous-list')[5];
const lastLine=document.querySelectorAll('.invisible-line')[5];
const lastInner=document.querySelectorAll('.inner-item')[5];




firstBox.addEventListener('mouseenter',function(){
  fristLine.classList.add('visible-line');
  setTimeout(function(){firstInner.style.display='block';},0);
  setTimeout(function(){firstInner.style.opacity=1;},600);
  
});
firstSousList.addEventListener('mouseleave',function(){
  fristLine.classList.remove('visible-line');
  setTimeout(function(){firstInner.style.display='none';},600);
  setTimeout(function(){firstInner.style.opacity=0;},200);
});


secondBox.addEventListener('mouseenter',function(){
  secondLine.classList.add('visible-line');
  setTimeout(function(){secondInner.style.display='block';},0);
  setTimeout(function(){secondInner.style.opacity=1;},600);
});
secondSousList.addEventListener('mouseleave',function(){
  secondLine.classList.remove('visible-line');
  setTimeout(function(){secondInner.style.display='none';},600);
  setTimeout(function(){secondInner.style.opacity=0;},200);
});



thirdBox.addEventListener('mouseenter',function(){
  thirdLine.classList.add('visible-line');
  setTimeout(function(){thirdInner.style.display='block';},0);
  setTimeout(function(){thirdInner.style.opacity=1;},600);
});
thirdSousList.addEventListener('mouseleave',function(){
  thirdLine.classList.remove('visible-line');
  setTimeout(function(){thirdInner.style.display='none';},600);
  setTimeout(function(){thirdInner.style.opacity=0;},200);
});



fourthBox.addEventListener('mouseenter',function(){
  fourthLine.classList.add('visible-line');
  setTimeout(function(){fourthInner.style.display='block';},0);
  setTimeout(function(){fourthInner.style.opacity=1;},600);
});
fourthSousList.addEventListener('mouseleave',function(){
  fourthLine.classList.remove('visible-line');
  setTimeout(function(){fourthInner.style.display='none';},600);
  setTimeout(function(){fourthInner.style.opacity=0;},200);
});


fiveBox.addEventListener('mouseenter',function(){
  fiveLine.classList.add('visible-line');
  setTimeout(function(){fiveInner.style.display='block';},0);
  setTimeout(function(){fiveInner.style.opacity=1;},600);
});
fiveSousList.addEventListener('mouseleave',function(){
  fiveLine.classList.remove('visible-line');
  setTimeout(function(){fiveInner.style.display='none';},600);
  setTimeout(function(){fiveInner.style.opacity=0;},200);
});



lastBox.addEventListener('mouseenter',function(){
  lastLine.classList.add('visible-line');
  setTimeout(function(){lastInner.style.display='block';},0);
  setTimeout(function(){lastInner.style.opacity=1;},600);
});
lastSousList.addEventListener('mouseleave',function(){
  lastLine.classList.remove('visible-line');
  setTimeout(function(){lastInner.style.display='none';},400);
  setTimeout(function(){lastInner.style.opacity=0;},200);
});
















