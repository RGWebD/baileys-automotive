const rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
const nav=document.getElementById('nav'),bg=document.getElementById('heroBg');
addEventListener('scroll',()=>{nav.classList.toggle('solid',scrollY>40);if(!rm&&scrollY<innerHeight*1.2)bg.style.transform=`translateY(${scrollY*.35}px) scale(1.05)`},{passive:true});
const menu=document.getElementById('menu');document.getElementById('burger').onclick=()=>menu.classList.toggle('open');menu.querySelectorAll('a').forEach(a=>a.onclick=()=>menu.classList.remove('open'));
function count(el){const t=+el.dataset.count,d=+(el.dataset.dec||0);if(rm){el.textContent=t.toFixed(d);return}let s=null;const step=ts=>{s??=ts;const p=Math.min((ts-s)/1600,1),e=1-Math.pow(1-p,3);el.textContent=(t*e).toFixed(d);if(p<1)requestAnimationFrame(step)};requestAnimationFrame(step)}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');e.target.querySelectorAll('[data-count]').forEach(count);io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach((el,i)=>{el.style.transitionDelay=(i%4)*80+'ms';io.observe(el)});
document.querySelectorAll('.filters button').forEach(b=>b.onclick=()=>{document.querySelectorAll('.filters button').forEach(x=>x.classList.remove('on'));b.classList.add('on');const f=b.dataset.f;document.querySelectorAll('.gi').forEach(g=>g.classList.toggle('hide',f!=='all'&&g.dataset.cat!==f))});
const lb=document.getElementById('lb'),li=lb.querySelector('img');let cur=[],idx=0;
const show=()=>{li.src=cur[idx].src;li.alt=cur[idx].alt};
document.getElementById('grid').addEventListener('click',e=>{const f=e.target.closest('.gi');if(!f)return;cur=[...document.querySelectorAll('.gi:not(.hide) img')];idx=cur.indexOf(f.querySelector('img'));show();lb.hidden=false});
lb.querySelector('.x').onclick=()=>lb.hidden=true;lb.onclick=e=>{if(e.target===lb)lb.hidden=true};
lb.querySelector('.pv').onclick=()=>{idx=(idx-1+cur.length)%cur.length;show()};lb.querySelector('.nx').onclick=()=>{idx=(idx+1)%cur.length;show()};
addEventListener('keydown',e=>{if(lb.hidden)return;if(e.key==='Escape')lb.hidden=true;if(e.key==='ArrowLeft')lb.querySelector('.pv').click();if(e.key==='ArrowRight')lb.querySelector('.nx').click()});
const d=new Date().getDay();document.querySelector(`#hours tr[data-d="${d}"]`)?.classList.add('today');
