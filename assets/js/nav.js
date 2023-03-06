function addNavBarToggle(){document.querySelector("#navToggler")||waitForElement(selNavToggleParent,e=>{var t=Object.assign(document.createElement("div"),{id:"navToggler",onclick:()=>{document.body.classList.toggle("collapse"),handleStorage("get","navState","",e=>{handleStorage("set","navState",!e)})}});document.querySelector("#navToggler")&&document.querySelector("#navToggler").remove(),t.innerHTML='<div class="arrow"></div>',e.appendChild(t)})}function initNavBarToggleState(){handleStorage("get","navState","",e=>{e||void 0===e||document.body.classList.toggle("collapse")})}function setChatDeletion(){waitForElement("nav > div > div > a > div > button:nth-child(2)",e=>{e.onclick=e=>{(e.metaKey||e.ctrlKey||e.shiftKey)&&waitForElement("nav > div > div > a > div > button:nth-child(1)",e=>{e.click(),toast("Deleting Chat...")})}})}function updatePageActionElements(){addChangeThemeButton(),waitForElement("nav > a",()=>{document.querySelectorAll("nav > a:not(:nth-child(1))").forEach(e=>{var t=e.innerHTML.toLowerCase();t.includes("clear conversations")?e.classList.add("gpto-clear-conversations"):t.includes("pricing plans")||t.includes("upgrade to plus")?(e.classList.add("gpto-pricing-plans"),e.innerHTML=e.querySelector("svg").outerHTML+"Pricing Plans"):t.includes("faq")?e.classList.add("gpto-faq"):t.includes("log out")?e.classList.add("gpto-log-out"):t.includes("my account")?e.classList.add("gpto-my-account"):(t.includes("improve chatgpt"),e.style.display="none")})})}async function addChangeThemeButton(){addActionButton("gpto-change-theme",'<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>Change Theme',()=>{popup(`
            <div class="flex">
                <button class="gpt-optimizer gpto-button" callback="1">Light</button>
                <button class="gpt-optimizer gpto-button" callback="2">Dark</button>
                <button class="gpt-optimizer gpto-button" callback="3">Messenger</button>
                <button class="gpt-optimizer gpto-button" callback="4">Matrix</button>
            </div>
            <p>1 Theme Every Week    |    Any issues with current theme? <button callback="5"><u>Contact Here</u></button></p>
        `,`
            #toastHTML .flex {
                display: flex;
                gap: .8rem;
            }
            #toastHTML p {
                font-size: .6rem;
            }
        `,e=>{e.querySelector('[callback="1"]').onclick=()=>{setTheme("light")},e.querySelector('[callback="2"]').onclick=()=>{setTheme("dark")},e.querySelector('[callback="3"]').onclick=()=>{setTheme("https://productivity.rocks/tool/ai-optimizer/themes/apple-messaging/")},e.querySelector('[callback="4"]').onclick=()=>{setTheme("https://productivity.rocks/tool/ai-optimizer/themes/matrix/")},e.querySelector('[callback="5"]').onclick=()=>{handleStorage("get","theme","",e=>{window.open("https://jorit.vasconezgerlach.de/contact?from=chatGptOptimizer&what=themeReport&theme="+e,"_blank")})}},"Choose Your Theme")})}function addConversationScreenshotButton(){document.querySelector(".gpto-take-screenshot")||waitForElement("nav",e=>{var t=Object.assign(document.createElement("a"),{classList:"gpt-optimizer gpto-take-screenshot flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm"});t.onclick=()=>{alert('✨ This is a New Feature from the "ChatGPT Optimizer" extension.\n\n📧 Mail Issues/Ideas to: ai.optimizer@productivity.rocks, we\'ll answer you asap.\n\n🤩 Thank you for using ChatGPT Optimizer! Expect great features every week!'),screenshotChat()},t.innerHTML=`
                <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-4 w-4"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 10 10"
                >
                    <path d="m9.5,6.5v2c0,.55-.45,1-1,1H1.5c-.55,0-1-.45-1-1v-2" style="fill:none; stroke:#fff; stroke-linecap:round; stroke-linejoin:round;"/>
                    <polyline points="2.5 4 5 6.5 7.5 4" style="fill:none; stroke:#fff; stroke-linecap:round; stroke-linejoin:round;"/>
                    <line x1="5" y1="6.5" x2="5" y2=".5" style="fill:none; stroke:#fff; stroke-linecap:round; stroke-linejoin:round;"/>
                </svg>
                Conversation Screenshot
            `,e.insertBefore(t,e.children[2])})}function addJSONDownloadButton(){if(!document.querySelector(".gpto-download-json")){const s=[];waitForElement("nav",e=>{var t=Object.assign(document.createElement("a"),{classList:"gpt-optimizer gpto-download-json flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm"});t.onclick=()=>{alert('✨ This is a New Feature from the "ChatGPT Optimizer" extension.\n\n📧 Mail Issues/Ideas to: ai.optimizer@productivity.rocks, we\'ll answer you asap.\n\n🤩 Thank you for using ChatGPT Optimizer! Expect great features every week!'),toast("Generating..."),messages=document.querySelectorAll("main > div > div > div > div > div:not(:last-of-type)");for(let e=0;e<messages.length;e++){var t=messages[e],n=document.createElement("div"),o=(n.innerHTML=t.innerHTML,n.querySelector(".gpto-actions")?.remove(),n.querySelectorAll("pre"));for(let e=0;e<o.length;e++){var i=o[e],r=i.querySelector("div:nth-child(1) span:nth-child(1)").innerText,l=i.querySelector("code").innerText;i.replaceWith(Object.assign(document.createElement("div"),{innerText:`
                                    \`\`\`${r}
                                    ${l}
                                    \`\`\`
                                    `}))}s.push(n.innerText)}var e=JSON.stringify(s),e=new Blob([e],{type:"application/json"}),e=URL.createObjectURL(e),a=document.createElement("a");a.setAttribute("href",e),a.setAttribute("download",`ChatGPT JSON [${getDate("YYYY-MM-DD")}].json`),document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(e)},t.innerHTML=`
                <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-4 w-4"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 10 10"
                >
                    <path d="m9.5,6.5v2c0,.55-.45,1-1,1H1.5c-.55,0-1-.45-1-1v-2" style="fill:none; stroke:#fff; stroke-linecap:round; stroke-linejoin:round;"/>
                    <polyline points="2.5 4 5 6.5 7.5 4" style="fill:none; stroke:#fff; stroke-linecap:round; stroke-linejoin:round;"/>
                    <line x1="5" y1="6.5" x2="5" y2=".5" style="fill:none; stroke:#fff; stroke-linecap:round; stroke-linejoin:round;"/>
                </svg>
                Download JSON
            `,e.insertBefore(t,e.children[2])})}}function addActionButton(n,o,i){document.querySelector("."+n)||waitForElement("nav",e=>{var t=Object.assign(document.createElement("a"),{classList:`gpt-optimizer ${n} flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm`});t.onclick=()=>{i()},t.innerHTML=o,e.insertBefore(t,e.children[2])})}