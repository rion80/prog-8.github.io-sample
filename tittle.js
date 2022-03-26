function scroll_effect() {
  const elements = document.getElementsByClassName('ani')

  if(!elements) return;
                      
  const scrollY = window.pageYOffset;
  const windowH = window.innerHeight;
  const showTiming = 200; // 要素を表示するタイミング
  for(var i = 0; i < elements.length; i++) { 
    const elemClientRect = elements[i].getBoundingClientRect(); 
    const elemY = scrollY + elemClientRect.top; 
    if(scrollY > elemY - windowH + showTiming) {
      elements[i].classList.add('show');
    }
  }
}
window.addEventListener('scroll', scroll_effect); // スクロール時に実行
