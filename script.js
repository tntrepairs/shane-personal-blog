const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduceMotion && window.Lenis) {
	const lenis = new Lenis({ duration: 1.05, smoothWheel: true });
	function raf(time) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}
	requestAnimationFrame(raf);
}

if (!reduceMotion && window.gsap) {
	gsap.registerPlugin(ScrollTrigger);

	gsap.utils.toArray(".reveal").forEach((item) => {
		gsap.from(item, {
			scrollTrigger: {
				trigger: item,
				start: "top 88%"
			},
			y: 26,
			opacity: 0,
			duration: 0.75,
			ease: "power3.out"
		});
	});
}

document.querySelectorAll(".tilt-card").forEach((card) => {
	card.addEventListener("pointermove", (event) => {
		if (reduceMotion) return;
		const rect = card.getBoundingClientRect();
		const x = (event.clientX - rect.left) / rect.width - 0.5;
		const y = (event.clientY - rect.top) / rect.height - 0.5;
		card.style.transform = `perspective(1000px) rotateX(${y * -5}deg) rotateY(${x * 7}deg) translateY(-2px)`;
	});

	card.addEventListener("pointerleave", () => {
		card.style.transform = "";
	});
});
