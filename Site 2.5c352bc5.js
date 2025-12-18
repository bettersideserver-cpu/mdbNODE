!function(){let t="919915319369",e=document.getElementById("waFab"),n=document.getElementById("waLabel");e&&(e.addEventListener("click",function(){if(!t)return void alert("Please set PHONE_NUMBER in the script to the destination WhatsApp number (international format, no +).");let e=function(){let t=document.title||"",e=location.href;try{let t=document.getElementById("modalTitle");t&&t.textContent&&t.textContent.trim()&&"~"!==t.textContent.trim()&&t.textContent.trim()}catch(t){}return encodeURIComponent(`Hi, I am interested in this property:
${t}
${e}

Contact me.`)}(),n=`https://wa.me/${t}?text=${e}`;window.open(n,"_blank","noopener")}),e.addEventListener("mouseenter",()=>n.classList.add("show")),e.addEventListener("mouseleave",()=>n.classList.remove("show")),e.addEventListener("touchstart",()=>n.classList.add("show")),e.addEventListener("touchend",()=>setTimeout(()=>n.classList.remove("show"),800)))}();
//# sourceMappingURL=Site 2.5c352bc5.js.map
