<template lang="">
  <div>
    <header class="header">
      <div class="container">
        <div class="header__wrapper">
          <div class="logo">
            <img src="@/assets/img/logo/Logo.svg" alt="logo" />
            <span class="logo__text">Interno</span>
          </div>
          <nav class="header__menu">
            <a href="#" class="header__link">Home</a>
            <a href="#" class="header__link">Project</a>
            <a href="#" class="header__link">Blog</a>
          </nav>
        </div>
      </div>
    </header>

    <section class="blog">
      <div class="container blog__content">
        <div class="blog__wrapper">
          <h1 class="blog__title">Articles & News</h1>
          <nav class="breadcrumb">
            <ul class="breadcrumb__items">
              <li class="breadcrumb__list">
                <a class="breadcrumb__link" href="#">Home</a>
              </li>
              <li class="breadcrumb__list">
                <a class="breadcrumb__link" href="#">Blog</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>

    <section class="latest-post">
      <div class="container">
        <h2 class="latest-post__title">Latest Post</h2>
        <div class="latest-post__cart">
          <img
            src="@/assets/img/blog/cart.jpg"
            alt="design"
            class="latest-post__cart-img"
          />
          <div class="latest-post__cart-info">
            <h3 class="latest-post__cart-title">
              Low Cost Latest Invented Interior Designing Ideas
            </h3>
            <p class="latest-post__cart-text">
              Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis
              dignissim maximus.posuere in.Contrary to popular belief
            </p>
            <p class="latest-post__cart-text">
              Lorem Ipsum is not simply random text. It has roots in a piece of
              classica.
            </p>
            <div class="cart-design-bottom latest-post__top">
              <span class="cart-design__date">26 December,2022 </span>
              <a href="#" class="cart-design__link"
                ><img src="@/assets/img/cart-design/link.svg" alt="link"
              /></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="article-news">
      <div class="container">
        <h2 class="article-news__title">Latest Post</h2>
        <div id="article-news-card" class="article-news__wrapper">
          <div class="cart-design" v-for="cart in carts" :key="cart.id">
            <div class="cart-design__wrapper">
              <div class="cart-design__top">
                <img
                  :src="cart.img"
                  alt="image design"
                  class="cart-design__top-img"
                />
                <span class="cart-design__top-info">{{ cart.name }}</span>
              </div>
              <h2 class="cart-design__title">
                Best For Any Office & Business Interior Solution
              </h2>
              <div class="cart-design-bottom cart-design__bottom">
                <span class="cart-design__date">{{ cart.data }}</span>
                <a href="#" class="cart-design__link"
                  ><img src="@/assets/img/cart-design/link.svg" alt="link"
                /></a>
              </div>
            </div>
          </div>
        </div>
        <div class="pagination">
          <a href="#" class="pagination__item">01</a>
          <a href="#" class="pagination__item">02</a>
          <a href="#" class="pagination__item">03</a>
          <a href="#" class="pagination__item">
            <img src="@/assets/img/cart-design/link.svg" alt="link" />
          </a>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="container">
        <div class="footer__wrapper">
          <div class="footer__about">
            <div class="logo">
              <img src="@/assets/img/logo/Logo.svg" alt="logo" />
              <span class="logo__text">Interno</span>
            </div>
            <p class="footer__about-info">
              It is a long established fact that a reader will be distracted
              lookings.
            </p>
            <div class="footer__about-social-network">
              <a href="#" class="footer__link-network"
                ><img src="@/assets/img/footer/twitter.svg" alt="twitter"
              /></a>
              <a href="#" class="footer__link-network"
                ><img src="@/assets/img/footer/instagram.svg" alt="instagram"
              /></a>
            </div>
          </div>
          <div class="footer__pages">
            <h3 class="footer__subtitle">Pages</h3>
            <a href="#" class="footer__link">Home</a>
            <a href="#" class="footer__link">Project</a>
            <a href="#" class="footer__link">Blog</a>
          </div>
          <div class="footer__contact">
            <h3 class="footer__subtitle">Contact</h3>
            <p class="footer__contact-text">
              55 East Birchwood Ave. Brooklyn, New York 11201
            </p>
            <p class="footer__contact-text">contact@interno.com</p>
            <p class="footer__contact-text">(123) 456 - 7890</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "BlogPage",
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
        {
          id: 4,
          name: "Interior Design",
          img: require("@/assets/img/cart-design/1.jpg"),
          text: "Best For Any Office & Business Interior Solution",
          data: "25 December,2022",
        },
        {
          id: 5,
          name: "Interior Design",
          img: require("@/assets/img/cart-design/2.jpg"),
          text: "Best For Any Office & Business Interior Solution",
          data: "25 December,2022",
        },
        {
          id: 6,
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

.blog {
  height: 356px;
  background: url(@/assets/img/blog/bg.jpg) center/cover no-repeat;

  &__content {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 100%;
  }

  &__wrapper {
    display: flex;
    padding: 41px 78px;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    border-radius: 37px 37px 0px 0px;
    background: #fff;
  }

  &__title {
    font-size: 50px;
  }
}

.breadcrumb {
  &__items {
    display: flex;
  }

  &__list {
    color: #4d5053;
    font-family: $jost;
    font-size: 22px;

    &:not(:last-child)::after {
      content: "/";
      margin-left: 10px;
      margin-right: 10px;
    }
  }

  &__link {
    color: inherit;
  }
}

.latest-post {
  padding: 200px 0;

  &__title {
    font-size: 50px;
    margin-bottom: 33px;
  }

  &__cart {
    display: flex;
  }

  &__cart-img {
    width: 569px;
    height: 478px;
    border-radius: 50px;
  }

  &__cart-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 22px;
    padding: 65px;
  }

  &__cart-title {
    font-size: 25px;
  }

  &__cart-text {
    color: #4d5053;
    font-family: $jost;
    font-size: 22px;
  }

  &__top {
    margin-top: 30px;
  }
}

.article-news {
  margin-bottom: 200px;

  &__title {
    font-size: 50px;
    margin-bottom: 30px;
  }

  &__wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 30px;
    margin-bottom: 51px;
  }
}

.pagination {
  display: flex;
  width: 268px;
  gap: 20px;
  margin: 0 auto;

  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 52px;
    height: 52px;
    font-family: $jost;
    font-size: 16px;
    font-weight: 500;
    background-color: #fff;
    border: 1px solid #cda274;
    border-radius: 50%;
    color: $text-color;

    &:hover {
      background-color: #f4f0ec;
    }
  }
}
</style>
