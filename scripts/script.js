//     --Navbar--
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
    nav.appendChild(navA);
}


const footerItems = [
    {text: '<img class="sponsor" src="images/adidas.png" alt="">'},
    {text: '<img class="sponsor" src="images/powerade.png" alt="">'},
    {text: '<img class="sponsor" src="images/xxl.png" alt="">'},
    {text: '<h4>Besøk oss</h4> <p>A-blokka <br> Høgskoleringen 5 <br> NTNU Gløshaugen</p>'},
    {text: '<h4>Kontakt info</h4> <p>example@webtek.no <br> Tlf: 123 45 678</p>'},
    {text: '<h4>Sosiale medier</h4> <div id="mediaGrid"><a href="https://www.youtube.com/user/ntnuinfo"><img src="images/youtube.png" alt=""></a><a href="https://twitter.com/ntnu"><img src="images/twitter.png" alt=""></a><a href="https://www.facebook.com/NTNUirl"><img src="images/facebook.png" alt=""></a><a href="https://www.instagram.com/ntnu/?hl=nb"><img src="images/instagram.png" alt=""></a></div>'},
];
//     --Footer--
let footer = document.createElement("footer"),
footerL;
for (let i = 0; i < footerItems.length; i++){
    footerL = document.createElement("a");
    footerL.innerHTML = footerItems[i].text;
    footer.appendChild(footerL)
}
window.onload = function (){
    document.body.appendChild(nav);
    document.body.appendChild(footer);
}