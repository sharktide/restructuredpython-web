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

async function submitCode() {
    const code = document.getElementById("codeInput").value;
    const response = await fetch("https://sharktide-repy-preview.hf.space/parse/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: code }),
    });
    const data = await response.json();
    document.getElementById("output").textContent = data.parsed_code;
}

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const navItems = document.querySelectorAll(".nav-links a");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });

    navItems.forEach((link) => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove("show");
            }
        });
    });
});

window.addEventListener("resize", () => {
    const navLinks = document.querySelector(".nav-links");
    if (window.innerWidth > 768) {
        navLinks.classList.remove("show");
    }
});

