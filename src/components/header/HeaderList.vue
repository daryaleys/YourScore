<script setup lang="ts"></script>

<template>
    <div class="header__bottom">
        <div class="container header__container">
            <nav class="nav header__nav">
                <ul class="nav__list">
                    <li class="nav__item">
                        <router-link to="/football" class="nav__link">Футбол</router-link>
                    </li>
                    <li class="nav__item">
                        <router-link to="/hockey" class="nav__link">Хоккей</router-link>
                    </li>
                    <li class="nav__item">
                        <router-link to="/boxing" class="nav__link">Бокс</router-link>
                    </li>
                    <li class="nav__item">
                        <router-link to="/mma" class="nav__link">MMA</router-link>
                    </li>
                </ul>
            </nav>

            <button class="header__list_button">Больше</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.header__bottom {
    background: var(--color-dop-back);
}
</style>
