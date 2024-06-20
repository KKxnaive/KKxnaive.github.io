// GSAP animation for the main header
gsap.from(".main-header h1", { duration: 1, y: -50, opacity: 0, ease: "power2.out" });
gsap.from(".main-header p", { duration: 1, y: -30, opacity: 0, ease: "power2.out", delay: 0.5 });
gsap.from(".main-header .btn", { duration: 1, scale: 0.5, opacity: 0, ease: "back.out(1.7)", delay: 1 });

// GSAP animation for the latest updates
gsap.from(".latest-updates h2", { duration: 1, x: -100, opacity: 0, ease: "power2.out", delay: 1.5 });
gsap.from(".latest-updates .card", { duration: 1, y: 100, opacity: 0, ease: "power2.out", delay: 2, stagger: 0.2 });

// Form submission or any other interactions
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("您的留言已发送！");
});

// Adjusting image margin in about-content section
document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.querySelector('.about-content .text-center');
    const imageElement = document.querySelector('.about-content .centered-image');

    const textHeight = textElement.clientHeight;
    const imageHeight = imageElement.clientHeight;

    const offset = (textHeight - imageHeight) / 2;
    imageElement.style.marginTop = `${offset}px`;
});

// Creating star animation effect
function createStar() {
    const star = document.createElement('span');
    star.className = 'star';
    const xy = Math.random() * 100;
    star.style.left = `${xy}%`;
    star.style.animationDuration = `${Math.random() * 1 + 0.5}s`;
    document.body.appendChild(star);
    setTimeout(() => {
        star.remove();
    }, 1000);
}

// Interval for star creation
setInterval(createStar, 150);

// GSAP animations after DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Fade in text-content
    gsap.from('.text-content', { opacity: 0, duration: 1, delay: 0.5 });

    // Scale centered-image
    gsap.from('.centered-image', { scale: 0, duration: 1, delay: 1 });

    // Additional animations can be added if needed
});
// 在页面加载完毕后执行
document.addEventListener('DOMContentLoaded', function () {
    // 使用 GSAP 动画效果
    gsap.from('.chapter-content h2', { opacity: 1, y: -50, duration: 1 });
    gsap.from('.chapter-text p', { opacity: 1, y: 50, duration: 1, stagger: 0.2, delay: 0.5 });
    gsap.from('.chapter-text img', { opacity: 1, y: 50, duration: 1, delay: 1 });
});
// GSAP动画效果
gsap.from(".navbar-brand", { opacity: 0, duration: 1, delay: 0.5 });
gsap.from(".navbar-nav .nav-link", { opacity: 0, duration: 1, delay: 0.8, stagger: 0.2 });
gsap.from(".chapter-content", { opacity: 0, duration: 1, y: -50, ease: "power2.out", delay: 0.5 });

// 确保页脚始终位于底部
function adjustFooterPosition() {
    const footer = document.querySelector('.footer');
    const bodyHeight = document.body.clientHeight;
    const windowHeight = window.innerHeight;
    if (bodyHeight < windowHeight) {
        footer.style.position = 'fixed';
        footer.style.bottom = '0';
        footer.style.width = '100%';
    } else {
        footer.style.position = 'static';
    }
}

window.addEventListener('load', adjustFooterPosition);
window.addEventListener('resize', adjustFooterPosition);
// GSAP动画效果
gsap.from(".navbar-brand", { opacity: 1, duration: 1, delay: 0.5 });
gsap.from(".navbar-nav .nav-link", { opacity: 1, duration: 1, delay: 0.8, stagger: 0.2 });
gsap.from(".portfolio .card", { opacity: 1, y: 50, duration: 1, delay: 0.5, stagger: 0.2 });

// 确保页脚始终位于底部
function adjustFooterPosition() {
    const footer = document.querySelector('.footer');
    const bodyHeight = document.body.clientHeight;
    const windowHeight = window.innerHeight;
    if (bodyHeight < windowHeight) {
        footer.style.position = 'fixed';
        footer.style.bottom = '0';
        footer.style.width = '100%';
    } else {
        footer.style.position = 'static';
    }
}

window.addEventListener('load', adjustFooterPosition);
window.addEventListener('resize', adjustFooterPosition);
// JavaScript for Resources Page

// GSAP Animations
gsap.from(".card", {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: "power2.out",
    delay: 0.5
});

// Smooth Scroll to Top Button
document.addEventListener('DOMContentLoaded', function() {
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollButton.classList.add('btn-scroll-top');
    document.body.appendChild(scrollButton);

    scrollButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    function toggleScrollButton() {
        if (window.scrollY > 300) {
            scrollButton.style.opacity = '1';
        } else {
            scrollButton.style.opacity = '0';
        }
    }

    window.addEventListener('scroll', toggleScrollButton);
});
gsap.to('.box', {
    scrollTrigger: {
        trigger: '.box',

        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,

    },
    x: 700,
    duration: 5,
})