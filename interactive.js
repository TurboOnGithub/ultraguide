document.addEventListener("DOMContentLoaded", function () {
    // Add Back to Top Button
    addBackToTopButton();

    // Add Dark/Light Mode Toggle
    addThemeToggle();

    // Interactive Trivia Pop-ups
    addInteractiveTrivia();

    // Easter Egg
    addEasterEgg();

    // Progress Tracker
    addProgressTracker();

    // Keyboard Shortcuts
    enableKeyboardShortcuts();
});

// Back to Top Button
function addBackToTopButton() {
    const button = document.createElement("button");
    button.id = "backToTop";
    button.textContent = "⬆ Back to Top";
    button.style.position = "fixed";
    button.style.bottom = "20px";
    button.style.right = "20px";
    button.style.padding = "10px 15px";
    button.style.border = "2px solid #00ff7f";
    button.style.borderRadius = "5px";
    button.style.backgroundColor = "#004f2d";
    button.style.color = "#00ff7f";
    button.style.fontSize = "1rem";
    button.style.cursor = "pointer";
    button.style.display = "none";

    button.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    document.body.appendChild(button);

    // Show/hide button based on scroll position
    window.addEventListener("scroll", () => {
        button.style.display = window.scrollY > 200 ? "block" : "none";
    });
}

// Theme Toggle
function addThemeToggle() {
    const themeToggle = document.createElement("button");
    themeToggle.id = "themeToggle";
    themeToggle.textContent = "🌓 Toggle Theme";
    themeToggle.style.position = "fixed";
    themeToggle.style.top = "20px";
    themeToggle.style.right = "20px";
    themeToggle.style.padding = "10px 15px";
    themeToggle.style.border = "2px solid #00ff7f";
    themeToggle.style.borderRadius = "5px";
    themeToggle.style.backgroundColor = "#004f2d";
    themeToggle.style.color = "#00ff7f";
    themeToggle.style.fontSize = "1rem";
    themeToggle.style.cursor = "pointer";

    themeToggle.addEventListener("click", () => {
        const isDarkMode = document.body.classList.toggle("dark-mode");
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    });

    document.body.appendChild(themeToggle);

    // Apply saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }
}

// Interactive Trivia Pop-ups
function addInteractiveTrivia() {
    const triviaButton = document.createElement("button");
    triviaButton.id = "triviaButton";
    triviaButton.textContent = "💡 Trivia";
    triviaButton.style.position = "fixed";
    triviaButton.style.top = "70px";
    triviaButton.style.right = "20px";
    triviaButton.style.padding = "10px 15px";
    triviaButton.style.border = "2px solid #00ff7f";
    triviaButton.style.borderRadius = "5px";
    triviaButton.style.backgroundColor = "#004f2d";
    triviaButton.style.color = "#00ff7f";
    triviaButton.style.fontSize = "1rem";
    triviaButton.style.cursor = "pointer";

    triviaButton.addEventListener("click", () => {
        const trivia = [
            "Did you know? Some of Gabriel's lines are inspired by biblical verses. Along with that, Gabriel is a real angel from the bible.",
            "Fun fact: V2 is a mirror of the player's abilities!",
            "The Flesh Prison is one of the creepiest bosses due to its unique design.",
            "Sisyphus Prime is a secret boss only the most daring players can face.",
			"Mankind is dead. Blood is fuel. Hell is fuel.",
			"what is happening",
			"Did you know? ULTRAKILL takes 82,000 years to load. As I'm writing this, my ULTRAKILL has been loading for 60 minutes.",
        ];
        alert(trivia[Math.floor(Math.random() * trivia.length)]);
    });

    document.body.appendChild(triviaButton);
}

// Progress Tracker
function addProgressTracker() {
    const progressBar = document.createElement("div");
    progressBar.id = "progressBar";
    progressBar.style.position = "fixed";
    progressBar.style.bottom = "0";
    progressBar.style.left = "0";
    progressBar.style.width = "0";
    progressBar.style.height = "5px";
    progressBar.style.backgroundColor = "#00ff7f";
    progressBar.style.zIndex = "1000";

    document.body.appendChild(progressBar);

    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progressPercentage = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = progressPercentage + "%";
    });
}

// Keyboard Shortcuts
function enableKeyboardShortcuts() {
    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowLeft") {
            // Navigate to previous page
            window.history.back();
        } else if (e.key === "ArrowRight") {
            // Navigate to next page
            window.history.forward();
        } else if (e.key === "t") {
            // Toggle Theme
            document.getElementById("themeToggle").click();
        } else if (e.key === "?") {
            // Show Trivia
            document.getElementById("triviaButton").click();
        }
    });
}

// Apply Dark Mode Styles
document.head.insertAdjacentHTML(
    "beforeend",
    `<style>
        body.dark-mode {
            background-color: #0f0f0f;
            color: #00ff7f;
        }
        body.dark-mode a {
            color: #00ffaa;
        }
        body.dark-mode button {
            background-color: #111111;
            border-color: #00ffaa;
        }
        #progressBar {
            background-color: #00ffaa;
        }
    </style>`
);
