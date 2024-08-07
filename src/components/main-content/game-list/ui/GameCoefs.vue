<script setup lang="ts">
import InlineSvg from 'vue-inline-svg';

type Coef = {
    value: number | null;
    type: "up" | "down" | null;
}

defineProps<{
    coef1: Coef;
    coefX: Coef
    coef2: Coef;
}>();
</script>

<template>
    <td class="coef">
        <div class="coef__wrap">
            <inline-svg src="/src/assets/icons/arrow.svg" v-if="coef1.type" class="coef__icon"
                :class="coef1.type"></inline-svg>
            <span class="coef__value">{{ coef1.value }}</span>
        </div>
    </td>
    <td class="coef">
        <div class="coef__wrap">
            <inline-svg src="/src/assets/icons/arrow.svg" v-if="coefX.type" class="coef__icon"
                :class="coefX.type"></inline-svg>
            <span class="coef__value">{{ coefX.value }}</span>
        </div>
    </td>
    <td class="coef">
        <div class="coef__wrap">
            <inline-svg src="/src/assets/icons/arrow.svg" v-if="coef2.type" class="coef__icon"
                :class="coef2.type"></inline-svg>
            <span class="coef__value">{{ coef2.value }}</span>
        </div>
    </td>
</template>

<style lang="scss" scoped>
.coef {
    text-align: center;
}

.coef__wrap {
    display: flex;
    align-items: center;
    justify-content: center;
}

.coef__icon {
    width: 16px;
    height: 16px;

    &.up {
        transform: rotate(180deg);

        & * {
            stroke: var(--color-dop-cta);
        }
    }

    &.down {
        & * {
            stroke: var(--color-error);
        }
    }
}

.coef__value {
    font-family: var(--main-font);
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    text-align: center;
    color: var(--color-main-text);
}

@media screen and (width <=1080px) {
    .coef {
        width: 40px;
    }

}
</style>
