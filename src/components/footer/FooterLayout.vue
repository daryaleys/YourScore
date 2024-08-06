<script setup lang="ts">
import { getImageUrl } from '@/helpers/helpers';
import InlineSvg from 'vue-inline-svg';

</script>

<template>
    <footer class="footer">
        <div class="container footer__container">

            <div class="footer__top">
                <nav class="nav footer__nav">
                    <ul class="nav__list">
                        <li class="nav__item">
                            <a href="" class="nav__link">Пользовательское соглашение</a>
                        </li>
                        <li class="nav__item">
                            <a href="" class="nav__link">Конфиденциальность</a>
                        </li>
                        <li class="nav__item">
                            <a href="" class="nav__link">Реклама</a>
                        </li>
                        <li class="nav__item">
                            <a href="" class="nav__link">Контакты</a>
                        </li>
                    </ul>
                </nav>

                <ul class="social">
                    <li class="social__item">
                        <a href="" class="social__link" title="Facebook">
                            <inline-svg :src="getImageUrl('/src/assets/icons/social-links/facebook.svg')" width="24"
                                height="24" class="social__icon"></inline-svg>
                        </a>
                    </li>
                    <li class="social__item">
                        <a href="" class="social__link" title="Instagram">
                            <inline-svg :src="getImageUrl('/src/assets/icons/social-links/instagram.svg')" width="24"
                                height="24" class="social__icon"></inline-svg>
                        </a>
                    </li>
                    <li class="social__item">
                        <a href="" class="social__link" title="VK">
                            <inline-svg :src="getImageUrl('/src/assets/icons/social-links/vk.svg')" width="24"
                                height="24" class="social__icon"></inline-svg>
                        </a>
                    </li>
                    <li class="social__item">
                        <a href="" class="social__link" title="Twitter">
                            <inline-svg :src="getImageUrl('/src/assets/icons/social-links/twitter.svg')" width="24"
                                height="24" class="social__icon"></inline-svg>
                        </a>
                    </li>
                </ul>
            </div>

            <div class="separator"></div>

            <div class="footer__copyright">Copyright © 2007 мой_футбольчег.рф</div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.footer {
    margin-top: 16px;
}

.footer__container {
    background: var(--color-dop-back);
    border-radius: 10px 10px 0 0;
    padding: 18px 14px;
    transition: background .3s ease-in-out;
    display: flex;
    flex-direction: column;
    gap: 18px;
}

.footer__top {
    display: flex;
    justify-content: space-between;
}

.nav__list {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.nav__link {
    text-decoration: none;
    font-family: var(--second-font);
    font-weight: 500;
    font-size: 16px;
    line-height: 120%;
    color: var(--color-main-text);
    transition: color .3s ease-in-out;

    &:hover {
        color: var(--color-dop-cta);
    }
}

.social {
    display: flex;
    gap: 12px;
}

.social__link {
    text-decoration: none;
    width: 36px;
    height: 36px;
    border: 2px solid var(--color-main-text);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: border-color .3s ease-in-out;

    &:hover {
        border-color: var(--color-dop-cta);

        & .social__icon>* {
            fill: var(--color-dop-cta);
        }
    }
}

.social__icon>* {
    fill: var(--color-main-text);
    transition: fill .3s ease-in-out;
}

.separator {
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, rgba(127, 127, 127, 0) 0%, #808080 51.04%, rgba(127, 127, 127, 0) 100%);
}

.footer__copyright {
    font-family: var(--second-font);
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
    color: var(--color-dop-text);
}

@media screen and (width <=500px) {
    .footer__container {
        padding: 12px 8px;
        gap: 12px;
    }

    .footer__top {
        flex-direction: column;
        gap: 18px;
    }

    .nav__list {
        gap: 16px;
    }

    .nav__link {
        font-size: 14px;
    }
}
</style>
