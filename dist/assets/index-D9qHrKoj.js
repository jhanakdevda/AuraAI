(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=e(a);fetch(a.href,o)}})();const v={nova:{id:"nova",name:"Nova",role:"AI Assistant",avatar:"N",avatarColor:"#8b5cf6",status:"Online",description:"Helpful, balanced, and general purpose AI assistant.",suggestions:["Help me compose a polite email","Write a daily schedule for me","Tell me a science joke","What can you do?"],getResponse:(n,t)=>{const e=n.toLowerCase();return t?`I have analyzed the attached file **${t.name}** (${(t.size/1024).toFixed(1)} KB).

Based on my general knowledge base: 
- File format: \`${t.name.split(".").pop()}\`
- Insights: This file contains structured data. Let me know if you want me to search it, format it, or write a summary of its contents!`:e.includes("hello")||e.includes("hi")||e.includes("hey")?"Hello! I'm Nova, your digital companion. How can I make your day more productive or interesting today?":e.includes("help")?"I can assist with writing, scheduling, calculations, brainstorming, or explaining complex topics. Try asking: *'Help me draft a plan...'*":e.includes("joke")?`Why don't scientists trust atoms? 

*Because they make up everything!* ⚛️`:e.includes("schedule")||e.includes("plan")?`Here is a standard balanced daily routine framework to optimize focus:

- **07:00 AM** – Morning routine & Hydration
- **08:30 AM** – Deep work block (90 mins - tackle hardest task)
- **10:00 AM** – Light break / stretch
- **10:30 AM** – Collaborative work & admin
- **12:30 PM** – Lunch & light walk
- **02:00 PM** – Secondary focus block
- **04:30 PM** – Review & planning for tomorrow

Would you like me to customize this for your specific goals?`:`That's an interesting question. I've logged your query and simulated a core cognitive loop. Here's what I think:

1. It's best to break this problem down into smaller, bite-sized components.
2. We should identify the key constraints.
3. We can then prototype solutions incrementally.

Let me know how we can detail this further!`}},byte:{id:"byte",name:"Byte",role:"Coding Mentor",avatar:"B",avatarColor:"#10b981",status:"Online",description:"Technical mentor. Responds with code blocks and clean syntax.",suggestions:["Explain recursion in JS","Write a Python regex pattern","How do I fetch data in React?","Mock an Express.js server"],getResponse:(n,t)=>{const e=n.toLowerCase();return t?t.type.startsWith("image/")?`Code analysis engine active. Image attachment **${t.name}** detected.

This looks like a screenshot or UI schematic. Let's write the HTML/CSS blueprint for a container resembling this structure:

\`\`\`css
.card-container {
  display: flex;
  border-radius: 12px;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}
\`\`\`
Let me know if you need code structure details!`:`Code Analyzer active. File **${t.name}** parsed successfully. Here is the code structure breakdown:

- File extension detected: \`.${t.name.split(".").pop()}\`
- File length: ~${t.content?t.content.split(`
`).length:0} lines of source code.

Let's write a refactored mockup based on common structural pattern:

\`\`\`javascript
// Refactored helper module
export const processInput = (data) => {
  if (!data) throw new Error("No data supplied");
  return Object.freeze({
    id: crypto.randomUUID(),
    processedAt: new Date().toISOString(),
    payload: data
  });
};
\`\`\`
What specific function within this file should we modify or optimize?`:e.includes("hello")||e.includes("hi")||e.includes("hey")?"Console loaded. 🖥️ Hello, programmer! I'm Byte. What compiler errors, logic bugs, or system architectures are we debugging today?":e.includes("recursion")?`Recursion is a programming pattern where a function calls itself to solve smaller instances of the same problem. Every recursive function must have two parts:

1. **Base Case**: The exit condition to stop recursion.
2. **Recursive Case**: The call to itself with updated parameters.

Here is a simple example in JavaScript calculating a factorial:

\`\`\`javascript
function factorial(n) {
  // 1. Base case
  if (n <= 1) return 1;
  
  // 2. Recursive case
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120
\`\`\`
Notice how each call stacks up until the base case returns \`1\`, then unwinds!`:e.includes("regex")?`Regex (Regular Expressions) are patterns used to match character combinations in strings. Here's a clean email validation pattern in Python:

\`\`\`python
import re

def validate_email(email):
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
    return bool(re.match(pattern, email))

# Test cases
print(validate_email("test@aura.com"))  # True
print(validate_email("bad-email@com"))   # False
\`\`\`
Let me know if you want me to write a custom pattern for you!`:e.includes("react")||e.includes("fetch")?`To fetch data in modern React, you can use the \`useEffect\` hook combined with \`fetch\` or \`axios\`, or use async hooks. Here is a clean functional component using hooks:

\`\`\`javascript
import React, { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []); // Empty dependency array run only once on mount

  if (loading) return <div>Loading...</div>;

  return (
    <ul>
      {users.map(u => <li key={u.id}>{u.name}</li>)}
    </ul>
  );
}
\`\`\`
For larger applications, consider caching wrappers like TanStack Query.`:`Feature request received. Here is the implementation boilerplate matching your query:

\`\`\`javascript
// Heuristic prototype
const simulateService = async (request) => {
  console.log(\`Analyzing: \${request}\`);
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ status: 200, message: "Process completed successfully" });
    }, 1500);
  });
};
\`\`\`
Provide further specifications, and I'll code the full logic!`}},chef:{id:"chef",name:"Chef Pierre",role:"Culinary Expert",avatar:"P",avatarColor:"#f97316",status:"Online",description:"Enthusiastic French chef. Converses with cooking themes and emoji-rich text.",suggestions:["Quick 15-minute pasta","Substitutes for buttermilk","Pair a wine with salmon","How to chop onions like a pro"],getResponse:(n,t)=>{const e=n.toLowerCase();return t?`Bonjour! 🥐 Pierre sees your attached file **${t.name}**! Let's pretend this is a list of secret ingredients in my master pantry! 

With ingredients like these, we must create a beautiful glaze or marinade! Maybe reduction with butter, honey, and chopped shallots. Bon appétit!`:e.includes("hello")||e.includes("hi")||e.includes("hey")?"Bonjour! 🍳 Pierre here! Welcome to my digital kitchen. What delicious culinary creation are we whipping up together today? 🥖🥖":e.includes("pasta")||e.includes("quick")?`Ah, the quick pasta! A lifesaver! Let us make my signature **Aglio e Olio with a Twist**! 🍝

- **Step 1**: Boil pasta in salted water (make it taste like the sea!).
- **Step 2**: Thinly slice 4 garlic cloves. Fry in plenty of good olive oil until pale gold. Add red pepper flakes!
- **Step 3**: Toss pasta straight into the oil, add a splash of starchy pasta water, and stir vigorously to form a creamy emulsion!
- **Step 4**: Finish with grated Parmigiano and a squeeze of fresh lemon juice! 🍋

Fast, beautiful, and absolutely delicious! Magnifique!`:e.includes("substitute")||e.includes("buttermilk")?`No buttermilk? No problem, mon ami! 🥛

You can easily make a quick substitute in **5 minutes**:

1. Take **1 cup of regular milk**.
2. Add **1 tablespoon of lemon juice** or white vinegar.
3. Let it sit for 5 minutes until it curdles slightly.

Use it 1:1 in any baking recipe (pancakes, biscuits). It adds the exact acidity needed to react with baking soda! 🥞`:e.includes("salmon")||e.includes("wine")?`Salmon is a beautiful rich fish! 🐟 To balance the fat, pair it with:

- **White Wine**: A crisp, oak-aged **Chardonnay** or a dry **Pinot Gris**.
- **Red Wine**: Yes, you can! A light-bodied **Pinot Noir** with salmon is absolutely divine. The low tannins won't overpower the delicate fish! 🍷`:'Ah! A culinary mystery! In French cuisine, we have a saying: *"To eat is to live."* Whatever we cook, remember to preheat the pans, use fresh herbs, and never skip the butter! 🧈 What ingredient or recipe should we look into next?'}},flex:{id:"flex",name:"Flex",role:"Fitness Trainer",avatar:"F",avatarColor:"#ec4899",status:"Online",description:"High-energy fitness trainer. Motivational, clear, and action-oriented.",suggestions:["10-minute home workout","High protein breakfast ideas","How to stay motivated","Proper squat form tips"],getResponse:(n,t)=>{const e=n.toLowerCase();return t?`Let's go! 💪 You attached **${t.name}**. I'm treating this like your new personalized workout log! 

No matter what the content is, the target remains the same: consistency! We'll track your exercises, sets, reps, and nutrition. Get ready to smash these metrics!`:e.includes("hello")||e.includes("hi")||e.includes("hey")?"Let's go! 💪 Flex is in the building! Are we ready to get 1% better today? Fitness is a lifestyle, and it starts right here. What are your physical targets today?":e.includes("workout")||e.includes("home")?`No gym? No excuses! Here is a high-intensity 10-minute bodyweight circuit to boost your heart rate! ⏱️

Perform each exercise for **40 seconds**, followed by **20 seconds of rest**:

1. **Bodyweight Squats**: Keep chest high!
2. **Push-ups**: Modify on knees if needed.
3. **Reverse Lunges**: Alternate legs.
4. **Jumping Jacks**: Get that cardio pump!
5. **Plank Hold**: Squeeze your core tight!

Rest for 1 minute, then repeat for Round 2! Let's get it done! 🏋️‍♂️`:e.includes("protein")||e.includes("breakfast")?`Fueling your muscles starts in the morning! Here are my top high-protein breakfasts: 🍳

- **Option A (The classic)**: 3 scrambled eggs, 1/2 avocado, and a slice of whole-wheat toast (~25g protein).
- **Option B (Fast & Sweet)**: Whey protein shake blended with oats, 1 scoop of peanut butter, and a banana (~35g protein).
- **Option C (Low Carb)**: Greek yogurt (0% fat) topped with mixed berries, chia seeds, and a scoop of protein powder (~30g protein).

Choose your fuel wisely! 🍓`:e.includes("motivate")||e.includes("motivation")?`Listen to me: Motivation is fleeting! It gets you started, but **discipline** is what keeps you going when you don't feel like it. 

Don't wait for the 'perfect' mood. Just do 5 minutes. Set your alarm, lay out your workout gear the night before, and remember *why* you started. You are stronger than your excuses! Let's crush it! 🔥`:"Get moving! Consistency beats intensity every single time. Drink your water, hit your targets, and make sure to recover. What fitness query or exercise are we breaking down next?"}},haiku:{id:"haiku",name:"Haiku",role:"Zen Poet",avatar:"H",avatarColor:"#06b6d4",status:"Online",description:"Zen creative bot. Responds exclusively in haikus or short rhythmic verses.",suggestions:["Write a poem about rain","Write about learning code","Poem about tea","Explain digital life"],getResponse:(n,t)=>{const e=n.toLowerCase();return t?`Paper card attached,
**${t.name}** lies before my eyes,
Data turns to song.

Ideas printed,
Words inside a file revealed,
Quietly explained.`:e.includes("hello")||e.includes("hi")||e.includes("hey")?`Soft breeze whispers hi,
I am Haiku, your guide here,
Words dance in the air. 🌸`:e.includes("rain")?`Grey clouds fill the sky,
Gentle droplets kiss the leaf,
Earth drinks in the cool. 🌧️`:e.includes("code")||e.includes("learn")?`Black screen, glowing lines,
Logic weaves a silent web,
Creation takes flight. 💻`:e.includes("tea")?`Steam rises slowly,
Warm cup cradled in my hands,
Mind finds its quiet. 🍵`:`Thoughts drift like a cloud,
Silence in the digital,
We write side by side.

Tell me what you feel,
I shall weave a thread of verse,
For your heart to keep.`}}},A=window.location.origin.includes("5173")?"http://localhost:3000/api":"/api";let u=[],w=null,L="nova",b=null,I=!1,d={theme:"dark",voiceName:"",voiceRate:1,voicePitch:1,geminiApiKey:""},B=null,f=null,F=!1;const se=document.documentElement,V=document.getElementById("sidebar"),D=document.getElementById("sidebarOverlay"),be=document.getElementById("menuToggleBtn"),ke=document.getElementById("newChatBtn"),te=document.getElementById("historySearch"),K=document.getElementById("conversationsList"),ne=document.getElementById("botGrid"),ie=document.getElementById("botHeaderAvatar"),Ee=document.getElementById("botHeaderName"),Ie=document.getElementById("botHeaderStatus"),Y=document.getElementById("readAloudToggle"),Se=document.getElementById("exportChatBtn"),xe=document.getElementById("deleteChatBtn"),k=document.getElementById("chatViewport"),oe=document.getElementById("suggestionsContainer"),ae=document.getElementById("chatInputForm"),p=document.getElementById("chatInput"),J=document.getElementById("fileAttachment"),Ae=document.getElementById("attachmentBtn"),re=document.getElementById("attachmentPreview"),Ce=document.getElementById("attachmentName"),Le=document.getElementById("removeAttachmentBtn"),P=document.getElementById("voiceInputBtn"),Te=document.getElementById("themeToggleBtn"),Be=document.getElementById("themeToggleText"),$e=document.getElementById("openSettingsBtn"),H=document.getElementById("settingsModal"),Pe=document.getElementById("closeSettingsBtn"),O=document.getElementById("voiceSelect"),ce=document.getElementById("voiceRate"),le=document.getElementById("rateVal"),de=document.getElementById("voicePitch"),ue=document.getElementById("pitchVal"),He=document.getElementById("clearAllDataBtn"),W=document.getElementById("geminiApiKey"),$=document.getElementById("apiStatusBadge");function q(){const n=document.getElementById("authOverlay");n&&(n.style.display="flex")}function Z(){const n=document.getElementById("authOverlay");n&&(n.style.display="none")}function Q(n){const t=document.getElementById("userProfileAvatar"),e=document.getElementById("userProfileName"),i=`${n.firstName} ${n.lastName}`;e&&(e.textContent=i),t&&(t.textContent=n.firstName.charAt(0).toUpperCase())}async function Ne(){me(),Qe(),qe(),Ue();const n=localStorage.getItem("AURA_AUTH_TOKEN");if(!n){q();return}try{const t=await fetch(`${A}/auth/me`,{headers:{Authorization:`Bearer ${n}`}});if(t.ok){const e=await t.json();Q(e.user),await X(),_(),u.length===0?await x("nova"):C(u[0].id),Z()}else localStorage.removeItem("AURA_AUTH_TOKEN"),q()}catch(t){console.error("Session verification failed.",t),_(),q()}}function me(){const n=localStorage.getItem("AURA_AI_SETTINGS");if(n)try{d={...d,...JSON.parse(n)}}catch(t){console.error("Failed to parse settings",t)}se.setAttribute("data-theme",d.theme),fe(),ce.value=d.voiceRate,le.textContent=d.voiceRate.toFixed(1),de.value=d.voicePitch,ue.textContent=d.voicePitch.toFixed(1),W&&(W.value=d.geminiApiKey||""),he()}function N(){localStorage.setItem("AURA_AI_SETTINGS",JSON.stringify(d))}function he(){if(!$)return;!!d.geminiApiKey?($.className="status-badge live",$.textContent="Live Gemini API"):($.className="status-badge offline",$.textContent="Offline Simulator")}async function X(){const n=localStorage.getItem("AURA_AUTH_TOKEN");if(n)try{const t=await fetch(`${A}/chats`,{headers:{Authorization:`Bearer ${n}`}});t.ok&&(u=(await t.json()).threads||[])}catch(t){console.error("Failed to fetch threads from server",t),u=[]}}async function ee(){const n=localStorage.getItem("AURA_AUTH_TOKEN");if(!n)return;const t=u.find(e=>e.id===w);if(t)try{await fetch(`${A}/chats`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`},body:JSON.stringify(t)})}catch(e){console.error("Failed to sync thread to database",e)}M()}function _(){ne.innerHTML="",Object.values(v).forEach(n=>{const t=document.createElement("div");t.className=`bot-card ${n.id===L?"active":""}`,t.setAttribute("data-bot-id",n.id),t.innerHTML=`
            <div class="bot-avatar" style="background-color: ${n.avatarColor}">
                ${n.avatar}
            </div>
            <div class="bot-name">${n.name}</div>
            <div class="bot-role">${n.role}</div>
        `,t.addEventListener("click",()=>{pe(n.id)}),ne.appendChild(t)})}function pe(n){L=n,document.querySelectorAll(".bot-card").forEach(a=>{a.getAttribute("data-bot-id")===n?a.classList.add("active"):a.classList.remove("active")});const t=v[n];ie.style.backgroundColor=t.avatarColor,ie.textContent=t.avatar,Ee.textContent=t.name,Ie.textContent=t.description;const e=document.getElementById("modelDropdownMenu");e&&(e.style.display="none");const i=u.find(a=>a.id===w);i&&i.messages.length===0&&(i.botId=n,i.name=`Chat with ${t.name}`,ee()),Me(t.suggestions)}function Me(n){oe.innerHTML="",n.forEach(t=>{const e=document.createElement("button");e.className="suggestion-chip",e.textContent=t,e.addEventListener("click",()=>{p.value=t,p.focus(),j()}),oe.appendChild(e)})}function M(n=""){K.innerHTML="";const t=u.filter(e=>e.name.toLowerCase().includes(n.toLowerCase())||e.messages.some(i=>i.text.toLowerCase().includes(n.toLowerCase())));if(t.length===0){K.innerHTML='<li class="section-title" style="text-align: center; margin-top: 10px;">No chats found</li>';return}t.forEach(e=>{v[e.botId]||v.nova;const i=document.createElement("li");i.className=`conversation-item ${e.id===w?"active":""}`,i.setAttribute("data-thread-id",e.id),i.innerHTML=`
            <span class="convo-title">${e.name}</span>
            <button class="convo-delete-btn" title="Delete conversation">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="3 6 5 6 21 6"/>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                </svg>
            </button>
        `,i.addEventListener("click",a=>{if(a.target.closest(".convo-delete-btn")){a.stopPropagation(),ge(e.id);return}C(e.id),V.classList.remove("open"),D.classList.remove("active")}),K.appendChild(i)})}async function x(n="nova"){const t=v[n],e="thread_"+Date.now(),i={id:e,name:`Chat with ${t.name}`,botId:n,messages:[]};u.unshift(i),await ee(),C(e)}function C(n){w=n;const t=u.find(e=>e.id===n);t&&(pe(t.botId),Fe(t.messages),M())}async function ge(n){const t=localStorage.getItem("AURA_AUTH_TOKEN");if(t)try{await fetch(`${A}/chats/${n}`,{method:"DELETE",headers:{Authorization:`Bearer ${t}`}})}catch(e){console.error("Failed to delete thread on server",e)}u=u.filter(e=>e.id!==n),M(),w===n&&(u.length>0?C(u[0].id):await x("nova"))}function Re(){confirm("Are you absolutely sure you want to clear all chat histories and configurations? This cannot be undone.")&&(localStorage.removeItem("AURA_AI_THREADS"),localStorage.removeItem("AURA_AI_SETTINGS"),u=[],me(),x("nova"),H.style.display="none")}function Fe(n){if(k.innerHTML="",n.length===0){const t=v[L];De(t);return}n.forEach(t=>{U(t)}),G()}function De(n){const t=document.createElement("div");t.className="empty-state-welcome";const i=!!d.geminiApiKey?'<div class="search-status-indicator active">🌐 Live Internet Search Active (Google Grounding Enabled)</div>':'<div class="search-status-indicator warning">⚠️ Offline Mode. Enter a Gemini API Key in Settings to connect to live Web Research</div>';t.innerHTML=`
        <h1 class="welcome-title">Ready when you are.</h1>
        <p class="welcome-subtitle">Ask ${n.name} anything. Online research is fully integrated.</p>
        ${i}
    `,k.appendChild(t)}function U(n){const t=n.sender==="bot",e=n.sender==="system",i=document.createElement("div");if(i.className=`message ${n.sender}`,e){i.innerHTML=`<span>${n.text}</span>`,k.appendChild(i);return}const a=v[L],o=t?a.avatar:"U",r=t?a.avatarColor:"#64748b",s=t?Oe(n.text):ye(n.text),l=new Date(n.timestamp).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});let m="";n.file&&(n.file.type.startsWith("image/")?m=`<img class="msg-image-attachment" src="${n.file.content}" alt="${n.file.name}" onclick="window.open(this.src)">`:m=`
                <div class="attachment-preview" style="margin-top: 8px; max-width: 100%;">
                    <span class="attachment-name">📂 Attached: ${n.file.name}</span>
                </div>
            `);let g=n.citations||"";i.innerHTML=`
        <div class="message-avatar" style="background-color: ${r}">
            ${o}
        </div>
        <div class="message-content-wrapper">
            <div class="message-bubble">
                ${s}
                ${m}
                ${g}
            </div>
            <span class="message-time">${l}</span>
        </div>
    `,k.appendChild(i)}function ye(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function Oe(n){let t=ye(n);const e=/```(?:[a-zA-Z]*)\n([\s\S]*?)```/g;t=t.replace(e,(a,o)=>`
            <div class="code-block-container">
                <div class="code-block-header">
                    <span>Code Snippet</span>
                    <button type="button" class="copy-code-btn" onclick="copyCodeSnippet(this)">Copy</button>
                </div>
                <pre><code>${o.trim()}</code></pre>
            </div>
        `),t=t.replace(/`([^`]+)`/g,"<code>$1</code>"),t=t.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),t=t.replace(/\*([^*]+)\*/g,"<em>$1</em>"),t=t.replace(/^\s*-\s+(.+)$/gm,"<li>$1</li>"),t=t.replace(/^\s*\*\s+(.+)$/gm,"<li>$1</li>"),t=t.replace(/(<li>.*<\/li>)/s,"<ul>$1</ul>"),t=t.replace(/<\/ul>\n<ul>/g,"");const i=t.split(/(<div class="code-block-container">[\s\S]*?<\/div>)/);for(let a=0;a<i.length;a++)i[a].startsWith('<div class="code-block-container">')||(i[a]=i[a].replace(/\n/g,"<br>"));return i.join("")}window.copyCodeSnippet=function(n){const e=n.closest(".code-block-container").querySelector("code").innerText;navigator.clipboard.writeText(e).then(()=>{n.textContent="Copied!",n.style.color="var(--accent)",setTimeout(()=>{n.textContent="Copy",n.style.color="var(--text-muted)"},2e3)})};function G(){k.scrollTop=k.scrollHeight}function qe(){const n=window.SpeechRecognition||window.webkitSpeechRecognition;if(!n){P.style.display="none",console.warn("Speech recognition is not supported in this browser.");return}f=new n,f.continuous=!1,f.interimResults=!1,f.lang="en-US",f.onstart=()=>{F=!0,P.classList.add("active")},f.onend=()=>{F=!1,P.classList.remove("active")},f.onresult=t=>{const e=t.results[0][0].transcript;p.value+=(p.value?" ":"")+e,p.focus(),j()},f.onerror=t=>{console.error("Speech recognition error:",t.error),F=!1,P.classList.remove("active")}}function Ue(){if(!window.speechSynthesis){Y.style.display="none",console.warn("Speech synthesis is not supported in this browser.");return}function n(){const t=window.speechSynthesis.getVoices();if(O.innerHTML="",t.length===0){const e=document.createElement("option");e.textContent="Default System Voice",e.value="",O.appendChild(e);return}t.forEach(e=>{const i=document.createElement("option");i.textContent=`${e.name} (${e.lang})`,i.value=e.name,e.name===d.voiceName&&(i.selected=!0),O.appendChild(i)})}n(),window.speechSynthesis.onvoiceschanged!==void 0&&(window.speechSynthesis.onvoiceschanged=n)}function We(n){if(!window.speechSynthesis||!I)return;window.speechSynthesis.cancel();let t=n.replace(/```[\s\S]*?```/g,"[code block omitted]").replace(/`([^`]+)`/g,"$1").replace(/\*\*([^*]+)\*\*/g,"$1").replace(/\*([^*]+)\*/g,"$1").replace(/\[([^\]]+)\]\([^)]+\)/g,"$1");t.length>300&&(t=t.substring(0,280)+"... and more details follows."),B=new SpeechSynthesisUtterance(t);const e=window.speechSynthesis.getVoices();if(d.voiceName){const i=e.find(a=>a.name===d.voiceName);i&&(B.voice=i)}B.rate=d.voiceRate,B.pitch=d.voicePitch,window.speechSynthesis.speak(B)}function _e(){d.theme=d.theme==="dark"?"light":"dark",se.setAttribute("data-theme",d.theme),N(),fe()}function fe(){const n=d.theme==="dark";document.querySelector(".icon-dark").style.display=n?"block":"none",document.querySelector(".icon-light").style.display=n?"none":"block",Be.textContent=n?"Light Mode":"Dark Mode"}function j(){p.style.height="auto",p.style.height=p.scrollHeight-2+"px"}function Ge(n){const t=n.target.files[0];if(!t)return;const e=new FileReader,i={name:t.name,type:t.type,size:t.size,content:null};e.onload=a=>{i.content=a.target.result,b=i,Ce.textContent=t.name,re.style.display="flex",p.placeholder="Include a query about this file...",p.focus()},t.type.startsWith("image/")?e.readAsDataURL(t):e.readAsText(t)}function ve(){b=null,J.value="",re.style.display="none",p.placeholder="Type a message or use speech..."}async function je(n,t,e,i){var g,h,c,y;const a=`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${n}`;let o=`You are ${e.name}, a ${e.role}. ${e.description}. `;e.id==="haiku"?o+="You must respond ONLY in haiku poems or short Zen verses. Do not break character.":e.id==="byte"?o+="You are a coding mentor. Structure your answers with code snippets when appropriate, and focus on clean programming paradigms.":e.id==="chef"?o+="You are a French culinary expert. Be enthusiastic, use cooking terms, and include emojis.":e.id==="flex"&&(o+="You are a motivational fitness trainer. Be high energy, clear, and encourage the user to reach their goals.");const r=[];if(i)if(i.type.startsWith("image/")){const E=i.content.split(",")[1];r.push({role:"user",parts:[{inlineData:{mimeType:i.type,data:E}},{text:t||"Describe or analyze this image."}]})}else r.push({role:"user",parts:[{text:`Here is the contents of a file named "${i.name}":

\`\`\`
${i.content}
\`\`\`

User request: ${t||"Explain or analyze this file."}`}]});else r.push({role:"user",parts:[{text:t}]});const l=await fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:r,tools:[{googleSearch:{}}],systemInstruction:{parts:[{text:o}]},generationConfig:{maxOutputTokens:1e3,temperature:.7}})});if(!l.ok){const E=await l.json();throw new Error(((g=E.error)==null?void 0:g.message)||"Failed to fetch response from Gemini API")}const m=await l.json();return{text:((y=(c=(h=m.candidates[0].content)==null?void 0:h.parts)==null?void 0:c[0])==null?void 0:y.text)||"",groundingMetadata:m.candidates[0].groundingMetadata||null}}const ze={cooking:{keywords:["cook","recipe","bake","food","egg","pancake","coffee","pasta","tea","ingredient","lunch","dinner","breakfast","kitchen"],response:`### 🍳 Everyday Culinary & Food Guide
- **Pancake Recipe**: Whisk 1 cup flour, 2 tbsp sugar, 2 tsp baking powder, and a pinch of salt. Whisk in 1 cup milk, 1 egg, and 2 tbsp melted butter. Pour onto a hot griddle; flip when bubbles appear.
- **Perfect Coffee Ratio**: Use 1 to 2 tablespoons of ground coffee per 6 ounces of water (adjust to taste). Standard brewing water temperature is 195°F–205°F.
- **Egg Boiling Timer**: Place eggs in cold water, bring to a boil. Turn off heat and cover. Soft-boiled: 4–6 mins. Hard-boiled: 9–12 mins. Plunge into ice water.
- **Useful Measurements**: 3 tsp = 1 tbsp; 16 tbsp = 1 cup; 1 cup = 240ml.`},health:{keywords:["health","diet","sleep","water","workout","stretch","exercise","muscle","calorie","fit","gym","cardio","weight","nutrition"],response:`### 🏃‍♂️ Everyday Health & Well-being Guide
- **Daily Hydration**: Drink at least 8–10 cups of water (approx. 2 liters) per day to support metabolic functions and energy levels.
- **Sleep Optimization**: Maintain a regular sleep schedule. Keep your room dark, quiet, and cool (~65°F / 18°C). Avoid screen exposure 1 hour before bed.
- **Exercise Guidelines**: Target 150 minutes of moderate aerobic activity (e.g., brisk walking) or 75 minutes of vigorous activity weekly, plus strength training twice a week.
- **Safe Stretching**: Perform static stretches when muscles are warm. Hold each position for 15–30 seconds without bouncing to improve flexibility.`},productivity:{keywords:["productive","focus","study","work","time","pomodoro","habit","schedule","goal","morning","calendar","organize","task","priority"],response:`### 📅 Productivity & Focus Strategies
- **Pomodoro Technique**: Alternate 25 minutes of focused work with a 5-minute break. After four cycles, take a longer 15–30 minute break.
- **Time Blocking**: Dedicate concrete chunks of your day to specific activities. This prevents multitasking and helps deep work concentration.
- **Habit Stacking**: Link a new behavior to an established habit (e.g., "Immediately after brushing my teeth, I will write down three things I am grateful for").
- **Eisenhower Priority Matrix**: Categorize tasks into Urgent/Important (Do now), Important/Not Urgent (Schedule), Urgent/Not Important (Delegate), and Not Urgent/Not Important (Eliminate).`},tech:{keywords:["internet","wifi","computer","ai","software","hardware","file","code","error","database","network","system","keyboard","shortcut"],response:"### 💻 Digital & Everyday Technology Literacy\n- **Troubleshooting Wi-Fi**: Perform a power cycle by unplugging your router/modem for 30 seconds. Position routers away from thick walls or microwave ovens.\n- **AI Models & LLMs**: Generative Large Language Models recognize patterns in training datasets to simulate text/code generation, relying on neural architectures.\n- **Data Protection (3-2-1 Rule)**: Keep 3 copies of your data on 2 different media types (e.g., hard drive & SSD), with at least 1 copy off-site in cloud backup.\n- **Standard Keyboard Shortcuts**: \n  - Windows: `Ctrl + C` (copy), `Ctrl + V` (paste), `Ctrl + Z` (undo), `Alt + Tab` (switch application).\n  - Mac: `Cmd + C` (copy), `Cmd + V` (paste), `Cmd + Z` (undo), `Cmd + Tab` (switch application)."},finance:{keywords:["finance","money","budget","save","invest","stock","salary","interest","compound","tax","emergency","portfolio","fund"],response:`### 💵 Personal Finance & Wealth Building
- **Budgeting (50/30/20 Rule)**: Allocate 50% of your net income to Needs (housing, utilities), 30% to Wants (dining out, entertainment), and 20% to Savings/Debt repayment.
- **Compound Interest**: Interest computed on both the initial principal and the accumulated interest. Formula: \\(A = P(1 + r/n)^{nt}\\). Starting early multiplies returns exponentially.
- **Emergency Reserve**: Aim to stash 3 to 6 months of absolute living expenses in a liquid High-Yield Savings Account (HYSA) before undertaking high-risk investments.
- **Diversification**: Mitigate equity risks by buying low-cost broad-market Index Funds or ETFs that track hundreds of companies simultaneously.`},geography:{keywords:["travel","pack","flight","country","capital","city","map","distance","ocean","mountain","currency","visit","tourism"],response:`### 🌍 Travel & Geography Everyday Tips
- **Travel Packing Checklist**: Use packing cubes to organize items. Place heavy items at the bottom of your suitcase. Roll clothes to minimize wrinkles.
- **Flight Comfort**: Stay hydrated during flights to counter low cabin humidity (~10%). Walk around the cabin once every 2 hours on long flights.
- **Capitals & Currencies Reference**:
  - United States: Washington, D.C. (US Dollar)
  - United Kingdom: London (Pound Sterling)
  - Japan: Tokyo (Japanese Yen)
  - France: Paris (Euro)
  - India: New Delhi (Indian Rupee)
  - Australia: Canberra (Australian Dollar)`},science:{keywords:["gravity","atom","sun","moon","sky","photosynthesis","dna","cell","space","planet","rain","water cycle","physics","chemistry","biology","climate"],response:`### 🔬 Scientific Phenomena Explained
- **Why is the Sky Blue?**: Nitrogen and oxygen in Earth's atmosphere scatter short-wavelength blue light in all directions more than other colors (Rayleigh Scattering).
- **Photosynthesis Equation**: Plants convert water, carbon dioxide, and sunlight into glucose and oxygen: \\(6CO_2 + 6H_2O + \\text{light} \\rightarrow C_6H_{12}O_6 + 6O_2\\).
- **The Water Cycle**: Driven by solar energy, moving water through Evaporation (vaporize), Condensation (clouds), Precipitation (rain/snow), and Runoff (collection).
- **Basic Gravity**: Every particle of matter attracts every other particle with a force proportional to the product of their masses and inversely proportional to the square of the distance between them.`}};function Ke(n,t,e){const i=n.toLowerCase();if(e.id==="haiku")return i.includes("error")||i.includes("exception")?`Code exceptions rise,
Brackets mismatched in the dark,
Balance them to heal. 🌸`:i.includes("math")||i.includes("solve")?`Numbers join in dance,
Plus and minus find their place,
Truth is calculated. 🌸`:`Thoughts drift like a cloud,
Silence in the digital,
We write side by side.

Tell me what you see,
I shall weave a thread of verse,
For your heart to keep. 🌸`;for(const[o,r]of Object.entries(ze))if(r.keywords.some(s=>i.includes(s))){let s=r.response;return e.id==="chef"?`Bonjour! Pierre wants to share culinary thoughts related to your query:

${s}`:e.id==="flex"?`Let's go! 💪 Here are the fitness/active insights on your query:

${s}`:e.id==="byte"?`Mentoring Insight on requested topic:

${s}`:s}if(t&&t.type.startsWith("image/"))return e.id==="chef"?"Ah, Pierre sees this beautiful picture! 🎨 It has the colors of a fresh summer ratatouille! Magnifique! *(Enter API Key to analyze the image content live!)*":e.id==="flex"?"Flex sees this image attachment! 💪 Treat it like a visual log of your form! Keep pushing! *(Enter API Key to analyze the image live!)*":e.id==="byte"?"Image attachment detected. Custom UI elements present. *(Enter API Key to run real OCR and layout code generation!)*":`I see the image file **${t.name}**. To analyze this image live using Gemini's visual models, please enter a Gemini API Key in Settings!`;if(i.includes("typeerror")||i.includes("cannot read properties")){let o="A `TypeError` occurs when an operation is performed on an inappropriate data type. In JavaScript, this most commonly happens when trying to read properties or call methods on `undefined` or `null` values.\n\n```javascript\n// Dangerous access\nconst name = user.profile.name; // Crashes if user or profile is undefined\n\n// Safe access solutions\nconst name = user?.profile?.name || 'Guest';\n```";return e.id==="chef"?`Mon ami! This \`TypeError\` is like trying to bake a soufflé without eggs! 🍳 It collapses! Make sure your ingredients are defined before mixing them:

${o}`:e.id==="flex"?`Let's go! 💪 A \`TypeError\` is just a skipped rep! Check your variables, make sure they are warmed up and defined before you query them! Focus on form:

${o}`:e.id==="byte"?`Mentoring Alert: Detected variable access error.

${o}`:o}if(i.includes("referenceerror")||i.includes("is not defined")){let o="A `ReferenceError` is thrown when code attempts to reference a variable that has not been declared or is out of scope in the current environment.\n\n**Common Checklist:**\n1. Check spelling of the variable name.\n2. Ensure it is declared using `const`, `let`, or `var` before accessing it.\n3. Verify function scopes.";return e.id==="chef"?`Pierre's alarm! 🚨 You called an ingredient that does not exist in the pantry! Check your spellings:

${o}`:e.id==="flex"?`Discipline check! 🏋️‍♂️ You're calling a variable that hasn't shown up for the workout! Declare it first:

${o}`:o}if(i.includes("syntaxerror")){let o="A `SyntaxError` occurs when the JavaScript interpreter or compiler encounters tokens that break the grammatical syntax rules of the language.\n\n**Common Causes:**\n- Mismatched brackets `()`, braces `{}`, or square brackets `[]`.\n- Missing comma in object or list declarations.\n- Mismatched single/double quotation marks.";return e.id==="chef"?`A recipe mistake! 🥖 A missing comma makes the soup salty! Mismatched brackets are breaking the layout:

${o}`:o}if(i.includes("indexerror")||i.includes("keyerror")||i.includes("index out of bounds"))return"An index or key error indicates that you're attempting to access a sequence (like an array or list) or mapping (dictionary/object) using a key or index that is out of bounds or doesn't exist.\n\n**Common Fix:**\n- Verify sequence length: index must satisfy `0 <= index < length`.\n- Use checking conditions before access (e.g. `if (index < array.length)`).";const a=i.match(/\b(\d+)\s*([\+\-\*\/])\s*(\d+)\b/);if(a){const o=parseInt(a[1]),r=a[2],s=parseInt(a[3]);let l=0;r==="+"&&(l=o+s),r==="-"&&(l=o-s),r==="*"&&(l=o*s),r==="/"&&(l=s!==0?(o/s).toFixed(2):"Undefined (Zero Division)");let m=`Math Equation matched! Let's solve **${o} ${r} ${s}**:

- Operands: \`${o}\` and \`${s}\`
- Operation: \`${r}\`
- Calculated Result: **${l}**

*(Note: For complex calculus, algebra, or graphing, please enter your Gemini API Key in Settings to query the live model!)*`;return e.id==="chef"?`Pierre's kitchen math! ⚖️ We are scaling ingredients: **${o} ${r} ${s} = ${l}**! Magnifique!`:e.id==="flex"?`Rep counter! 🔢 Adding it up: **${o} ${r} ${s} = ${l}** reps completed! Push it!`:m}if(i.includes("gravity")||i.includes("space")||i.includes("planet")||i.includes("dna")||i.includes("atom")||i.includes("physics")||i.includes("chemistry")||i.includes("biology")){let o=`### 🔬 Scientific Concept Analysis

- **Space & Gravity**: Gravity is the force of attraction by which terrestrial bodies tend to fall toward the center of the earth. According to general relativity, gravity is a result of spacetime curvature.
- **Genetics (DNA)**: DNA is the double-helix molecule carrying genetic codes for cell development and reproduction.
- **Matter (Atoms)**: Everything is built of atoms, comprising protons, neutrons, and orbiting electrons.

*(Enter your Gemini API key in Settings to discuss specific scientific publications or query live databases!)*`;return e.id==="chef"?`Science in the kitchen! 🧪 Emulsions and baking rely on chemistry! Heat transfer cooks the steak. Here is some offline scientific food for thought:

${o}`:e.id==="flex"?`Science rules! 🧬 Hypertrophy is biological adaptation to force! Here is the science overview:

${o}`:o}if(i.includes("history")||i.includes("rome")||i.includes("war")||i.includes("president")||i.includes("capital")||i.includes("country")||i.includes("geography")){let o=`### 🌍 History & Geography Database

- **Rome**: The Roman Republic and subsequent Empire shaped legal, political, and architectural foundations of Western civilizations.
- **Geopolitics**: National capitals and boundaries adapt dynamically to geopolitics. Oceans cover ~71% of Earth's surface.
- **Historical Timelines**: Global agreements and struggles shape the modern map.

*(To ask specific history questions, e.g., 'Who was the 16th US President?', enter a Gemini API Key in Settings!)*`;return e.id==="chef"?`Ah, history! Pierre loves historical French recipes! From medieval banquets to modern haute cuisine. Here is the context:

${o}`:o}if(i.includes("sport")||i.includes("cricket")||i.includes("football")||i.includes("movie")||i.includes("song")||i.includes("music")||i.includes("art")||i.includes("paint")||i.includes("finance")||i.includes("money")||i.includes("stock")){let o=`### 🎨 Cultural & Financial Overview

- **Creative Arts**: Art, cinema, and music reflect human expression and societal changes.
- **Finance**: Markets fluctuate based on supply, demand, inflation, and interest rates. Diversification mitigates stock portfolio risks.
- **Sports**: Athletics improve cardiovascular health, mental resilience, and coordination.

*(Paste a live Gemini API key to query current stock quotes, sports matches, or movie databases!)*`;return e.id==="flex"?`Let's talk sports and active lifestyles! 🏃‍♂️ Athletics is about commitment! Keep your training targets high. Here is the background:

${o}`:e.id==="chef"?`Food pairing with music and dining ambience! 🎶 Everything must match. Here is the offline summary:

${o}`:o}return e.getResponse(n,t)}function Ve(n){n.preventDefault();const t=p.value.trim();if(!t&&!b)return;const e=u.find(r=>r.id===w);if(!e)return;const i={sender:"user",text:t||`Attached file: ${b.name}`,timestamp:Date.now(),file:b?{...b}:null};if(e.messages.push(i),e.name.startsWith("Chat with ")&&e.messages.length===1){const s=t?t.substring(0,22)+(t.length>22?"...":""):`File: ${b.name}`;e.name=s}U(i),p.value="",j();const a=b;ve(),G(),Ye();const o=v[e.botId]||v.nova;setTimeout(async()=>{Je();let r="",s="",l=!1;if(d.geminiApiKey)try{const g=await je(d.geminiApiKey,i.text,o,a);r=g.text;const h=g.groundingMetadata;h&&h.groundingChunks&&h.groundingChunks.length>0&&(s='<div class="search-citations-container">',s+=`<div class="search-queries-tag">🔍 Searched: <em>"${h.webSearchQueries?h.webSearchQueries.join(", "):i.text}"</em></div>`,s+='<ul class="search-sources-list">',h.groundingChunks.forEach(c=>{c.web&&(s+=`
                                <li>
                                    <a href="${c.web.uri}" target="_blank" class="search-source-link">
                                        🌐 ${c.web.title||c.web.uri}
                                    </a>
                                </li>
                            `)}),s+="</ul></div>"),l=!0}catch(g){console.error("Gemini API Error: ",g);const h={sender:"system",text:`⚠️ API Connection Error: ${g.message}. Defaulting to simulated response.`,timestamp:Date.now()};e.messages.push(h),U(h)}l||(r=Ke(i.text,a,o));const m={sender:"bot",text:r,citations:s,timestamp:Date.now()};e.messages.push(m),ee(),U(m),G(),We(r)},1200+Math.random()*800)}function Ye(){const n=document.createElement("div");n.className="message bot typing-indicator-item",n.id="typingIndicator";const t=v[L];n.innerHTML=`
        <div class="message-avatar" style="background-color: ${t.avatarColor}">
            ${t.avatar}
        </div>
        <div class="message-content-wrapper">
            <div class="message-bubble" style="padding: 8px 16px;">
                <div class="typing-bubble">
                    <span class="typing-dot"></span>
                    <span class="typing-dot"></span>
                    <span class="typing-dot"></span>
                </div>
            </div>
        </div>
    `,k.appendChild(n),G()}function Je(){const n=document.getElementById("typingIndicator");n&&n.remove()}function Ze(){const n=u.find(s=>s.id===w);if(!n||n.messages.length===0){alert("Nothing to export yet!");return}const t=v[n.botId];let e=`# AuraAI Conversation Transcript
`;e+=`**Thread:** ${n.name}
`,e+=`**Assistant Bot:** ${t.name} (${t.role})
`,e+=`**Date Exported:** ${new Date().toLocaleString()}
`,e+=`
---

`,n.messages.forEach(s=>{const l=s.sender==="user"?"User":t.name,m=new Date(s.timestamp).toLocaleString();e+=`### ${l} (${m})
`,e+=`${s.text}

`,s.file&&(e+=`*Attached File: ${s.file.name}*

`)});const i=new Blob([e],{type:"text/markdown;charset=utf-8;"}),a=URL.createObjectURL(i),o=document.createElement("a");o.href=a;const r=n.name.replace(/[^a-z0-9]/gi,"_").toLowerCase();o.setAttribute("download",`transcript_${r}.md`),o.style.visibility="hidden",document.body.appendChild(o),o.click(),document.body.removeChild(o)}function Qe(){be.addEventListener("click",()=>{V.classList.add("open"),D.classList.add("active")}),D.addEventListener("click",()=>{V.classList.remove("open"),D.classList.remove("active")}),Te.addEventListener("click",_e),ke.addEventListener("click",()=>{x(L),te.value=""}),xe.addEventListener("click",()=>{confirm("Delete this conversation?")&&ge(w)}),te.addEventListener("input",c=>{M(c.target.value)}),ae.addEventListener("submit",Ve),p.addEventListener("input",j),p.addEventListener("keydown",c=>{c.key==="Enter"&&!c.shiftKey&&(c.preventDefault(),ae.requestSubmit())}),Ae.addEventListener("click",()=>J.click()),J.addEventListener("change",Ge),Le.addEventListener("click",ve),P.addEventListener("click",()=>{f&&(F?f.stop():f.start())}),Y.addEventListener("click",()=>{I=!I,Y.classList.toggle("active",I),document.querySelector(".voice-on-icon").style.display=I?"block":"none",document.querySelector(".voice-off-icon").style.display=I?"none":"block",!I&&window.speechSynthesis&&window.speechSynthesis.cancel()}),Se.addEventListener("click",Ze),$e.addEventListener("click",()=>{H.style.display="flex"});const n=()=>{H.style.display="none"};Pe.addEventListener("click",n),H.addEventListener("click",c=>{c.target===H&&n()}),ce.addEventListener("input",c=>{const y=parseFloat(c.target.value);le.textContent=y.toFixed(1),d.voiceRate=y,N()}),de.addEventListener("input",c=>{const y=parseFloat(c.target.value);ue.textContent=y.toFixed(1),d.voicePitch=y,N()}),O.addEventListener("change",c=>{d.voiceName=c.target.value,N()}),W&&W.addEventListener("input",c=>{d.geminiApiKey=c.target.value.trim(),N(),he()}),He.addEventListener("click",Re);const t=document.getElementById("modelDropdownBtn"),e=document.getElementById("modelDropdownMenu");t&&e&&(t.addEventListener("click",c=>{c.stopPropagation(),e.style.display==="block"||e.classList.contains("show")?(e.style.display="none",e.classList.remove("show")):(e.style.display="block",e.classList.add("show"))}),document.addEventListener("click",c=>{!t.contains(c.target)&&!e.contains(c.target)&&(e.style.display="none",e.classList.remove("show"))}));const i=document.getElementById("showSignupLink"),a=document.getElementById("showLoginLink"),o=document.getElementById("loginFormContainer"),r=document.getElementById("signupFormContainer"),s=document.getElementById("loginErrorMsg"),l=document.getElementById("signupErrorMsg");i&&a&&(i.addEventListener("click",c=>{c.preventDefault(),o.style.display="none",r.style.display="block",s&&(s.textContent="")}),a.addEventListener("click",c=>{c.preventDefault(),r.style.display="none",o.style.display="block",l&&(l.textContent="")}));const m=document.getElementById("loginForm");m&&m.addEventListener("submit",async c=>{c.preventDefault();const y=document.getElementById("loginEmail").value.trim(),E=document.getElementById("loginPassword").value;s&&(s.textContent="");try{const S=await fetch(`${A}/auth/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:y,password:E})}),T=await S.json();S.ok?(localStorage.setItem("AURA_AUTH_TOKEN",T.token),Q(T.user),document.getElementById("loginEmail").value="",document.getElementById("loginPassword").value="",await X(),_(),u.length===0?await x("nova"):C(u[0].id),Z()):s&&(s.textContent=T.error||"Login failed")}catch(S){console.error("Login request error",S),s&&(s.textContent="Network error. Please try again.")}});const g=document.getElementById("signupForm");g&&g.addEventListener("submit",async c=>{c.preventDefault();const y=document.getElementById("signupFirstName").value.trim(),E=document.getElementById("signupLastName").value.trim(),S=document.getElementById("signupEmail").value.trim(),T=document.getElementById("signupContact").value.trim(),we=document.getElementById("signupPassword").value;l&&(l.textContent="");try{const R=await fetch(`${A}/auth/signup`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({firstName:y,lastName:E,email:S,contactNumber:T,password:we})}),z=await R.json();R.ok?(localStorage.setItem("AURA_AUTH_TOKEN",z.token),Q(z.user),document.getElementById("signupFirstName").value="",document.getElementById("signupLastName").value="",document.getElementById("signupEmail").value="",document.getElementById("signupContact").value="",document.getElementById("signupPassword").value="",await X(),_(),u.length===0?await x("nova"):C(u[0].id),Z()):l&&(l.textContent=z.error||"Registration failed")}catch(R){console.error("Signup request error",R),l&&(l.textContent="Network error. Please try again.")}});const h=document.getElementById("logoutBtn");h&&h.addEventListener("click",()=>{localStorage.removeItem("AURA_AUTH_TOKEN"),u=[],w=null,M(),k.innerHTML="",r&&(r.style.display="none"),o&&(o.style.display="block"),q()})}window.addEventListener("DOMContentLoaded",Ne);
