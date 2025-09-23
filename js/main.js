(function(){
  const map={'index.html':'home','solutions.html':'solutions','projects.html':'projects','pricing.html':'pricing','contact.html':'contact'};
  const path = location.pathname.split('/').pop() || 'index.html';
  const current = map[path] || 'home';
  document.querySelectorAll('a[data-nav]').forEach(a=>{ if(a.dataset.nav===current){ a.classList.add('active'); } });
  const burger=document.querySelector('.hamburger'); const menu=document.querySelector('.menu'); if(burger&&menu){burger.addEventListener('click',()=>menu.classList.toggle('open'));}
  const y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();
})();