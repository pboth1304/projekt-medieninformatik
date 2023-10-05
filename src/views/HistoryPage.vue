<template>
    <HeroSection id="hero" />
    <main>
        <Transition name="slide-in">
            <HistorySlider v-if="currentSection && currentSection !== 'hero'" :current-section="currentSection"
                :sections="historySliderSections" />
        </Transition>
        <BeginningsSection id="1938" :is-visible="currentSection === '1938'" />
        <FollowUpSection id="1939-1961" :is-visible="currentSection === '1939-1961'" />
        <LayingFoundationsSection id="1972" :is-visible="currentSection === '1972'" />
        <ConstructionMainBuilding id="1976" :is-visible="currentSection === '1976'" />
        <TownsOfFelsengartenkellerei id="today" :is-visible="currentSection === 'today'" />
    </main>
    <Footer />
</template>

<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue';
import BeginningsSection from '@/components/BeginningsSection.vue';
import FollowUpSection from '@/components/FollowUpSection.vue';
import LayingFoundationsSection from '@/components/LayingFoundationsSection.vue';
import ConstructionMainBuilding from '@/components/ConstructionMainBuilding.vue';
import TownsOfFelsengartenkellerei from '@/components/TownsOfFelsengartenkellerei.vue';
import Footer from '@/components/Footer.vue';
import HistorySlider from '@/components/HistorySlider.vue';
import { computed, onMounted, ref } from 'vue';

const currentSection = ref<string | null>(null);
const sections: { anchor: string, title: string }[] = [
    { title: 'hero', anchor: 'hero' },
    { title: '1938', anchor: '1938' },
    { title: '1939 - 1961', anchor: '1939-1961' },
    { title: '1972', anchor: '1972' },
    { title: '1976', anchor: '1976' },
    { title: 'Heute', anchor: 'today' },
];

const historySliderSections = computed(() => sections.slice(1)); // Hero section shouldn't be shown in history slider

onMounted(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            
            if (entry.intersectionRatio > 0) {
                currentSection.value = entry.target.getAttribute('id');
            }
        })
    },
        {
            threshold: 0.8
        }
    );

    sections.forEach((sect) => {
        const section = document.getElementById(sect.anchor);
        if (section) {
            intersectionObserver.observe(section);
        }
    })
})
</script>
<style scoped>
main {
    display: flex;
    flex-direction: column;
}

.slide-in-enter-active,
.slide-in-leave-active {
    transition: all 0.25s ease-out;
}

.slide-in-enter-from {
    opacity: 0;
    transform: translateX(3rem);
}

.slide-in-leave-to {
    opacity: 0;
    transform: translateX(-3rem);
}
</style>