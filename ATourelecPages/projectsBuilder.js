const pro = document.querySelectorAll('.project');
console.log(pro);

const isInViewports = el => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const runs = () =>
  pro.forEach(item => {
    if (isInViewports(item)) {
      item.classList.add('show');
    }
  });

// Events
window.addEventListener('load', runs);
window.addEventListener('resize', runs);
window.addEventListener('scroll', runs);