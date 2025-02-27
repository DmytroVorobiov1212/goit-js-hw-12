import{a as B,i as u,S as P}from"./assets/vendor-Ck3-u664.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();const q="45785559-b0577f06fb94f4ced9a4d3280",E="https://pixabay.com/api/";async function y(e,s,i){try{return e=e.replace(/\s+/g,"+"),(await B.get(`${E}`,{params:{key:q,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:i}})).data}catch(r){throw u.error({title:"Error",message:"Sorry! The site is currently unavailable. Please try later!"}),r}}function g(e){return e.map(({webformatURL:s,largeImageURL:i,tags:r,likes:t,views:o,comments:a,downloads:S})=>`<li class="gallery-item">
      <a class="gallery-link" href="${i}">
        <img class="gallery-image" src="${s}" alt="${r}">
      </a>
      <div class="thumb-block">
        <div class="block">
          <h2 class="title">Likes</h2>
          <p class="amount">${t}</p>
        </div>
        <div class="block">
          <h2 class="title">Views</h2>
          <p class="amount">${o}</p>
        </div>
        <div class="block">
          <h2 class="title">Comments</h2>
          <p class="amount">${a}</p>
        </div>
        <div class="block">
          <h2 class="title">Downloads</h2>
          <p class="amount">${S}</p>
        </div>
      </div>
    </li>`).join("")}const c=document.querySelector(".js-form"),h=document.querySelector(".js-gallery"),n=document.querySelector(".loader"),m=document.querySelector(".load-more-btn"),L=document.querySelector(".load-more-btn_text"),v=document.querySelector(".loader-btn");let d="",f;const p=40;let l,b;n.style.display="none";c.addEventListener("submit",M);async function M(e){if(e.preventDefault(),h.innerHTML="",n.style.display="block",d=e.target.elements.query.value.trim(),l=1,d==="")return u.warning({title:"Hello",message:"Please enter search text!"}),n.style.display="none",c.reset();try{const s=await y(d,l,p);if(h.insertAdjacentHTML("beforeend",g(s.hits)),b=s.totalHits,!s.hits.length){u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),n.style.display="none",c.reset();return}n.style.display="none",f=new P(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),f.refresh(),w()}catch{n.style.display="none"}c.reset()}m.addEventListener("click",k);async function k(){l+=1,w(),H();const e=await y(d,l,p);h.insertAdjacentHTML("beforeend",g(e.hits)),O(),T()}function $(){m.classList.remove("hidden")}function C(){m.classList.add("hidden")}function w(){const e=Math.ceil(b/p);l>=e?(C(),u.info({title:"Hello",message:"You have viewed all the images.",position:"topRight"})):$()}function H(){v.classList.remove("hidden"),L.classList.add("hidden")}function O(){v.classList.add("hidden"),L.classList.remove("hidden")}function x(){document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".up-btn");e.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"}),document.body.classList.add("scrolling")}),window.addEventListener("scroll",function(){window.scrollY>200?e.classList.add("show"):e.classList.remove("show"),document.body.classList.contains("scrolling")&&window.scrollY===0&&document.body.classList.remove("scrolling")})})}x();function T(){const s=h.firstElementChild.getBoundingClientRect().height*2;scrollBy({behavior:"smooth",top:s})}
//# sourceMappingURL=index.js.map
