<template>
    <section class="beginnings-section">
        <template v-if="isVisible">
            <YearIndicator year="1938" class="year-indicator animated" />
            <div>
                <h2 class="heading-gold animated">Die Anfänge</h2>
                <div class="texts">
                    <p class="text-white text-left animated">
                        Ehe es die Winzergenossenschaften gab, standen jeden Herbst hölzerne Zuber auf den
                        Gassen vor den Häusern oder rund um die Kelter. Die Weingärtner waren auf das Wohlwollen von
                        Weinhändlern angewiesen. Denn sie
                        hatten keine Möglichkeit, Wein selbst einzulagern oder in Flaschen abzufüllen.</p>
                    <p class="text-white text-right animated">
                        Um diesem Problem zu begegnen, hatten einige Weingärtner das Ziel, sich in
                        Gemeinschaften zu organisieren. Dadurch war es möglich, den Weinausbau und die Vermarktung dessen
                        besser
                        koordinieren
                        zu können. <br /> 1938 begannen zwanzig Weingärtner aus Besigheim damit, gemeinsame Weinlesetermine
                        zu
                        vereinbaren.</p>
                </div>
            </div>
        </template>
    </section>
</template>
<script setup lang="ts">
import YearIndicator from './shared/YearIndicator.vue';

interface BeginningsSectionProps {
    isVisible: boolean;
}

defineProps<BeginningsSectionProps>()
</script>
<style scoped>
.beginnings-section {
    height: 100vh;
    width: 100%;
    background-image:
        linear-gradient(10deg, rgba(0, 0, 0, 0.9) 50%, rgba(66, 66, 66, 0.93) 90%, rgba(66, 66, 66, 0.73) 100%),
        url('/img/traubenanlieferung.jpg');
    background-position: center center;
    background-size: cover;
    padding: var(--page-padding-y) var(--page-padding-x);
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;
}

p {
    font-size: 1.6rem;
    line-height: 2.6rem;
    font-weight: 300;
    width: 50%;
}

.texts {
    display: flex;
    column-gap: 2rem;
    justify-content: space-between;
}

.text-left {
    animation-delay: 1.6s;
}

.text-right {
    animation-delay: 2.4s;
}

.year-indicator {
    position: absolute;
    left: var(--page-padding-x);
    top: var(--page-padding-y);
}

.heading-gold {
    animation-delay: 0.8s;
}
</style>