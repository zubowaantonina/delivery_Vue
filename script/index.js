const modalFunc = () => {
    const modal = document.querySelector(".cart-modal__overlay");
    const cartBtn = document.querySelector("#cart-button");

    const openModal = () => {
        modal.classList.add("open");
    };
    const closeModal = () => {
        modal.classList.remove("open");
    };
    cartBtn.addEventListener("click", () => {
        openModal();
    });

    modal.addEventListener("click", (event) => {
        if (
            event.target.classList.contains("cart-modal__overlay") ||
            event.target.closest(".cart-modal__header--close")
        ) {
            closeModal();
        }
    });
};
const restFunc = () => {
    const container = document.querySelector("#rests-container");
    const restArray = [
        {
            id: 0,
            title: "Пицца плюс",
            time: 50,
            rating: 4.5,
            price: 900,
            type: "Пицца",
            image: 'pizza-plus.jpg'
        },
        {
            id: 1,
            title: "Тануки",
            time: 50,
            rating: 4.5,
            price: 900,
            type: "Пицца",
            image: 'tanuki.jpg'
        },
        {
            id: 2,
            title: "FoodBand",
            time: 50,
            rating: 4.5,
            price: 900,
            type: "Пицца",
            image: 'food-band.jpg'
        },
        {
            id: 3,
            title: "Жадина-пицца",
            time: 50,
            rating: 4.5,
            price: 900,
            type: "Пицца",
            image: 'bigpizza.jpg'
        },
        {
            id: 4,
            title: "Точка еды",
            time: 50,
            rating: 4.5,
            price: 900,
            type: "Пицца",
            image: 'tochka.jpg'
        },
        {
            id: 5,
            title: "PizzaBurger",
            time: 50,
            rating: 4.5,
            price: 900,
            type: "Пицца",
            image: 'pizza-burger.jpg'
        },

    ];
    const loading = () => {
        container.innerHTML =
            '<p style="text-align:center; width:100%">Загрузка</p>';
    };

    const renderRests = (array) => {
        container.innerHTML = "";
        array.forEach((cart) => {
            container.insertAdjacentHTML('beforeend',
                `<a href="./goods.html?id=${cart.id}" class="products-card">
							<div class="products-card__image">
								<img src="./img/rests/${cart.image}" alt="${cart.image}">

							</div>
							<div class="products-card__description">
								<div class="products-card__description-row">
									<h4 class="products-card__description--title">${cart.title}</h4>
									<div class="products-card__description--badge">${cart.time} мин</div>
								</div>
								<div class="products-card__description-row">
									<div class="products-card__description-info">
										<div class="products-card__description-info--raiting">
											<img src="./img/icon/rating.svg" alt="rating">
											${cart.rating}
										</div>
										<div class="products-card__description-info--price">От ${cart.price} ₽</div>
										<div class="products-card__description-info--group">${cart.type}</div>
									</div>
								</div>
							</div>
						</a>
    `
            )

        });
    };
    if (container) {
        loading();
        setTimeout(() => {
            renderRests(restArray);
        }, 1000);
    }

};
const goodsFunc = () => {
    const container = document.querySelector("#goods-container");
    const goodsArray = [
        {
            id: 0,
            name: "Ролл угорь стандарт",
            compound: 'Рис, угорь, соус унаги, кунжут, водоросли нори',
            price: 250,
            image: 'good-1.jpg'
        },
        {
            id: 1,
            name: "Калифорния лосось стандарт",
            compound: 'Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.',
            price: 250,
            image:'good-2.jpg'
        },
        {
            id: 2,
            name: "Окинава стандарт",
            compound: 'Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...',
            price: 250,
            image:'good-3.jpg'
        },
        {
            id: 3,
            name: "Цезарь маки хl",
            compound: 'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...',
            price: 250,
            image:'good-4.jpg'
        },
        {
            id: 4,
            name: "Ясай маки стандарт 185 г",
            compound: 'Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг',
            price: 250,
            image:'good-5.jpg'
        },
        {
            id: 5,
            name: "Ролл с креветкой стандарт",
            compound: 'Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы',
            price: 250,
            image:'good-6.jpg'
        }
    ]
    const renderGoods = (array) => {
        container.innerHTML = "";
        array.forEach((good) => {
            container.insertAdjacentHTML('beforeend',
                `
             <div class="products-card">
                            <div class="products-card__image">
                                <img src="./img/goods/${good.image}" alt="${good.image}" />
                            </div>
                            <div class="products-card__description">
                                <div class="products-card__description-row">
                                    <h5 class="products-card__description--name">
                                    ${good.name}
                                    </h5>
                                </div>
                                <div class="products-card__description-row">
                                    <p class="products-card__description--text">
                                    ${good.compound}
                                    </p>
                                </div>
                                <div class="products-card__description-row">
                                    <div class="products-card__description-controls">
                                        <button class="btn btn-primary">
                                            <span class="button-text">В корзину</span>
                                            <img src="./img/icon/shopping-cart-white.svg" alt="shopping-cart" />
                                        </button>
                                        <span class="products-card__description-controls--price">
                                            ${good.price} ₽
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
            `
            )
        })
    }
    const loading = () => {
        container.innerHTML =
            '<p style="text-align:center; width:100%">Загрузка</p>';
    };
      
    if (container) {
        loading();
        setTimeout(() => {
            renderGoods(goodsArray);
        }, 1000);
    }
}
modalFunc();
restFunc();
goodsFunc()