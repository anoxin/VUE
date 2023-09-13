<template lang="en">
  <div>
     <header class="header">
        <div class="container">
            <div class="header__wrapper">
                <div class="logo">
                    <img src="@/assets/img/logo/Logo.svg" alt="logo">
                    <span class="logo__text">Interno</span>
                </div>
                <nav class="header__menu">
                    <router-link to="/" class="header__link">Home</router-link>
                    <router-link to="/our-project" class="header__link">Project</router-link>
                    <router-link to="/blog-page" class="header__link">Blog</router-link>
                </nav>
            </div>
        </div>
    </header>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
$jost: "Jost", sans-serif;
$text-color: #292f36;

.header {
  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__menu {
    display: flex;
    justify-content: flex-end;
    gap: 40px;
  }

  &__link {
    padding: 65px 0;
    font-family: $jost;
    font-size: 20px;
    color: $text-color;
  }
}
</style>
