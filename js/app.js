
//; Task 5.0
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];

// Task 1.0
const mainEl = document.querySelector('main');

// Task 1.1
mainEl.style.backgroundColor = 'var(--main-bg)';

// Task 1.2
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';

// Task 1.3
mainEl.classList.add('flex-ctr');

// Task 2.0
const topMenuEl = document.querySelector('#top-menu');

// Task 2.1
topMenuEl.style.height = '100%';

// Task 2.2
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

// Task 2.3
topMenuEl.classList.add('flex-around');

// Task 3.1
for (let link of menuLinks) {
  const aEl = document.createElement('a');
  aEl.href = link.href;
  aEl.textContent = link.text;
  topMenuEl.appendChild(aEl);
}

// Task 4.0
const subMenuEl = document.querySelector('#sub-menu');

// Task 4.1
subMenuEl.style.height = '100%';

// Task 4.2
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

// Task 4.3
subMenuEl.classList.add('flex-around');

// Task 4.4
subMenuEl.style.position = 'absolute';

// Task 4.5
subMenuEl.style.top = '0';

// Task 5.1
const topMenuLinks = document.querySelectorAll('#top-menu a');
let showingSubMenu = false;

// Task 5.2
document.querySelector('#top-menu').addEventListener('click', function(event) {
  event.preventDefault();
  if (event.target.tagName !== 'A') {
    return;
  }
  console.log(event.target.textContent);
});

// Task 5.3
document.querySelector('#top-menu').addEventListener('click', function(event) {
  if (event.target.classList.contains('active')) {
    event.target.classList.remove('active');
    showingSubMenu = false;
    subMenuEl.style.top = '0';
    return;
  }
});

// Task 5.4
document.querySelector('#top-menu').addEventListener('click', function(event) {
  topMenuLinks.forEach(function(link) {
    link.classList.remove('active');
  });
});

// Task 5.5
document.querySelector('#top-menu').addEventListener('click', function(event) {
  event.target.classList.add('active');
});

// Task 5.6
document.querySelector('#top-menu').addEventListener('click', function(event) {
  const link = menuLinks.find(function(item) {
    return item.text === event.target.textContent.toLowerCase();
  });
  showingSubMenu = link.subLinks ? true : false;
});

// Task 5.7
document.querySelector('#top-menu').addEventListener('click', function(event) {
  if (showingSubMenu) {
    buildSubMenu(event.target.textContent.toLowerCase());
    subMenuEl.style.top = '100%';
  } else {
    subMenuEl.style.top = '0';
    mainEl.innerHTML = '<h1>' + event.target.textContent.toLowerCase() + '</h1>';
  }
});

// Task 5.8
function buildSubMenu(menuItem) {
  subMenuEl.innerHTML = '';
  const link = menuLinks.find(function(item) {
    return item.text === menuItem;
  });
  link.subLinks.forEach(function(subLink) {
    const a = document.createElement('a');
    a.href = subLink.href;
    a.textContent = subLink.text;
    subMenuEl.appendChild(a);
  });
}

// Task 6.0
subMenuEl.addEventListener('click', function(event) {
  event.preventDefault();
  if (event.target

