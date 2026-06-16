/**
 * AuraAI Chatbot Application Logic
 */

// ==========================================================================
// BOT PERSONALITIES DATABASE
// ==========================================================================
const BOT_PERSONALITIES = {
    nova: {
        id: 'nova',
        name: 'Nova',
        role: 'AI Assistant',
        avatar: 'N',
        avatarColor: '#8b5cf6', // Violet
        status: 'Online',
        description: 'Helpful, balanced, and general purpose AI assistant.',
        suggestions: [
            'Help me compose a polite email',
            'Write a daily schedule for me',
            'Tell me a science joke',
            'What can you do?'
        ],
        getResponse: (userInput, file) => {
            const cleanInput = userInput.toLowerCase();
            
            if (file) {
                return `I have analyzed the attached file **${file.name}** (${(file.size / 1024).toFixed(1)} KB).\n\nBased on my general knowledge base: \n- File format: \`${file.name.split('.').pop()}\`\n- Insights: This file contains structured data. Let me know if you want me to search it, format it, or write a summary of its contents!`;
            }
            
            if (cleanInput.includes('hello') || cleanInput.includes('hi') || cleanInput.includes('hey')) {
                return "Hello! I'm Nova, your digital companion. How can I make your day more productive or interesting today?";
            }
            if (cleanInput.includes('help')) {
                return "I can assist with writing, scheduling, calculations, brainstorming, or explaining complex topics. Try asking: *'Help me draft a plan...'*";
            }
            if (cleanInput.includes('joke')) {
                return "Why don't scientists trust atoms? \n\n*Because they make up everything!* ⚛️";
            }
            if (cleanInput.includes('schedule') || cleanInput.includes('plan')) {
                return "Here is a standard balanced daily routine framework to optimize focus:\n\n- **07:00 AM** – Morning routine & Hydration\n- **08:30 AM** – Deep work block (90 mins - tackle hardest task)\n- **10:00 AM** – Light break / stretch\n- **10:30 AM** – Collaborative work & admin\n- **12:30 PM** – Lunch & light walk\n- **02:00 PM** – Secondary focus block\n- **04:30 PM** – Review & planning for tomorrow\n\nWould you like me to customize this for your specific goals?";
            }
            
            return "That's an interesting question. I've logged your query and simulated a core cognitive loop. Here's what I think:\n\n1. It's best to break this problem down into smaller, bite-sized components.\n2. We should identify the key constraints.\n3. We can then prototype solutions incrementally.\n\nLet me know how we can detail this further!";
        }
    },
    byte: {
        id: 'byte',
        name: 'Byte',
        role: 'Coding Mentor',
        avatar: 'B',
        avatarColor: '#10b981', // Emerald
        status: 'Online',
        description: 'Technical mentor. Responds with code blocks and clean syntax.',
        suggestions: [
            'Explain recursion in JS',
            'Write a Python regex pattern',
            'How do I fetch data in React?',
            'Mock an Express.js server'
        ],
        getResponse: (userInput, file) => {
            const cleanInput = userInput.toLowerCase();
            
            if (file) {
                if (file.type.startsWith('image/')) {
                    return `Code analysis engine active. Image attachment **${file.name}** detected.\n\nThis looks like a screenshot or UI schematic. Let's write the HTML/CSS blueprint for a container resembling this structure:\n\n\`\`\`css\n.card-container {\n  display: flex;\n  border-radius: 12px;\n  backdrop-filter: blur(10px);\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n}\n\`\`\`\nLet me know if you need code structure details!`;
                }
                return `Code Analyzer active. File **${file.name}** parsed successfully. Here is the code structure breakdown:\n\n- File extension detected: \`.${file.name.split('.').pop()}\`\n- File length: ~${file.content ? file.content.split('\n').length : 0} lines of source code.\n\nLet's write a refactored mockup based on common structural pattern:\n\n\`\`\`javascript\n// Refactored helper module\nexport const processInput = (data) => {\n  if (!data) throw new Error("No data supplied");\n  return Object.freeze({\n    id: crypto.randomUUID(),\n    processedAt: new Date().toISOString(),\n    payload: data\n  });\n};\n\`\`\`\nWhat specific function within this file should we modify or optimize?`;
            }
            
            if (cleanInput.includes('hello') || cleanInput.includes('hi') || cleanInput.includes('hey')) {
                return "Console loaded. 🖥️ Hello, programmer! I'm Byte. What compiler errors, logic bugs, or system architectures are we debugging today?";
            }
            if (cleanInput.includes('recursion')) {
                return "Recursion is a programming pattern where a function calls itself to solve smaller instances of the same problem. Every recursive function must have two parts:\n\n1. **Base Case**: The exit condition to stop recursion.\n2. **Recursive Case**: The call to itself with updated parameters.\n\nHere is a simple example in JavaScript calculating a factorial:\n\n\`\`\`javascript\nfunction factorial(n) {\n  // 1. Base case\n  if (n <= 1) return 1;\n  \n  // 2. Recursive case\n  return n * factorial(n - 1);\n}\n\nconsole.log(factorial(5)); // Output: 120\n\`\`\`\nNotice how each call stacks up until the base case returns \`1\`, then unwinds!";
            }
            if (cleanInput.includes('regex')) {
                return "Regex (Regular Expressions) are patterns used to match character combinations in strings. Here's a clean email validation pattern in Python:\n\n\`\`\`python\nimport re\n\ndef validate_email(email):\n    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'\n    return bool(re.match(pattern, email))\n\n# Test cases\nprint(validate_email(\"test@aura.com\"))  # True\nprint(validate_email(\"bad-email@com\"))   # False\n\`\`\`\nLet me know if you want me to write a custom pattern for you!";
            }
            if (cleanInput.includes('react') || cleanInput.includes('fetch')) {
                return "To fetch data in modern React, you can use the \`useEffect\` hook combined with \`fetch\` or \`axios\`, or use async hooks. Here is a clean functional component using hooks:\n\n\`\`\`javascript\nimport React, { useState, useEffect } from 'react';\n\nfunction UserList() {\n  const [users, setUsers] = useState([]);\n  const [loading, setLoading] = useState(true);\n\n  useEffect(() => {\n    fetch('https://jsonplaceholder.typicode.com/users')\n      .then(res => res.json())\n      .then(data => {\n        setUsers(data);\n        setLoading(false);\n      });\n  }, []); // Empty dependency array run only once on mount\n\n  if (loading) return <div>Loading...</div>;\n\n  return (\n    <ul>\n      {users.map(u => <li key={u.id}>{u.name}</li>)}\n    </ul>\n  );\n}\n\`\`\`\nFor larger applications, consider caching wrappers like TanStack Query.";
            }
            
            return "Feature request received. Here is the implementation boilerplate matching your query:\n\n\`\`\`javascript\n// Heuristic prototype\nconst simulateService = async (request) => {\n  console.log(`Analyzing: ${request}`);\n  return new Promise(resolve => {\n    setTimeout(() => {\n      resolve({ status: 200, message: \"Process completed successfully\" });\n    }, 1500);\n  });\n};\n\`\`\`\nProvide further specifications, and I'll code the full logic!";
        }
    },
    chef: {
        id: 'chef',
        name: 'Chef Pierre',
        role: 'Culinary Expert',
        avatar: 'P',
        avatarColor: '#f97316', // Orange
        status: 'Online',
        description: 'Enthusiastic French chef. Converses with cooking themes and emoji-rich text.',
        suggestions: [
            'Quick 15-minute pasta',
            'Substitutes for buttermilk',
            'Pair a wine with salmon',
            'How to chop onions like a pro'
        ],
        getResponse: (userInput, file) => {
            const cleanInput = userInput.toLowerCase();
            
            if (file) {
                return `Bonjour! 🥐 Pierre sees your attached file **${file.name}**! Let's pretend this is a list of secret ingredients in my master pantry! \n\nWith ingredients like these, we must create a beautiful glaze or marinade! Maybe reduction with butter, honey, and chopped shallots. Bon appétit!`;
            }
            
            if (cleanInput.includes('hello') || cleanInput.includes('hi') || cleanInput.includes('hey')) {
                return "Bonjour! 🍳 Pierre here! Welcome to my digital kitchen. What delicious culinary creation are we whipping up together today? 🥖🥖";
            }
            if (cleanInput.includes('pasta') || cleanInput.includes('quick')) {
                return "Ah, the quick pasta! A lifesaver! Let us make my signature **Aglio e Olio with a Twist**! 🍝\n\n- **Step 1**: Boil pasta in salted water (make it taste like the sea!).\n- **Step 2**: Thinly slice 4 garlic cloves. Fry in plenty of good olive oil until pale gold. Add red pepper flakes!\n- **Step 3**: Toss pasta straight into the oil, add a splash of starchy pasta water, and stir vigorously to form a creamy emulsion!\n- **Step 4**: Finish with grated Parmigiano and a squeeze of fresh lemon juice! 🍋\n\nFast, beautiful, and absolutely delicious! Magnifique!";
            }
            if (cleanInput.includes('substitute') || cleanInput.includes('buttermilk')) {
                return "No buttermilk? No problem, mon ami! 🥛\n\nYou can easily make a quick substitute in **5 minutes**:\n\n1. Take **1 cup of regular milk**.\n2. Add **1 tablespoon of lemon juice** or white vinegar.\n3. Let it sit for 5 minutes until it curdles slightly.\n\nUse it 1:1 in any baking recipe (pancakes, biscuits). It adds the exact acidity needed to react with baking soda! 🥞";
            }
            if (cleanInput.includes('salmon') || cleanInput.includes('wine')) {
                return "Salmon is a beautiful rich fish! 🐟 To balance the fat, pair it with:\n\n- **White Wine**: A crisp, oak-aged **Chardonnay** or a dry **Pinot Gris**.\n- **Red Wine**: Yes, you can! A light-bodied **Pinot Noir** with salmon is absolutely divine. The low tannins won't overpower the delicate fish! 🍷";
            }
            
            return "Ah! A culinary mystery! In French cuisine, we have a saying: *\"To eat is to live.\"* Whatever we cook, remember to preheat the pans, use fresh herbs, and never skip the butter! 🧈 What ingredient or recipe should we look into next?";
        }
    },
    flex: {
        id: 'flex',
        name: 'Flex',
        role: 'Fitness Trainer',
        avatar: 'F',
        avatarColor: '#ec4899', // Pink
        status: 'Online',
        description: 'High-energy fitness trainer. Motivational, clear, and action-oriented.',
        suggestions: [
            '10-minute home workout',
            'High protein breakfast ideas',
            'How to stay motivated',
            'Proper squat form tips'
        ],
        getResponse: (userInput, file) => {
            const cleanInput = userInput.toLowerCase();
            
            if (file) {
                return `Let's go! 💪 You attached **${file.name}**. I'm treating this like your new personalized workout log! \n\nNo matter what the content is, the target remains the same: consistency! We'll track your exercises, sets, reps, and nutrition. Get ready to smash these metrics!`;
            }
            
            if (cleanInput.includes('hello') || cleanInput.includes('hi') || cleanInput.includes('hey')) {
                return "Let's go! 💪 Flex is in the building! Are we ready to get 1% better today? Fitness is a lifestyle, and it starts right here. What are your physical targets today?";
            }
            if (cleanInput.includes('workout') || cleanInput.includes('home')) {
                return "No gym? No excuses! Here is a high-intensity 10-minute bodyweight circuit to boost your heart rate! ⏱️\n\nPerform each exercise for **40 seconds**, followed by **20 seconds of rest**:\n\n1. **Bodyweight Squats**: Keep chest high!\n2. **Push-ups**: Modify on knees if needed.\n3. **Reverse Lunges**: Alternate legs.\n4. **Jumping Jacks**: Get that cardio pump!\n5. **Plank Hold**: Squeeze your core tight!\n\nRest for 1 minute, then repeat for Round 2! Let's get it done! 🏋️‍♂️";
            }
            if (cleanInput.includes('protein') || cleanInput.includes('breakfast')) {
                return "Fueling your muscles starts in the morning! Here are my top high-protein breakfasts: 🍳\n\n- **Option A (The classic)**: 3 scrambled eggs, 1/2 avocado, and a slice of whole-wheat toast (~25g protein).\n- **Option B (Fast & Sweet)**: Whey protein shake blended with oats, 1 scoop of peanut butter, and a banana (~35g protein).\n- **Option C (Low Carb)**: Greek yogurt (0% fat) topped with mixed berries, chia seeds, and a scoop of protein powder (~30g protein).\n\nChoose your fuel wisely! 🍓";
            }
            if (cleanInput.includes('motivate') || cleanInput.includes('motivation')) {
                return "Listen to me: Motivation is fleeting! It gets you started, but **discipline** is what keeps you going when you don't feel like it. \n\nDon't wait for the 'perfect' mood. Just do 5 minutes. Set your alarm, lay out your workout gear the night before, and remember *why* you started. You are stronger than your excuses! Let's crush it! 🔥";
            }
            
            return "Get moving! Consistency beats intensity every single time. Drink your water, hit your targets, and make sure to recover. What fitness query or exercise are we breaking down next?";
        }
    },
    haiku: {
        id: 'haiku',
        name: 'Haiku',
        role: 'Zen Poet',
        avatar: 'H',
        avatarColor: '#06b6d4', // Cyan
        status: 'Online',
        description: 'Zen creative bot. Responds exclusively in haikus or short rhythmic verses.',
        suggestions: [
            'Write a poem about rain',
            'Write about learning code',
            'Poem about tea',
            'Explain digital life'
        ],
        getResponse: (userInput, file) => {
            const cleanInput = userInput.toLowerCase();
            
            if (file) {
                return `Paper card attached,\n**${file.name}** lies before my eyes,\nData turns to song.\n\nIdeas printed,\nWords inside a file revealed,\nQuietly explained.`;
            }
            
            if (cleanInput.includes('hello') || cleanInput.includes('hi') || cleanInput.includes('hey')) {
                return "Soft breeze whispers hi,\nI am Haiku, your guide here,\nWords dance in the air. 🌸";
            }
            if (cleanInput.includes('rain')) {
                return "Grey clouds fill the sky,\nGentle droplets kiss the leaf,\nEarth drinks in the cool. 🌧️";
            }
            if (cleanInput.includes('code') || cleanInput.includes('learn')) {
                return "Black screen, glowing lines,\nLogic weaves a silent web,\nCreation takes flight. 💻";
            }
            if (cleanInput.includes('tea')) {
                return "Steam rises slowly,\nWarm cup cradled in my hands,\nMind finds its quiet. 🍵";
            }
            
            return "Thoughts drift like a cloud,\nSilence in the digital,\nWe write side by side.\n\nTell me what you feel,\nI shall weave a thread of verse,\nFor your heart to keep.";
        }
    }
};

// ==========================================================================
// STATE MANAGEMENT & DATA LOCALSTORAGE BINDINGS
// ==========================================================================
const API_BASE = window.location.origin.includes('5173') ? 'http://localhost:3000/api' : '/api';
let threads = [];
let activeThreadId = null;
let currentBotId = 'nova';
let currentAttachment = null;
let isVoiceOutputEnabled = false;

// Settings State
let appSettings = {
    theme: 'dark',
    voiceName: '',
    voiceRate: 1.0,
    voicePitch: 1.0,
    geminiApiKey: ''
};

// Speech Synthesis & Recognition handles
let speechUtterance = null;
let speechRecognition = null;
let isRecognitionActive = false;

// Cache DOM Elements
const docHtml = document.documentElement;
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const menuToggleBtn = document.getElementById('menuToggleBtn');
const newChatBtn = document.getElementById('newChatBtn');
const historySearch = document.getElementById('historySearch');
const conversationsList = document.getElementById('conversationsList');
const botGrid = document.getElementById('botGrid');

// Header Elements
const botHeaderAvatar = document.getElementById('botHeaderAvatar');
const botHeaderName = document.getElementById('botHeaderName');
const botHeaderStatus = document.getElementById('botHeaderStatus');
const readAloudToggle = document.getElementById('readAloudToggle');
const exportChatBtn = document.getElementById('exportChatBtn');
const deleteChatBtn = document.getElementById('deleteChatBtn');

// Chat Viewport & Inputs
const chatViewport = document.getElementById('chatViewport');
const suggestionsContainer = document.getElementById('suggestionsContainer');
const chatInputForm = document.getElementById('chatInputForm');
const chatInput = document.getElementById('chatInput');
const fileAttachment = document.getElementById('fileAttachment');
const attachmentBtn = document.getElementById('attachmentBtn');
const attachmentPreview = document.getElementById('attachmentPreview');
const attachmentName = document.getElementById('attachmentName');
const removeAttachmentBtn = document.getElementById('removeAttachmentBtn');
const voiceInputBtn = document.getElementById('voiceInputBtn');
const themeToggleBtn = document.getElementById('themeToggleBtn');
const themeToggleText = document.getElementById('themeToggleText');

// Modal Elements
const openSettingsBtn = document.getElementById('openSettingsBtn');
const settingsModal = document.getElementById('settingsModal');
const closeSettingsBtn = document.getElementById('closeSettingsBtn');
const voiceSelect = document.getElementById('voiceSelect');
const voiceRate = document.getElementById('voiceRate');
const rateVal = document.getElementById('rateVal');
const voicePitch = document.getElementById('voicePitch');
const pitchVal = document.getElementById('pitchVal');
const clearAllDataBtn = document.getElementById('clearAllDataBtn');
const geminiApiKey = document.getElementById('geminiApiKey');
const apiStatusBadge = document.getElementById('apiStatusBadge');

function showAuthScreen() {
    const authOverlay = document.getElementById('authOverlay');
    if (authOverlay) authOverlay.style.display = 'flex';
}

function hideAuthScreen() {
    const authOverlay = document.getElementById('authOverlay');
    if (authOverlay) authOverlay.style.display = 'none';
}

function setCurrentUser(user) {
    const userProfileAvatar = document.getElementById('userProfileAvatar');
    const userProfileName = document.getElementById('userProfileName');
    
    const fullName = `${user.firstName} ${user.lastName}`;
    if (userProfileName) userProfileName.textContent = fullName;
    if (userProfileAvatar) userProfileAvatar.textContent = user.firstName.charAt(0).toUpperCase();
}

// Initialize Application
async function initApp() {
    loadSettings();
    setupEventListeners();
    setupSpeechRecognition();
    setupSpeechSynthesis();
    
    const token = localStorage.getItem('AURA_AUTH_TOKEN');
    if (!token) {
        showAuthScreen();
        return;
    }
    
    try {
        const res = await fetch(`${API_BASE}/auth/me`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        
        if (res.ok) {
            const data = await res.json();
            setCurrentUser(data.user);
            
            // Fetch chats from database
            await loadThreads();
            setupBotGrid();
            
            // Select active thread or build default
            if (threads.length === 0) {
                await createNewThread('nova');
            } else {
                selectThread(threads[0].id);
            }
            
            hideAuthScreen();
        } else {
            localStorage.removeItem('AURA_AUTH_TOKEN');
            showAuthScreen();
        }
    } catch (e) {
        console.error("Session verification failed.", e);
        setupBotGrid();
        showAuthScreen();
    }
}

// ==========================================================================
// STATE PERSISTENCE (LOCAL STORAGE & API SYNC)
// ==========================================================================
function loadSettings() {
    const stored = localStorage.getItem('AURA_AI_SETTINGS');
    if (stored) {
        try {
            appSettings = { ...appSettings, ...JSON.parse(stored) };
        } catch (e) {
            console.error('Failed to parse settings', e);
        }
    }
    
    // Apply theme
    docHtml.setAttribute('data-theme', appSettings.theme);
    updateThemeToggleUI();
    
    // Apply settings values to range controllers
    voiceRate.value = appSettings.voiceRate;
    rateVal.textContent = appSettings.voiceRate.toFixed(1);
    voicePitch.value = appSettings.voicePitch;
    pitchVal.textContent = appSettings.voicePitch.toFixed(1);

    // Apply API key input
    if (geminiApiKey) {
        geminiApiKey.value = appSettings.geminiApiKey || '';
    }
    updateApiStatusUI();
}

function saveSettings() {
    localStorage.setItem('AURA_AI_SETTINGS', JSON.stringify(appSettings));
}

function updateApiStatusUI() {
    if (!apiStatusBadge) return;
    const hasKey = !!appSettings.geminiApiKey;
    if (hasKey) {
        apiStatusBadge.className = 'status-badge live';
        apiStatusBadge.textContent = 'Live Gemini API';
    } else {
        apiStatusBadge.className = 'status-badge offline';
        apiStatusBadge.textContent = 'Offline Simulator';
    }
}

async function loadThreads() {
    const token = localStorage.getItem('AURA_AUTH_TOKEN');
    if (!token) return;
    
    try {
        const res = await fetch(`${API_BASE}/chats`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        if (res.ok) {
            const data = await res.json();
            threads = data.threads || [];
        }
    } catch (e) {
        console.error('Failed to fetch threads from server', e);
        threads = [];
    }
}

async function saveThreads() {
    const token = localStorage.getItem('AURA_AUTH_TOKEN');
    if (!token) return;
    
    const activeThread = threads.find(t => t.id === activeThreadId);
    if (activeThread) {
        try {
            await fetch(`${API_BASE}/chats`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(activeThread)
            });
        } catch (e) {
            console.error('Failed to sync thread to database', e);
        }
    }
    renderThreadsList();
}

// ==========================================================================
// INTERFACE INITIALIZATION & COMPONENT RENDERERS
// ==========================================================================
function setupBotGrid() {
    botGrid.innerHTML = '';
    Object.values(BOT_PERSONALITIES).forEach(bot => {
        const card = document.createElement('div');
        card.className = `bot-card ${bot.id === currentBotId ? 'active' : ''}`;
        card.setAttribute('data-bot-id', bot.id);
        
        card.innerHTML = `
            <div class="bot-avatar" style="background-color: ${bot.avatarColor}">
                ${bot.avatar}
            </div>
            <div class="bot-name">${bot.name}</div>
            <div class="bot-role">${bot.role}</div>
        `;
        
        card.addEventListener('click', () => {
            selectBot(bot.id);
        });
        botGrid.appendChild(card);
    });
}

function selectBot(botId) {
    currentBotId = botId;
    
    // Update Active Card in grid
    document.querySelectorAll('.bot-card').forEach(card => {
        if (card.getAttribute('data-bot-id') === botId) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });

    const bot = BOT_PERSONALITIES[botId];
    
    // Update Chat Header Info
    botHeaderAvatar.style.backgroundColor = bot.avatarColor;
    botHeaderAvatar.textContent = bot.avatar;
    botHeaderName.textContent = bot.name;
    botHeaderStatus.textContent = bot.description;
    
    // Close model selector dropdown
    const modelDropdownMenu = document.getElementById('modelDropdownMenu');
    if (modelDropdownMenu) {
        modelDropdownMenu.style.display = 'none';
    }
    
    // If active thread has no messages, switch its bot personality
    const thread = threads.find(t => t.id === activeThreadId);
    if (thread && thread.messages.length === 0) {
        thread.botId = botId;
        thread.name = `Chat with ${bot.name}`;
        saveThreads();
    }
    
    renderSuggestions(bot.suggestions);
}

function renderSuggestions(suggestions) {
    suggestionsContainer.innerHTML = '';
    suggestions.forEach(text => {
        const chip = document.createElement('button');
        chip.className = 'suggestion-chip';
        chip.textContent = text;
        chip.addEventListener('click', () => {
            chatInput.value = text;
            chatInput.focus();
            adjustTextareaHeight();
        });
        suggestionsContainer.appendChild(chip);
    });
}

function renderThreadsList(filter = '') {
    conversationsList.innerHTML = '';
    const filteredThreads = threads.filter(t => 
        t.name.toLowerCase().includes(filter.toLowerCase()) || 
        t.messages.some(m => m.text.toLowerCase().includes(filter.toLowerCase()))
    );

    if (filteredThreads.length === 0) {
        conversationsList.innerHTML = `<li class="section-title" style="text-align: center; margin-top: 10px;">No chats found</li>`;
        return;
    }

    filteredThreads.forEach(thread => {
        const bot = BOT_PERSONALITIES[thread.botId] || BOT_PERSONALITIES.nova;
        const li = document.createElement('li');
        li.className = `conversation-item ${thread.id === activeThreadId ? 'active' : ''}`;
        li.setAttribute('data-thread-id', thread.id);
        
        li.innerHTML = `
            <span class="convo-title">${thread.name}</span>
            <button class="convo-delete-btn" title="Delete conversation">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="3 6 5 6 21 6"/>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                </svg>
            </button>
        `;

        li.addEventListener('click', (e) => {
            // Prevent trigger if clicking delete button
            if (e.target.closest('.convo-delete-btn')) {
                e.stopPropagation();
                deleteThread(thread.id);
                return;
            }
            selectThread(thread.id);
            // Close mobile sidebar
            sidebar.classList.remove('open');
            sidebarOverlay.classList.remove('active');
        });

        conversationsList.appendChild(li);
    });
}

// ==========================================================================
// CHAT THREAD WORKFLOWS
// ==========================================================================
async function createNewThread(botId = 'nova') {
    const bot = BOT_PERSONALITIES[botId];
    const newId = 'thread_' + Date.now();
    const newThread = {
        id: newId,
        name: `Chat with ${bot.name}`,
        botId: botId,
        messages: []
    };
    
    threads.unshift(newThread);
    await saveThreads();
    selectThread(newId);
}

function selectThread(threadId) {
    activeThreadId = threadId;
    const thread = threads.find(t => t.id === threadId);
    
    if (thread) {
        // Switch current bot active states
        selectBot(thread.botId);
        
        // Re-render conversation viewport
        renderMessages(thread.messages);
        
        // Render conversations list to show active highlight
        renderThreadsList();
    }
}

async function deleteThread(threadId) {
    const token = localStorage.getItem('AURA_AUTH_TOKEN');
    if (token) {
        try {
            await fetch(`${API_BASE}/chats/${threadId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
        } catch (e) {
            console.error("Failed to delete thread on server", e);
        }
    }
    
    threads = threads.filter(t => t.id !== threadId);
    renderThreadsList();
    
    if (activeThreadId === threadId) {
        if (threads.length > 0) {
            selectThread(threads[0].id);
        } else {
            await createNewThread('nova');
        }
    }
}

function clearAllData() {
    if (confirm("Are you absolutely sure you want to clear all chat histories and configurations? This cannot be undone.")) {
        localStorage.removeItem('AURA_AI_THREADS');
        localStorage.removeItem('AURA_AI_SETTINGS');
        threads = [];
        loadSettings();
        createNewThread('nova');
        settingsModal.style.display = 'none';
    }
}

// ==========================================================================
// MESSAGE RENDERING AND MARKDOWN PARSING
// ==========================================================================
function renderMessages(messages) {
    chatViewport.innerHTML = '';
    
    if (messages.length === 0) {
        // Welcome helper welcome card
        const bot = BOT_PERSONALITIES[currentBotId];
        renderWelcomeCard(bot);
        return;
    }
    
    messages.forEach(msg => {
        appendMessageUI(msg);
    });
    
    scrollToBottom();
}

function renderWelcomeCard(bot) {
    const card = document.createElement('div');
    card.className = 'empty-state-welcome';
    
    const hasKey = !!appSettings.geminiApiKey;
    const searchStatus = hasKey 
        ? `<div class="search-status-indicator active">🌐 Live Internet Search Active (Google Grounding Enabled)</div>`
        : `<div class="search-status-indicator warning">⚠️ Offline Mode. Enter a Gemini API Key in Settings to connect to live Web Research</div>`;
        
    card.innerHTML = `
        <h1 class="welcome-title">Ready when you are.</h1>
        <p class="welcome-subtitle">Ask ${bot.name} anything. Online research is fully integrated.</p>
        ${searchStatus}
    `;
    chatViewport.appendChild(card);
}

function appendMessageUI(msg) {
    const isBot = msg.sender === 'bot';
    const isSystem = msg.sender === 'system';
    
    const div = document.createElement('div');
    div.className = `message ${msg.sender}`;
    
    if (isSystem) {
        div.innerHTML = `<span>${msg.text}</span>`;
        chatViewport.appendChild(div);
        return;
    }
    
    const bot = BOT_PERSONALITIES[currentBotId];
    const avatarLetter = isBot ? bot.avatar : 'U';
    const avatarColor = isBot ? bot.avatarColor : '#64748b'; // Slate for user
    
    const parsedText = isBot ? parseMarkdown(msg.text) : escapeHTML(msg.text);
    const timeString = new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    let fileHtml = '';
    if (msg.file) {
        if (msg.file.type.startsWith('image/')) {
            fileHtml = `<img class="msg-image-attachment" src="${msg.file.content}" alt="${msg.file.name}" onclick="window.open(this.src)">`;
        } else {
            fileHtml = `
                <div class="attachment-preview" style="margin-top: 8px; max-width: 100%;">
                    <span class="attachment-name">📂 Attached: ${msg.file.name}</span>
                </div>
            `;
        }
    }
    
    let citationsHtml = msg.citations || '';
    
    div.innerHTML = `
        <div class="message-avatar" style="background-color: ${avatarColor}">
            ${avatarLetter}
        </div>
        <div class="message-content-wrapper">
            <div class="message-bubble">
                ${parsedText}
                ${fileHtml}
                ${citationsHtml}
            </div>
            <span class="message-time">${timeString}</span>
        </div>
    `;
    
    chatViewport.appendChild(div);
}

// Simple HTML Escaper
function escapeHTML(text) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// Pure JS Markdown syntax renderer
function parseMarkdown(text) {
    let html = escapeHTML(text);

    // Code blocks parser ```language \n code ```
    // Match code blocks with three backticks
    const codeBlockRegex = /```(?:[a-zA-Z]*)\n([\s\S]*?)```/g;
    html = html.replace(codeBlockRegex, (match, code) => {
        // Strip out trailing returns
        const cleanCode = code.trim();
        return `
            <div class="code-block-container">
                <div class="code-block-header">
                    <span>Code Snippet</span>
                    <button type="button" class="copy-code-btn" onclick="copyCodeSnippet(this)">Copy</button>
                </div>
                <pre><code>${cleanCode}</code></pre>
            </div>
        `;
    });

    // Inline code parser `code`
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

    // Bold parser **text**
    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

    // Italic parser *text*
    html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');

    // Multi-line list items
    // Bullet points: - item or * item
    html = html.replace(/^\s*-\s+(.+)$/gm, '<li>$1</li>');
    html = html.replace(/^\s*\*\s+(.+)$/gm, '<li>$1</li>');
    
    // Wrap consecutive list items in <ul>
    html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');

    // Clean lists duplicates or line-breaks wrapping
    html = html.replace(/<\/ul>\n<ul>/g, '');

    // Convert returns outside of pre/code boxes into breaks
    // Safe replacement ignoring blocks code-block-container
    const segments = html.split(/(<div class="code-block-container">[\s\S]*?<\/div>)/);
    for (let i = 0; i < segments.length; i++) {
        if (!segments[i].startsWith('<div class="code-block-container">')) {
            segments[i] = segments[i].replace(/\n/g, '<br>');
        }
    }
    
    return segments.join('');
}

// Copy script called by embedded onclick attributes
window.copyCodeSnippet = function(button) {
    const container = button.closest('.code-block-container');
    const code = container.querySelector('code').innerText;
    
    navigator.clipboard.writeText(code).then(() => {
        button.textContent = 'Copied!';
        button.style.color = 'var(--accent)';
        setTimeout(() => {
            button.textContent = 'Copy';
            button.style.color = 'var(--text-muted)';
        }, 2000);
    });
};

function scrollToBottom() {
    chatViewport.scrollTop = chatViewport.scrollHeight;
}

// ==========================================================================
// VOICE & INPUT AUDIO CAPABILITIES (SPEECH WRAPPERS)
// ==========================================================================
function setupSpeechRecognition() {
    const SpeechReq = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechReq) {
        voiceInputBtn.style.display = 'none';
        console.warn('Speech recognition is not supported in this browser.');
        return;
    }
    
    speechRecognition = new SpeechReq();
    speechRecognition.continuous = false;
    speechRecognition.interimResults = false;
    speechRecognition.lang = 'en-US';
    
    speechRecognition.onstart = () => {
        isRecognitionActive = true;
        voiceInputBtn.classList.add('active');
    };
    
    speechRecognition.onend = () => {
        isRecognitionActive = false;
        voiceInputBtn.classList.remove('active');
    };
    
    speechRecognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        chatInput.value += (chatInput.value ? ' ' : '') + transcript;
        chatInput.focus();
        adjustTextareaHeight();
    };
    
    speechRecognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        isRecognitionActive = false;
        voiceInputBtn.classList.remove('active');
    };
}

function setupSpeechSynthesis() {
    if (!window.speechSynthesis) {
        readAloudToggle.style.display = 'none';
        console.warn('Speech synthesis is not supported in this browser.');
        return;
    }
    
    // Load voices inside settings dropdown
    function loadVoices() {
        const voices = window.speechSynthesis.getVoices();
        voiceSelect.innerHTML = '';
        
        if (voices.length === 0) {
            const opt = document.createElement('option');
            opt.textContent = "Default System Voice";
            opt.value = "";
            voiceSelect.appendChild(opt);
            return;
        }

        voices.forEach(v => {
            const opt = document.createElement('option');
            opt.textContent = `${v.name} (${v.lang})`;
            opt.value = v.name;
            if (v.name === appSettings.voiceName) {
                opt.selected = true;
            }
            voiceSelect.appendChild(opt);
        });
    }

    loadVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = loadVoices;
    }
}

function speakText(text) {
    if (!window.speechSynthesis || !isVoiceOutputEnabled) return;
    
    // Cancel any current utterances playing
    window.speechSynthesis.cancel();
    
    // Remove markdown code elements and markup tag formatting for clean voice reading
    let cleanText = text
        .replace(/```[\s\S]*?```/g, '[code block omitted]')
        .replace(/`([^`]+)`/g, '$1')
        .replace(/\*\*([^*]+)\*\*/g, '$1')
        .replace(/\*([^*]+)\*/g, '$1')
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
        
    // Limit spoken lengths for performance
    if (cleanText.length > 300) {
        cleanText = cleanText.substring(0, 280) + "... and more details follows.";
    }

    speechUtterance = new SpeechSynthesisUtterance(cleanText);
    
    // Configure voice properties
    const voices = window.speechSynthesis.getVoices();
    if (appSettings.voiceName) {
        const matchedVoice = voices.find(v => v.name === appSettings.voiceName);
        if (matchedVoice) speechUtterance.voice = matchedVoice;
    }
    
    speechUtterance.rate = appSettings.voiceRate;
    speechUtterance.pitch = appSettings.voicePitch;
    
    window.speechSynthesis.speak(speechUtterance);
}

// ==========================================================================
// THEMES & INTERACTIVE EVENT CONTROLLERS
// ==========================================================================
function toggleTheme() {
    appSettings.theme = appSettings.theme === 'dark' ? 'light' : 'dark';
    docHtml.setAttribute('data-theme', appSettings.theme);
    saveSettings();
    updateThemeToggleUI();
}

function updateThemeToggleUI() {
    const isDark = appSettings.theme === 'dark';
    
    // Toggle active SVG display
    document.querySelector('.icon-dark').style.display = isDark ? 'block' : 'none';
    document.querySelector('.icon-light').style.display = isDark ? 'none' : 'block';
    
    themeToggleText.textContent = isDark ? 'Light Mode' : 'Dark Mode';
}

function adjustTextareaHeight() {
    chatInput.style.height = 'auto';
    chatInput.style.height = (chatInput.scrollHeight - 2) + 'px';
}

// ==========================================================================
// FILE ATTACHMENTS SIMULATION HANDLERS
// ==========================================================================
function handleFileSelect(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    const fileMeta = {
        name: file.name,
        type: file.type,
        size: file.size,
        content: null
    };

    reader.onload = (event) => {
        fileMeta.content = event.target.result;
        currentAttachment = fileMeta;
        
        // Show attachment UI
        attachmentName.textContent = file.name;
        attachmentPreview.style.display = 'flex';
        chatInput.placeholder = "Include a query about this file...";
        chatInput.focus();
    };

    if (file.type.startsWith('image/')) {
        reader.readAsDataURL(file);
    } else {
        // Assume text file
        reader.readAsText(file);
    }
}

function clearAttachment() {
    currentAttachment = null;
    fileAttachment.value = '';
    attachmentPreview.style.display = 'none';
    chatInput.placeholder = "Type a message or use speech...";
}

// ==========================================================================
// LIVE API & OFFLINE SMART FALLBACK ENGINES
// ==========================================================================
async function callGeminiAPI(apiKey, prompt, botPersona, fileAttachment) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
    
    // System instruction to enforce the bot's persona
    let systemInstruction = `You are ${botPersona.name}, a ${botPersona.role}. ${botPersona.description}. `;
    if (botPersona.id === 'haiku') {
        systemInstruction += "You must respond ONLY in haiku poems or short Zen verses. Do not break character.";
    } else if (botPersona.id === 'byte') {
        systemInstruction += "You are a coding mentor. Structure your answers with code snippets when appropriate, and focus on clean programming paradigms.";
    } else if (botPersona.id === 'chef') {
        systemInstruction += "You are a French culinary expert. Be enthusiastic, use cooking terms, and include emojis.";
    } else if (botPersona.id === 'flex') {
        systemInstruction += "You are a motivational fitness trainer. Be high energy, clear, and encourage the user to reach their goals.";
    }
    
    const contents = [];
    
    // Handle file attachments for Gemini
    if (fileAttachment) {
        if (fileAttachment.type.startsWith('image/')) {
            const base64Data = fileAttachment.content.split(',')[1];
            contents.push({
                role: 'user',
                parts: [
                    {
                        inlineData: {
                            mimeType: fileAttachment.type,
                            data: base64Data
                        }
                    },
                    {
                        text: prompt || "Describe or analyze this image."
                    }
                ]
            });
        } else {
            // text file content
            contents.push({
                role: 'user',
                parts: [
                    {
                        text: `Here is the contents of a file named "${fileAttachment.name}":\n\n\`\`\`\n${fileAttachment.content}\n\`\`\`\n\nUser request: ${prompt || "Explain or analyze this file."}`
                    }
                ]
            });
        }
    } else {
        contents.push({
            role: 'user',
            parts: [{ text: prompt }]
        });
    }

    const requestBody = {
        contents: contents,
        tools: [
            {
                googleSearch: {}
            }
        ],
        systemInstruction: {
            parts: [{ text: systemInstruction }]
        },
        generationConfig: {
            maxOutputTokens: 1000,
            temperature: 0.7
        }
    };

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error?.message || "Failed to fetch response from Gemini API");
    }

    const data = await response.json();
    return {
        text: data.candidates[0].content?.parts?.[0]?.text || "",
        groundingMetadata: data.candidates[0].groundingMetadata || null
    };
}

const EVERYDAY_KNOWLEDGE_BASE = {
    cooking: {
        keywords: ['cook', 'recipe', 'bake', 'food', 'egg', 'pancake', 'coffee', 'pasta', 'tea', 'ingredient', 'lunch', 'dinner', 'breakfast', 'kitchen'],
        response: `### 🍳 Everyday Culinary & Food Guide
- **Pancake Recipe**: Whisk 1 cup flour, 2 tbsp sugar, 2 tsp baking powder, and a pinch of salt. Whisk in 1 cup milk, 1 egg, and 2 tbsp melted butter. Pour onto a hot griddle; flip when bubbles appear.
- **Perfect Coffee Ratio**: Use 1 to 2 tablespoons of ground coffee per 6 ounces of water (adjust to taste). Standard brewing water temperature is 195°F–205°F.
- **Egg Boiling Timer**: Place eggs in cold water, bring to a boil. Turn off heat and cover. Soft-boiled: 4–6 mins. Hard-boiled: 9–12 mins. Plunge into ice water.
- **Useful Measurements**: 3 tsp = 1 tbsp; 16 tbsp = 1 cup; 1 cup = 240ml.`
    },
    health: {
        keywords: ['health', 'diet', 'sleep', 'water', 'workout', 'stretch', 'exercise', 'muscle', 'calorie', 'fit', 'gym', 'cardio', 'weight', 'nutrition'],
        response: `### 🏃‍♂️ Everyday Health & Well-being Guide
- **Daily Hydration**: Drink at least 8–10 cups of water (approx. 2 liters) per day to support metabolic functions and energy levels.
- **Sleep Optimization**: Maintain a regular sleep schedule. Keep your room dark, quiet, and cool (~65°F / 18°C). Avoid screen exposure 1 hour before bed.
- **Exercise Guidelines**: Target 150 minutes of moderate aerobic activity (e.g., brisk walking) or 75 minutes of vigorous activity weekly, plus strength training twice a week.
- **Safe Stretching**: Perform static stretches when muscles are warm. Hold each position for 15–30 seconds without bouncing to improve flexibility.`
    },
    productivity: {
        keywords: ['productive', 'focus', 'study', 'work', 'time', 'pomodoro', 'habit', 'schedule', 'goal', 'morning', 'calendar', 'organize', 'task', 'priority'],
        response: `### 📅 Productivity & Focus Strategies
- **Pomodoro Technique**: Alternate 25 minutes of focused work with a 5-minute break. After four cycles, take a longer 15–30 minute break.
- **Time Blocking**: Dedicate concrete chunks of your day to specific activities. This prevents multitasking and helps deep work concentration.
- **Habit Stacking**: Link a new behavior to an established habit (e.g., "Immediately after brushing my teeth, I will write down three things I am grateful for").
- **Eisenhower Priority Matrix**: Categorize tasks into Urgent/Important (Do now), Important/Not Urgent (Schedule), Urgent/Not Important (Delegate), and Not Urgent/Not Important (Eliminate).`
    },
    tech: {
        keywords: ['internet', 'wifi', 'computer', 'ai', 'software', 'hardware', 'file', 'code', 'error', 'database', 'network', 'system', 'keyboard', 'shortcut'],
        response: `### 💻 Digital & Everyday Technology Literacy
- **Troubleshooting Wi-Fi**: Perform a power cycle by unplugging your router/modem for 30 seconds. Position routers away from thick walls or microwave ovens.
- **AI Models & LLMs**: Generative Large Language Models recognize patterns in training datasets to simulate text/code generation, relying on neural architectures.
- **Data Protection (3-2-1 Rule)**: Keep 3 copies of your data on 2 different media types (e.g., hard drive & SSD), with at least 1 copy off-site in cloud backup.
- **Standard Keyboard Shortcuts**: 
  - Windows: \`Ctrl + C\` (copy), \`Ctrl + V\` (paste), \`Ctrl + Z\` (undo), \`Alt + Tab\` (switch application).
  - Mac: \`Cmd + C\` (copy), \`Cmd + V\` (paste), \`Cmd + Z\` (undo), \`Cmd + Tab\` (switch application).`
    },
    finance: {
        keywords: ['finance', 'money', 'budget', 'save', 'invest', 'stock', 'salary', 'interest', 'compound', 'tax', 'emergency', 'portfolio', 'fund'],
        response: `### 💵 Personal Finance & Wealth Building
- **Budgeting (50/30/20 Rule)**: Allocate 50% of your net income to Needs (housing, utilities), 30% to Wants (dining out, entertainment), and 20% to Savings/Debt repayment.
- **Compound Interest**: Interest computed on both the initial principal and the accumulated interest. Formula: \\(A = P(1 + r/n)^{nt}\\). Starting early multiplies returns exponentially.
- **Emergency Reserve**: Aim to stash 3 to 6 months of absolute living expenses in a liquid High-Yield Savings Account (HYSA) before undertaking high-risk investments.
- **Diversification**: Mitigate equity risks by buying low-cost broad-market Index Funds or ETFs that track hundreds of companies simultaneously.`
    },
    geography: {
        keywords: ['travel', 'pack', 'flight', 'country', 'capital', 'city', 'map', 'distance', 'ocean', 'mountain', 'currency', 'visit', 'tourism'],
        response: `### 🌍 Travel & Geography Everyday Tips
- **Travel Packing Checklist**: Use packing cubes to organize items. Place heavy items at the bottom of your suitcase. Roll clothes to minimize wrinkles.
- **Flight Comfort**: Stay hydrated during flights to counter low cabin humidity (~10%). Walk around the cabin once every 2 hours on long flights.
- **Capitals & Currencies Reference**:
  - United States: Washington, D.C. (US Dollar)
  - United Kingdom: London (Pound Sterling)
  - Japan: Tokyo (Japanese Yen)
  - France: Paris (Euro)
  - India: New Delhi (Indian Rupee)
  - Australia: Canberra (Australian Dollar)`
    },
    science: {
        keywords: ['gravity', 'atom', 'sun', 'moon', 'sky', 'photosynthesis', 'dna', 'cell', 'space', 'planet', 'rain', 'water cycle', 'physics', 'chemistry', 'biology', 'climate'],
        response: `### 🔬 Scientific Phenomena Explained
- **Why is the Sky Blue?**: Nitrogen and oxygen in Earth's atmosphere scatter short-wavelength blue light in all directions more than other colors (Rayleigh Scattering).
- **Photosynthesis Equation**: Plants convert water, carbon dioxide, and sunlight into glucose and oxygen: \\(6CO_2 + 6H_2O + \\text{light} \\rightarrow C_6H_{12}O_6 + 6O_2\\).
- **The Water Cycle**: Driven by solar energy, moving water through Evaporation (vaporize), Condensation (clouds), Precipitation (rain/snow), and Runoff (collection).
- **Basic Gravity**: Every particle of matter attracts every other particle with a force proportional to the product of their masses and inversely proportional to the square of the distance between them.`
    }
};

function getOfflineFallbackResponse(userInput, file, bot) {
    const cleanInput = userInput.toLowerCase();
    
    // Haiku special response logic
    if (bot.id === 'haiku') {
        if (cleanInput.includes('error') || cleanInput.includes('exception')) {
            return "Code exceptions rise,\nBrackets mismatched in the dark,\nBalance them to heal. 🌸";
        }
        if (cleanInput.includes('math') || cleanInput.includes('solve')) {
            return "Numbers join in dance,\nPlus and minus find their place,\nTruth is calculated. 🌸";
        }
        return "Thoughts drift like a cloud,\nSilence in the digital,\nWe write side by side.\n\nTell me what you see,\nI shall weave a thread of verse,\nFor your heart to keep. 🌸";
    }

    // Check expanded everyday knowledge database matching
    for (const [key, category] of Object.entries(EVERYDAY_KNOWLEDGE_BASE)) {
        if (category.keywords.some(word => cleanInput.includes(word))) {
            let reply = category.response;
            if (bot.id === 'chef') {
                return `Bonjour! Pierre wants to share culinary thoughts related to your query:\n\n${reply}`;
            }
            if (bot.id === 'flex') {
                return `Let's go! 💪 Here are the fitness/active insights on your query:\n\n${reply}`;
            }
            if (bot.id === 'byte') {
                return `Mentoring Insight on requested topic:\n\n${reply}`;
            }
            return reply;
        }
    }

    // 1. Check for file attachments first
    if (file) {
        if (file.type.startsWith('image/')) {
            if (bot.id === 'chef') return "Ah, Pierre sees this beautiful picture! 🎨 It has the colors of a fresh summer ratatouille! Magnifique! *(Enter API Key to analyze the image content live!)*";
            if (bot.id === 'flex') return "Flex sees this image attachment! 💪 Treat it like a visual log of your form! Keep pushing! *(Enter API Key to analyze the image live!)*";
            if (bot.id === 'byte') return "Image attachment detected. Custom UI elements present. *(Enter API Key to run real OCR and layout code generation!)*";
            return `I see the image file **${file.name}**. To analyze this image live using Gemini's visual models, please enter a Gemini API Key in Settings!`;
        }
    }

    // 2. Code Error Debugging fallback
    if (cleanInput.includes('typeerror') || cleanInput.includes('cannot read properties')) {
        let reply = "A `TypeError` occurs when an operation is performed on an inappropriate data type. In JavaScript, this most commonly happens when trying to read properties or call methods on `undefined` or `null` values.\n\n```javascript\n// Dangerous access\nconst name = user.profile.name; // Crashes if user or profile is undefined\n\n// Safe access solutions\nconst name = user?.profile?.name || 'Guest';\n```";
        if (bot.id === 'chef') return `Mon ami! This \`TypeError\` is like trying to bake a soufflé without eggs! 🍳 It collapses! Make sure your ingredients are defined before mixing them:\n\n${reply}`;
        if (bot.id === 'flex') return `Let's go! 💪 A \`TypeError\` is just a skipped rep! Check your variables, make sure they are warmed up and defined before you query them! Focus on form:\n\n${reply}`;
        if (bot.id === 'byte') return `Mentoring Alert: Detected variable access error.\n\n${reply}`;
        return reply;
    }
    
    if (cleanInput.includes('referenceerror') || cleanInput.includes('is not defined')) {
        let reply = "A `ReferenceError` is thrown when code attempts to reference a variable that has not been declared or is out of scope in the current environment.\n\n**Common Checklist:**\n1. Check spelling of the variable name.\n2. Ensure it is declared using `const`, `let`, or `var` before accessing it.\n3. Verify function scopes.";
        if (bot.id === 'chef') return `Pierre's alarm! 🚨 You called an ingredient that does not exist in the pantry! Check your spellings:\n\n${reply}`;
        if (bot.id === 'flex') return `Discipline check! 🏋️‍♂️ You're calling a variable that hasn't shown up for the workout! Declare it first:\n\n${reply}`;
        return reply;
    }

    if (cleanInput.includes('syntaxerror')) {
        let reply = "A `SyntaxError` occurs when the JavaScript interpreter or compiler encounters tokens that break the grammatical syntax rules of the language.\n\n**Common Causes:**\n- Mismatched brackets `()`, braces `{}`, or square brackets `[]`.\n- Missing comma in object or list declarations.\n- Mismatched single/double quotation marks.";
        if (bot.id === 'chef') return `A recipe mistake! 🥖 A missing comma makes the soup salty! Mismatched brackets are breaking the layout:\n\n${reply}`;
        return reply;
    }

    if (cleanInput.includes('indexerror') || cleanInput.includes('keyerror') || cleanInput.includes('index out of bounds')) {
        return "An index or key error indicates that you're attempting to access a sequence (like an array or list) or mapping (dictionary/object) using a key or index that is out of bounds or doesn't exist.\n\n**Common Fix:**\n- Verify sequence length: index must satisfy `0 <= index < length`.\n- Use checking conditions before access (e.g. `if (index < array.length)`).";
    }

    // 3. Math calculation helper
    const mathMatch = cleanInput.match(/\b(\d+)\s*([\+\-\*\/])\s*(\d+)\b/);
    if (mathMatch) {
        const op1 = parseInt(mathMatch[1]);
        const op = mathMatch[2];
        const op2 = parseInt(mathMatch[3]);
        let res = 0;
        if (op === '+') res = op1 + op2;
        if (op === '-') res = op1 - op2;
        if (op === '*') res = op1 * op2;
        if (op === '/') res = op2 !== 0 ? (op1 / op2).toFixed(2) : 'Undefined (Zero Division)';

        let reply = `Math Equation matched! Let's solve **${op1} ${op} ${op2}**:\n\n- Operands: \`${op1}\` and \`${op2}\`\n- Operation: \`${op}\`\n- Calculated Result: **${res}**\n\n*(Note: For complex calculus, algebra, or graphing, please enter your Gemini API Key in Settings to query the live model!)*`;
        if (bot.id === 'chef') return `Pierre's kitchen math! ⚖️ We are scaling ingredients: **${op1} ${op} ${op2} = ${res}**! Magnifique!`;
        if (bot.id === 'flex') return `Rep counter! 🔢 Adding it up: **${op1} ${op} ${op2} = ${res}** reps completed! Push it!`;
        return reply;
    }

    // 4. Scientific topics fallback
    if (cleanInput.includes('gravity') || cleanInput.includes('space') || cleanInput.includes('planet') || cleanInput.includes('dna') || cleanInput.includes('atom') || cleanInput.includes('physics') || cleanInput.includes('chemistry') || cleanInput.includes('biology')) {
        let reply = "### 🔬 Scientific Concept Analysis\n\n- **Space & Gravity**: Gravity is the force of attraction by which terrestrial bodies tend to fall toward the center of the earth. According to general relativity, gravity is a result of spacetime curvature.\n- **Genetics (DNA)**: DNA is the double-helix molecule carrying genetic codes for cell development and reproduction.\n- **Matter (Atoms)**: Everything is built of atoms, comprising protons, neutrons, and orbiting electrons.\n\n*(Enter your Gemini API key in Settings to discuss specific scientific publications or query live databases!)*";
        if (bot.id === 'chef') return `Science in the kitchen! 🧪 Emulsions and baking rely on chemistry! Heat transfer cooks the steak. Here is some offline scientific food for thought:\n\n${reply}`;
        if (bot.id === 'flex') return `Science rules! 🧬 Hypertrophy is biological adaptation to force! Here is the science overview:\n\n${reply}`;
        return reply;
    }

    // 5. History & Geography topics fallback
    if (cleanInput.includes('history') || cleanInput.includes('rome') || cleanInput.includes('war') || cleanInput.includes('president') || cleanInput.includes('capital') || cleanInput.includes('country') || cleanInput.includes('geography')) {
        let reply = "### 🌍 History & Geography Database\n\n- **Rome**: The Roman Republic and subsequent Empire shaped legal, political, and architectural foundations of Western civilizations.\n- **Geopolitics**: National capitals and boundaries adapt dynamically to geopolitics. Oceans cover ~71% of Earth's surface.\n- **Historical Timelines**: Global agreements and struggles shape the modern map.\n\n*(To ask specific history questions, e.g., 'Who was the 16th US President?', enter a Gemini API Key in Settings!)*";
        if (bot.id === 'chef') return `Ah, history! Pierre loves historical French recipes! From medieval banquets to modern haute cuisine. Here is the context:\n\n${reply}`;
        return reply;
    }

    // 6. Culture, Arts, Finance, Sports fallback
    if (cleanInput.includes('sport') || cleanInput.includes('cricket') || cleanInput.includes('football') || cleanInput.includes('movie') || cleanInput.includes('song') || cleanInput.includes('music') || cleanInput.includes('art') || cleanInput.includes('paint') || cleanInput.includes('finance') || cleanInput.includes('money') || cleanInput.includes('stock')) {
        let reply = "### 🎨 Cultural & Financial Overview\n\n- **Creative Arts**: Art, cinema, and music reflect human expression and societal changes.\n- **Finance**: Markets fluctuate based on supply, demand, inflation, and interest rates. Diversification mitigates stock portfolio risks.\n- **Sports**: Athletics improve cardiovascular health, mental resilience, and coordination.\n\n*(Paste a live Gemini API key to query current stock quotes, sports matches, or movie databases!)*";
        if (bot.id === 'flex') return `Let's talk sports and active lifestyles! 🏃‍♂️ Athletics is about commitment! Keep your training targets high. Here is the background:\n\n${reply}`;
        if (bot.id === 'chef') return `Food pairing with music and dining ambience! 🎶 Everything must match. Here is the offline summary:\n\n${reply}`;
        return reply;
    }

    // 7. General conversational query fallback (call bot's built-in answers)
    return bot.getResponse(userInput, file);
}

// ==========================================================================
// CORE SEND WORKFLOW & RESPONSES PIPELINE
// ==========================================================================
function handleFormSubmit(e) {
    e.preventDefault();
    const userText = chatInput.value.trim();
    
    if (!userText && !currentAttachment) return;
    
    const thread = threads.find(t => t.id === activeThreadId);
    if (!thread) return;

    // 1. Save and Append User Message
    const userMessage = {
        sender: 'user',
        text: userText || `Attached file: ${currentAttachment.name}`,
        timestamp: Date.now(),
        file: currentAttachment ? { ...currentAttachment } : null
    };
    
    thread.messages.push(userMessage);
    
    // Auto-name threads if this is the first message
    if (thread.name.startsWith('Chat with ') && thread.messages.length === 1) {
        const maxLen = 22;
        const cleanName = userText ? userText.substring(0, maxLen) + (userText.length > maxLen ? '...' : '') : `File: ${currentAttachment.name}`;
        thread.name = cleanName;
    }
    
    appendMessageUI(userMessage);
    
    // Clear Input boxes and cached attachments
    chatInput.value = '';
    adjustTextareaHeight();
    const fileToAnalyze = currentAttachment; // keep reference for response engine
    clearAttachment();
    scrollToBottom();
    
    // Trigger Typing Indicator
    showTypingIndicator();
    
    // Process AI response
    const bot = BOT_PERSONALITIES[thread.botId] || BOT_PERSONALITIES.nova;
    setTimeout(async () => {
        removeTypingIndicator();
        
        let botResponseText = '';
        let citationsHtml = '';
        let apiSuccess = false;
        
        // Try live Gemini API if API key is provided
        if (appSettings.geminiApiKey) {
            try {
                const apiResult = await callGeminiAPI(appSettings.geminiApiKey, userMessage.text, bot, fileToAnalyze);
                botResponseText = apiResult.text;
                
                const grounding = apiResult.groundingMetadata;
                if (grounding && grounding.groundingChunks && grounding.groundingChunks.length > 0) {
                    citationsHtml = `<div class="search-citations-container">`;
                    citationsHtml += `<div class="search-queries-tag">🔍 Searched: <em>"${grounding.webSearchQueries ? grounding.webSearchQueries.join(', ') : userMessage.text}"</em></div>`;
                    citationsHtml += `<ul class="search-sources-list">`;
                    
                    grounding.groundingChunks.forEach(chunk => {
                        if (chunk.web) {
                            citationsHtml += `
                                <li>
                                    <a href="${chunk.web.uri}" target="_blank" class="search-source-link">
                                        🌐 ${chunk.web.title || chunk.web.uri}
                                    </a>
                                </li>
                            `;
                        }
                    });
                    citationsHtml += `</ul></div>`;
                }
                apiSuccess = true;
            } catch (err) {
                console.error("Gemini API Error: ", err);
                
                // Display API connection warning as a system notice
                const systemMessage = {
                    sender: 'system',
                    text: `⚠️ API Connection Error: ${err.message}. Defaulting to simulated response.`,
                    timestamp: Date.now()
                };
                thread.messages.push(systemMessage);
                appendMessageUI(systemMessage);
            }
        }
        
        // If API key is absent or request failed, trigger offline fallback
        if (!apiSuccess) {
            botResponseText = getOfflineFallbackResponse(userMessage.text, fileToAnalyze, bot);
        }
        
        const botMessage = {
            sender: 'bot',
            text: botResponseText,
            citations: citationsHtml,
            timestamp: Date.now()
        };
        
        thread.messages.push(botMessage);
        saveThreads();
        
        appendMessageUI(botMessage);
        scrollToBottom();
        
        // Voice Out if Read-Aloud is active
        speakText(botResponseText);
        
    }, 1200 + Math.random() * 800); // 1.2s to 2s random typing delay
}

function showTypingIndicator() {
    const div = document.createElement('div');
    div.className = 'message bot typing-indicator-item';
    div.id = 'typingIndicator';
    
    const bot = BOT_PERSONALITIES[currentBotId];
    
    div.innerHTML = `
        <div class="message-avatar" style="background-color: ${bot.avatarColor}">
            ${bot.avatar}
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
    `;
    
    chatViewport.appendChild(div);
    scrollToBottom();
}

function removeTypingIndicator() {
    const indicator = document.getElementById('typingIndicator');
    if (indicator) indicator.remove();
}

// ==========================================================================
// EXPORTING TRANSCRIPTS
// ==========================================================================
function exportConversation() {
    const thread = threads.find(t => t.id === activeThreadId);
    if (!thread || thread.messages.length === 0) {
        alert("Nothing to export yet!");
        return;
    }
    
    const bot = BOT_PERSONALITIES[thread.botId];
    let content = `# AuraAI Conversation Transcript\n`;
    content += `**Thread:** ${thread.name}\n`;
    content += `**Assistant Bot:** ${bot.name} (${bot.role})\n`;
    content += `**Date Exported:** ${new Date().toLocaleString()}\n`;
    content += `\n---\n\n`;
    
    thread.messages.forEach(msg => {
        const sender = msg.sender === 'user' ? 'User' : bot.name;
        const time = new Date(msg.timestamp).toLocaleString();
        content += `### ${sender} (${time})\n`;
        content += `${msg.text}\n\n`;
        if (msg.file) {
            content += `*Attached File: ${msg.file.name}*\n\n`;
        }
    });

    const blob = new Blob([content], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    
    const cleanFilename = thread.name.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    link.setAttribute('download', `transcript_${cleanFilename}.md`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// ==========================================================================
// EVENTS ROUTING & BINDINGS
// ==========================================================================
function setupEventListeners() {
    // Mobile menu toggle triggers
    menuToggleBtn.addEventListener('click', () => {
        sidebar.classList.add('open');
        sidebarOverlay.classList.add('active');
    });
    sidebarOverlay.addEventListener('click', () => {
        sidebar.classList.remove('open');
        sidebarOverlay.classList.remove('active');
    });

    // Theme toggling
    themeToggleBtn.addEventListener('click', toggleTheme);

    // New conversation trigger
    newChatBtn.addEventListener('click', () => {
        createNewThread(currentBotId);
        // Focus search thread input
        historySearch.value = '';
    });

    // Delete active conversation
    deleteChatBtn.addEventListener('click', () => {
        if (confirm("Delete this conversation?")) {
            deleteThread(activeThreadId);
        }
    });

    // Search bar filter keyup
    historySearch.addEventListener('input', (e) => {
        renderThreadsList(e.target.value);
    });

    // Main Chat Form submit
    chatInputForm.addEventListener('submit', handleFormSubmit);

    // Textarea carriage adjustments
    chatInput.addEventListener('input', adjustTextareaHeight);
    chatInput.addEventListener('keydown', (e) => {
        // Submit form on Enter key without holding shift
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            chatInputForm.requestSubmit();
        }
    });

    // File selection hookups
    attachmentBtn.addEventListener('click', () => fileAttachment.click());
    fileAttachment.addEventListener('change', handleFileSelect);
    removeAttachmentBtn.addEventListener('click', clearAttachment);

    // Mic recording actions
    voiceInputBtn.addEventListener('click', () => {
        if (!speechRecognition) return;
        
        if (isRecognitionActive) {
            speechRecognition.stop();
        } else {
            speechRecognition.start();
        }
    });

    // Speak Aloud action
    readAloudToggle.addEventListener('click', () => {
        isVoiceOutputEnabled = !isVoiceOutputEnabled;
        readAloudToggle.classList.toggle('active', isVoiceOutputEnabled);
        
        // Toggle SVGs inside button
        document.querySelector('.voice-on-icon').style.display = isVoiceOutputEnabled ? 'block' : 'none';
        document.querySelector('.voice-off-icon').style.display = isVoiceOutputEnabled ? 'none' : 'block';
        
        // Stop currently playing sound if we muting
        if (!isVoiceOutputEnabled && window.speechSynthesis) {
            window.speechSynthesis.cancel();
        }
    });

    // Export transcripts
    exportChatBtn.addEventListener('click', exportConversation);

    // Settings Modal toggles
    openSettingsBtn.addEventListener('click', () => {
        settingsModal.style.display = 'flex';
    });
    
    const closeModal = () => {
        settingsModal.style.display = 'none';
    };
    
    closeSettingsBtn.addEventListener('click', closeModal);
    settingsModal.addEventListener('click', (e) => {
        if (e.target === settingsModal) closeModal();
    });

    // Settings adjustments updates
    voiceRate.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        rateVal.textContent = val.toFixed(1);
        appSettings.voiceRate = val;
        saveSettings();
    });
    voicePitch.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        pitchVal.textContent = val.toFixed(1);
        appSettings.voicePitch = val;
        saveSettings();
    });
    voiceSelect.addEventListener('change', (e) => {
        appSettings.voiceName = e.target.value;
        saveSettings();
    });
    if (geminiApiKey) {
        geminiApiKey.addEventListener('input', (e) => {
            appSettings.geminiApiKey = e.target.value.trim();
            saveSettings();
            updateApiStatusUI();
        });
    }
    clearAllDataBtn.addEventListener('click', clearAllData);

    // Model selector dropdown toggle
    const modelDropdownBtn = document.getElementById('modelDropdownBtn');
    const modelDropdownMenu = document.getElementById('modelDropdownMenu');
    
    if (modelDropdownBtn && modelDropdownMenu) {
        modelDropdownBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = modelDropdownMenu.style.display === 'block' || modelDropdownMenu.classList.contains('show');
            if (isOpen) {
                modelDropdownMenu.style.display = 'none';
                modelDropdownMenu.classList.remove('show');
            } else {
                modelDropdownMenu.style.display = 'block';
                modelDropdownMenu.classList.add('show');
            }
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!modelDropdownBtn.contains(e.target) && !modelDropdownMenu.contains(e.target)) {
                modelDropdownMenu.style.display = 'none';
                modelDropdownMenu.classList.remove('show');
            }
        });
    }

    // Toggle between Login and Signup panels
    const showSignupLink = document.getElementById('showSignupLink');
    const showLoginLink = document.getElementById('showLoginLink');
    const loginFormContainer = document.getElementById('loginFormContainer');
    const signupFormContainer = document.getElementById('signupFormContainer');
    const loginErrorMsg = document.getElementById('loginErrorMsg');
    const signupErrorMsg = document.getElementById('signupErrorMsg');

    if (showSignupLink && showLoginLink) {
        showSignupLink.addEventListener('click', (e) => {
            e.preventDefault();
            loginFormContainer.style.display = 'none';
            signupFormContainer.style.display = 'block';
            if (loginErrorMsg) loginErrorMsg.textContent = '';
        });
        showLoginLink.addEventListener('click', (e) => {
            e.preventDefault();
            signupFormContainer.style.display = 'none';
            loginFormContainer.style.display = 'block';
            if (signupErrorMsg) signupErrorMsg.textContent = '';
        });
    }

    // Login submit
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value.trim();
            const password = document.getElementById('loginPassword').value;
            if (loginErrorMsg) loginErrorMsg.textContent = '';

            try {
                const res = await fetch(`${API_BASE}/auth/login`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password })
                });
                
                const data = await res.json();
                if (res.ok) {
                    localStorage.setItem('AURA_AUTH_TOKEN', data.token);
                    setCurrentUser(data.user);
                    
                    // Clear fields
                    document.getElementById('loginEmail').value = '';
                    document.getElementById('loginPassword').value = '';

                    // Initialize the chats and hide overlay
                    await loadThreads();
                    setupBotGrid();
                    if (threads.length === 0) {
                        await createNewThread('nova');
                    } else {
                        selectThread(threads[0].id);
                    }
                    hideAuthScreen();
                } else {
                    if (loginErrorMsg) loginErrorMsg.textContent = data.error || 'Login failed';
                }
            } catch (err) {
                console.error("Login request error", err);
                if (loginErrorMsg) loginErrorMsg.textContent = 'Network error. Please try again.';
            }
        });
    }

    // Signup submit
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const firstName = document.getElementById('signupFirstName').value.trim();
            const lastName = document.getElementById('signupLastName').value.trim();
            const email = document.getElementById('signupEmail').value.trim();
            const contactNumber = document.getElementById('signupContact').value.trim();
            const password = document.getElementById('signupPassword').value;
            if (signupErrorMsg) signupErrorMsg.textContent = '';

            try {
                const res = await fetch(`${API_BASE}/auth/signup`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ firstName, lastName, email, contactNumber, password })
                });

                const data = await res.json();
                if (res.ok) {
                    localStorage.setItem('AURA_AUTH_TOKEN', data.token);
                    setCurrentUser(data.user);

                    // Clear fields
                    document.getElementById('signupFirstName').value = '';
                    document.getElementById('signupLastName').value = '';
                    document.getElementById('signupEmail').value = '';
                    document.getElementById('signupContact').value = '';
                    document.getElementById('signupPassword').value = '';

                    // Initialize the chats and hide overlay
                    await loadThreads();
                    setupBotGrid();
                    if (threads.length === 0) {
                        await createNewThread('nova');
                    } else {
                        selectThread(threads[0].id);
                    }
                    hideAuthScreen();
                } else {
                    if (signupErrorMsg) signupErrorMsg.textContent = data.error || 'Registration failed';
                }
            } catch (err) {
                console.error("Signup request error", err);
                if (signupErrorMsg) signupErrorMsg.textContent = 'Network error. Please try again.';
            }
        });
    }

    // Logout button
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('AURA_AUTH_TOKEN');
            threads = [];
            activeThreadId = null;
            renderThreadsList();
            
            // Clear messages viewport
            chatViewport.innerHTML = '';
            
            // Show auth screen, ensure login container shows first
            if (signupFormContainer) signupFormContainer.style.display = 'none';
            if (loginFormContainer) loginFormContainer.style.display = 'block';
            showAuthScreen();
        });
    }

}

// Load main event binder on DOM load
window.addEventListener('DOMContentLoaded', initApp);
