const users = [
    {
        id:0,
        avatarUrl:"https://static-00.iconduck.com/assets.00/user-icon-2046x2048-9pwm22pp.png",
        username:"user 1",
        imgUrl:"https://cdn.pixabay.com/photo/2022/02/24/08/36/background-7032010_640.jpg"
    },
    {
        id:1,
        avatarUrl:"https://static-00.iconduck.com/assets.00/user-icon-2046x2048-9pwm22pp.png",
        username:"user 2",
        imgUrl:"https://cdn.pixabay.com/photo/2022/02/24/08/36/background-7032003_640.jpg"
    },
    {
        id:2,
        avatarUrl:"https://static-00.iconduck.com/assets.00/user-icon-2046x2048-9pwm22pp.png",
        username:"user 3",
        imgUrl:"https://cdn.pixabay.com/photo/2022/02/24/08/35/background-7031999_1280.jpg"
    }
];


const wrapEl = document.querySelector(`.wrap`);
const avatarAll = document.querySelectorAll(`.avatar`);
const usernameAll = document.querySelectorAll(`.username`);
const bgAll = document.querySelectorAll(`.bg`);
const menuEl = document.querySelector(`.menu`);
const menuWrapEl = document.querySelector(`.menu_wrap`);

let isClicked = true;

for(let i = 0; i <users.length; i++){
    avatarAll[i].innerHTML = `<img src="${users[i].avatarUrl}" alt="유저이미지">`;
    usernameAll[i].innerText = users[i].username;
    bgAll[i].innerHTML = `<img src="${users[i].imgUrl}" alt="배경화면">`;
};


const heartHandler = (e) => {
    if(e.target.classList.contains(`fa-regular`)){
        e.target.parentNode.innerHTML = `<i class="fa-solid fa-heart full_heart"></i>`
    }else if(e.target.classList.contains(`full_heart`)){
        e.target.parentNode.innerHTML = `<i class="fa-regular fa-heart"></i>`
    };
}

const menuHandler = () => {
    if(isClicked === true){
        menuWrapEl.classList.add(`menu_active`);
        isClicked = false;
    }else if(isClicked === false){
        menuWrapEl.classList.remove(`menu_active`);
        isClicked = true;
    }
}

menuEl.addEventListener(`click`,menuHandler);
wrapEl.addEventListener(`click`, heartHandler);


