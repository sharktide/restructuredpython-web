async function fetchDownloadCount() {
    try {
        const response = await fetch("https://sharktide-recycleai-latest-windows.hf.space/downloads");
        const data = await response.json();

        if (data.total_downloads) {
            animateDownloadCounter(data.total_downloads, 20);  // 60 ticks for animation
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
    let increment = Math.max(1, Math.ceil(difference / totalTicks));  // Dynamic step size

    let tick = 0;
    let interval = setInterval(() => {
        if (tick >= totalTicks || currentCount >= finalCount) {
            clearInterval(interval);
            counterElement.textContent = finalCount;  // Ensure final count is accurate
        } else {
            currentCount += increment;
            counterElement.textContent = Math.min(currentCount, finalCount);
            tick++;
        }
    }, 50); // Runs every 50ms (~3 seconds total duration)
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

document.addEventListener("DOMContentLoaded", function() {
document.querySelectorAll("pre code").forEach((block) => {
    hljs.highlightElement(block);
});
});

// Fetch count when page loads
window.onload = fetchDownloadCount;