(() => {
  const menuRefs = {
    openMenuBtn: document.querySelector('[data-menu-open'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };
  menuRefs.openMenuBtn.addEventListener('click', toggleModal);
  menuRefs.closeMenuBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    const expanded = menuRefs.openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    menuRefs.openMenuBtn.setAttribute('aria-expanded', !expanded);

    menuRefs.menu.classList.toggle('mobile-menu--is-open');
  }
})();
