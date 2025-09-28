document.addEventListener('DOMContentLoaded', () => {

        // --- DATA STORE ---
        // All content for the website is stored here.
        const pageData = {
            story: {
                title: "The Rise of Net-Crime",
                image: "https://www.nintendo.com/eu/media/images/10_share_images/games_15/virtual_console_wii_u_7/SI_WiiUVC_MegamanBattleNetwork2.jpg", // Image URL for Story
                content: `
                    <p>Months after the defeat of the WWW, a new net-mafia known as Gospel emerges, causing chaos across the net. Lan Hikari and his NetNavi, MegaMan.EXE, team up with the Official NetBattlers to investigate.</p>
                    <p>Their journey takes them across the globe, where they uncover a sinister plot involving super-powerful "BugFrags" and a mysterious NetNavi at the heart of Gospel's operations. Lan must earn new licenses, forge new friendships, and master new abilities to take down this powerful new threat to the Cyber World.</p>
                `
            },
            characters: {
                title: "Operators & NetNavis",
                image: "https://gonintendo.com/attachments/image/21890/file/medium-46420c80730691b67f2aab9ec465e0ee.png", // Image URL for Characters
                content: `
                    <ul>
                        <li><b>Lan Hikari & MegaMan.EXE:</b> The main protagonist. An enthusiastic kid who is a skilled NetBattler, partnered with his custom NetNavi and virtual brother, MegaMan.</li>
                        <li><b>Eugene Chaud & ProtoMan.EXE:</b> A prodigious Official NetBattler and Lan's primary rival. His Navi, ProtoMan, is known for his incredible speed and sharp sword skills.</li>
                        <li><b>Mayl Sakurai & Roll.EXE:</b> Lan's kind-hearted friend. Her Navi, Roll, specializes in healing and support abilities.</li>
                        <li><b>Dex Ogreon & GutsMan.EXE:</b> A powerful but not-so-bright friend of Lan. GutsMan is a powerhouse Navi who relies on brute strength.</li>
                        <li><b>Yai Ayano & Glide.EXE:</b> The brilliant and wealthy daughter of a massive corporation. Glide serves as her butler-like Navi, managing her finances and schedule.</li>
                        
                    </ul>
                `
            },
            gameplay: {
                title: "Style Change System",
                image: "https://lparchive.org/Mega-Man-Battle-Network-2/Update%2039/14-image011.png", // Image URL for Gameplay
                content: `
                    <p>Battle Network 2 introduces the revolutionary "Style Change" system. Instead of collecting armors, MegaMan now adapts his fighting style based on how the player battles.</p>
                    <p>By consistently using certain types of chips or battle tactics, players can unlock different Styles. For example, using many Buster shots might unlock a Guts Style, enhancing Buster power, while using many sword chips could lead to a Custom Style for a better chip selection. Each style can also have an element (Heat, Aqua, Elec, Wood), granting elemental properties and resistances. This created a deeply personalized and strategic gameplay experience.</p>
                `
            },
            gospel: {
                title: "The Gospel Syndicate",
                image: "https://static.wikia.nocookie.net/megaman/images/6/60/GospelLeader.jpg", // Image URL for Versions
                content: `
                    <p>Gospel is the central antagonistic force in Mega Man Battle Network 2. Unlike the previous game which had a single version, this game focuses on the conflict with this singular, powerful entity.</p>
                    <ul>
                        <li>Gospel is a mysterious net-mafia that spreads chaos by distributing corrupted data and powerful bug-fused Navis.</li>
                        <li>The organization is structured with powerful NetNavi operators at its core, including ShadowMan, KnightMan, and MagnetMan.</li>
                        <li>Their ultimate goal is to create the "ultimate Navi" by fusing countless bugs, resulting in the monstrous beast, Gospel. This Navi beast is capable of physically manifesting in the real world and causing immense destruction.</li>
                    </ul>
                `
            }
        };

        // --- ELEMENT SELECTORS ---
        const contentArea = document.getElementById('content-area');
        const navLinks = document.querySelectorAll('.nav-link');
        const clockElement = document.getElementById('clock');
        const dateDayElement = document.getElementById('date-day');

        // --- FUNCTIONS ---

        /**
         * Switches the content displayed in the main area.
         * @param {string} pageKey - The key corresponding to the data in pageData.
         */
        function switchContent(pageKey) {
            const data = pageData[pageKey];
            if (!data) return;

            // Add a class to fade out the content
            contentArea.classList.add('fade-out');

            // Wait for the fade-out transition to finish before changing the content
            setTimeout(() => {
                const html = `
                    <div class="content-wrapper">
                        <div class="content-image">
                            <img src="${data.image}" alt="${data.title}">
                        </div>
                        <div class="content-text">
                            <h2>${data.title}</h2>
                            ${data.content}
                        </div>
                    </div>
                `;
                contentArea.innerHTML = html;
                // Remove the class to fade the new content in
                contentArea.classList.remove('fade-out');
            }, 300); // This duration should match the CSS transition duration
        }

        /**
         * Updates the clock and date display.
         */
        function updateClock() {
            const now = new Date();
            const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
            const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            
            const timeString = now.toLocaleTimeString('en-US', timeOptions);
            const dateDayString = now.toLocaleDateString('en-US', dateOptions);

            clockElement.textContent = timeString;
            dateDayElement.textContent = dateDayString;
        }

        // --- EVENT LISTENERS & INITIALIZATION ---

        // Set up navigation link clicks
        navLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault(); // Prevent default link behavior

                // Update active class
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                
                // Switch content
                const page = link.getAttribute('data-page');
                switchContent(page);
            });
        });

        // --- INITIAL PAGE LOAD ---
        
        // Load the default page content ('story')
        switchContent('story');

        // Update the clock immediately and then every second
        updateClock();
        setInterval(updateClock, 1000);

    });