/* KLAVDIMOS — hero interactions */
(function () {
  "use strict";
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const fine = window.matchMedia("(pointer: fine)").matches;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const hero = $(".hero");
  requestAnimationFrame(() => hero && hero.classList.add("is-in"));

  /* reveal blocks on scroll */
  const blocks = $$("[data-reveal]");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        en.target.classList.add("is-in");
        io.unobserve(en.target);
      });
    }, { rootMargin: "0px 0px -12% 0px", threshold: 0.12 });
    blocks.forEach((el) => io.observe(el));
  } else {
    blocks.forEach((el) => el.classList.add("is-in"));
  }

  const bar = $(".bar");
  const onScroll = () => bar && bar.classList.toggle("is-stuck", window.scrollY > 24);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (fine && !reduce) {
    const dot = $("#cursor");
    const ring = $("#ring");
    if (dot && ring) {
      document.documentElement.classList.add("has-cursor");
      let x = innerWidth / 2, y = innerHeight / 2, rx = x, ry = y;
      window.addEventListener("pointermove", (e) => {
        x = e.clientX; y = e.clientY;
        if (!document.documentElement.classList.contains("cursor-on")) {
          rx = x; ry = y;
          document.documentElement.classList.add("cursor-on");
        }
      }, { passive: true });

      const loop = () => {
        rx += (x - rx) * 0.16;
        ry += (y - ry) * 0.16;
        dot.style.transform = `translate3d(${x}px,${y}px,0) translate(-50%,-50%)`;
        ring.style.transform = `translate3d(${rx}px,${ry}px,0) translate(-50%,-50%)`;
        requestAnimationFrame(loop);
      };
      requestAnimationFrame(loop);

      document.addEventListener("pointerover", (e) => {
        const t = e.target;
        if (!(t instanceof Element)) return;
        ring.classList.toggle("is-link", !!t.closest("a, button"));
      });
    }

    $$(".btn, .pill, .nav a").forEach((el) => {
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
        const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
        el.style.transform = `translate3d(${dx * 7}px,${dy * 5}px,0)`;
      });
      el.addEventListener("pointerleave", () => { el.style.transform = ""; });
    });
  }

  /* ---------- просмотр работы ---------- */
  const viewer = $("#viewer");
  if (viewer) {
    const vImg = $("#viewerImg");
    const vTitle = $("#viewerTitle");
    const vPlace = $("#viewerPlace");
    const closeBtn = $("#viewerClose");
    const prevBtn = $("#viewerPrev");
    const nextBtn = $("#viewerNext");
    let list = [];
    let idx = 0;

    const render = () => {
      vImg.src = list[idx];
      vImg.alt = vTitle.textContent;
    };

    const open = (btn) => {
      list = (btn.dataset.images || "").split(",").filter(Boolean);
      if (!list.length) return;
      idx = 0;
      vTitle.textContent = btn.dataset.title || "";
      vPlace.textContent = btn.dataset.place || "";
      render();
      viewer.classList.add("is-open");
      viewer.setAttribute("aria-hidden", "false");
      document.body.classList.add("is-locked");
    };

    const close = () => {
      viewer.classList.remove("is-open");
      viewer.setAttribute("aria-hidden", "true");
      document.body.classList.remove("is-locked");
      setTimeout(() => { if (!viewer.classList.contains("is-open")) vImg.src = ""; }, 300);
    };

    const step = (dir) => {
      if (!list.length) return;
      idx = (idx + dir + list.length) % list.length;
      render();
    };

    $$(".work-card__plate").forEach((btn) => btn.addEventListener("click", () => open(btn)));
    closeBtn.addEventListener("click", close);
    prevBtn.addEventListener("click", () => step(-1));
    nextBtn.addEventListener("click", () => step(1));
    viewer.addEventListener("click", (e) => { if (e.target === viewer) close(); });
    document.addEventListener("keydown", (e) => {
      if (!viewer.classList.contains("is-open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    });
  }
})();
