const cookiesContainer = document.querySelector('.cookies-container');
const cookiesBtn = document.querySelector('.cookies-btn');
const footerYear = document.querySelector('.footer-year');

const checkCookies = () => {
  const cookiesAccepted = localStorage.getItem('cookies');
  if (cookiesAccepted) {
    cookiesContainer.classList.add('cookies-hide');
  }
};
checkCookies();

const handleCookies = () => {
  localStorage.setItem('cookies', 'true');
  cookiesContainer.classList.add('cookies-hide');
};

const handleCurrentYear = () => {
  const year = new Date().getFullYear();
  footerYear.innerText = year;
};
handleCurrentYear();

cookiesBtn.addEventListener('click', handleCookies);
