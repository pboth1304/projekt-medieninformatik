<template>
    <section class="construction-section">
        <template v-if="isVisible">
            <YearIndicator year="1976" class="year-indicator animated" />
            <p class="text-white animated">
                Errichtung des Kellereigebäudes am Fuße der namensgebenden Felsengärten.
                <span class="text-highlight"> Der Beginn einer neuen Ära unserer traditionsreichen Weinregion. </span>
            </p>
        </template>
    </section>
</template>
<script setup lang="ts">
import YearIndicator from './shared/YearIndicator.vue';

interface ConstructionMainBuildingProps {
    isVisible: boolean;
}

defineProps<ConstructionMainBuildingProps>()
</script>
<style scoped>
.construction-section {
    height: 100vh;
    width: 100%;
    background-image:
        linear-gradient(10deg, rgba(0, 0, 0, 0.9) 50%, rgba(66, 66, 66, 0.93) 90%, rgba(66, 66, 66, 0.73) 100%),
        url('/img/felsengartenkellerei.jpg');
    background-position: center center;
    background-size: cover;
    padding: var(--page-padding-y) var(--page-padding-x);
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
}

.year-indicator {
    position: absolute;
    left: var(--page-padding-x);
    top: var(--page-padding-y);
}

.text-white {
    font-size: 2.8rem;
    max-width: 50%;
    line-height: 4.6rem;
    font-weight: 200;
    animation-delay: 0.8s;
}

@media screen and (max-width: 1000px) {
    .text-white {
        max-width: 100%;
    }
}

@media screen and (max-width: 600px) {
    .text-white {
        font-size: 2.4rem;
        line-height: 4.2rem;
    }
}
</style>