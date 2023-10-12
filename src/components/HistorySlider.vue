<template>
    <div class="history-slider">
        <button v-for="section of sections" :key="section.title" @click="scrollToAnchor(section.anchor)"
            :class="section.anchor === currentSection ? 'current-section-container' : ''">
            <span v-if="section.anchor === currentSection" class="current-section">{{ section.title }}</span>
        </button>
    </div>
</template>

<script setup lang="ts">
interface HistorySliderProps {
    currentSection: string;
    sections: { anchor: string; title: string }[];
}

defineProps<HistorySliderProps>();

const scrollToAnchor = (anchor: string) => {
    const section = document.getElementById(anchor);

    if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
    }
}
</script>

<style scoped>
.history-slider {
    position: fixed;
    top: 50%;
    right: 3rem;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    z-index: 1000;
    row-gap: 4rem;
}

button {
    background-color: transparent;
    position: relative;
    border: none;
    background-color: var(--white-transparent);
    border-radius: 100%;
    height: 1.6rem;
    width: 1.6rem;
    cursor: pointer;
    outline-offset: 1px;
    transition: all 0.2s ease-in-out;
}

.current-section {
    display: inline-block;
    position: absolute;
    left: -100%;
    transform: translateX(-100%);
    color: white;
    width: max-content;
    font-size: 1.4rem;
    top: 0;
    color: var(--gold);
    letter-spacing: 1px;
    font-family: 'Merriweather', serif;
}

button:hover,
.current-section-container {
    background-color: var(--gold);
}

.current-section-container::before,
button:hover::before {
    border: 1px solid var(--gold);

}

button::before {
    content: "";
    border: 1px solid var(--white-transparent);
    height: 1.8rem;
    width: 1.8rem;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    top: -2px;
    left: -2px;
}

button:not(:last-child)::after {
    width: 2px;
    height: 3.2rem;
    display: inline-block;
    position: absolute;
    content: "";
    background-color: var(--white-transparent);
    bottom: -4px;
    transform: translate(-50%, 100%);
}
</style>