const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const editorialClipDefs = document.querySelector("#editorial-card-clip-defs");
const editorialCards = [...document.querySelectorAll(".hero-photo-card, .hero-project-panel")];

if (editorialClipDefs && editorialCards.length) {
	const svgNS = "http://www.w3.org/2000/svg";
	const arcTangent = 0.55228475;
	const round = (value) => Math.round(value * 100) / 100;
	const updateEditorialClip = (card) => {
		const { width, height } = card.getBoundingClientRect();
		if (!width || !height) return;

		const style = getComputedStyle(card);
		const button = parseFloat(style.getPropertyValue("--button-size")) || 56;
		const inset = parseFloat(style.getPropertyValue("--button-inset")) || 16;
		const shelf = parseFloat(style.getPropertyValue("--cutout-shelf")) || 16;
		const fillet = parseFloat(style.getPropertyValue("--cutout-fillet")) || 14;
		const outer = Math.min(parseFloat(style.borderTopLeftRadius) || 20, width / 2, height / 2);
		const smallRadius = Math.min(fillet, width * 0.1, height * 0.1);
		const mainRadius = Math.min(
			button + inset - 4,
			width * 0.3,
			(height - outer * 2 - smallRadius * 2) * 0.46
		);
		const shelfLength = Math.min(shelf, width * 0.1);
		const mainStartX = width - smallRadius - shelfLength;
		const mainEndX = mainStartX - mainRadius;
		const mainEndY = height - smallRadius;
		const mainStartY = mainEndY - mainRadius;
		const upperStartY = mainStartY - smallRadius;
		const mainControl = mainRadius * arcTangent;
		const filletControl = smallRadius * arcTangent;
		const pathData = [
			`M ${round(outer)} 0`,
			`H ${round(width - outer)}`,
			`Q ${round(width)} 0 ${round(width)} ${round(outer)}`,
			`V ${round(upperStartY)}`,
			`C ${round(width)} ${round(upperStartY + filletControl)} ${round(width - smallRadius + filletControl)} ${round(mainStartY)} ${round(width - smallRadius)} ${round(mainStartY)}`,
			`H ${round(mainStartX)}`,
			`C ${round(mainStartX - mainControl)} ${round(mainStartY)} ${round(mainEndX)} ${round(mainEndY - mainControl)} ${round(mainEndX)} ${round(mainEndY)}`,
			`C ${round(mainEndX)} ${round(mainEndY + filletControl)} ${round(mainEndX - smallRadius + filletControl)} ${round(height)} ${round(mainEndX - smallRadius)} ${round(height)}`,
			`H ${round(outer)}`,
			`Q 0 ${round(height)} 0 ${round(height - outer)}`,
			`V ${round(outer)}`,
			`Q 0 0 ${round(outer)} 0 Z`
		].join(" ");
		card._editorialClipShape.setAttribute("d", pathData);
	};

	const observer = window.ResizeObserver
		? new ResizeObserver((entries) => entries.forEach(({ target }) => updateEditorialClip(target)))
		: null;

	editorialCards.forEach((card, index) => {
		const id = `editorial-card-clip-${index}`;
		const clipPath = document.createElementNS(svgNS, "clipPath");
		clipPath.id = id;
		clipPath.setAttribute("clipPathUnits", "userSpaceOnUse");
		const shape = document.createElementNS(svgNS, "path");
		clipPath.append(shape);
		editorialClipDefs.append(clipPath);
		card._editorialClipShape = shape;
		card.style.setProperty("--editorial-card-clip", `url(#${id})`);
		updateEditorialClip(card);
		observer?.observe(card);
	});

	if (!observer) window.addEventListener("resize", () => editorialCards.forEach(updateEditorialClip), { passive: true });
}

const topbar = document.querySelector(".topbar");
if (topbar) {
	const updateTopbar = () => topbar.classList.toggle("is-scrolled", window.scrollY > 16);
	window.addEventListener("scroll", updateTopbar, { passive: true });
	updateTopbar();
}

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
