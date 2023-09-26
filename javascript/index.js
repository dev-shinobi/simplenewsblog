const mymenu = document.querySelector('.myheader__content');
const icon = document.querySelector('.myhearder__menu-style');
const checker = document.querySelector('#menu');
const mode = document.querySelector('#changemode');
const icon2 = document.querySelector('.myheader__modestyle0');
const mode1 = document.querySelector('#changemode1');
const icon3 = document.querySelector('.myheader__modestyle');
checker.addEventListener('change', function() {
    if (this.checked) {
        mymenu.style.display = 'initial';
        icon.innerHTML = "close";
    } else {
        mymenu.style.display = 'none';
        icon.innerHTML = "density_medium";
    }
  });
  mode.addEventListener('change', function() {
    if (this.checked) {
        icon2.innerHTML = "nightlight";
    } else {
        icon2.innerHTML = "light_mode";
    }
  });
  mode1.addEventListener('change', function() {
    if (this.checked) {
        icon3.innerHTML = "nightlight";
    } else {
        icon3.innerHTML = "light_mode";
    }
  });