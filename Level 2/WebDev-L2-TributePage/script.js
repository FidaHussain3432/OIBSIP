// =====================================================
// GSAP + ScrollTrigger — PPTX-style Morph Transitions
// =====================================================
gsap.registerPlugin(ScrollTrigger);

// ---- Hero entrance: portrait morphs in, name slides up ----
const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

gsap.set(".hero-portrait img", { scale: 0.6, opacity: 0, rotation: -15 });
gsap.set(".hero-name", { y: 80, opacity: 0 });
gsap.set(".hero-tagline", { y: 40, opacity: 0 });
gsap.set("nav", { y: -100 });

heroTl
  .to("nav", { y: 0, duration: 0.8 })
  .to(".hero-portrait img", {
    scale: 1,
    opacity: 1,
    rotation: 0,
    duration: 1.2,
    ease: "back.out(1.7)"
  }, "-=0.4")
  .to(".hero-name", { y: 0, opacity: 1, duration: 0.9 }, "-=0.6")
  .to(".hero-tagline", { y: 0, opacity: 1, duration: 0.7 }, "-=0.4");

// ---- Section headings: slide + fade on scroll ----
gsap.utils.toArray("main section h2").forEach((heading) => {
  gsap.from(heading, {
    scrollTrigger: {
      trigger: heading,
      start: "top 85%",
      toggleActions: "play none none reverse"
    },
    x: -40,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  });
});

// ---- Biography paragraphs: stagger fade-up ----
gsap.from("article p", {
  scrollTrigger: {
    trigger: "article",
    start: "top 80%",
    toggleActions: "play none none reverse"
  },
  y: 40,
  opacity: 0,
  duration: 0.7,
  stagger: 0.15,
  ease: "power3.out"
});

// ---- Timeline items: slide from left with stagger ----
gsap.from(".timeline li", {
  scrollTrigger: {
    trigger: ".timeline",
    start: "top 80%",
    toggleActions: "play none none reverse"
  },
  x: -60,
  opacity: 0,
  duration: 0.6,
  stagger: 0.12,
  ease: "power3.out"
});

// ---- Quote block: morph/scale in ----
gsap.from("blockquote", {
  scrollTrigger: {
    trigger: "blockquote",
    start: "top 85%",
    toggleActions: "play none none reverse"
  },
  scale: 0.9,
  opacity: 0,
  rotationX: 10,
  duration: 1,
  ease: "back.out(1.4)"
});

// ---- Footer fade ----
gsap.from("body > footer", {
  scrollTrigger: {
    trigger: "body > footer",
    start: "top 95%"
  },
  opacity: 0,
  y: 20,
  duration: 0.8
});

// ---- Subtle parallax on hero portrait ----
gsap.to(".hero-portrait img", {
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: 1
  },
  y: 80,
  scale: 0.9,
  ease: "none"
});