<template>
    <div class="year-indicator" :class="'year-indicator-' + size">
        <span>{{ splittedYearString.firstPart }}</span>
        <span>{{ splittedYearString.secondPart }}</span>
    </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';

interface YearIndicatorProps {
    year: string;
    size?: 'l' | 's';
}

const props = withDefaults(defineProps<YearIndicatorProps>(), { size: 'l' })

const splittedYearString = computed(() =>
    ({ firstPart: props.year.slice(0, 2), secondPart: props.year.slice(2, 4) }))
</script>
<style scoped>
.year-indicator {
    display: flex;
    flex-direction: column;
    font-size: 18rem;
    color: var(--white-transparent);
    font-family: 'Merriweather', serif;
}

.year-indicator-l {
    letter-spacing: 4px;
    font-size: 18rem;
    line-height: 19rem;
}

.year-indicator-s {
    font-size: 8rem;
    line-height: 9rem;
    letter-spacing: 2px;
}
</style>