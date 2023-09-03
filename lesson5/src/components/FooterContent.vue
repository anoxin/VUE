<template lang="en">
  <div>
        <footer class="footer">
        <div class="container">
            <div class="footer__wrapper">
                <div class="footer__about">
                    <div class="logo">
                        <img src="@/assets/img/logo/Logo.svg" alt="logo">
                        <span class="logo__text">Interno</span>
                    </div>
                    <p class="footer__about-info">
                        It is a long established fact that a reader will be distracted lookings.
                    </p>
                    <div class="footer__about-social-network">
                        <a href="#" class="footer__link-network"><img src="@/assets/img/footer/twitter.svg" alt="twitter"></a>
                        <a href="#" class="footer__link-network"><img src="@/assets/img/footer/instagram.svg"
                                alt="instagram"></a>
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
                    <p class="footer__contact-text">55 East Birchwood Ave.
                        Brooklyn, New York 11201</p>
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
  name: "FooterContent",
};
</script>

<style lang="scss">
$jost: "Jost", sans-serif;
$text-color: #292f36;

.footer {
  margin-bottom: 134px;

  &__wrapper {
    display: flex;
    justify-content: space-between;
  }

  &__about {
    max-width: 393px;
  }

  &__about-info {
    margin-top: 18px;
    margin-bottom: 31px;
    color: #4d5053;
    font-family: $jost;
    font-size: 22px;
    line-height: 150%;
  }

  &__about-social-network {
    display: flex;
    justify-content: space-between;
    width: 90px;
  }

  &__pages {
    display: flex;
    flex-direction: column;
    margin-right: 100px;
  }

  &__subtitle {
    color: #292f36;
    font-size: 25px;
    margin-bottom: 20px;
  }

  &__link {
    color: #4d5053;
    font-family: $jost;
    font-size: 22px;
    line-height: 150%;
    margin-bottom: 30px;
  }

  &__contact {
    display: flex;
    flex-direction: column;
    max-width: 258px;
  }

  &__contact-text {
    color: #4d5053;
    font-family: $jost;
    font-size: 22px;
    line-height: 150%;
    margin-bottom: 30px;
  }
}
</style>
