<template>
    <div>
        {{ title }}
        <div class="town" :style="{ backgroundImage: 'url(' + imgPath + ')' }"></div>
        {{ description }}
    </div>
</template>
<script setup lang="ts">
import { ImageSliderItemProps } from './types';

defineProps<ImageSliderItemProps>();

</script>
<style scoped>
.town {
    width: 20rem;
    height: 20rem;
}
</style>