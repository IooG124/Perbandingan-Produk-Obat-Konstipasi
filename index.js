// Obat 1
const oObat1 = document.getElementById('o-obat1');
const background1 = oObat1.querySelector('div.absolute');
const content1 = oObat1.querySelector('div.relative');
const obatBtn1 = document.getElementById('tentangBtn1');

obatBtn1.addEventListener('click', () => {
    oObat1.classList.remove('opacity-0', 'pointer-events-none');
    oObat1.classList.add('opacity-100', 'pointer-events-auto');

    background1.classList.remove('opacity-0');
    background1.classList.add('opacity-70');

    content1.classList.remove('scale-95');
    content1.classList.add('scale-100');
});
oObat1.addEventListener('click', () => {
    oObat1.classList.add('opacity-0', 'pointer-events-none');
    oObat1.classList.remove('opacity-100', 'pointer-events-auto');

    background1.classList.add('opacity-0');
    background1.classList.remove('opacity-70');

    content1.classList.add('scale-95');
    content1.classList.remove('scale-100');
});

const dObat1 = document.getElementById('d-obat1');
const background = dObat1.querySelector('div.absolute');
const content = dObat1.querySelector('div.relative');
const dosisBtn1 = document.getElementById('dosisBtn1');

dosisBtn1.addEventListener('click', () => {
    dObat1.classList.remove('opacity-0', 'pointer-events-none');
    dObat1.classList.add('opacity-100', 'pointer-events-auto');

    background.classList.remove('opacity-0');
    background.classList.add('opacity-70');

    content.classList.remove('scale-95');
    content.classList.add('scale-100');
});
dObat1.addEventListener('click', () => {
    dObat1.classList.add('opacity-0', 'pointer-events-none');
    dObat1.classList.remove('opacity-100', 'pointer-events-auto');

    background.classList.add('opacity-0');
    background.classList.remove('opacity-70');

    content.classList.add('scale-95');
    content.classList.remove('scale-100');
});


// Obat 2
const oObat2 = document.getElementById('o-obat2');
const background3 = oObat2.querySelector('div.absolute');
const content3 = oObat2.querySelector('div.relative');
const obatBtn2 = document.getElementById('tentangBtn2');

obatBtn2.addEventListener('click', () => {
    oObat2.classList.remove('opacity-0', 'pointer-events-none');
    oObat2.classList.add('opacity-100', 'pointer-events-auto');

    background3.classList.remove('opacity-0');
    background3.classList.add('opacity-70');

    content3.classList.remove('scale-95');
    content3.classList.add('scale-100');
});
oObat2.addEventListener('click', () => {
    oObat2.classList.add('opacity-0', 'pointer-events-none');
    oObat2.classList.remove('opacity-100', 'pointer-events-auto');

    background3.classList.add('opacity-0');
    background3.classList.remove('opacity-70');

    content3.classList.add('scale-95');
    content3.classList.remove('scale-100');
});

const dObat3 = document.getElementById('d-obat2');
const background4 = dObat3.querySelector('div.absolute');
const content4 = dObat3.querySelector('div.relative');
const dosisBtn2 = document.getElementById('dosisBtn2');

dosisBtn2.addEventListener('click', () => {
    dObat3.classList.remove('opacity-0', 'pointer-events-none');
    dObat3.classList.add('opacity-100', 'pointer-events-auto');

    background4.classList.remove('opacity-0');
    background4.classList.add('opacity-70');

    content4.classList.remove('scale-95');
    content4.classList.add('scale-100');
});
dObat3.addEventListener('click', () => {
    dObat3.classList.add('opacity-0', 'pointer-events-none');
    dObat3.classList.remove('opacity-100', 'pointer-events-auto');

    background4.classList.add('opacity-0');
    background4.classList.remove('opacity-70');

    content4.classList.add('scale-95');
    content4.classList.remove('scale-100');
});





// const swiper2 = new Swiper(".mySwiper", {
//         loop: true,
//         navigation: {
//             nextEl: "nextBtn",
//             prevEl: "prevBtn",
//         },

//         breakpoints: {
//             320: {
//                 slidesPerView: 1,
//                 spaceBetween: 10,
//             },
//             425: {
//                 slidesPerView: 1,
//                 spaceBetween: 10,
//             },
//             768: {
//                 slidesPerView: 1,
//                 spaceBetween: 10,
//             },
//             1024: {
//                 slidesPerView: 1,
//                 spaceBetween: 10,
//             },
//             1280: {
//                 slidesPerView: 1,
//                 spaceBetween: 10,
//             },
//             1440: {
//                 slidesPerView: 1,
//                 spaceBetween: 10,
//             },
//         }
//     });