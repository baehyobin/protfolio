//전체화면 휠
/* const wrap = new Swiper('#wrap', {
    direction:'vertical',
    mousewheel:true,
    speed:500,
}) */
//header
const allLink = document.querySelectorAll('header a')
const homebtn = allLink[0]
const profbtn = allLink[1]
const webbtn = allLink[2]
const designbtn = allLink[3]

function removeAllActive() {
    allLink.forEach(link => {
        link.classList.remove('active');
    });
}

homebtn.addEventListener('mouseover', () => {
    removeAllActive();
    homebtn.classList.add('active');
});

profbtn.addEventListener('mouseover', () => {
    removeAllActive();
    profbtn.classList.add('active');
});

webbtn.addEventListener('mouseover', () => {
    removeAllActive();
    webbtn.classList.add('active');
});

designbtn.addEventListener('mouseover', () => {
    removeAllActive();
    designbtn.classList.add('active');
});

// -----------------------------------------3페이지

//마우스따라 변환
const lenoxBtn = document.querySelector('.right_web #lenox')
const fenderBtn = document.querySelector('.right_web #fender')
const himartBtn = document.querySelector('.right_web #himart')
const lenoxSwiper = document.querySelector('.main_web .lenox_swiper')
const fenderSwiper = document.querySelector('.main_web .fender_swiper')
const himartSwiper = document.querySelector('.main_web .himart_swiper')

console.log(lenoxBtn,fenderBtn,himartBtn,lenoxSwiper,fenderSwiper,himartSwiper)

lenoxBtn.addEventListener('mouseover',()=>{
    lenoxSwiper.style.opacity=1;
    lenoxSwiper.style.zIndex = '20';
    lenoxSwiper.style.pointerEvents = 'auto';
    fenderSwiper.style.opacity=0;
    fenderSwiper.style.zIndex = '10';
    fenderSwiper.style.pointerEvents = 'none';
    himartSwiper.style.opacity=0;
    himartSwiper.style.zIndex = '10';
    himartSwiper.style.pointerEvents = 'none';
})
fenderBtn.addEventListener('mouseover',()=>{
    lenoxSwiper.style.opacity=0;
    lenoxSwiper.style.zIndex = '10';
    lenoxSwiper.style.pointerEvents = 'none';
    fenderSwiper.style.opacity=1;
    fenderSwiper.style.zIndex = '20';
    fenderSwiper.style.pointerEvents = 'auto';
    himartSwiper.style.opacity=0;
    himartSwiper.style.zIndex = '10';
    himartSwiper.style.pointerEvents = 'none';
})
himartBtn.addEventListener('mouseover',()=>{
    lenoxSwiper.style.opacity=0;
    lenoxSwiper.style.zIndex = '10';
    lenoxSwiper.style.pointerEvents = 'none';
    fenderSwiper.style.opacity=0;
    fenderSwiper.style.zIndex = '10';
    fenderSwiper.style.pointerEvents = 'none';
    himartSwiper.style.opacity=1;
    himartSwiper.style.zIndex = '20';
    himartSwiper.style.pointerEvents = 'auto';
})

//스와이퍼 기본값
const lenox = new Swiper('.lenox_swiper', { 
    //옵션:값,
    autoplay:{delay:1000},//자동재생
    loop:true,//끝에서 처음으로 자연스러운 전환
    slidesPerView :3,
    spaceBetween: 20,
    direction:'vertical',
    })

const fender = new Swiper('.fender_swiper', { 
    //옵션:값,
    autoplay:{delay:1000},//자동재생
    loop:true,//끝에서 처음으로 자연스러운 전환
    slidesPerView :3,
    spaceBetween: 20,
    direction:'vertical',
    })

const himart = new Swiper('.himart_swiper', { 
    //옵션:값,
    autoplay:{delay:1000},//자동재생
    loop:true,//끝에서 처음으로 자연스러운 전환
    slidesPerView :3,
    spaceBetween: 20,
    direction:'vertical',
    })




// -----------------------------------------4페이지

// 카테고리 열기
const detailBtn = document.querySelector('.left_btn .detail_pg')
const bnrBtn = document.querySelector('.left_btn .bnr_pg')
const detailGallery = document.querySelector('.right_gallery .detail_gallery')
const bnrGallery = document.querySelector('.right_gallery .bnr_gallery')

console.log(detailBtn, detailGallery, bnrBtn, bnrGallery)

detailBtn.addEventListener('click',()=>{
    detailGallery.style.display='grid';
    bnrGallery.style.display='none';
})
bnrBtn.addEventListener('click',()=>{
    bnrGallery.style.display='grid';
    detailGallery.style.display='none';
    return
})
// 썸네일보기
const detailthum = document.querySelectorAll('.detail_gallery .thumnail_wrapper')
const bnrthum = document.querySelectorAll('.bnr_gallery .thumnail_wrapper')
const popupBg = document.querySelector('#other_project #popup_bg')

console.log(popupBg, detailthum)

popupBg.addEventListener('click',()=>{
    return popupBg.style.display = 'none';
    })

    detailthum.forEach(function(element) {
        element.addEventListener('click', function() {
            const clickedThum = this; 
            const newSrc = clickedThum.children[0].src; 
            popupBg.children[0].children[0].src = newSrc;
            popupBg.style.display = 'flex'; 
        });
    });
    bnrthum.forEach(function(element) {
        element.addEventListener('click', function() {
            const clickedThum = this; 
            const newSrc = clickedThum.children[0].src; 
            popupBg.children[0].children[0].src = newSrc;
            popupBg.style.display = 'flex'; 
        });
    });