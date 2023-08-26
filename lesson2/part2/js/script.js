new Vue({
    el: '#task1',

    data: {
        products:
            [
                { id: 1, name: "банан", price: 60 },
                { id: 2, name: "яблоко", price: 80 },
                { id: 3, name: "апельсин", price: 120 },
                { id: 4, name: "виноград", price: 350 },
                { id: 5, name: "персик", price: 97 },

            ]

    },

    methods: {
        sortUp() {
            this.products = this.products.sort(function (a, b) {
                return a.price - b.price;
            });

        },
        sortDown() {
            this.products = this.products.sort(function (a, b) {
                return b.price - a.price;
            });

        }
    }
})

