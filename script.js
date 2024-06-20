const imgs = document.querySelectorAll(".header-slider ul img");
const prev_btn = document.querySelector(".Control-Prev");
const next_btn = document.querySelector(".Control-Next");

let n = 0;

function changeSlide(){
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';
        
    }

    imgs[n].style.display = 'block';
}

changeSlide()

prev_btn.addEventListener('click', (e)=>{
    if(n > 0){
        n--;
    }
    else{
        n = imgs.length - 1;
    }
    changeSlide()

})
next_btn.addEventListener('click', (e)=>{
    if(n < imgs.length - 1){
        n++;
    }
    else{
        n = 0;
    }
    changeSlide()

})

const scrollcontainer = document.querySelectorAll('.products');
for (const iterator of scrollcontainer) {
    iterator.addEventListener('wheel', (evt)=>{
        evt.preventDefault();
        iterator.scrollLeft += evt.deltaY
    })
    
}