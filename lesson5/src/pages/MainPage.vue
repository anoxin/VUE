<template lang="en">
  <div>
       
    <section class="home-info">
        <div class="container">
            <div class="home-info__wrapper">
                <div class="home-info__block-info">
                    <h1 class="home-info__title">Let Your Home
                        Be Unique</h1>
                    <p class="home-info__text">There are many variations of the passages of
                        lorem Ipsum fromavailable, majority.</p>
                    <button class="button__black">Get Started <img src="@/assets/img/home-info/arrow.svg" alt="arrow"></button>
                </div>

            </div>

        </div>
    </section>
    <section class="projects">
        <div class="container">
            <h2 class="projects__title">Follow Our Projects</h2>
            <p class="projects__text">It is a long established fact that a reader will be distracted by the of readable
                content of page lookings at its layouts points.</p>
            <div class="projects__carts">
                <div class="cart">
                    <div class="cart__img-block">
                        <img src="@/assets/img/projects/1.jpg" alt="project-1" class="cart__img">

                    </div>
                    <div class="cart__block-info">
                        <div class="cart__text">
                            <h3 class="cart__title">Modern Kitchan</h3>
                            <p class="cart__text-info">Decor / Artchitecture</p>
                        </div>
                        <a href="#" class="cart__link"><img src="@/assets/img/projects/link.svg" alt="link"></a>

                    </div>

                </div>
                <div class="cart">
                    <div class="cart__img-block">
                        <img src="@/assets/img/projects/2.jpg" alt="project-2" class="cart__img">

                    </div>
                    <div class="cart__block-info">
                        <div class="cart__text">
                            <h3 class="cart__title">Modern Kitchan</h3>
                            <p class="cart__text-info">Decor / Artchitecture</p>
                        </div>
                        <a href="#" class="cart__link"><img src="@/assets/img/projects/link.svg" alt="link"></a>

                    </div>

                </div>
                <div class="cart">
                    <div class="cart__img-block">
                        <img src="@/assets/img/projects/3.jpg" alt="project-3" class="cart__img">

                    </div>
                    <div class="cart__block-info">
                        <div class="cart__text">
                            <h3 class="cart__title">Modern Kitchan</h3>
                            <p class="cart__text-info">Decor / Artchitecture</p>
                        </div>
                        <a href="#" class="cart__link"><img src="@/assets/img/projects/link.svg" alt="link"></a>

                    </div>

                </div>
                <div class="cart">
                    <div class="cart__img-block">
                        <img src="@/assets/img/projects/4.jpg" alt="project-4" class="cart__img">

                    </div>
                    <div class="cart__block-info">
                        <div class="cart__text">
                            <h3 class="cart__title">Modern Kitchan</h3>
                            <p class="cart__text-info">Decor / Artchitecture</p>
                        </div>
                        <a href="#" class="cart__link"><img src="@/assets/img/projects/link.svg" alt="link"></a>

                    </div>

                </div>
            </div>
        </div>
    </section>

    <section class="advantages">
        <div class="container">
            <div class="advantages__wrapper">
                <div class="advantages__item">
                    <span class="advantages__number">12</span>
                    <span class="advantages__text">Years Of Experiance</span>
                </div>
                <div class="advantages__item">
                    <span class="advantages__number">85</span>
                    <span class="advantages__text">Success Project</span>
                </div>
                <div class="advantages__item">
                    <span class="advantages__number">15</span>
                    <span class="advantages__text">Active Project</span>
                </div>
                <div class="advantages__item">
                    <span class="advantages__number">95</span>
                    <span class="advantages__text">Happy CUstomers</span>
                </div>
            </div>
        </div>
    </section>

    <section class="articles">
        <div class="container">
            <h2 class="articles__title">Articles & News</h2>
            <p class="articles__text">It is a long established fact that a reader will be distracted by the of readable
                content of a page when lookings at its layouts the points of using.</p>
            <div class="articles__carts">
              <CartDesign v-for="cart in carts" :key="cart.id" :cart="cart" />
            </div>
        </div>
    </section>


    
  </div>
</template>

<script>
import CartDesign from "@/components/CartDesign.vue";
export default {
  name: "MainPage",
  components: {
    CartDesign,
  },
  data() {
    return {
      carts: [
        {
          id: 1,
          name: "Interior Design",
          img: require("@/assets/img/cart-design/1.jpg"),
          text: "Best For Any Office & Business Interior Solution",
          data: "25 December,2022",
        },
        {
          id: 2,
          name: "Interior Design",
          img: require("@/assets/img/cart-design/2.jpg"),
          text: "Best For Any Office & Business Interior Solution",
          data: "25 December,2022",
        },
        {
          id: 3,
          name: "Interior Design",
          img: require("@/assets/img/cart-design/3.jpg"),
          text: "Best For Any Office & Business Interior Solution",
          data: "25 December,2022",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
$jost: "Jost", sans-serif;
$text-color: #292f36;

.home-info {
  &__wrapper {
    display: flex;
    align-items: center;
    padding: 30px;
    background: url(@/assets/img/home-info/Images.jpg),
      center center/ cover no-repeat;
    height: 758px;
    border-radius: 70px;
  }

  &__block-info {
    max-width: 443px;
  }

  &__title {
    font-size: 65px;
    margin-bottom: 18px;
  }

  &__text {
    font-family: $jost;
    font-size: 22px;
    margin-bottom: 11px;
  }
}

.button {
  &__black {
    display: flex;
    padding: 26px 49px 26px 48px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 18px;
    background: #292f36;
    box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
    color: #fff;
    font-family: $jost;
    font-size: 18px;
    font-weight: 600;
  }
}

.projects {
  padding: 96px 0 101px;

  &__title {
    margin-bottom: 8px;
    font-size: 50px;
    text-align: center;
  }

  &__text {
    margin: 0 auto 93px;
    max-width: 737px;
    color: #4d5053;
    text-align: center;
    font-family: $jost;
    font-size: 22px;
  }

  &__carts {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
  }

  justify-content: space-between;
}

.cart {
  width: 548px;
  height: 619px;
  margin-bottom: 20px;

  &__block-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;
  }

  &__img {
    width: inherit;

    &-block {
      width: 100%;
      height: 525px;
      overflow: hidden;
    }
  }

  &__title {
    margin-bottom: 4px;
    font-size: 25px;
  }

  &__text-info {
    color: #4d5053;
    font-family: $jost;
    font-size: 22px;
  }

  &__link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: #f4f0ec;
  }
}

.advantages {
  padding: 151px 0;
  background-color: #f4f0ec;

  &__wrapper {
    display: flex;
    justify-content: space-between;
  }

  &__item:not(:last-child) {
    border-right: 1px solid #cda274;
  }

  &__item {
    display: flex;
    flex-direction: column;
    width: 33%;
  }

  &__number {
    margin-bottom: 16px;
    text-align: center;
    color: #cda274;
    font-size: 85px;
  }

  &__text {
    text-align: center;
    color: #4d5053;
    font-family: $jost;
    font-size: 22px;
  }
}

.articles {
  padding: 96px 0;

  &__title {
    font-size: 50px;
    text-align: center;
    margin-bottom: 12px;
  }

  &__text {
    font-family: $jost;
    font-size: 22px;
    text-align: center;
    max-width: 811px;
    margin: 0 auto;

    margin-bottom: 25px;
  }

  &__carts {
    display: flex;
    justify-content: space-between;
  }
}
</style>
