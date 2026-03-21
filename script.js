class PortfolioOS {
    constructor() {
        this.promptLabel = 'ritabrata@PortfolioBook %';
        this.primaryCommands = [
            'help',
            'about',
            'projects',
            'skills',
            'experience',
            'contact',
            'education',
            'certifications',
            'sudo',
            'clear'
        ];
        this.extraCommands = ['ls', 'pwd', 'whoami', 'date', 'open'];
        this.commandList = [...this.primaryCommands, ...this.extraCommands];
        this.commandHistory = [];
        this.historyIndex = -1;
        this.pendingCommands = [];
        this.activeWindow = null;
        this.zIndexSeed = 10;
        this.bootComplete = false;
        this.terminalInitialized = false;
        this.terminalBooting = false;
        this.terminalProcessing = false;
        this.terminalBootPromise = null;
        this.defaultTerminalHint = 'Type help, ls, or open projects.';
        this.commands = this.createCommands();

        this.cacheElements();
        this.init();
    }

    cacheElements() {
        this.bootScreen = document.getElementById('bootScreen');
        this.bootStatus = document.getElementById('bootStatus');
        this.bootProgressFill = document.getElementById('bootProgressFill');
        this.desktopShell = document.getElementById('desktopShell');
        this.windowLayer = document.getElementById('windowLayer');
        this.activeAppLabel = document.getElementById('activeAppLabel');
        this.menuTime = document.getElementById('menuTime');
        this.terminalHint = document.getElementById('terminalHint');
        this.terminalContent = document.getElementById('terminalContent');

        this.windowElements = Array.from(document.querySelectorAll('.app-window'));
        this.windows = Object.fromEntries(
            this.windowElements.map(windowElement => [windowElement.dataset.window, windowElement])
        );
    }

    init() {
        this.setupLaunchers();
        this.setupWindowChrome();
        this.setupWindowFocus();
        this.setupTerminalInput();
        this.setupClock();
        this.setupResizeHandling();
        void this.runBootSequence();
    }

    createCommands() {
        return {
            help: `<div class="help-title">Command Directory</div>
<div class="help-item"><span>about</span> - Professional profile and focus areas</div>
<div class="help-item"><span>projects</span> - Full project portfolio</div>
<div class="help-item"><span>skills</span> - Technical stack and tools</div>
<div class="help-item"><span>experience</span> - Roles, freelance work, and communities</div>
<div class="help-item"><span>contact</span> - Email and professional links</div>
<div class="help-item"><span>education</span> - Academic background</div>
<div class="help-item"><span>certifications</span> - Certifications and simulations</div>
<div class="help-item"><span>ls</span> - Show workspace shortcuts</div>
<div class="help-item"><span>open &lt;item&gt;</span> - Jump to a section or window</div>
<div class="help-item"><span>pwd / whoami / date</span> - Small shell-style extras</div>
<div class="help-item"><span>sudo</span> - A small terminal easter egg</div>
<div class="help-item"><span>clear</span> - Reset the console</div>
<div class="help-note">Tip: use Tab for autocomplete and the arrow keys for command history.</div>`,

            about: `<div class="section-label">Professional Profile</div>
<div class="info-card">
<span class="info-title">Ritabrata Majumdar</span>
<span class="info-meta">Electronics and Communication Engineering undergraduate | Heritage Institute of Technology, Kolkata (HITK '28)</span>
<div class="info-copy">Ritabrata builds practical, demo-ready products across blockchain, AI-assisted experiences, and embedded systems, with a strong interest in turning ideas into working prototypes.</div>
</div>
<div class="info-card">
<span class="info-title">Current Focus</span>
<div class="info-copy">Blockchain applications, full-stack prototyping, AI-enhanced interfaces, embedded systems, and civic or health-oriented product concepts.</div>
</div>
<div class="info-card">
<span class="info-title">Working Style</span>
<div class="info-copy">Fast execution, hands-on experimentation, and cross-functional building across interface, logic, deployment, and hardware.</div>
</div>`,

            projects: `<div class="section-label">Project Portfolio</div>
<div class="project-item">
<span class="project-title">MediChain</span>
<span class="project-meta">Solidity / React / Firebase / IPFS</span>
<div class="project-copy">Blockchain-powered telemedicine access log designed around visibility, auditability, and identity-aware record access.</div>
</div>
<div class="project-item">
<span class="project-title">MediVault</span>
<span class="project-meta">Solidity / IPFS / React / OpenAI</span>
<div class="project-copy">Decentralized health records concept combining secure storage with AI-assisted information handling.</div>
</div>
<div class="project-item">
<span class="project-title">Medi Translate</span>
<span class="project-meta">TypeScript / JavaScript / Node.js</span>
<div class="project-copy">Medical report summarizer aimed at making complex health information easier to understand.</div>
</div>
<div class="project-item">
<span class="project-title">Civic Lens</span>
<span class="project-meta">Next.js / Python / Hardhat / Polygon Amoy</span>
<div class="project-copy">Digital infrastructure audit workflow combining OCR, AI-assisted processing, and blockchain-backed records.</div>
</div>
<div class="project-item">
<span class="project-title">TollChain</span>
<span class="project-meta">Next.js / Foundry / Scaffold-ETH 2 / Anon-Aadhaar</span>
<div class="project-copy">Blockchain-based tolling concept exploring RFID flows with privacy-aware identity verification.</div>
</div>
<div class="project-item">
<span class="project-title">AI-Powered Health Monitor</span>
<span class="project-meta">TensorFlow Lite / ESP32 / Supabase</span>
<div class="project-copy">Portable multi-sensor disease screening concept built on embedded hardware and lightweight AI models.</div>
</div>
<div class="project-item">
<span class="project-title">Smart Irrigation System</span>
<span class="project-meta">Arduino / IoT / AI-ML / C++</span>
<div class="project-copy">Automated irrigation prototype that combines sensor-driven logic with smarter watering decisions.</div>
</div>
<div class="project-item">
<span class="project-title">Fall Direction Detection</span>
<span class="project-meta">ESP32 / TinyML / Python / IoT</span>
<div class="project-copy">Elderly-safety concept using machine learning to detect and classify fall direction events.</div>
</div>
<div class="project-item">
<span class="project-title">Autonomous Environmental Robot</span>
<span class="project-meta">ESP32-CAM / GPS Neo-6M / MQ-135</span>
<div class="project-copy">Self-navigating robot concept focused on sensing, mobility, and environmental monitoring.</div>
</div>
<div class="project-item">
<span class="project-title">Fan Speed Control</span>
<span class="project-meta">ATmega328P / DHT11 Sensor</span>
<div class="project-copy">Embedded control build that adjusts fan speed dynamically according to ambient temperature.</div>
</div>
<div class="project-item">
<span class="project-title">TARS</span>
<span class="project-meta">ESP8266 / Gemini API / U8g2 OLED / Arduino</span>
<div class="project-copy">Assistant robot with weather and conversational features, designed as a playful embedded AI build.</div>
</div>
<div class="project-item">
<span class="project-title">CleanChain</span>
<span class="project-meta">React / Tailwind / Hardhat / Drizzle ORM</span>
<div class="project-copy">Decentralized sanitation and waste management platform concept focused on transparency and coordination.</div>
</div>`,

            skills: `<div class="section-label">Technical Stack</div>
<div class="info-card">
<span class="info-title">Languages</span>
<div class="info-copy">C, C++, HTML, CSS, JavaScript, Solidity, Move</div>
</div>
<div class="info-card">
<span class="info-title">Frameworks and Platforms</span>
<div class="info-copy">Node.js, Express.js, React.js, MongoDB, Firebase, Vercel</div>
</div>
<div class="info-card">
<span class="info-title">Blockchain and Web3</span>
<div class="info-copy">Solidity, smart contracts, IPFS, Hardhat, Foundry, Web3 workflows</div>
</div>
<div class="info-card">
<span class="info-title">Hardware and Embedded</span>
<div class="info-copy">Arduino, ESP32, ESP8266, IoT systems, TinyML experimentation</div>
</div>
<div class="info-card">
<span class="info-title">Creative and Product Work</span>
<div class="info-copy">Adobe Premiere Pro, After Effects, motion graphics, interface prototyping</div>
</div>`,

            experience: `<div class="section-label">Experience and Community</div>
<div class="info-card">
<span class="info-title">Student Ambassador, NSSC '25</span>
<span class="info-meta">National Students' Space Challenge, IIT Kharagpur | Sep 2025 - Nov 2025</span>
<div class="info-copy">Supported outreach and represented the program as a campus-facing ambassador.</div>
</div>
<div class="info-card">
<span class="info-title">Freelance Video Editor and Graphics Designer</span>
<span class="info-meta">Independent client work</span>
<div class="info-copy">Delivered editing, motion graphics, and creative assets for branded content and digital campaigns.</div>
</div>
<div class="info-card">
<span class="info-title">IEEE and GDG Member</span>
<span class="info-meta">Community participation</span>
<div class="info-copy">Participates in technical communities, project collaboration, events, and continuous learning.</div>
</div>`,

            contact: `<div class="section-label">Contact</div>
<div class="info-list">
<div class="info-card">
<span class="info-title">Email</span>
<span class="info-copy"><a class="terminal-link" href="mailto:ritabratamajumdar70@gmail.com">ritabratamajumdar70@gmail.com</a></span>
</div>
<div class="info-card">
<span class="info-title">GitHub</span>
<span class="info-copy"><a class="terminal-link" href="https://github.com/Ritabrata777" target="_blank" rel="noreferrer">github.com/Ritabrata777</a></span>
</div>
<div class="info-card">
<span class="info-title">LinkedIn</span>
<span class="info-copy"><a class="terminal-link" href="https://www.linkedin.com/in/ritabrata-majumdar-764b81332" target="_blank" rel="noreferrer">linkedin.com/in/ritabrata-majumdar-764b81332</a></span>
</div>
<div class="info-card">
<span class="info-title">Location</span>
<span class="info-copy">Kolkata, West Bengal, India</span>
</div>
</div>
<div class="terminal-muted">Open to internships, collaborative builds, and hackathon-driven product work.</div>`,

            education: `<div class="section-label">Education</div>
<div class="info-card">
<span class="info-title">BTech in Electronics and Communication Engineering</span>
<span class="info-meta">Heritage Institute of Technology, Kolkata | HITK '28</span>
<div class="info-copy">Academic focus includes blockchain systems, embedded engineering, and applied product development.</div>
</div>`,

            certifications: `<div class="section-label">Certifications</div>
<div class="info-card">
<span class="info-title">Data and Business</span>
<div class="info-copy">Tata Group - Data Visualisation: Empowering Business with Effective Insights Job Simulation</div>
</div>
<div class="info-card">
<span class="info-title">Blockchain</span>
<div class="info-copy">Cyfrin Updraft: Blockchain Basics and Solidity Smart Contract Development</div>
</div>
<div class="info-card">
<span class="info-title">Cybersecurity</span>
<div class="info-copy">Mastercard Cybersecurity Job Simulation</div>
</div>
<div class="info-card">
<span class="info-title">Mobile Development</span>
<div class="info-copy">Google Play Academy Store Listing Certificate</div>
</div>`,
            sudo: `Permission denied.<br><br>This portfolio keeps the experience focused and professional.<br>Use 'help' to browse the available sections.`
        };
    }

    setupLaunchers() {
        document.querySelectorAll('[data-open-window]').forEach(trigger => {
            trigger.addEventListener('click', () => {
                if (!this.bootComplete) {
                    return;
                }

                void this.handleLauncher(trigger);
            });
        });
    }

    async handleLauncher(trigger) {
        const windowName = trigger.dataset.openWindow;
        const command = trigger.dataset.runCommand;

        if (!windowName) {
            return;
        }

        if (windowName === 'terminal') {
            await this.openTerminal({ command });
            return;
        }

        this.openWindow(windowName);
    }

    setupWindowChrome() {
        document.querySelectorAll('[data-window-action]').forEach(control => {
            control.addEventListener('click', event => {
                event.stopPropagation();

                const windowElement = control.closest('.app-window');
                if (!windowElement) {
                    return;
                }

                const windowName = windowElement.dataset.window;
                const action = control.dataset.windowAction;

                if (action === 'close') {
                    this.closeWindow(windowName);
                    return;
                }

                if (action === 'minimize') {
                    this.minimizeWindow(windowName);
                    return;
                }

                if (action === 'maximize') {
                    this.toggleMaximizeWindow(windowName);
                }
            });
        });
    }

    setupWindowFocus() {
        this.windowElements.forEach(windowElement => {
            windowElement.addEventListener('mousedown', () => {
                if (!windowElement.classList.contains('is-hidden')) {
                    this.focusWindow(windowElement.dataset.window);
                }
            });

            const header = windowElement.querySelector('.window-header');
            if (header) {
                header.addEventListener('mousedown', event => this.startWindowDrag(event, windowElement));
            }
        });
    }

    setupTerminalInput() {
        if (!this.terminalContent) {
            return;
        }

        this.terminalContent.addEventListener('click', () => {
            this.focusTerminalInput();
        });

        document.addEventListener('keydown', event => {
            this.handleTerminalKeydown(event);
        });

        document.addEventListener('input', event => {
            if (event.target.id === 'terminalInput') {
                this.updateInputWidth(event.target);
            }
        });
    }

    setupClock() {
        this.updateMenuTime();
        window.setInterval(() => this.updateMenuTime(), 1000);
    }

    setupResizeHandling() {
        window.addEventListener('resize', () => {
            this.keepWindowsInBounds();
        });
    }

    async runBootSequence() {
        const startupSteps = [
            { status: 'Running startup diagnostics...', progress: 18, delay: 420 },
            { status: 'Mounting portfolio workspace...', progress: 38, delay: 420 },
            { status: 'Loading Finder and desktop assets...', progress: 63, delay: 480 },
            { status: 'Preparing Terminal.app...', progress: 84, delay: 420 },
            { status: "Desktop ready. Welcome to Ritabrata's PortfolioOS.", progress: 100, delay: 520 }
        ];

        for (const step of startupSteps) {
            if (this.bootStatus) {
                this.bootStatus.textContent = step.status;
            }

            if (this.bootProgressFill) {
                this.bootProgressFill.style.width = `${step.progress}%`;
            }

            await this.delay(step.delay);
        }

        this.desktopShell?.classList.remove('is-hidden');
        await this.delay(160);
        this.bootScreen?.classList.add('is-finished');
        this.bootComplete = true;
        this.updateActiveAppLabel();
    }

    updateMenuTime() {
        if (!this.menuTime) {
            return;
        }

        this.menuTime.textContent = new Intl.DateTimeFormat('en-US', {
            weekday: 'short',
            hour: 'numeric',
            minute: '2-digit'
        }).format(new Date());
    }

    openWindow(windowName) {
        const windowElement = this.windows[windowName];
        if (!windowElement) {
            return;
        }

        windowElement.classList.remove('is-hidden');
        delete windowElement.dataset.minimized;
        this.focusWindow(windowName);
        this.updateDockState();
    }

    closeWindow(windowName) {
        const windowElement = this.windows[windowName];
        if (!windowElement) {
            return;
        }

        windowElement.classList.add('is-hidden');
        windowElement.classList.remove('is-focused');

        if (this.activeWindow === windowName) {
            this.activeWindow = null;
        }

        this.syncVisibleWindowFocus();
        this.updateDockState();
    }

    minimizeWindow(windowName) {
        const windowElement = this.windows[windowName];
        if (!windowElement) {
            return;
        }

        windowElement.dataset.minimized = 'true';
        windowElement.classList.add('is-hidden');
        windowElement.classList.remove('is-focused');

        if (this.activeWindow === windowName) {
            this.activeWindow = null;
        }

        this.syncVisibleWindowFocus();
        this.updateDockState();
    }

    toggleMaximizeWindow(windowName) {
        const windowElement = this.windows[windowName];
        if (!windowElement) {
            return;
        }

        if (windowElement.classList.contains('is-hidden')) {
            this.openWindow(windowName);
        }

        windowElement.classList.toggle('is-maximized');
        this.focusWindow(windowName);
        this.keepWindowsInBounds();
    }

    focusWindow(windowName) {
        const windowElement = this.windows[windowName];
        if (!windowElement || windowElement.classList.contains('is-hidden')) {
            return;
        }

        this.windowElements.forEach(element => {
            element.classList.toggle('is-focused', element === windowElement);
        });

        this.zIndexSeed += 1;
        windowElement.style.zIndex = String(this.zIndexSeed);
        this.activeWindow = windowName;
        this.updateActiveAppLabel();
        this.updateDockState();

        if (windowName === 'terminal') {
            this.focusTerminalInput();
        }
    }

    syncVisibleWindowFocus() {
        const visibleWindows = this.windowElements.filter(element => !element.classList.contains('is-hidden'));

        if (!visibleWindows.length) {
            this.windowElements.forEach(element => element.classList.remove('is-focused'));
            this.activeWindow = null;
            this.updateActiveAppLabel();
            return;
        }

        const nextWindow = visibleWindows.reduce((highest, element) => {
            if (!highest) {
                return element;
            }

            const highestZIndex = Number(highest.style.zIndex || 0);
            const currentZIndex = Number(element.style.zIndex || 0);
            return currentZIndex >= highestZIndex ? element : highest;
        }, null);

        this.focusWindow(nextWindow.dataset.window);
    }

    updateActiveAppLabel() {
        if (!this.activeAppLabel) {
            return;
        }

        this.activeAppLabel.textContent = this.activeWindow ? this.getWindowLabel(this.activeWindow) : 'Finder';
    }

    getWindowLabel(windowName) {
        const labels = {
            profile: 'About',
            terminal: 'Terminal'
        };

        return labels[windowName] || 'Finder';
    }

    updateDockState() {
        document.querySelectorAll('.dock-app').forEach(dockItem => {
            const trackedWindow = dockItem.dataset.openWindow;
            const isShortcut = Boolean(dockItem.dataset.runCommand);
            const isVisible = trackedWindow && this.windows[trackedWindow] && !this.windows[trackedWindow].classList.contains('is-hidden');
            dockItem.classList.toggle('is-active', Boolean(isVisible && !isShortcut));
        });
    }

    startWindowDrag(event, windowElement) {
        if (event.button !== 0 || window.innerWidth <= 960) {
            return;
        }

        if (event.target.closest('.window-control') || windowElement.classList.contains('is-maximized')) {
            return;
        }

        this.focusWindow(windowElement.dataset.window);

        const layerRect = this.windowLayer.getBoundingClientRect();
        const windowRect = windowElement.getBoundingClientRect();
        const offsetX = event.clientX - windowRect.left;
        const offsetY = event.clientY - windowRect.top;
        const maxLeft = Math.max(0, layerRect.width - windowRect.width);
        const maxTop = Math.max(0, layerRect.height - 90);

        const handlePointerMove = moveEvent => {
            const left = this.clamp(moveEvent.clientX - layerRect.left - offsetX, 0, maxLeft);
            const top = this.clamp(moveEvent.clientY - layerRect.top - offsetY, 0, maxTop);

            windowElement.style.left = `${left}px`;
            windowElement.style.top = `${top}px`;
        };

        const stopDragging = () => {
            document.removeEventListener('mousemove', handlePointerMove);
            document.removeEventListener('mouseup', stopDragging);
        };

        document.addEventListener('mousemove', handlePointerMove);
        document.addEventListener('mouseup', stopDragging);
    }

    keepWindowsInBounds() {
        if (!this.windowLayer) {
            return;
        }

        const layerRect = this.windowLayer.getBoundingClientRect();

        this.windowElements.forEach(windowElement => {
            if (windowElement.classList.contains('is-hidden') || windowElement.classList.contains('is-maximized')) {
                return;
            }

            const elementWidth = windowElement.offsetWidth;
            const maxLeft = Math.max(0, layerRect.width - elementWidth);
            const maxTop = Math.max(0, layerRect.height - 90);
            const nextLeft = this.clamp(windowElement.offsetLeft, 0, maxLeft);
            const nextTop = this.clamp(windowElement.offsetTop, 0, maxTop);

            windowElement.style.left = `${nextLeft}px`;
            windowElement.style.top = `${nextTop}px`;
        });
    }

    async openTerminal({ command } = {}) {
        this.openWindow('terminal');
        await this.initializeTerminal();

        if (command) {
            this.enqueueCommand(command);
            return;
        }

        this.updateTerminalHint(this.defaultTerminalHint);
        this.focusTerminalInput();
    }

    async initializeTerminal() {
        if (this.terminalInitialized) {
            return;
        }

        if (this.terminalBootPromise) {
            await this.terminalBootPromise;
            return;
        }

        this.terminalBootPromise = this.bootTerminal();
        await this.terminalBootPromise;
        this.terminalBootPromise = null;
    }

    async bootTerminal() {
        if (!this.terminalContent) {
            return;
        }

        this.terminalBooting = true;
        this.terminalContent.innerHTML = '';
        this.updateTerminalHint('Launching Terminal.app...');

        await this.appendTypedOutput(`<span class="terminal-muted">Last login: ${this.escapeHTML(this.getLastLoginStamp())} on ttys000</span>`);
        await this.appendTypedOutput(`<span class="terminal-muted">Launching portfolio shell...</span>`);
        await this.appendTypedOutput(`Welcome to Ritabrata's portfolio terminal.<br><span class="terminal-muted">Type 'help' to browse the profile, or use 'open projects' to jump straight to the build list.</span>`);

        this.terminalInitialized = true;
        this.terminalBooting = false;
        this.addPrompt();
        this.updateTerminalHint(this.defaultTerminalHint);
        await this.processCommandQueue();
    }

    handleTerminalKeydown(event) {
        const terminalWindow = this.windows.terminal;
        const input = document.getElementById('terminalInput');

        if (!terminalWindow || terminalWindow.classList.contains('is-hidden') || !input) {
            return;
        }

        const terminalIsActive = this.activeWindow === 'terminal' || terminalWindow.contains(document.activeElement);
        if (!terminalIsActive) {
            return;
        }

        if (event.ctrlKey && event.key.toLowerCase() === 'c') {
            event.preventDefault();
            this.cancelCurrentInput();
            return;
        }

        if (event.ctrlKey && event.key.toLowerCase() === 'l') {
            event.preventDefault();
            this.enqueueCommand('clear');
            return;
        }

        if (event.ctrlKey && event.key.toLowerCase() === 'u') {
            event.preventDefault();
            input.value = '';
            this.updateInputWidth(input);
            return;
        }

        if (event.ctrlKey && event.key.toLowerCase() === 'a') {
            event.preventDefault();
            input.setSelectionRange(0, 0);
            return;
        }

        if (event.ctrlKey && event.key.toLowerCase() === 'e') {
            event.preventDefault();
            const position = input.value.length;
            input.setSelectionRange(position, position);
            return;
        }

        if (event.key === 'ArrowUp') {
            event.preventDefault();

            if (this.commandHistory.length > 0 && this.historyIndex < this.commandHistory.length - 1) {
                this.historyIndex += 1;
                input.value = this.commandHistory[this.commandHistory.length - 1 - this.historyIndex];
                this.updateInputWidth(input);
            }

            return;
        }

        if (event.key === 'ArrowDown') {
            event.preventDefault();

            if (this.historyIndex > 0) {
                this.historyIndex -= 1;
                input.value = this.commandHistory[this.commandHistory.length - 1 - this.historyIndex];
                this.updateInputWidth(input);
                return;
            }

            if (this.historyIndex === 0) {
                this.historyIndex = -1;
                input.value = '';
                this.updateInputWidth(input);
            }

            return;
        }

        if (event.key === 'Tab') {
            event.preventDefault();
            const partial = input.value.trim().toLowerCase();

            if (!partial) {
                return;
            }

            if (partial.startsWith('open ')) {
                const openMatches = ['about', 'projects', 'contact', 'terminal', 'profile']
                    .filter(item => item.startsWith(partial.slice(5)));

                if (openMatches.length === 1) {
                    input.value = `open ${openMatches[0]}`;
                    this.updateInputWidth(input);
                }

                return;
            }

            const matches = this.commandList.filter(command => command.startsWith(partial));
            if (matches.length === 1) {
                input.value = matches[0];
                this.updateInputWidth(input);
            }

            return;
        }

        if (event.key === 'Enter') {
            event.preventDefault();

            const command = input.value.trim();
            if (!command) {
                return;
            }

            this.commandHistory.push(command);
            this.historyIndex = -1;
            this.enqueueCommand(command);
        }
    }

    cancelCurrentInput() {
        const currentLine = document.getElementById('currentLine');
        const input = document.getElementById('terminalInput');

        if (!currentLine || !input) {
            return;
        }

        currentLine.innerHTML = `
            <span class="prompt">${this.promptLabel}</span>
            <span class="cmd">${this.escapeHTML(input.value)}^C</span>
        `;
        currentLine.classList.remove('current');
        currentLine.id = '';
        this.addPrompt();
    }

    updateInputWidth(input) {
        const measurement = document.createElement('span');
        measurement.style.visibility = 'hidden';
        measurement.style.position = 'absolute';
        measurement.style.whiteSpace = 'pre';
        measurement.style.font = getComputedStyle(input).font;
        measurement.textContent = input.value || ' ';
        document.body.appendChild(measurement);
        input.style.width = `${Math.max(measurement.offsetWidth, 6)}px`;
        document.body.removeChild(measurement);
    }

    addPrompt() {
        if (!this.terminalContent) {
            return;
        }

        const promptLine = document.createElement('div');
        promptLine.className = 'line current';
        promptLine.id = 'currentLine';
        promptLine.innerHTML = `
            <span class="prompt">${this.promptLabel}</span>
            <input type="text" id="terminalInput" class="terminal-input" autocomplete="off" spellcheck="false" />
            <span class="cursor"></span>
        `;

        this.terminalContent.appendChild(promptLine);
        this.scrollTerminalToBottom();
        this.focusTerminalInput();
    }

    focusTerminalInput() {
        const input = document.getElementById('terminalInput');
        if (input) {
            input.focus();
            this.updateInputWidth(input);
        }
    }

    enqueueCommand(command) {
        const normalizedCommand = command.trim();
        if (!normalizedCommand) {
            return;
        }

        this.pendingCommands.push(normalizedCommand);
        void this.processCommandQueue();
    }

    async processCommandQueue() {
        if (!this.terminalInitialized || this.terminalBooting || this.terminalProcessing) {
            return;
        }

        this.terminalProcessing = true;

        while (this.pendingCommands.length > 0) {
            const nextCommand = this.pendingCommands.shift();
            await this.executeCommand(nextCommand);
        }

        this.terminalProcessing = false;
        this.focusTerminalInput();
    }

    async executeCommand(rawCommand) {
        const command = rawCommand.trim();
        if (!command || !this.terminalContent) {
            return;
        }

        const normalizedCommand = command.toLowerCase();

        if (normalizedCommand === 'clear') {
            this.terminalContent.innerHTML = '';
            this.addPrompt();
            this.updateTerminalHint('Screen cleared. Type help to continue.');
            return;
        }

        let currentLine = document.getElementById('currentLine');
        if (!currentLine) {
            this.addPrompt();
            currentLine = document.getElementById('currentLine');
        }

        currentLine.innerHTML = `
            <span class="prompt">${this.promptLabel}</span>
            <span class="cmd">${this.escapeHTML(command)}</span>
        `;
        currentLine.classList.remove('current');
        currentLine.id = '';

        const result = this.resolveCommand(command);

        if (result.html) {
            await this.appendTypedOutput(result.html);
        }

        if (result.focusWindow) {
            this.openWindow(result.focusWindow);
        }

        this.addPrompt();
        this.updateTerminalHint(result.hint || this.defaultTerminalHint);

        if (result.followupCommand) {
            this.pendingCommands.unshift(result.followupCommand);
        }
    }

    resolveCommand(rawCommand) {
        const normalizedCommand = rawCommand.trim().toLowerCase();

        if (normalizedCommand === 'ls') {
            return {
                html: `<div class="help-title">Workspace</div>
<div class="help-item"><span>about.md</span> - Fast profile summary</div>
<div class="help-item"><span>projects/</span> - All project builds</div>
<div class="help-item"><span>skills.json</span> - Technical stack and tooling</div>
<div class="help-item"><span>experience.log</span> - Community and freelance work</div>
<div class="help-item"><span>contact.vcf</span> - Contact and links</div>
<div class="help-item"><span>education.txt</span> - Academic background</div>
<div class="help-item"><span>certifications/</span> - Completed programs and simulations</div>`,
                hint: "Use 'open <item>' or run a section command directly."
            };
        }

        if (normalizedCommand === 'pwd') {
            return {
                html: `/Users/ritabrata/PortfolioOS`,
                hint: 'You are inside the portfolio workspace.'
            };
        }

        if (normalizedCommand === 'whoami') {
            return {
                html: `Ritabrata Majumdar<br><span class="terminal-muted">ECE undergraduate, product builder, and prototype-focused developer.</span>`,
                hint: "Type 'about' for the full profile."
            };
        }

        if (normalizedCommand === 'date') {
            return {
                html: this.escapeHTML(new Date().toString()),
                hint: 'Local system time from the desktop session.'
            };
        }

        if (normalizedCommand === 'open') {
            return {
                html: `Usage: open about, open projects, open contact, or open terminal.`,
                hint: "Example: try 'open projects'."
            };
        }

        if (normalizedCommand.startsWith('open ')) {
            return this.resolveOpenCommand(normalizedCommand.slice(5).trim());
        }

        if (this.commands[normalizedCommand]) {
            return {
                html: this.commands[normalizedCommand],
                hint: this.getCommandHint(normalizedCommand)
            };
        }

        return {
            html: this.getGuidedResponse(normalizedCommand),
            hint: "Type 'help' to view the supported commands."
        };
    }

    resolveOpenCommand(target) {
        if (!target) {
            return {
                html: `Usage: open about, open projects, open contact, or open terminal.`,
                hint: 'Choose a destination after open.'
            };
        }

        if (target === 'terminal') {
            return {
                html: `Terminal.app is already active.`,
                hint: this.defaultTerminalHint
            };
        }

        if (target === 'about' || target === 'profile') {
            return {
                html: `Opening About window...`,
                hint: 'The visual profile window is now in front.',
                focusWindow: 'profile'
            };
        }

        if (['projects', 'contact', 'skills', 'experience', 'education', 'certifications', 'about'].includes(target)) {
            return {
                html: `Opening ${this.escapeHTML(target)}...`,
                hint: `Loading ${target} inside the terminal.`,
                followupCommand: target
            };
        }

        return {
            html: `No item named '${this.escapeHTML(target)}' is available.<br><span class="terminal-muted">Try 'ls' or 'help' for valid options.</span>`,
            hint: "Type 'help' to view the supported commands."
        };
    }

    getCommandHint(command) {
        const hints = {
            help: 'Use Tab for autocomplete and Up Arrow for command history.',
            about: "Use 'open about' if you want the visual profile window too.",
            projects: "Use 'contact' when you want to follow up on the work.",
            skills: "Use 'projects' to see where the stack is applied.",
            experience: "Use 'about' for the overall positioning and focus.",
            contact: 'Links are clickable directly from the terminal output.',
            education: "Use 'certifications' to see supplemental tracks.",
            certifications: "Use 'projects' to connect credentials with builds.",
            sudo: 'The shell stays intentionally simple and portfolio-first.'
        };

        return hints[command] || this.defaultTerminalHint;
    }

    getGuidedResponse(userInput) {
        const suggestion = this.findClosestCommand(userInput);
        if (suggestion) {
            return `Did you mean '${this.escapeHTML(suggestion)}'? Type that command to open the section.`;
        }

        if (['hi', 'hello', 'hey'].includes(userInput)) {
            return `Hello. Type 'help' to explore the portfolio terminal.`;
        }

        if (userInput.includes('resume') || userInput.includes('cv')) {
            return `Use 'about', 'experience', 'projects', and 'contact' to review the portfolio like a structured resume.`;
        }

        if (userInput.includes('project') || userInput.includes('build')) {
            return `Type 'projects' to browse the full project portfolio.`;
        }

        if (userInput.includes('skill') || userInput.includes('stack') || userInput.includes('tech')) {
            return `Type 'skills' to review languages, frameworks, blockchain tooling, and hardware experience.`;
        }

        if (userInput.includes('contact') || userInput.includes('email') || userInput.includes('linkedin') || userInput.includes('github')) {
            return `Type 'contact' to view email, LinkedIn, and GitHub details.`;
        }

        if (userInput.includes('education') || userInput.includes('college') || userInput.includes('degree')) {
            return `Type 'education' to see the academic background.`;
        }

        if (userInput.includes('cert')) {
            return `Type 'certifications' to review completed certification tracks.`;
        }

        if (userInput.includes('experience') || userInput.includes('work')) {
            return `Type 'experience' to review ambassador work, freelance projects, and community involvement.`;
        }

        if (userInput.includes('internship') || userInput.includes('hire') || userInput.includes('open to')) {
            return `Ritabrata is open to internships and collaborative work. Use 'contact' to reach out directly.`;
        }

        if (userInput.includes('location') || userInput.includes('where')) {
            return `Ritabrata is based in Kolkata, West Bengal, India. Type 'contact' for the direct details.`;
        }

        return `Command not found: ${this.escapeHTML(userInput)}<br><span class="terminal-muted">Type 'help' for available commands.</span>`;
    }

    findClosestCommand(userInput) {
        let bestMatch = null;

        for (const command of this.commandList) {
            const distance = this.levenshteinDistance(userInput, command);

            if (!bestMatch || distance < bestMatch.distance) {
                bestMatch = { command, distance };
            }
        }

        return bestMatch && bestMatch.distance <= 2 ? bestMatch.command : null;
    }

    levenshteinDistance(source, target) {
        const rows = source.length + 1;
        const cols = target.length + 1;
        const matrix = Array.from({ length: rows }, () => Array(cols).fill(0));

        for (let row = 0; row < rows; row += 1) {
            matrix[row][0] = row;
        }

        for (let col = 0; col < cols; col += 1) {
            matrix[0][col] = col;
        }

        for (let row = 1; row < rows; row += 1) {
            for (let col = 1; col < cols; col += 1) {
                const cost = source[row - 1] === target[col - 1] ? 0 : 1;
                matrix[row][col] = Math.min(
                    matrix[row - 1][col] + 1,
                    matrix[row][col - 1] + 1,
                    matrix[row - 1][col - 1] + cost
                );
            }
        }

        return matrix[source.length][target.length];
    }

    async appendTypedOutput(html) {
        if (!this.terminalContent) {
            return;
        }

        const output = document.createElement('div');
        output.className = 'output';
        this.terminalContent.appendChild(output);
        await this.typeOutput(output, html);
        this.scrollTerminalToBottom();
    }

    async typeOutput(element, html) {
        const temporaryContainer = document.createElement('div');
        temporaryContainer.innerHTML = html;
        const textContent = temporaryContainer.textContent || temporaryContainer.innerText || '';

        if (textContent.length > 520) {
            element.innerHTML = html;
            await this.delay(80);
            return;
        }

        let index = 0;

        while (index < textContent.length) {
            const partialText = textContent.slice(0, index + 1);
            element.innerHTML = this.getHTMLUpToText(html, partialText);
            this.scrollTerminalToBottom();
            index += 1;
            await this.delay(6);
        }

        element.innerHTML = html;
    }

    getHTMLUpToText(html, targetText) {
        const temporaryContainer = document.createElement('div');
        temporaryContainer.innerHTML = html;
        let consumedCharacters = 0;

        const truncateNode = node => {
            if (node.nodeType === Node.TEXT_NODE) {
                const remainingCharacters = targetText.length - consumedCharacters;

                if (remainingCharacters <= 0) {
                    node.textContent = '';
                    return;
                }

                if (node.textContent.length > remainingCharacters) {
                    node.textContent = node.textContent.slice(0, remainingCharacters);
                    consumedCharacters += remainingCharacters;
                    return;
                }

                consumedCharacters += node.textContent.length;
                return;
            }

            if (node.nodeType === Node.ELEMENT_NODE) {
                Array.from(node.childNodes).forEach(childNode => truncateNode(childNode));
            }
        };

        truncateNode(temporaryContainer);
        return temporaryContainer.innerHTML;
    }

    updateTerminalHint(message) {
        if (this.terminalHint) {
            this.terminalHint.textContent = message;
        }
    }

    scrollTerminalToBottom() {
        if (this.terminalContent) {
            this.terminalContent.scrollTop = this.terminalContent.scrollHeight;
        }
    }

    getLastLoginStamp() {
        return new Intl.DateTimeFormat('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit'
        }).format(new Date());
    }

    clamp(value, min, max) {
        return Math.min(Math.max(value, min), max);
    }

    delay(duration) {
        return new Promise(resolve => {
            window.setTimeout(resolve, duration);
        });
    }

    escapeHTML(value) {
        return String(value)
            .replaceAll('&', '&amp;')
            .replaceAll('<', '&lt;')
            .replaceAll('>', '&gt;')
            .replaceAll('"', '&quot;')
            .replaceAll("'", '&#39;');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new PortfolioOS();
});
