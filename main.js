let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function () {
    itemActive = itemActive + 1;
    if (itemActive >= countItem) {
        itemActive = 0;
    }
    showSlider();
}
//event prev click
prev.onclick = function () {
    itemActive = itemActive - 1;
    if (itemActive < 0) {
        itemActive = countItem - 1;
    }
    showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 5000)
function showSlider() {
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})

// hot games onclick
var gamingContainer = document.getElementById("gamingContainer");
var gameTitle = document.querySelector("#gamingContainer h3");
var gameHint = document.querySelector("#gamingContainer p");
var gameShow = document.querySelector("#gamingContainer object");
function closeGame() {
    gamingContainer.style.display = "none";
}

function flappyG() {
    gamingContainer.style.display = "block";
    gameTitle.innerHTML = "Flappy Square";
    gameHint.innerHTML = "click accelerate button";
    gameShow.setAttribute("data", "games/game1.html");
    gameShow.style.height = "750px";
}

function hunterG() {
    gamingContainer.style.display = "block";
    gameTitle.innerHTML = "Shoot The Birds";
    gameHint.innerHTML = "click the birds to kill'em";
    gameShow.setAttribute("data", "games/game5.html");
    gameShow.style.height = "600px";
}

function ballG() {
    gamingContainer.style.display = "block";
    gameTitle.innerHTML = "Ball Game";
    gameHint.innerHTML = "click on the box of the game then use arrow keys";
    gameShow.setAttribute("data", "games/game4.html");
    gameShow.style.height = "860px";
    gameShow.style.width = "59%";
}

function breakG() {
    gamingContainer.style.display = "block";
    gameTitle.innerHTML = "Break Out";
    gameHint.innerHTML = "click on the box of the game then use arrow keys(left, right)";
    gameShow.setAttribute("data", "games/game6.html");
    gameShow.style.height = "1000px";
}

function spaceG() {
    gamingContainer.style.display = "block";
    gameTitle.innerHTML = "Rescue The Space";
    gameHint.innerHTML = "move your mouse to move your gun and left click to shoot <br>with mobile : just click on the rockes";
    gameShow.setAttribute("data", "games/game7.html");
    gameShow.style.width = "100%";
    gameShow.style.height = "750px";
}

function cardG() {
    gamingContainer.style.display = "block";
    gameTitle.innerHTML = "Match The Cards";
    gameHint.innerHTML = "choose difficulty from green part and then click the cards";
    gameShow.setAttribute("data", "games/game8.html");
    gameShow.style.width = "95%";
    gameShow.style.height = "850px";
}

function worldG() {
    gamingContainer.style.display = "block";
    gameTitle.innerHTML = "Save The World";
    gameHint.innerHTML = "click the boxes to create trees";
    gameShow.setAttribute("data", "games/game9.html");
    gameShow.style.height = "750px";
}

function tetrisG() {
    gamingContainer.style.display = "block";
    gameTitle.innerHTML = "Tetris (Arcade Building)";
    gameHint.innerHTML = "click on the box of the game then use arrow keys <br>unable on mobile!";
    gameShow.setAttribute("data", "games/game10.html");
    gameShow.style.height = "750px";
}

function tennisG() {
    gamingContainer.style.display = "block";
    gameTitle.innerHTML = "Ping Pong (Table Tennis)";
    gameHint.innerHTML = "click on the box of the game then use arrow keys(up, down) <br>unable  on mobile";
    gameShow.setAttribute("data", "games/game11.html");
    gameShow.style.height = "520px";
}

function nSnakeG() {
    gamingContainer.style.display = "block";
    gameTitle.innerHTML = "Neon Snake Game";
    gameHint.innerHTML = "click on the box of the game then use arrow keys <br>unable  on mobile";
    gameShow.setAttribute("data", "games/game3.html");
    gameShow.style.height = "500px";
    gameShow.style.borderBottom = "8px solid #000";
}

//menu burger
var burgerIcon = document.getElementById("burgerIcon");
var menu = document.querySelector("header .menu");
function showMenu() {
    if (menu.className == "menu show") {
        menu.classList.remove("show");
        menu.classList.add("fade");
        menu.style.right = "-130%";
        burgerIcon.setAttribute("class", "fa fa-bars menu-burger-icon");
    }
    else {
        menu.classList.remove("fade");
        menu.classList.add("show");
        burgerIcon.setAttribute("class", "fa fa-close menu-burger-icon");
        menu.style.right = "0px";
    }
}

//search bar
var searchContainer = document.querySelector(".search-container");
var searchBar = document.querySelector(".search");
var searchBtn = document.querySelector(".search-btn");
var winWidth = window.innerWidth || window.documentElement.clientWidth || document.body.clientWidth;
searchBtn.addEventListener("mouseover", function(){
    searchBar.style.width = "150px";
    searchBar.style.borderRadius = "15px";
    searchBar.style.transform = "translateX(26px)";
});
searchBar.addEventListener("focus", function(){
    searchContainer.style.outline = "2px solid #2b1c81";
    searchContainer.style.boxShadow = "0px 0px 17px #2000d4da";
});
searchBar.addEventListener("focusout", function(){
    searchBar.style.width = "31px";
    searchBar.style.borderRadius = "100%";
    searchBar.style.transform = "translateX(31px)";
    searchContainer.style.outline = "none";
    searchContainer.style.boxShadow = "none";
});
if(winWidth <= 800){
    menu.appendChild(searchContainer);
    searchContainer.style.position = "static";
    searchBar.style.width = "150px";
    searchBar.style.borderRadius = "15px";
    searchBar.style.transform = "translateX(26px)";
    searchBar.addEventListener("focusout", function(){
        searchBar.style.width = "150px";
        searchBar.style.borderRadius = "15px";
        searchBar.style.transform = "translateX(26px)";
        searchContainer.style.outline = "none";
        searchContainer.style.boxShadow = "none";
    });
}

//search show result
var searchResMenu = document.createElement("ul");
var imgFlappy = document.createElement("img");
var h3Flappy = document.createElement("h3");
var pFlappy = document.createElement("p");
var imgBall = document.createElement("img");
var h3Ball = document.createElement("h3");
var pBall = document.createElement("p");
var imgBreak = document.createElement("img");
var h3Break = document.createElement("h3");
var pBreak = document.createElement("p");
var imgHunt = document.createElement("img");
var h3Hunt = document.createElement("h3");
var pHunt = document.createElement("p");
var imgRescue = document.createElement("img");
var h3Rescue = document.createElement("h3");
var pRescue = document.createElement("p");
var imgCard = document.createElement("img");
var h3Card = document.createElement("h3");
var pCard = document.createElement("p");
var imgWorld = document.createElement("img");
var h3World = document.createElement("h3");
var pWorld = document.createElement("p");
var imgTetris = document.createElement("img");
var h3Tetris = document.createElement("h3");
var pTetris = document.createElement("p");
var imgTennis = document.createElement("img");
var h3Tennis = document.createElement("h3");
var pTennis = document.createElement("p");
var imgSnake = document.createElement("img");
var h3Snake = document.createElement("h3");
var pSnake = document.createElement("p");
var itemFlappy = document.createElement("li");
var itemHunt = document.createElement("li");
var itemBall = document.createElement("li");
var itemBreak = document.createElement("li");
var itemRescue = document.createElement("li");
var itemCard = document.createElement("li");
var itemWorld = document.createElement("li");
var itemTetris = document.createElement("li");
var itemTennis = document.createElement("li");
var itemSnake = document.createElement("li");
itemFlappy.appendChild(imgFlappy);
imgFlappy.setAttribute("src", "img/flappy-icon.jpg");
itemFlappy.appendChild(h3Flappy);
h3Flappy.innerHTML = "flappy square";
itemFlappy.appendChild(pFlappy);
pFlappy.innerHTML = "fly like a bird";
itemHunt.appendChild(imgHunt);
imgHunt.setAttribute("src", "img/hunter-icon.jpg");
itemHunt.appendChild(h3Hunt);
h3Hunt.innerHTML = "hunter";
itemHunt.appendChild(pHunt);
pHunt.innerHTML = "shoot the birds";
itemBall.appendChild(imgBall);
imgBall.setAttribute("src", "img/ball-icon.jpg");
itemBall.appendChild(h3Ball);
h3Ball.innerHTML = "ball";
itemBall.appendChild(pBall);
pBall.innerHTML = "explore the cave";
itemBreak.appendChild(imgBreak);
imgBreak.setAttribute("src", "img/breakOut-icon.jpg");
itemBreak.appendChild(h3Break);
h3Break.innerHTML = "break out";
itemBreak.appendChild(pBreak);
pBreak.innerHTML = "break everything";
itemRescue.appendChild(imgRescue);
imgRescue.setAttribute("src", "img/space-icon.jpg");
itemRescue.appendChild(h3Rescue);
h3Rescue.innerHTML = "space rescue";
itemRescue.appendChild(pRescue);
pRescue.innerHTML = "unknown planet";
itemCard.appendChild(imgCard);
imgCard.setAttribute("src", "img/card-icon.jpg");
itemCard.appendChild(h3Card);
h3Card.innerHTML = "same cards";
itemCard.appendChild(pCard);
pCard.innerHTML = "match the cards";
itemWorld.appendChild(imgWorld);
imgWorld.setAttribute("src", "img/world-icon.jpg");
itemWorld.appendChild(h3World);
h3World.innerHTML = "world";
itemWorld.appendChild(pWorld);
pWorld.innerHTML = "survive the world";
itemTetris.appendChild(imgTetris);
imgTetris.setAttribute("src", "img/tetris-icon.jpg");
itemTetris.appendChild(h3Tetris);
h3Tetris.innerHTML = "tetris";
itemTetris.appendChild(pTetris);
pTetris.innerHTML = "building game";
itemTennis.appendChild(imgTennis);
imgTennis.setAttribute("src", "img/tennis-icon.jpg");
itemTennis.appendChild(h3Tennis);
h3Tennis.innerHTML = "ping pong";
itemTennis.appendChild(pTennis);
pTennis.innerHTML = "tennis";
itemSnake.appendChild(imgSnake);
imgSnake.setAttribute("src", "img/snake-icon.jpg");
itemSnake.appendChild(h3Snake);
h3Snake.innerHTML = "sanke";
itemSnake.appendChild(pSnake);
pSnake.innerHTML = "neon sanke game";
var closeSearchRes = document.createElement("i");
closeSearchRes.setAttribute("class", "fa fa-close");
closeSearchRes.style.color = "#fff";
closeSearchRes.style.position = "absolute";
closeSearchRes.style.top = "20px";
closeSearchRes.style.right = "5%";
closeSearchRes.style.fontSize = "30px";
closeSearchRes.style.cursor = "pointer";
closeSearchRes.style.transition = "color .3s ease-in-out";
closeSearchRes.addEventListener("mouseover",function(){
    closeSearchRes.style.color = "#b9b9b9";
});
closeSearchRes.addEventListener("mouseleave",function(){
    closeSearchRes.style.color = "#fff";
});
var notFound = document.createElement("h3");
notFound.innerHTML = "Not Found !";
notFound.style.color = "#fff";
notFound.style.margin = "80px auto";
notFound.style.textAlign = "center";
notFound.style.width = "100%";
notFound.style.color = "#fff";
itemBall.addEventListener("click", function(){
    ballG();
});
itemBreak.addEventListener("click", function(){
    breakG();
});
itemCard.addEventListener("click", function(){
    cardG();
});
itemFlappy.addEventListener("click", function(){
    flappyG();
});
itemHunt.addEventListener("click", function(){
    hunterG();
});
itemRescue.addEventListener("click", function(){
    spaceG();
});
itemSnake.addEventListener("click", function(){
    nSnakeG();
});
itemTennis.addEventListener("click", function(){
    tennisG();
});
itemTetris.addEventListener("click", function(){
    tetrisG();
});
itemWorld.addEventListener("click", function(){
    worldG();
});
function searchRes(){
    var searchResult = document.createElement("div");
    searchResult.classList.add("searchResult");
    body.appendChild(searchResult);
    searchResult.appendChild(closeSearchRes);
    closeSearchRes.addEventListener("click", function() {
        searchResult.style.display = "none";
        searchContainer.style.display = "flex";
        document.querySelector("header").appendChild(searchContainer);
        menu.appendChild(searchContainer);
        searchContainer.style.width = "150px";
        searchContainer.style.position = "absolute";
        searchContainer.style.right = "1%";
        searchContainer.style.margin = "0";
        searchBar.style.width = "150px";
        searchBar.style.borderRadius = "15px";
        searchBar.style.transform = "translateX(26px)";
        searchBar.addEventListener("focusout", function(){
            searchBar.style.width = "150px";
            searchBar.style.borderRadius = "15px";
            searchBar.style.transform = "translateX(26px)";
            searchContainer.style.outline = "none";
            searchContainer.style.boxShadow = "none";
        });
        searchBtn.addEventListener("mouseover", function(){
            searchBar.style.width = "150px";
            searchBar.style.borderRadius = "15px";
            searchContainer.style.outline = "none";
            searchContainer.style.boxShadow = "none";
        });
    });
    searchResult.style.display = "block";
    searchContainer.style.position = "static";
    searchBar.style.width = "100%";
    searchContainer.style.width = "60%";
    searchBar.style.borderRadius = "15px";
    searchContainer.style.outline = "none";
    searchContainer.style.boxShadow = "none";
    searchContainer.style.justifyContent = "center";
    searchBar.addEventListener("focusout", function(){
        searchBar.style.width = "100%";
        searchBar.style.borderRadius = "15px";
        searchContainer.style.outline = "none";
        searchContainer.style.boxShadow = "none";
        searchBar.style.transform = "translateX(26px)";
    });
    searchBar.addEventListener("focus", function(){
        searchContainer.style.outline = "none";
        searchContainer.style.boxShadow = "none";
    });
    searchBtn.addEventListener("mouseover", function(){
        searchBar.style.width = "100%";
        searchBar.style.borderRadius = "15px";
        searchContainer.style.outline = "none";
        searchContainer.style.boxShadow = "none";
    });
    searchResult.appendChild(searchContainer);
    searchResult.appendChild(searchResMenu);
    searchResMenu.classList.add("searchResMenu");
    searchContainer.style.margin = "20px auto";
    if(winWidth <= 600){
        searchContainer.style.width = "100%";
        searchContainer.style.transform = "translateX(-11px)";
        searchContainer.style.margin = "50px auto 20px auto";
        closeSearchRes.style.top = "5px";
        closeSearchRes.addEventListener("click", function(){
            document.querySelector("header ul").appendChild(searchContainer);
            searchContainer.setAttribute("style", "position : static!important");
        });
    }
    if (searchBar.value == "survial games") {
        searchResMenu.innerHTML = "";
        searchResMenu.appendChild(itemFlappy);
        searchResMenu.appendChild(itemRescue);
        searchResMenu.appendChild(itemWorld);
    }
    else if (searchBar.value == "shooting games") {
        searchResMenu.innerHTML = "";
        searchResMenu.appendChild(itemHunt);
        searchResMenu.appendChild(itemRescue);
    }
    else if (searchBar.value == "arcade games") {
        searchResMenu.innerHTML = "";
        searchResMenu.appendChild(itemBreak);
        searchResMenu.appendChild(itemTetris);
        searchResMenu.appendChild(itemTennis);
        searchResMenu.appendChild(itemSnake);
    }
    else if (searchBar.value == "card") {
        searchResMenu.innerHTML = "";
        searchResMenu.appendChild(itemCard);
    }
    else if (searchBar.value == "ball") {
        searchResMenu.innerHTML = "";
        searchResMenu.appendChild(itemBall);
    }
    else if (searchBar.value == "tetris") {
        searchResMenu.innerHTML = "";
        searchResMenu.appendChild(itemTetris);
    }
    else if (searchBar.value == "ping pong") {
        searchResMenu.innerHTML = "";
        searchResMenu.appendChild(itemTennis);
    }
    else if (searchBar.value == "world") {
        searchResMenu.innerHTML = "";
        searchResMenu.appendChild(itemWorld);
    }
    else if (searchBar.value == "rescue") {
        searchResMenu.innerHTML = "";
        searchResMenu.appendChild(itemRescue);
    }
    else if (searchBar.value == "snake") {
        searchResMenu.innerHTML = "";
        searchResMenu.appendChild(itemSnake);
    }
    else if (searchBar.value == "break out") {
        searchResMenu.innerHTML = "";
        searchResMenu.appendChild(itemBreak);
    }
    else if (searchBar.value == "flappy") {
        searchResMenu.innerHTML = "";
        searchResMenu.appendChild(itemFlappy);
    }
    else if (searchBar.value == "hunter") {
        searchResMenu.innerHTML = "";
        searchResMenu.appendChild(itemHunt);
    }
    else{
        searchResMenu.innerHTML = "";
        searchResult.appendChild(notFound);
    }
}

//request
var body = document.querySelector("body");
var reqContainer = document.createElement("div");
var reqEmail = document.createElement("input");
var reqText = document.createElement("textarea");
var reqBtn = document.createElement("button");
var reqClose = document.createElement("button");
var reqCloseIcon = document.createElement("i");
reqCloseIcon.setAttribute("class", "fa fa-close");
reqClose.appendChild(reqCloseIcon);
reqContainer.style.position = "fixed";
reqContainer.style.top = "0px";
reqContainer.style.bottom = "0px";
reqContainer.style.left = "0px";
reqContainer.style.right = "0px";
reqContainer.style.display = "flex";
reqContainer.style.flexDirection = "column";
reqContainer.style.justifyContent = "center";
reqContainer.style.alignItems = "center";
reqContainer.style.backdropFilter = "blur(7px)";
reqContainer.style.backgroundColor = "rgba(188, 207, 255, 0.7)";
reqContainer.style.zIndex = "10000000";
reqEmail.setAttribute("type", "email");
reqEmail.setAttribute("placeholder", "email...");
reqEmail.style.width = "60%";
reqEmail.style.padding = "7px 10px";
reqEmail.style.fontSize = "20px";
reqEmail.style.outline = "none";
reqEmail.style.border = "3px solid #2000d4da";
reqEmail.style.borderRadius = "10px";
reqEmail.style.backgroundColor = "rgb(187, 187, 187)";
reqText.setAttribute("placeholder", "write your request...");
reqText.style.width = "60%";
reqText.style.height = "200px";
reqText.style.padding = "7px 10px";
reqText.style.fontSize = "20px";
reqText.style.outline = "none";
reqText.style.border = "3px solid #2000d4da";
reqText.style.borderRadius = "10px";
reqText.style.backgroundColor = "rgb(187, 187, 187)";
reqText.style.marginTop = "10px";
reqText.style.marginBottom = "10px";
reqText.style.resize = "none";
reqBtn.innerHTML = "submit";
reqBtn.style.color = "#fff";
reqBtn.style.outline = "none";
reqBtn.style.border = "none";
reqBtn.style.fontSize = "20px";
reqBtn.style.borderRadius = "17px";
reqBtn.style.padding = "10px 20px";
reqBtn.style.cursor = "pointer";
reqBtn.style.transition = "background-color .3s ease-in-out";
reqBtn.style.backgroundColor = "#2000d4da";
reqBtn.addEventListener("mouseover", function(){
    reqBtn.style.backgroundColor = "#2b1c81";
});
reqBtn.addEventListener("mouseleave", function(){
    reqBtn.style.backgroundColor = "#2000d4da";
});
reqClose.style.position = "absolute";
reqClose.style.right = "20%";
reqClose.style.marginBottom = "345px";
reqClose.style.color = "#fff";
reqClose.style.outline = "none";
reqClose.style.border = "none";
reqClose.style.fontSize = "20px";
reqClose.style.textShadow = "rgb(32, 0, 212) 0 0 10px";
reqClose.style.cursor = "pointer";
reqClose.style.transition = "color .2s ease-in-out";
reqClose.style.backgroundColor = "transparent";
reqClose.setAttribute("onclick", "closeReq()");
reqClose.addEventListener("mouseover", function(){
    reqClose.style.color = "#c8c8c8";
});
reqClose.addEventListener("mouseleave", function(){
    reqClose.style.color = "#fff";
});
function request(){
    reqContainer.style.display = "flex";
    reqClose.style.display = "inline-block";
    reqEmail.style.display = "block";
    reqText.style.display = "block";
    reqBtn.style.display = "block";
    body.appendChild(reqContainer);
    reqContainer.appendChild(reqClose);
    reqContainer.appendChild(reqEmail);
    reqContainer.appendChild(reqText);
    reqContainer.appendChild(reqBtn);
}
function closeReq(){
    reqContainer.style.display = "none";
    reqClose.style.display = "none";
    reqEmail.style.display = "none";
    reqText.style.display = "none";
    reqBtn.style.display = "none";
}