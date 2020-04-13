export function changeNavLinksStyles(activeLink) {
  const navLinks = document.querySelectorAll('.nav__link');
  navLinks.forEach(link => {
    link.classList.remove('nav__link_active');
  })
  activeLink.classList.add('nav__link_active');    
}
