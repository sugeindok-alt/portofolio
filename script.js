// 1. Funksjonalitet: Endre helsing basert på tid på døgnet
window.onload = function() {
    const greetingElement = document.getElementById("greeting");
    const hour = new Date().getHours();
    
    if (hour < 10) {
        greetingElement.innerText = "God morgon! Velkommen til porteføljen min.";
    } else if (hour < 18) {
        greetingElement.innerText = "God dag! Velkommen til porteføljen min.";
    } else {
        greetingElement.innerText = "God kveld! Velkommen til porteføljen min.";
    }
};

// 2. Funksjonalitet: Bytt mellom mørkt og lyst tema (Dark Mode toggle)
const themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", function() {
    // Legg til eller fjern "dark-mode" klassen på body
    document.body.classList.toggle("dark-mode");
    
    // Oppdater teksten på knappen
    if (document.body.classList.contains("dark-mode")) {
        themeToggleBtn.innerText = "Bytt til lyst tema";
    } else {
        themeToggleBtn.innerText = "Bytt til mørkt tema";
    }
});