var menuLinks = [
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

const mainEl = document.querySelector('main');
mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.innerHTML = '<h1> DOM Manipulation </h1>';
mainEl.classList.add("flex-ctr");

const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add("flex-around");
console.log(topMenuEl)

menuLinks.forEach((link) => {
  const li = document.createElement("a"); 
  li.setAttribute("href", link.href);
   li.textContent = link.text;
  topMenuEl.appendChild(li);
});


//part 2
const subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0"; 

const topMenuLinks = document.querySelectorAll("a");

let isVisible = false;

for(let link of topMenuLinks){
  link.addEventListener('click', function(e){
   e.preventDefault();
   if(!link.click){
     return;
   }
      console.log(link.textContent.toLowerCase());

      topMenuLinks.forEach(function(link){
      link.classList.remove('active')
    });
   e.target.classList.toggle('active');


   let clickedLink;

   for(let i = 0; i < menuLinks.length; i++ ){
      if(menuLinks[i].text === e.target.textContent){
        clickedLink = menuLinks[i];
        break;
      }
   }
   
   if(clickedLink.subLinks){
    if(isVisible){
    subMenuEl.style.top = "0%";
    isVisible = false;
   }
   else {
    buildSubmenu(clickedLink.subLinks);
    subMenuEl.style.top='100%';
    isVisible = true;
   }
  }
   else{
    subMenuEl.style.top = '0%';
    isVisible = false;
   }
 
   function buildSubmenu(subLinks){
    subMenuEl.innerHTML='';
     subLinks.forEach((link)=>{    
      const aElement = document.createElement('a');
      aElement.setAttribute('href', link.href);
      aElement.textContent = link.text;
      subMenuEl.appendChild(aElement);  
    });
  

   }

  });
}