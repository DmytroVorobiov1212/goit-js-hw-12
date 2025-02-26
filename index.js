import{a as h,i,S as b}from"./assets/vendor-Ck3-u664.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const v="45785559-b0577f06fb94f4ced9a4d3280",S="https://pixabay.com/api/";function m(s,r){try{return s=s.replace(/\s+/g,"+"),h.get(`${S}`,{params:{key:v,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:5}})}catch{i.error({title:"Error",message:"Sorry! The site is currently unavailable. Please try later!"})}}function f(s){return s.map(({webformatURL:r,largeImageURL:o,tags:n,likes:e,views:t,comments:l,downloads:g})=>`<li class="gallery-item">
      <a class="gallery-link" href="${o}">
        <img class="gallery-image" src="${r}" alt="${n}">
      </a>
      <div class="thumb-block">
        <div class="block">
          <h2 class="title">Likes</h2>
          <p class="amount">${e}</p>
        </div>
        <div class="block">
          <h2 class="title">Views</h2>
          <p class="amount">${t}</p>
        </div>
        <div class="block">
          <h2 class="title">Comments</h2>
          <p class="amount">${l}</p>
        </div>
        <div class="block">
          <h2 class="title">Downloads</h2>
          <p class="amount">${g}</p>
        </div>
      </div>
    </li>`).join("")}const c=document.querySelector(".js-form"),p=document.querySelector(".js-gallery"),a=document.querySelector(".loader"),L=document.querySelector(".load-more-btn");let d="",y,u=1,P;a.style.display="none";c.addEventListener("submit",q);async function q(s){if(s.preventDefault(),p.innerHTML="",a.style.display="block",d=s.target.elements.query.value.trim(),u=1,d==="")return i.info({title:"Hello",message:"Please enter search text!"}),a.style.display="none",c.reset();try{const r=await m(d,u);if(p.insertAdjacentHTML("beforeend",f(r.data.hits)),P=r.data.totalHits,!r.data.hits.length){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),a.style.display="none",c.reset();return}a.style.display="none",y=new b(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),y.refresh()}catch{a.style.display="none",i.error({title:"Error",message:"Something went wrong. Please try again later!"})}c.reset()}L.addEventListener("click",w);async function w(){u+=1;const s=await m(d,u);p.insertAdjacentHTML("beforeend",f(s.data.hits))}
//# sourceMappingURL=index.js.map
