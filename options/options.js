window.addEventListener("load",()=>{const n=document.querySelector("#version");handleStorage("get","currentVersion","",e=>{n.innerText=e?"Version: "+e:"Unknown Version"})});