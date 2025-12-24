const roles = [
    "Frontend Developer",
    "IT Student",
    "Hackathon Enthusiast",
    "Aspiring Software Engineer"
];

let roleIndex = 0;
let charIndex = 0;

function typeEffect() {
    const typingElement = document.querySelector(".typing");

    if (charIndex < roles[roleIndex].length) {
        typingElement.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {
    const typingElement = document.querySelector(".typing");

    if (charIndex > 0) {
        typingElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeEffect, 500);
    }
}

typeEffect();
