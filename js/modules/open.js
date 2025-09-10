export const openMenu = ()=>{
  const btn = document.querySelector('.menu-toggle')
  const menu = document.querySelector('.menu__list')
  const menuItems = document.querySelectorAll('.menu__item')
  if (!btn || !menu) return

  console.log(btn)

  btn.addEventListener('click', ()=>{
    menu.classList.toggle('open--menu')
    btn.classList.toggle('active')
  })
  if (menuItems){
    menuItems.forEach((item)=>{
      item.addEventListener('click', ()=>{
        menu.classList.remove("open--menu");
        btn.classList.remove("active");
      })
    })
  }
  document.addEventListener('click', (e)=>{
    const isClickInside = menu.contains(e.target) || btn.contains(e.target)
     if (!isClickInside && menu.classList.contains("open--menu")) {
      menu.classList.remove("open--menu");
      btn.classList.remove("active");
    }
  })
}