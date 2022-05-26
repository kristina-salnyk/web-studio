(() => {
  const menuRefs = {
    menuBtn: document.querySelector('[data-menu-button]'),
    menu: document.querySelector('[data-menu]'),
  };
  menuRefs.menuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    const expanded = menuRefs.menuBtn.getAttribute('aria-expanded') === 'true' || false;
    menuRefs.menuBtn.setAttribute('aria-expanded', !expanded);

    menuRefs.menuBtn.classList.toggle('mobile-menu-is-open');
    menuRefs.menu.classList.toggle('mobile-menu-is-open');
    document.body.classList.toggle('modal-open');
  }
})();
