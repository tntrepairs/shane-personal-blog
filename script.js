const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

menuToggle?.addEventListener("click", () => {
	const isOpen = mobileMenu.classList.toggle("is-open");
	menuToggle.setAttribute("aria-expanded", String(isOpen));
});

mobileMenu?.querySelectorAll("a").forEach((link) => {
	link.addEventListener("click", () => {
		mobileMenu.classList.remove("is-open");
		menuToggle?.setAttribute("aria-expanded", "false");
	});
});

if (!prefersReducedMotion && window.Lenis) {
	const lenis = new Lenis({
		duration: 1.1,
		smoothWheel: true
	});

	function raf(time) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}

	requestAnimationFrame(raf);
}

if (!prefersReducedMotion && window.gsap) {
	gsap.registerPlugin(ScrollTrigger);

	gsap.from(".split-title", {
		yPercent: 30,
		opacity: 0,
		duration: 1,
		ease: "power4.out"
	});

	gsap.utils.toArray(".reveal").forEach((element) => {
		gsap.from(element, {
			scrollTrigger: {
				trigger: element,
				start: "top 86%"
			},
			y: 34,
			opacity: 0,
			duration: 0.85,
			ease: "power3.out"
		});
	});

	gsap.to(".ticker-track", {
		xPercent: -50,
		ease: "none",
		scrollTrigger: {
			trigger: ".ticker",
			start: "top bottom",
			end: "bottom top",
			scrub: 0.8
		}
	});

	gsap.to(".orbit-dot", {
		rotate: 360,
		transformOrigin: "-4rem 6rem",
		duration: 10,
		repeat: -1,
		ease: "none"
	});
}

document.querySelectorAll("[data-tilt]").forEach((card) => {
	card.addEventListener("pointermove", (event) => {
		if (prefersReducedMotion) return;
		const rect = card.getBoundingClientRect();
		const x = (event.clientX - rect.left) / rect.width - 0.5;
		const y = (event.clientY - rect.top) / rect.height - 0.5;
		card.style.transform = `perspective(900px) rotateX(${y * -6}deg) rotateY(${x * 8}deg)`;
	});

	card.addEventListener("pointerleave", () => {
		card.style.transform = "";
	});
});
