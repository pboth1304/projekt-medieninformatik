<template>
    <div>
        <ImageSliderItem v-for="imageSliderItem of imageSliderItems" :key="imageSliderItem.title"
            :title="imageSliderItem.title" :description="imageSliderItem.description" :img-path="imageSliderItem.imgPath" />
    </div>
</template>
<script setup lang="ts">
import ImageSliderItem from './ImageSliderItem.vue';
import { ImageSliderProps } from './types';

defineProps<ImageSliderProps>();
</script>
<style scoped></style>