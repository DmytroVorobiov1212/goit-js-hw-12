import{a as v,i as c,S as L}from"./assets/vendor-Ck3-u664.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const S="45785559-b0577f06fb94f4ced9a4d3280",P="https://pixabay.com/api/";function h(t,s){try{return t=t.replace(/\s+/g,"+"),v.get(`${P}`,{params:{key:S,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:5}})}catch{c.error({title:"Error",message:"Sorry! The site is currently unavailable. Please try later!"})}}function g(t){return t.map(({webformatURL:s,largeImageURL:o,tags:i,likes:e,views:r,comments:n,downloads:b})=>`<li class="gallery-item">
      <a class="gallery-link" href="${o}">
        <img class="gallery-image" src="${s}" alt="${i}">
      </a>
      <div class="thumb-block">
        <div class="block">
          <h2 class="title">Likes</h2>
          <p class="amount">${e}</p>
        </div>
        <div class="block">
          <h2 class="title">Views</h2>
          <p class="amount">${r}</p>
        </div>
        <div class="block">
          <h2 class="title">Comments</h2>
          <p class="amount">${n}</p>
        </div>
        <div class="block">
          <h2 class="title">Downloads</h2>
          <p class="amount">${b}</p>
        </div>
      </div>
    </li>`).join("")}const d=document.querySelector(".js-form"),p=document.querySelector(".js-gallery"),a=document.querySelector(".loader"),f=document.querySelector(".load-more-btn");let u="",m,w,l=1,y;a.style.display="none";d.addEventListener("submit",M);async function M(t){if(t.preventDefault(),p.innerHTML="",a.style.display="block",u=t.target.elements.query.value.trim(),l=1,u==="")return c.info({title:"Hello",message:"Please enter search text!"}),a.style.display="none",d.reset();try{const s=await h(u,l);if(p.insertAdjacentHTML("beforeend",g(s.data.hits)),y=s.data.totalHits,console.log(y),!s.data.hits.length){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),a.style.display="none",d.reset();return}a.style.display="none",m=new L(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),m.refresh(),k()}catch{a.style.display="none",c.error({title:"Error",message:"Something went wrong. Please try again later!"})}d.reset()}f.addEventListener("click",q);async function q(){l+=1;const t=await h(u,l);p.insertAdjacentHTML("beforeend",g(t.data.hits))}function E(){f.classList.remove("hidden")}function $(){f.classList.add("hidden")}function k(){const t=Math.ceil(y/w);l>=t?$():E()}
//# sourceMappingURL=index.js.map
