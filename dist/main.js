(()=>{"use strict";const t=document.querySelector(".content");let e=!1,n=document.createElement("button"),d=[];const o=()=>{let e=document.createElement("div");e.classList.add("divDisplayProjetos"),e.innerHTML="",d.forEach((n=>{let d=document.createElement("button");d.classList.add("botaoProjetos"),d.textContent=n.nome,d.addEventListener("click",(t=>{console.log("oi")}));let o=document.createElement("button");o.classList.add("botaoProjetos"),o.textContent="+",o.addEventListener("click",(e=>{t.appendChild((()=>{let t=document.createElement("div");t.classList.add("divTodo");let e=document.createElement("label");e.textContent="Titulo",e.setAttribute("for","tituloInput"),t.appendChild(e);let n=document.createElement("input");n.setAttribute("id","tituloInput"),t.appendChild(n);let d=document.createElement("label");d.textContent="Descricao",d.setAttribute("for","descricaoInput"),t.appendChild(d);let o=document.createElement("input");o.setAttribute("id","descricaoInput"),t.appendChild(o);let l=document.createElement("label");l.textContent="Data limite",l.setAttribute("for","dataInput"),t.appendChild(l);let a=document.createElement("input");o.setAttribute("id","dataInput"),t.appendChild(a);let i=document.createElement("label");i.textContent="Importancia",i.setAttribute("for","importanciaInput"),t.appendChild(i);let c=document.createElement("input");c.setAttribute("id","importanciaImput"),t.appendChild(c);let r=document.createElement("button");return r.classList.add("botaoProjetos"),r.textContent='Criar "To do"',t.appendChild(r),t})())})),e.appendChild(d),e.appendChild(o)})),t.appendChild(e)},l=t=>{let e=new class{constructor(t){this.nome=t}}(t);return d.push(e),console.log(d),e};(()=>{let d=document.createElement("div");d.classList.add("divScreen"),t.appendChild(d),n.classList.add("projetoButton"),n.textContent="Novo projeto",n.addEventListener("click",(t=>{n.disabled=!0,e=!1;let a=(()=>{let t=document.createElement("div");t.classList.add("divProjeto");let e=document.createElement("label");e.textContent="Nome do projeto";let d=document.createElement("input"),a=document.createElement("button");return a.textContent="Criar projeto!",t.appendChild(e),t.appendChild(d),t.appendChild(a),a.addEventListener("click",(e=>{l(d.value),t.hidden=!0,n.disabled=!1,o()})),t})();d.appendChild(a)})),d.appendChild(n)})(),console.log("oi")})();