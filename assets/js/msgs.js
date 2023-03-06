function updateActionElements(){var t=allAnswers();for(let e=0;e<t.length;e+=1){const n=t[e];actionUpdates(n,e),n.addEventListener("DOMSubtreeModified",()=>{actionUpdates(n,e)})}}function actionUpdates(e,t){actionContainer(e,t),addCopyButtonToResult(e,t),updateCounterForResult(e,t)}function actionContainer(e,t){document.querySelector("#action-buttons-"+t)||(t=Object.assign(document.createElement("div"),{id:"action-buttons-"+t,className:"gpt-optimizer gpto-actions"}),e.insertAdjacentElement("afterend",t))}function addCopyButtonToResult(t,e){if(!document.querySelector("#result-copy-button-"+e)){var n=document.querySelector("#action-buttons-"+e),o=Object.assign(document.createElement("div"),{className:"gpt-optimizer gpto-action-buttons"}),a=()=>t.innerText.replace("Copy code","");const d=Object.assign(document.createElement("button"),{id:"result-copy-button-"+e,className:"gpt-optimizer gpto-button",textContent:"Copy",onclick:e=>{e.shiftKey?copyRichText(t):navigator.clipboard.writeText(a()),d.textContent="Copied!",setTimeout(()=>{d.textContent="Copy"},1500),toast("Text copied")}});o.appendChild(d);var i=Object.assign(document.createElement("p"),{className:"gpt-optimizer gpto-button",innerText:"Copy HTML",onclick:()=>{navigator.clipboard.writeText(t.innerHTML),i.textContent="Copied!",setTimeout(()=>{i.textContent="Copy HTML"},1500),toast("HTML copied")}}),s=(o.appendChild(i),!1),c=Object.assign(document.createElement("p"),{className:"gpt-optimizer gpto-button gpto-read-aloud",innerText:"Read Aloud",onclick:e=>{e.altKey||e.metaKey?popup(`
                        <div>
                            <select class="voiceSelection gpto-textarea"></select>
                            <select class="languageSelection gpto-textarea"></select>
                        </div>
                        <button class="submitVoice gpto-button">Start Reading</button>
                        <p>note: persistance voice settings and language filter will be added in march</p>
                    `,`
                    #toastHTML select {
                        background: black;
                    }
                    #toastHTML p {
                        font-size: .6rem;
                    }
                    `,e=>{const n=e.querySelector(".voiceSelection"),o=e.querySelector(".languageSelection");e.querySelector(".submitVoice").onclick=()=>{r(n.value),e.close()},n.innerHTML="",o.appendChild(Object.assign(document.createElement("option"),{textContent:"all",value:"all"})),window.speechSynthesis.onvoiceschanged=()=>{const e=window.speechSynthesis.getVoices();e.forEach((e,t)=>{n.appendChild(Object.assign(document.createElement("option"),{textContent:e.name,value:t})),o.appendChild(Object.assign(document.createElement("option"),{textContent:e.lang,value:e.lang}))}),o.onchange=()=>{n.innerHTML="",e.forEach((e,t)=>{"all"!==o.value&&e.lang!==o.value||n.appendChild(Object.assign(document.createElement("option"),{textContent:e.name,value:t}))})}},window.speechSynthesis.onvoiceschanged()},"Select A Voice"):r()}}),l=(window.onbeforeunload=function(){window.speechSynthesis.cancel()},Object.assign(document.createElement("p"),{className:"gpt-optimizer gpto-button",innerText:"⏹️ Stop",style:"display: none"}));function r(e){var t=window.speechSynthesis,n=new SpeechSynthesisUtterance(a()),o=t.getVoices();0<o.length&&(n.voice=o[e]),t.speaking&&!s?(t.pause(),s=!0,c.textContent="⏯️ Resume"):t.speaking&&s?(t.resume(),s=!1,c.textContent="⏸️ Pause"):(n.onstart=function(){s=!!0,toast("Generating..."),c.textContent="⏸️ Pause"},n.onpause=function(){s=!0,c.textContent="⏯️ Resume"},n.onresume=function(){s=!1,c.textContent="⏸️ Pause"},n.onend=function(){s=!1,toast("Ready!"),c.textContent="Read Aloud",l.style.display="none"},l.style.display="inline-block",l.onclick=function(){t.cancel(),c.textContent="Read Aloud",l.style.display="none"},t.speak(n))}o.appendChild(c),o.appendChild(l),n.appendChild(o)}}function updateCounterForResult(e,t){var n=document.querySelector("#action-buttons-counter-"+t),o=n?n.innerText:"",e=e.innerText,a=e.length,e=e.split(/[ /]/).length,a=Object.assign(document.createElement("div"),{textContent:`${a||0} chars | ${e||0} words`,className:"gpt-optimizer gpto-msg-details"});o!==a.textContent&&(n&&n.remove(),a.id="action-buttons-counter-"+t,document.querySelector("#action-buttons-"+t).appendChild(a))}function setMessageDelete(e=null){const t=e=>{if(!e.querySelector(".gpto-deleteMessage")){const t=e.querySelector("img").parentNode.parentNode.parentNode.parentNode;t.classList.add("gpto-messageActions");e=Object.assign(document.createElement("div"),{innerHTML:'<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>',className:"gpto-deleteMessage"});t.append(e),e.addEventListener("click",()=>{t.parentNode.parentNode.remove()})}};"onLatest"===e?startedWritingLatestUserMessage(e=>{t(e)}):getAllUserMessages().forEach(e=>{t(e)})}