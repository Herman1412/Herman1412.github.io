const navLinks = [
    {href: 'index.html', text: '<img id="logo" src="images/logo.gif" alt=""> Webtek FC'},
    {href: 'about.html', text: 'Om oss'},
    {href: 'membership.html', text: 'Bli medlem'},
    {href: 'news.html', text: 'Nyheter'},
    {href: 'calendar.html', text: 'Kalender'},
    {href: 'results.html', text: 'Resultater'},
];

let nav = document.createElement("nav"),
navA;

for (let i = 0; i < navLinks.length; i++) {
    navA = document.createElement("a");
    navA.href = navLinks[i].href;
    navA.innerHTML = navLinks[i].text;
    nav.appendChild(navA)
}

window.onload = function (){
    document.body.appendChild(nav);
}
