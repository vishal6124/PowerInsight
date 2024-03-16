//for auto scroll
let sections = document.querySelectorAll('section');
let nav_links = document.querySelectorAll('.nav-links .navigation a');

window.onscroll = () => {
    sections.forEach (sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop -150; 
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id'); 

        if(top >= offset && top < offset + height){
            nav_links.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.nav-links .navigation a[href*=' + id + ']').classList.add('active')
            })
        }
    })
}