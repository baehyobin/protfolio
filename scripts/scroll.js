gsap.registerPlugin(ScrollTrigger);
const allLink = document.querySelectorAll('header a')
const homebtn = allLink[0]
const profbtn = allLink[1]
const webbtn = allLink[2]
const designbtn = allLink[3]

const home = document.querySelector('#home')
const profile = document.querySelector('#profile')
const webProject = document.querySelector('#web_project')
const otherProject = document.querySelector('#other_project')

gsap.to(home,{
    start:'top 80%',
    scrub: true,
},
function removeAllActive() {
    allLink.forEach(link => {
        link.classList.remove('active');
    });
    homebtn.addEventListener('mouseover', () => {
        removeAllActive();
        homebtn.classList.add('active');
    });
}
)