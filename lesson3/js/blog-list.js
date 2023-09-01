Vue.component('blog-list', {
    props: ['title', 'img', 'text'],


    template: `
                    <div class="blog-item">
                        <h2 class="blog-item__title">{{title}}</h2>
                        <div v-bind:style="{'background': img.background}" class="blog-item__img"></div>
                        <div class="blog-item__info">
                            <span class="blog-item__date">26 December,2022</span>
                            <nav class="breadcrumb blog-item__breadcrumb-right">
                                <ul class="breadcrumb__items">
                                    <li class="breadcrumb__list breadcrumb__link__small">
                                        <a class="breadcrumb__link" href="#">Home</a></li>
                                    <li class="breadcrumb__list breadcrumb__link__small">
                                        <a class="breadcrumb__link" href="#">Blog</a></li>
                                    <li class="breadcrumb__list breadcrumb__link__small">
                                        <a class="breadcrumb__link" href="#">Decore</a></li>
                                </ul>
                            </nav>
                        </div>
                        <p class="blog-item__text">
                            {{text}}
                        </p>
                    </div>
  
    `,

    data() {
        return {
         
        }
    },

    computed: {
   
    },

    methods: {
 

    },

});