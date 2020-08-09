const filt = document.getElementById('filtreByYear');
const filtByMarket = document.getElementById('filtreByMarket');
const allProjects = document.querySelectorAll('.project');

filt.addEventListener('click',function(){
   const result=document.getElementById('mySelectYear').value;
   console.log('value is '+ result);
   allProjects.forEach(proj => proj.style.display='none');
  document.querySelectorAll('.p-'+ result).forEach(p => p.style.display='block');

})

filtByMarket.addEventListener('click',function(){
  const result = document.getElementById('mySelectMarket').value;
  console.log('Value is '+result);
  allProjects.forEach(proj => proj.style.display='none');
  document.querySelectorAll('.m-'+ result).forEach(p => p.style.display='block');

})