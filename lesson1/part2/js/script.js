new Vue({
    el: '#task1',

    data: {
        text: "Перевернуть",
        attache: false

    },

    methods: {
        changeButtonText() {
            if (this.text == "Перевернуть") {
                this.text = this.text.split('').reverse().join("");
                this.attache = true
                console.log(123)


            } else {
                this.text = this.text.split('').reverse().join("");
                this.attache = false
            }
        }
    }
})

new Vue({
    el: '#task2',

    data: {
        message: 0,
        count: 0,
        lists: []

    },

    methods: {
        addList() {

            this.lists.push({ id: this.count++, text: "Новый элемент списка" })
        },
        removeList(list) {
            this.lists = this.lists.filter(function (obj) {
                return obj.id !== list.id;
            });

        }
    }
})
