const t=JSON.parse(localStorage.getItem("bookmarks"))||[],e=document.querySelector(".url__input"),o=document.querySelector(".bookmark__button"),n=document.querySelector(".bookmark__list");function r(){n.innerHTML="",t.forEach(((t,e)=>{n.innerHTML+=`<li class="bookmark__item">\n            <a href="${t}" target="_blank" class="bookmark__url">${t}</a>\n            <button data-index="${e}" class="delete__button">видалити</button>\n        </li>`})),document.querySelectorAll(".delete__button").forEach((e=>{e.addEventListener("click",(function(){const e=this.getAttribute("data-index");var o;o=e,t.splice(o,1),localStorage.setItem("bookmarks",JSON.stringify(t)),r()}))}))}o.addEventListener("click",(function(){const o=e.value;o&&(t.push(o),localStorage.setItem("bookmarks",JSON.stringify(t)),r(),e.value="")})),r();
//# sourceMappingURL=task4.947d166d.js.map
