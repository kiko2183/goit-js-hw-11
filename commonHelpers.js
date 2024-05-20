import{i,S as d}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const p="43954611-e80f17bdd29da3f9a3f1b55c2",m="https://pixabay.com/api/";async function g(t,o=1){const s=`${m}?key=${p}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true&page=${o}&per_page=12`,n=await fetch(s);if(!n.ok)throw new Error(`HTTP error! status: ${n.status}`);return await n.json()}function y(t){return t.map(({webformatURL:o,largeImageURL:s,tags:n,likes:e,views:r,comments:a,downloads:f})=>`
            <div class="gallery-item">
                <a href="${s}">
                    <img src="${o}" alt="${n}" />
                </a>
                <div class="gallery-item-info">
                    <p>Likes: ${e}</p>
                    <p>Views: ${r}</p>
                    <p>Comments: ${a}</p>
                    <p>Downloads: ${f}</p>
                </div>
            </div>
        `).join("")}const h=document.querySelector("#search-form"),l=document.querySelector(".gallery");let c="",u=1;h.addEventListener("submit",$);async function $(t){if(t.preventDefault(),c=t.currentTarget.elements.query.value.trim(),c===""){i.warning({title:"Warning",message:"Search query cannot be empty"});return}u=1,l.innerHTML="",await w()}async function w(){try{const t=await g(c,u);if(t.hits.length===0){i.error({title:"Error",message:"No images found. Try again!"});return}const o=y(t.hits);l.insertAdjacentHTML("beforeend",o),new d(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}catch(t){i.error({title:"Error",message:t.message})}}
//# sourceMappingURL=commonHelpers.js.map
