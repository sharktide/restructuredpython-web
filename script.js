/*
   Copyright 2025 Rihaan Meher
   
   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

async function fetchDownloadCount() {
    try {
        const response = await fetch("https://sharktide-recycleai-latest-windows.hf.space/downloads");
        const data = await response.json();

        if (data.total_downloads) {
            animateDownloadCounter(data.total_downloads, 20);
        } else {
            console.error("Unexpected data format:", data);
        }
    } catch (error) {
        console.error("Error fetching download count:", error);
    }
}

function animateDownloadCounter(finalCount, totalTicks) {
    let counterElement = document.getElementById("counter");
    let currentCount = Number(counterElement.textContent);
    
    let difference = finalCount - currentCount;
    let increment = Math.max(1, Math.ceil(difference / totalTicks));

    let tick = 0;
    let interval = setInterval(() => {
        if (tick >= totalTicks || currentCount >= finalCount) {
            clearInterval(interval);
            counterElement.textContent = finalCount;
        } else {
            currentCount += increment;
            counterElement.textContent = Math.min(currentCount, finalCount);
            tick++;
        }
    }, 50);
}
function openDialog() {
    document.getElementById("install-dialog").style.display = "block";
}

function closeDialog() {
    document.getElementById("install-dialog").style.display = "none";
}

function copyCommand() {
    let commandText = document.getElementById("install-command").textContent;
    navigator.clipboard.writeText(commandText).then(() => {
        let copyBtn = document.querySelector(".copy-btn");
        copyBtn.textContent = "✅ Copied!";
        setTimeout(() => {
            copyBtn.textContent = "📋 Copy";
        }, 1500);
    }).catch(err => console.error("Copy failed:", err));
}
hljs.registerLanguage('reStructuredPython', function () {
    return {
      name: 'reStructuredPython',
      keywords: {
        keyword: 'if for while def elif else class with include import match case None and as global from in is lambda nonlocal not or',
        built_in: 'True False pass assert async await break continue del raise return yield',
        type: 'int float str list dict set tuple'
      },
      contains: [
        { className: 'string', begin: '"', end: '"', contains: [{begin: '\\\\.'}] },
        { className: 'comment', begin: '#'},
        { className: 'number', begin: '\\b\\d+\\b' },
        { className: 'function', begin: '\\bdef\\s+', end: '\\(', excludeEnd: true }
      ]
    };
});

function git1() {
    window.open('https://github.com/sharktide/restructuredpython');
}
function git2() {
    window.open('https://github.com/sharktide/repython-vs');
}

document.addEventListener("DOMContentLoaded", function() {
    fetchDownloadCount();
    document.querySelectorAll("pre code").forEach((block) => {
        hljs.highlightElement(block);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const navItems = document.querySelectorAll(".nav-links a");

    // Toggle on hamburger click
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });

    // Hide menu on link click
    navItems.forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove("show");
            }
        });
    });
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.classList.remove('show');
    }
});
