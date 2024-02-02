const menuItens = document.querySelectorAll(".bottom-menu-list li");

menuItens.forEach((e) => {
    e.addEventListener("click", () => {
        for (let i = 0; i < menuItens.length; i++) {
            menuItens[i].classList.remove("bottom-menu-item__selected");
        }
        e.classList.add("bottom-menu-item__selected");
        changeItensImage(e);
    })
})

function changeItensImage(e) {
    itemImage = e.querySelector("img");
    let item2;
    let item3;
    let item4;
    let item5;

    switch (itemImage.id) {
        case "home-image":
            itemImage.src = "images/house (1).png";
            item2 = menuItens[1].querySelector("img");
            item2.src = "images/search-interface-symbol.png";
            item3 = menuItens[2].querySelector("img");
            item3.src = "images/heart.png";
            item4 = menuItens[3].querySelector("img");
            item4.src = "images/bell.png";
            item5 = menuItens[4].querySelector("img");
            item5.src = "images/user.png";
            break;
        case "search-image":
            itemImage.src = "images/search-interface-symbol (1).png";
            item2 = menuItens[0].querySelector("img");
            item2.src = "images/house.png";
            item3 = menuItens[2].querySelector("img");
            item3.src = "images/heart.png";
            item4 = menuItens[3].querySelector("img");
            item4.src = "images/bell.png";
            item5 = menuItens[4].querySelector("img");
            item5.src = "images/user.png";
            break;
        case "like-image":
            itemImage.src = "images/heart (1).png";
            item2 = menuItens[0].querySelector("img");
            item2.src = "images/house.png";
            item3 = menuItens[1].querySelector("img");
            item3.src = "images/search-interface-symbol.png";
            item4 = menuItens[3].querySelector("img");
            item4.src = "images/bell.png";
            item5 = menuItens[4].querySelector("img");
            item5.src = "images/user.png";
            break;
        case "notifications-image":
            itemImage.src = "images/bell (1).png";
            item2 = menuItens[0].querySelector("img");
            item2.src = "images/house.png";
            item3 = menuItens[1].querySelector("img");
            item3.src = "images/search-interface-symbol.png";
            item4 = menuItens[2].querySelector("img");
            item4.src = "images/heart.png";
            item5 = menuItens[4].querySelector("img");
            item5.src = "images/user.png";
            break;
        case "profile-image":
            itemImage.src = "images/user (1).png";
            item2 = menuItens[0].querySelector("img");
            item2.src = "images/house.png";
            item3 = menuItens[1].querySelector("img");
            item3.src = "images/search-interface-symbol.png";
            item4 = menuItens[2].querySelector("img");
            item4.src = "images/heart.png";
            item5 = menuItens[3].querySelector("img");
            item5.src = "images/bell.png";
            break;
    }
}