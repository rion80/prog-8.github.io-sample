document.write(`<div id="nav-wrapper" class="nav-wrapper">
<div class="hamburger" id="js-hamburger">
  <span class="hamburger__line hamburger__line--1"></span>
  <span class="hamburger__line hamburger__line--2"></span>
  <span class="hamburger__line hamburger__line--3"></span>
</div>
<nav class="sp-nav">
  <ul>
    <a href ="index.html"><li>home</li><a>
    <a href ="index2.html"><li>メニュー2</li><a>
    <a href ="index3.html"><li>メニュー3</li><a>
    <a href ="index4.html"><li>メニュー4</li><a>
    <a href ="index5.html"><li>Contact</li><a>
    
  </ul>
</nav>
<div class="black-bg" id="js-black-bg"></div>
</div>`)
window.onload = function () {
  const nav = document.getElementById('nav-wrapper');
  const hamburger = document.getElementById('js-hamburger');
  const blackBg = document.getElementById('js-black-bg');

  hamburger.addEventListener('click', function () {
      nav.classList.toggle('open');
  });
  blackBg.addEventListener('click', function () {
      nav.classList.remove('open');
  });
};


const loading = document.querySelector( '.loading' );

window.addEventListener( 'load', () => {
  loading.classList.add( 'hide' );
}, false );
