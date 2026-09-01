const products = [
    {
        id: 1,
        name: "Black Edition",
        price: 4990,
        stock: 7,
        category: "cat2",
        popularity: 98,
        sale: false,
        image: "images/product1.jpg",
        gallery: [
            "images/product1.jpg",
            "https://picsum.photos/seed/mystore1b/900/1100",
            "https://picsum.photos/seed/mystore1c/900/1100"
        ],
        description: "Минималистичная модель в чёрном цвете. Брутальный силуэт и универсальный дизайн на каждый день."
    },

    {
        id: 2,
        name: "Purple Night",
        price: 5490,
        stock: 3,
        category: "cat3",
        popularity: 94,
        sale: true,
        oldPrice: 6490,
        image: "images/product2.jpg",
        gallery: [
            "images/product2.jpg",
            "https://picsum.photos/seed/mystore2b/900/1100",
            "https://picsum.photos/seed/mystore2c/900/1100"
        ],
        description: "Стильная модель с глубокими фиолетовыми акцентами. Выразительный внешний вид без лишних деталей."
    },

    {
        id: 3,
        name: "Pink Edition",
        price: 3990,
        stock: 12,
        category: "cat4",
        popularity: 91,
        sale: false,
        image: "images/product3.jpg",
        gallery: [
            "images/product3.jpg",
            "https://picsum.photos/seed/mystore3b/900/1100",
            "https://picsum.photos/seed/mystore3c/900/1100"
        ],
        description: "Яркая модель в розовом исполнении. Контрастный вариант для тех, кто хочет добавить цвета в образ."
    },

    {
        id: 4,
        name: "Dark Premium",
        price: 6990,
        stock: 2,
        category: "cat5",
        popularity: 100,
        sale: true,
        oldPrice: 7990,
        image: "images/product4.jpg",
        gallery: [
            "images/product4.jpg",
            "https://picsum.photos/seed/mystore4b/900/1100",
            "https://picsum.photos/seed/mystore4c/900/1100"
        ],
        description: "Премиальная тёмная модель с акцентом на строгий и массивный визуальный стиль."
    },

    {
        id: 5,
        name: "Urban Core",
        price: 4590,
        stock: 8,
        category: "cat2",
        popularity: 87,
        sale: false,
        image: "https://picsum.photos/seed/mystore5/900/1100",
        gallery: [
            "https://picsum.photos/seed/mystore5/900/1100",
            "https://picsum.photos/seed/mystore5b/900/1100",
            "https://picsum.photos/seed/mystore5c/900/1100"
        ],
        description: "Городская модель в минималистичном стиле. Хорошо сочетается с базовыми вещами."
    },

    {
        id: 6,
        name: "Shadow Line",
        price: 5990,
        stock: 5,
        category: "cat3",
        popularity: 89,
        sale: false,
        image: "https://picsum.photos/seed/mystore6/900/1100",
        gallery: [
            "https://picsum.photos/seed/mystore6/900/1100",
            "https://picsum.photos/seed/mystore6b/900/1100",
            "https://picsum.photos/seed/mystore6c/900/1100"
        ],
        description: "Тёмная модель с чистыми линиями и акцентом на современный городской образ."
    },

    {
        id: 7,
        name: "Neon Detail",
        price: 3290,
        stock: 15,
        category: "cat4",
        popularity: 84,
        sale: true,
        oldPrice: 3890,
        image: "https://picsum.photos/seed/mystore7/900/1100",
        gallery: [
            "https://picsum.photos/seed/mystore7/900/1100",
            "https://picsum.photos/seed/mystore7b/900/1100",
            "https://picsum.photos/seed/mystore7c/900/1100"
        ],
        description: "Базовая модель с яркими деталями. Спокойная основа и небольшой цветовой акцент."
    },

    {
        id: 8,
        name: "Midnight",
        price: 7490,
        stock: 4,
        category: "cat5",
        popularity: 96,
        sale: false,
        image: "https://picsum.photos/seed/mystore8/900/1100",
        gallery: [
            "https://picsum.photos/seed/mystore8/900/1100",
            "https://picsum.photos/seed/mystore8b/900/1100",
            "https://picsum.photos/seed/mystore8c/900/1100"
        ],
        description: "Выразительная модель в тёмной палитре. Сделана с упором на премиальный внешний вид."
    },

    {
        id: 9,
        name: "Street Signal",
        price: 2890,
        stock: 20,
        category: "cat6",
        popularity: 79,
        sale: false,
        image: "https://picsum.photos/seed/mystore9/900/1100",
        gallery: [
            "https://picsum.photos/seed/mystore9/900/1100",
            "https://picsum.photos/seed/mystore9b/900/1100",
            "https://picsum.photos/seed/mystore9c/900/1100"
        ],
        description: "Доступная городская модель с простым силуэтом и заметным характером."
    },

    {
        id: 10,
        name: "Black Label",
        price: 6490,
        stock: 6,
        category: "cat6",
        popularity: 93,
        sale: false,
        image: "https://picsum.photos/seed/mystore10/900/1100",
        gallery: [
            "https://picsum.photos/seed/mystore10/900/1100",
            "https://picsum.photos/seed/mystore10b/900/1100",
            "https://picsum.photos/seed/mystore10c/900/1100"
        ],
        description: "Чёрная модель с акцентом на строгий дизайн и универсальность."
    }
];
