(()=>{let e;"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/sw.js").then((function(e){console.log("ServiceWorker registration successful with scope: ",e.scope)}),(function(e){console.log("ServiceWorker registration failed: ",e)}));const o=document.getElementById("instal");console.log(o),null!=o&&(o.style.display="none",window.addEventListener("beforeinstallprompt",(t=>{console.log("beforeinstallprompt"),t.preventDefault(),e=t,o.style.display="block",confirm("Instal Aplikasi?")&&(e.prompt(),e.userChoice.then((o=>{"accepted"===o.outcome?console.log("User accepted the A2HS prompt"):console.log("User dismissed the A2HS prompt"),e=null}))),o.addEventListener("click",(t=>{t.preventDefault(),console.log("click instal"),o.style.display="none",e.prompt(),e.userChoice.then((o=>{"accepted"===o.outcome?console.log("User accepted the A2HS prompt"):console.log("User dismissed the A2HS prompt"),e=null}))}))})))}))})();