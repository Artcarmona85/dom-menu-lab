var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];
  
  
  var mainEl = document.querySelector('main');

  mainEl.style.backgroundColor = 'var(--main-bg)';

  mainEl.innerHTML = '<h1>SEI Rocks!</h1>';
  mainEl.classList.add('flex-ctr');

  var topMenuEl = document.getElementById('top-menu');

  topMenuEl.style.height = '100%'
  topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
  topMenuEl.classList.add('flex-around');

  menuLinks.forEach(function(link) {
    var linkEl = document.createElement('a');
    linkEl.setAttribute('href', link.href);
    linkEl.textContent = link.text;
    topMenuEl.appendChild(linkEl);
  });
  