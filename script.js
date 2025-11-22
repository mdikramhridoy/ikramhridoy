// Theme Toggle
const toggle = document.getElementById('theme-toggle');
const body = document.body;
if(localStorage.getItem('theme') === 'dark'){ body.classList.add('dark'); toggle.checked=true; }
toggle.addEventListener('change', () => {
  if(toggle.checked){ body.classList.add('dark'); localStorage.setItem('theme','dark'); }
  else{ body.classList.remove('dark'); localStorage.setItem('theme','light'); }
});

// Typing Effect for slogan
const phrases = ["Dreamer","Learner","Ambitious","Passionate","Dedicated"];
let i=0,j=0,current='',isDeleting=false;
const slogan = document.getElementById('slogan');
function type() {
  if(!isDeleting && j<phrases[i].length){ current+=phrases[i][j++]; }
  else if(isDeleting && j>0){ current=current.slice(0,-1); j--; }
  slogan.textContent = current;
  if(j===phrases[i].length){ isDeleting=true; setTimeout(type,1000); return; }
  if(isDeleting && j===0){ isDeleting=false; i=(i+1)%phrases.length; }
  setTimeout(type,150);
}
type();

// Messenger button spinner
const messengerBtn = document.getElementById('messenger-btn');
const loader = document.getElementById('loader');
messengerBtn.addEventListener('click', () => {
  loader.style.display = 'inline';
  window.open('https://m.me/md.ikram.hridoy.2024','_blank');
  setTimeout(() => { loader.style.display = 'none'; }, 2000);
});
