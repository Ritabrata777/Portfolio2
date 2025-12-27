// Terminal Portfolio
class Terminal {
    constructor() {
        this.GEMINI_API_KEY = 'AIzaSyDgcSl-KXLc6S1450C9sQPEO4WGRgAhYRE';
        this.commandList = ['help', 'about', 'projects', 'skills', 'experience', 'contact', 'education', 'certifications', 'sudo', 'clear'];

        this.portfolioContext = `You are an AI assistant for Ritabrata Majumdar's portfolio terminal. 
Ritabrata is a Blockchain & Web3 Enthusiast, HITK'28 BTech student in Electronics & Communication Engineering.
Skills: C, C++, HTML, CSS, JavaScript, Solidity, Move, Node.js, React.js, MongoDB, IoT, Embedded Systems, Video Editing.
Projects: MediChain, MediVault, Medi Translate, Smart Irrigation System, Fall Direction Detection, AI-Powered Health Monitor, Autonomous Environmental Robot.
Certifications: Tata Group Data Visualisation, Cyfrin Updraft Blockchain & Solidity, Mastercard Cybersecurity, Google Play Academy.
Contact: ritabratamajumdar70@gmail.com, GitHub: Ritabrata777, LinkedIn: ritabrata-majumdar-764b81332
Location: Kolkata, West Bengal, India.

Available commands: help, about, projects, skills, experience, contact, education, certifications, clear.

If user types a misspelled command, suggest the correct one.
If user asks a question, answer based on Ritabrata's portfolio info.
Keep responses concise and terminal-friendly (no markdown, use plain text).`;

        this.commands = {
            help: `<div class="help-title">Available commands:</div>
<div class="help-item"><span>about</span> - Learn about me</div>
<div class="help-item"><span>projects</span> - View my projects</div>
<div class="help-item"><span>skills</span> - See my technical skills</div>
<div class="help-item"><span>experience</span> - My work experience</div>
<div class="help-item"><span>contact</span> - How to reach me</div>
<div class="help-item"><span>education</span> - My educational background</div>
<div class="help-item"><span>certifications</span> - View my certifications</div>
<div class="help-item"><span>clear</span> - Clear the terminal</div>`,

            about: `Hi! I'm Ritabrata Majumdar, a Blockchain & Web3 Enthusiast.

HITK'28 student passionate about Blockchain & Web3. Skilled in
After Effects and Web Development. I bring ideas to life
through innovation and code.

Currently focused on:
• Blockchain & Smart Contract Development
• Full-stack Web Development
• IoT & Embedded Systems
• AI/ML Applications
• Video Editing & Motion Graphics`,

            projects: `🚀 Featured Projects:

<span style="color:#00ff00">1. MediChain</span>
   Blockchain-Powered Telemedicine Access Log with DID
   Tech: Solidity, React, Firebase, IPFS

<span style="color:#00ff00">2. Medi Translate</span>
   AI-based Medical Report Summarizer
   Tech: TypeScript, JavaScript, Node.js

<span style="color:#00ff00">3. MediVault</span>
   Decentralized Health Records with AI
   Tech: Solidity, IPFS, React, OpenAI

<span style="color:#00ff00">4. Smart Irrigation System</span>
   IoT & AI-based automated irrigation
   Tech: Arduino, IoT, AI/ML, C++

<span style="color:#00ff00">5. Fall Direction Detection</span>
   ML-powered fall detection for elderly safety
   Tech: ESP32, TinyML, Python, IoT

<span style="color:#00ff00">6. AI-Powered Health Monitor</span>
   Portable multi-sensor disease screening system
   Tech: TensorFlow Lite, ESP32, Supabase


<span style="color:#00ff00">7. Autonomous Environmental Robot</span>
   Self-navigating robot with air quality monitoring
   Tech: ESP32-CAM, GPS Neo-6M, MQ-135`,

            skills: `💻 Technical Skills:

<span style="color:#00aaff">Languages:</span>
C, C++, HTML, CSS, JavaScript, Solidity, Move

<span style="color:#00aaff">Frameworks:</span>
Node.js, Express.js, React.js, MongoDB

<span style="color:#00aaff">Blockchain:</span>
Solidity, Smart Contracts, IPFS, Web3

<span style="color:#00aaff">Tools:</span>
Git, GitHub, Firebase, Vercel

<span style="color:#00aaff">Creative:</span>
Adobe Premiere Pro, After Effects, Motion Graphics

<span style="color:#00aaff">Hardware:</span>
Arduino, ESP32, IoT, Embedded Systems`,

            experience: `💼 Experience:

<span style="color:#00ff00">Student Ambassador at NSSC'25</span>
National Students' Space Challenge | IIT Kharagpur
September 2025 - November 2025 (3 months)

<span style="color:#00ff00">Freelance Video Editor & Graphics Designer</span>
BeerBiceps Media & Other Brands
• Led digital production projects from concept to delivery
• Proficient in Adobe Creative Suite & Final Cut Pro
• Created motion graphics and visual content

<span style="color:#00ff00">IEEE & GDG Member</span>
Active Community Contributor
• Collaborate on tech projects
• Participate in hackathons and events
• Knowledge sharing and mentoring`,

            contact: `📫 Get in Touch:

<span style="color:#00aaff">Email:</span>    ritabratamajumdar70@gmail.com
<span style="color:#00aaff">LinkedIn:</span> linkedin.com/in/ritabrata-majumdar-764b81332
<span style="color:#00aaff">GitHub:</span>   github.com/Ritabrata777

📍 Location: Kolkata, West Bengal, India
💼 Available for exciting projects!

Let's collaborate on something amazing!`,

            education: `🎓 Education:

<span style="color:#00ff00">BTech - Electronics & Communication Engineering</span>
Heritage Institute of Technology, Kolkata (HITK'28)
• Focus: Blockchain, IoT, Embedded Systems

<span style="color:#00aaff">Achievements:</span>
• Eggstravaganza Winner at IIT Kharagpur 2024
• Active IEEE & GDG Member`,

            certifications: `🏆 Certifications:

<span style="color:#00aaff">Data & Business:</span>
• Tata Group - Data Visualisation: Empowering Business with Effective Insights Job Simulation

<span style="color:#00aaff">Blockchain:</span>
• Cyfrin Updraft: Blockchain Basics
• Cyfrin Updraft: Solidity Smart Contract Development

<span style="color:#00aaff">Cybersecurity:</span>
• Mastercard: Cybersecurity Job Simulation

<span style="color:#00aaff">Mobile Development:</span>
• Google Play Academy: Store Listing Certificate`,



            sudo: `🔐 Permission denied!

Nice try! But this portfolio doesn't have sudo privileges.
You'll have to settle for regular user commands. 😄

Try 'help' to see what you can actually do here.`,

            clear: 'CLEAR'
        };

        this.init();
    }

    init() {
        this.setupNavigation();
        this.setupBadge();
        this.updateDateTime();
        setInterval(() => this.updateDateTime(), 1000);

        // Run startup animation
        this.runStartupAnimation();
    }

    async runStartupAnimation() {
        const terminal = document.getElementById('terminalContent');

        const startupSequence = [
            { cmd: 'welcome', output: "Hi, I'm Ritabrata Majumdar, a Blockchain & Web3 Enthusiast." },
            { cmd: 'echo "Welcome to my portfolio"', output: "Welcome to my interactive terminal portfolio!<br>Type 'help' to see available commands." },
            { cmd: 'help', output: this.commands.help }
        ];

        for (const item of startupSequence) {
            await this.animateCommand(terminal, item.cmd, item.output);
            await this.delay(300);
        }

        // Add final input prompt
        this.addInputPrompt(terminal);
        this.setupTerminalInput();
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async animateCommand(terminal, cmd, output) {
        // Add command line
        const cmdLine = document.createElement('div');
        cmdLine.className = 'line';
        cmdLine.innerHTML = `<span class="prompt">ritabrata@portfolio:~$</span> <span class="cmd"></span><span class="cursor"></span>`;
        terminal.appendChild(cmdLine);

        const cmdSpan = cmdLine.querySelector('.cmd');
        const cursor = cmdLine.querySelector('.cursor');

        // Type command
        for (let i = 0; i < cmd.length; i++) {
            cmdSpan.textContent += cmd[i];
            terminal.scrollTop = terminal.scrollHeight;
            await this.delay(50);
        }

        // Remove cursor after typing command
        cursor.remove();
        await this.delay(200);

        // Add output with typewriter
        const outputDiv = document.createElement('div');
        outputDiv.className = 'output';
        terminal.appendChild(outputDiv);

        await this.typeTextAsync(outputDiv, output, terminal);
    }

    typeTextAsync(element, html, terminal) {
        return new Promise(resolve => {
            const temp = document.createElement('div');
            temp.innerHTML = html;
            const text = temp.textContent || temp.innerText;

            let charIndex = 0;
            const speed = 5;

            const typeChar = () => {
                if (charIndex < text.length) {
                    const partialText = text.substring(0, charIndex + 1);
                    element.innerHTML = this.getHTMLUpToText(html, partialText);
                    charIndex++;
                    terminal.scrollTop = terminal.scrollHeight;
                    setTimeout(typeChar, speed);
                } else {
                    element.innerHTML = html;
                    resolve();
                }
            };
            typeChar();
        });
    }

    addInputPrompt(terminal) {
        const newLine = document.createElement('div');
        newLine.className = 'line current';
        newLine.id = 'currentLine';
        newLine.innerHTML = `
            <span class="prompt">ritabrata@portfolio:~$</span>
            <input type="text" id="terminalInput" class="terminal-input" autocomplete="off" spellcheck="false" />
            <span class="cursor"></span>
        `;
        terminal.appendChild(newLine);
        document.getElementById('terminalInput').focus();
        terminal.scrollTop = terminal.scrollHeight;
    }

    setupNavigation() {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                const cmd = link.dataset.cmd;
                this.executeCommand(cmd);
            });
        });
    }

    setupTerminalInput() {
        const terminal = document.getElementById('terminalContent');
        this.commandHistory = [];
        this.historyIndex = -1;

        // Focus input when clicking anywhere in terminal
        terminal.addEventListener('click', () => {
            const input = document.getElementById('terminalInput');
            if (input) input.focus();
        });

        // Handle keyboard input
        document.addEventListener('keydown', (e) => {
            const input = document.getElementById('terminalInput');
            if (!input) return;

            // Ctrl+C - cancel current input, new line
            if (e.ctrlKey && e.key === 'c') {
                e.preventDefault();
                const currentLine = document.getElementById('currentLine');
                if (currentLine) {
                    currentLine.innerHTML = `
                        <span class="prompt">ritabrata@portfolio:~$</span>
                        <span class="cmd">${input.value}^C</span>
                    `;
                    currentLine.classList.remove('current');
                    currentLine.id = '';
                }
                this.addNewPrompt(terminal);
                return;
            }

            // Ctrl+L - clear screen
            if (e.ctrlKey && e.key === 'l') {
                e.preventDefault();
                this.executeCommand('clear');
                return;
            }

            // Ctrl+U - clear line
            if (e.ctrlKey && e.key === 'u') {
                e.preventDefault();
                input.value = '';
                input.style.width = '0px';
                return;
            }

            // Ctrl+A - go to beginning
            if (e.ctrlKey && e.key === 'a') {
                e.preventDefault();
                input.setSelectionRange(0, 0);
                return;
            }

            // Ctrl+E - go to end
            if (e.ctrlKey && e.key === 'e') {
                e.preventDefault();
                input.setSelectionRange(input.value.length, input.value.length);
                return;
            }

            // Up arrow - previous command
            if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (this.commandHistory.length > 0 && this.historyIndex < this.commandHistory.length - 1) {
                    this.historyIndex++;
                    input.value = this.commandHistory[this.commandHistory.length - 1 - this.historyIndex];
                    this.updateInputWidth(input);
                }
                return;
            }

            // Down arrow - next command
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                if (this.historyIndex > 0) {
                    this.historyIndex--;
                    input.value = this.commandHistory[this.commandHistory.length - 1 - this.historyIndex];
                    this.updateInputWidth(input);
                } else if (this.historyIndex === 0) {
                    this.historyIndex = -1;
                    input.value = '';
                    input.style.width = '0px';
                }
                return;
            }

            // Tab - autocomplete
            if (e.key === 'Tab') {
                e.preventDefault();
                const partial = input.value.toLowerCase();
                if (partial) {
                    const matches = this.commandList.filter(cmd => cmd.startsWith(partial));
                    if (matches.length === 1) {
                        input.value = matches[0];
                        this.updateInputWidth(input);
                    } else if (matches.length > 1) {
                        // Show possible completions
                        const currentLine = document.getElementById('currentLine');
                        currentLine.innerHTML = `
                            <span class="prompt">ritabrata@portfolio:~$</span>
                            <span class="cmd">${input.value}</span>
                        `;
                        currentLine.classList.remove('current');
                        currentLine.id = '';

                        const outputDiv = document.createElement('div');
                        outputDiv.className = 'output';
                        outputDiv.innerHTML = matches.join('  ');
                        terminal.appendChild(outputDiv);

                        this.addNewPrompt(terminal);
                        document.getElementById('terminalInput').value = partial;
                        this.updateInputWidth(document.getElementById('terminalInput'));
                    }
                }
                return;
            }

            // Enter - execute command
            if (e.key === 'Enter') {
                const cmd = input.value.trim().toLowerCase();
                if (cmd) {
                    this.commandHistory.push(cmd);
                    this.historyIndex = -1;
                    this.executeCommand(cmd);
                }
            }
        });

        // Resize input as user types
        document.addEventListener('input', (e) => {
            if (e.target.id === 'terminalInput') {
                this.updateInputWidth(e.target);
            }
        });

        // Auto-focus on load
        const input = document.getElementById('terminalInput');
        if (input) input.focus();
    }

    updateInputWidth(input) {
        const span = document.createElement('span');
        span.style.visibility = 'hidden';
        span.style.position = 'absolute';
        span.style.whiteSpace = 'pre';
        span.style.font = getComputedStyle(input).font;
        span.textContent = input.value || '';
        document.body.appendChild(span);
        input.style.width = span.offsetWidth + 'px';
        document.body.removeChild(span);
    }

    executeCommand(cmd) {
        const terminal = document.getElementById('terminalContent');
        const currentLine = document.getElementById('currentLine');

        if (cmd === 'clear') {
            terminal.innerHTML = `<div class="line current" id="currentLine">
                <span class="prompt">ritabrata@portfolio:~$</span>
                <input type="text" id="terminalInput" class="terminal-input" autofocus autocomplete="off" spellcheck="false" />
                <span class="cursor"></span>
            </div>`;
            document.getElementById('terminalInput').focus();
            return;
        }

        const output = this.commands[cmd];

        // Update current line with command (remove input)
        currentLine.innerHTML = `
            <span class="prompt">ritabrata@portfolio:~$</span>
            <span class="cmd">${cmd}</span>
        `;
        currentLine.classList.remove('current');
        currentLine.id = '';

        // Add output div
        const outputDiv = document.createElement('div');
        outputDiv.className = 'output';
        terminal.appendChild(outputDiv);

        if (output) {
            // Known command - use typewriter effect
            this.typeText(outputDiv, output, () => {
                this.addNewPrompt(terminal);
            });
        } else {
            // Unknown command - ask Gemini AI
            outputDiv.innerHTML = '<span style="color:#ffaa00">🤖 Thinking...</span>';
            terminal.scrollTop = terminal.scrollHeight;

            this.askGemini(cmd).then(response => {
                outputDiv.innerHTML = '';
                this.typeText(outputDiv, response, () => {
                    this.addNewPrompt(terminal);
                });
            }).catch(err => {
                outputDiv.innerHTML = '';
                this.typeText(outputDiv, `<span style="color:#ff6b6b">Command not found: ${cmd}</span><br>Type 'help' for available commands.`, () => {
                    this.addNewPrompt(terminal);
                });
            });
        }
    }

    addNewPrompt(terminal) {
        const newLine = document.createElement('div');
        newLine.className = 'line current';
        newLine.id = 'currentLine';
        newLine.innerHTML = `
            <span class="prompt">ritabrata@portfolio:~$</span>
            <input type="text" id="terminalInput" class="terminal-input" autofocus autocomplete="off" spellcheck="false" />
            <span class="cursor"></span>
        `;
        terminal.appendChild(newLine);
        document.getElementById('terminalInput').focus();
        terminal.scrollTop = terminal.scrollHeight;
    }

    async askGemini(userInput) {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${this.GEMINI_API_KEY}`;

        const prompt = `${this.portfolioContext}

User typed: "${userInput}"

If this looks like a misspelled command (like "abut" for "about", "projcts" for "projects", "skilss" for "skills"), respond with:
"Did you mean '<correct_command>'? Type that command to see the info."

If this is a question about Ritabrata or his work, answer it briefly based on the portfolio info.

If it's a greeting or casual message, respond friendly and suggest typing 'help'.

Keep response under 100 words, no markdown formatting.`;

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{ text: prompt }]
                    }],
                    generationConfig: {
                        temperature: 0.7,
                        maxOutputTokens: 200,
                    }
                })
            });

            const data = await response.json();

            if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
                return `<span style="color:#00ff00">🤖 AI:</span> ${data.candidates[0].content.parts[0].text}`;
            } else {
                throw new Error('No response');
            }
        } catch (error) {
            console.error('Gemini API error:', error);
            throw error;
        }
    }

    typeText(element, html, callback) {
        // Parse HTML and type it character by character
        const temp = document.createElement('div');
        temp.innerHTML = html;
        const text = temp.textContent || temp.innerText;

        let i = 0;
        const speed = 8; // ms per character

        // For HTML content, we'll type it in chunks to preserve formatting
        const isHTML = html !== text;

        if (isHTML) {
            // For HTML, type faster and in small chunks
            let charIndex = 0;
            const plainText = text;

            const typeChar = () => {
                if (charIndex < plainText.length) {
                    // Find how much of the original HTML to show
                    const partialText = plainText.substring(0, charIndex + 1);
                    element.innerHTML = this.getHTMLUpToText(html, partialText);
                    charIndex++;
                    element.parentElement.scrollTop = element.parentElement.scrollHeight;
                    setTimeout(typeChar, speed);
                } else {
                    element.innerHTML = html;
                    if (callback) callback();
                }
            };
            typeChar();
        } else {
            // Plain text - simple typewriter
            const typeChar = () => {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                    element.parentElement.scrollTop = element.parentElement.scrollHeight;
                    setTimeout(typeChar, speed);
                } else {
                    if (callback) callback();
                }
            };
            typeChar();
        }
    }

    getHTMLUpToText(html, targetText) {
        // Simple approach: show full HTML but truncate visible text
        const temp = document.createElement('div');
        temp.innerHTML = html;

        let charCount = 0;
        const truncate = (node) => {
            if (node.nodeType === Node.TEXT_NODE) {
                const remaining = targetText.length - charCount;
                if (remaining <= 0) {
                    node.textContent = '';
                } else if (node.textContent.length > remaining) {
                    node.textContent = node.textContent.substring(0, remaining);
                    charCount += remaining;
                } else {
                    charCount += node.textContent.length;
                }
            } else if (node.nodeType === Node.ELEMENT_NODE) {
                for (const child of Array.from(node.childNodes)) {
                    truncate(child);
                }
            }
        };

        truncate(temp);
        return temp.innerHTML;
    }

    setupBadge() {
        const idBadge = document.getElementById('idBadge');
        const badge = document.getElementById('badgeCard');
        const lanyard = document.getElementById('lanyardString');

        if (!badge || !lanyard || !idBadge) return;

        let isDragging = false;
        let startX, startY;
        let offsetX = 0, offsetY = 0;
        let velX = 0, velY = 0;
        let rafId = null;

        const config = {
            baseHeight: 80,
            maxY: 100,
            maxX: 80,
            spring: 0.08,
            friction: 0.85
        };

        // 3D tilt on hover
        badge.addEventListener('mousemove', (e) => {
            if (isDragging) return;

            const rect = badge.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / centerY * -15;
            const rotateY = (x - centerX) / centerX * 15;

            badge.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            badge.style.boxShadow = `${-rotateY}px ${rotateX}px 30px rgba(0, 255, 0, 0.15), 0 8px 30px rgba(0, 0, 0, 0.6)`;
        });

        badge.addEventListener('mouseleave', () => {
            if (!isDragging) {
                badge.style.transform = '';
                badge.style.boxShadow = '';
            }
        });

        function onStart(x, y) {
            isDragging = true;
            startX = x - offsetX;
            startY = y - offsetY;
            badge.style.transition = 'none';
            if (rafId) cancelAnimationFrame(rafId);
        }

        function onMove(x, y) {
            if (!isDragging) return;

            const newX = Math.max(-config.maxX, Math.min(config.maxX, x - startX));
            const newY = Math.max(0, Math.min(config.maxY, y - startY));

            velX = newX - offsetX;
            velY = newY - offsetY;
            offsetX = newX;
            offsetY = newY;

            updateCard();
        }

        function onEnd() {
            if (!isDragging) return;
            isDragging = false;
            badge.style.transition = 'transform 0.1s ease-out, box-shadow 0.3s ease';
            animate();
        }

        function updateCard() {
            // Stretch the lanyard based on Y movement
            lanyard.style.height = (config.baseHeight + offsetY) + 'px';

            // Rotate the entire badge assembly with 3D effect
            const rotZ = offsetX * 0.3;
            const rotX = offsetY * 0.2;
            const rotY = offsetX * 0.3;

            idBadge.style.transform = `translateX(${offsetX}px) rotate(${rotZ}deg)`;
            idBadge.style.transformOrigin = 'top center';

            // Add 3D tilt to card while dragging
            badge.style.transform = `perspective(1000px) rotateX(${-rotX}deg) rotateY(${rotY}deg)`;
            badge.style.boxShadow = `${-rotY}px ${rotX}px 40px rgba(0, 255, 0, 0.2), 0 15px 40px rgba(0, 0, 0, 0.7)`;
        }

        function animate() {
            velX += -offsetX * config.spring;
            velY += -offsetY * config.spring;
            velX *= config.friction;
            velY *= config.friction;
            offsetX += velX;
            offsetY += velY;

            if (offsetY < 0) {
                offsetY = 0;
                velY *= -0.5;
            }

            updateCard();

            if (Math.abs(velX) > 0.1 || Math.abs(velY) > 0.1 || Math.abs(offsetX) > 0.5 || Math.abs(offsetY) > 0.5) {
                rafId = requestAnimationFrame(animate);
            } else {
                offsetX = 0;
                offsetY = 0;
                lanyard.style.height = config.baseHeight + 'px';
                idBadge.style.transform = '';
                badge.style.transform = '';
                badge.style.boxShadow = '';
            }
        }

        // Mouse
        badge.addEventListener('mousedown', e => { onStart(e.clientX, e.clientY); e.preventDefault(); });
        document.addEventListener('mousemove', e => onMove(e.clientX, e.clientY));
        document.addEventListener('mouseup', onEnd);

        // Touch
        badge.addEventListener('touchstart', e => { onStart(e.touches[0].clientX, e.touches[0].clientY); e.preventDefault(); });
        badge.addEventListener('touchmove', e => { onMove(e.touches[0].clientX, e.touches[0].clientY); e.preventDefault(); });
        badge.addEventListener('touchend', onEnd);

        // Demo on load
        setTimeout(() => { offsetY = 30; offsetX = 15; animate(); }, 1500);
    }

    updateDateTime() {
        const now = new Date();
        const formatted = now.toLocaleString('en-US', {
            month: 'numeric',
            day: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });
        document.getElementById('datetime').textContent = formatted;
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => new Terminal());