let scrollDown;
let lastScrollTop = 0;
let lastId = "";
let sections = document.querySelectorAll(['h1[id]','h2[id]']);

window.addEventListener("scroll", function() {
  let st = window.pageYOffset || document.documentElement.scrollTop;
  scrollDown = st > lastScrollTop;
  lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);

function getIndex(id) {
  let sections = document.querySelectorAll(['h1[id]','h2[id]']);
  for (let i = 0; i < sections.length; ++i) {
    console.log(i + ": " + sections[i].id);
    if (sections[i].id == id) {
      return i;
    }
  }
  return -1;
}

window.addEventListener('DOMContentLoaded', () => {
  let els =  document.querySelectorAll(['h1[id]','h2[id]']);
  let tocEls = document.querySelectorAll(`.table-of-contents ul a`);
  for (let i = 0; i < els.length; ++i) {
    const tag = els[i].tagName.toLowerCase();
    els[i].id = tag+"-"+i;
    tocEls[i].id = tag+"-"+i;
  }

  let lastItems = [];
  const observer = new IntersectionObserver(entries => {
    for (let i = 0; i < entries.length; ++i) {
      let entry = entries[i];
      // entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      console.log("id: " + id);

      if (entry.intersectionRatio > 0) {
        lastId = id;
        let el = document.querySelector(`.table-of-contents ul a[id*="${id}"]`);
        el?.classList.add('active');
      } else {
        let el = document.querySelector(`.table-of-contents ul a[id*="${id}"]`);
        el?.classList.remove('active');
        if (entries.length > 0) {
          return;
        }
        console.log("lastId: " + lastId);
        let index = getIndex(id);
        console.log(index);
        if (index < 0) {
          return;
        }
        let newIndex = Math.max(scrollDown ? i : i-1, 0);
        let sectionss = document.querySelectorAll(['h1[id]','h2[id]'])
        let newEntry = sectionss[newIndex];
        let newId = newEntry.id;
        el = document.querySelector(`.table-of-contents ul a[id*="${id}"]`);
        el?.classList.add('active');

      }
    }

  });

  // Track all sections that have an `id` applied
  document.querySelectorAll(['h1[id]','h2[id]']).forEach((section) => {
    observer.observe(section);
  });
});