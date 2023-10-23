

const hiddenElementsx= document.querySelectorAll('.hiddenx');
const observer=new IntersectionObserver(entries=>{ 
    entries.forEach((entry)=>{
            if(entry.isIntersecting){
                entry.target.classList.add('show');
            }else{
                entry.target.classList.remove('show');
            }
    });
});
hiddenElementsx.forEach((el)=>observer.observe(el))



const hiddenElementsy= document.querySelectorAll('.hiddeny')
const observering=new IntersectionObserver(entries=>{ 
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
});
});
hiddenElementsy.forEach((el)=>observer.observe(el))



const navtoggler=document.getElementById('nav-toggler');
const navdrop=document.getElementById('nav-drop');

const navItems=`
            <li onclick='toggle()'><a href='home.html'>Home</a></li>
            <li onclick='toggle()'><a href='home.html#sec-2'>About</a></li>
            <li onclick='toggle()'><a href='home.html#sec-3'>Astronomy</a></li>
            <li onclick='toggle()'><a href='#footer'>Contact Us</a></li>`
function toggle() {
    const isOpen=navdrop.style.display==='block';
    navdrop.innerHTML= isOpen ? '': navItems;
    navdrop.style.display=isOpen ? 'none': 'block';
    navtoggler.innerHTML=isOpen ? '<i class="fas fa-bars"></i>': '<i class="fa-solid fa-x"></i>';
}
navtoggler.addEventListener('click', toggle)


