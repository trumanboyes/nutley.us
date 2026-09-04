(function () {
  const header = document.querySelector("header");
  const wrap = document.querySelector(".video-wrap");
  const video = document.querySelector("video");
  const menuBtn = document.querySelector(".menu-btn");
  const mobileNav = document.querySelector(".mobile-nav");
  const isHome = document.body.dataset.page === "home";

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function onScroll() {
    const y = window.scrollY;
    const solid = y > 28 || !isHome || (mobileNav && mobileNav.classList.contains("open"));
    header.classList.toggle("solid", solid);
    if (wrap && !reduced) {
      const t = Math.min(1, Math.max(0, y / (window.innerHeight * 0.92)));
      wrap.style.opacity = String(1 - t);
      if (video) {
        if (t > 0.96) video.pause();
        else if (video.paused) video.play().catch(function () {});
      }
    }
  }

  if (video) {
    video.addEventListener("loadedmetadata", function () {
      if (video.currentTime < 1) video.currentTime = 5.5;
    });
  }

  menuBtn && menuBtn.addEventListener("click", function () {
    const open = !mobileNav.classList.contains("open");
    mobileNav.classList.toggle("open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    document.body.style.overflow = open ? "hidden" : "";
    header.classList.toggle("solid", open || window.scrollY > 28 || !isHome);
  });

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();
})();
