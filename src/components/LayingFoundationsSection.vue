<template>
    <section class="foundations-section">
        <template v-if="isVisible">
            <YearIndicator year="1972" class="year-indicator animated" />
            <p class="text-white animated">
                Grundsteinlegung der Felsengartenkellerei Besigheim durch die Fusion der WG Besigheim
                und WG Hessigheim wodurch eine der bedeutensten Winzergenossenschaften Württembergs entstand.
            </p>
            <div class="wine-bottles">
                <img src="/img/weinflasche-1.png" alt="Weinflasche" />
                <img src="/img/weinflasche-2.png" alt="Weinflasche" />
            </div>
        </template>
    </section>
</template>
<script setup lang="ts">
import YearIndicator from './shared/YearIndicator.vue';

interface LayingFoundationsSectionProps {
    isVisible: boolean;
}

defineProps<LayingFoundationsSectionProps>()
</script>
<style scoped>
.foundations-section {
    height: 100vh;
    width: 100%;
    background-image:
        linear-gradient(10deg, rgba(0, 0, 0, 0.9) 50%, rgba(66, 66, 66, 0.93) 90%, rgba(66, 66, 66, 0.73) 100%),
        url('/img/besigheim-2-min.jpg');
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

.wine-bottles {
    position: absolute;
    bottom: 0;
    right: 10%;
    max-height: 90vh;
    width: auto;
}

.wine-bottles img {
    opacity: 0;
    animation-name: slide-in;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
    animation-duration: 1.5s;
}

.wine-bottles img:first-child {
    animation-delay: 1.5s;
}

.wine-bottles img:last-child {
    animation-delay: 1s;
}

@keyframes slide-in {
    0% {
        opacity: 0;
        transform: translateY(100%);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@media screen and (max-width: 1200px) {
    .wine-bottles img:first-child {
        display: none;
    }
}

@media screen and (max-width: 600px) {
    .wine-bottles img {
        animation-name: none;
    }

    .text-white {
        font-size: 2.4rem;
        line-height: 4.2rem;
        max-width: 100%;
    }
}
</style>