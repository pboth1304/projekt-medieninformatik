<template>
    <section class="todays-section">
        <template v-if="isVisible">
            <h2 class="heading-gold">10 Weingemeinden sind heute die Felsengartenkellerei</h2>

            <!-- <ImageSlider :image-slider-items="imageSliderItems" /> -->
        </template>
    </section>
</template>
<script setup lang="ts">
import ImageSlider from '@/components/image-slider/ImageSlider.vue';
import { ref } from 'vue';
import { ImageSliderItemProps } from './image-slider/types'

interface TownsOfFelsengartenkellereiProps {
    isVisible: boolean;
}

defineProps<TownsOfFelsengartenkellereiProps>()


const imageSliderItems = ref<ImageSliderItemProps[]>(
    [
        {
            title: 'Abstatt',
            description: 'Abstatt liegt im Süden des Landkreises Heilbronn am Rande der Löwensteiner Berge im idyllischen Schozachtal. Besonders sehenswert sind einige der historischen Fachwerkhäuser aus dem 15./16. Jahrhundert und die Burg Wildeck bei Vohenlohe, welche im 12. Jahrhundert erbaut wurde. ',
            imgPath: '/img/abstatt.jpg'
        },
        {
            title: 'Besigheim',
            description: 'Abstatt liegt im Süden des Landkreises Heilbronn am Rande der Löwensteiner Berge im idyllischen Schozachtal. Besonders sehenswert sind einige der historischen Fachwerkhäuser aus dem 15./16. Jahrhundert und die Burg Wildeck bei Vohenlohe, welche im 12. Jahrhundert erbaut wurde. ',
            imgPath: '/img/abstatt.jpg'
        },
        {
            title: 'Bietigheim',
            description: 'Abstatt liegt im Süden des Landkreises Heilbronn am Rande der Löwensteiner Berge im idyllischen Schozachtal. Besonders sehenswert sind einige der historischen Fachwerkhäuser aus dem 15./16. Jahrhundert und die Burg Wildeck bei Vohenlohe, welche im 12. Jahrhundert erbaut wurde. ',
            imgPath: '/img/abstatt.jpg'
        },
        {
            title: 'Gemmrigheim',
            description: 'Abstatt liegt im Süden des Landkreises Heilbronn am Rande der Löwensteiner Berge im idyllischen Schozachtal. Besonders sehenswert sind einige der historischen Fachwerkhäuser aus dem 15./16. Jahrhundert und die Burg Wildeck bei Vohenlohe, welche im 12. Jahrhundert erbaut wurde. ',
            imgPath: '/img/abstatt.jpg'
        },
        {
            title: 'Hessigheim',
            description: 'Abstatt liegt im Süden des Landkreises Heilbronn am Rande der Löwensteiner Berge im idyllischen Schozachtal. Besonders sehenswert sind einige der historischen Fachwerkhäuser aus dem 15./16. Jahrhundert und die Burg Wildeck bei Vohenlohe, welche im 12. Jahrhundert erbaut wurde. ',
            imgPath: '/img/abstatt.jpg'
        },
        {
            title: 'Ilsfeld',
            description: 'Abstatt liegt im Süden des Landkreises Heilbronn am Rande der Löwensteiner Berge im idyllischen Schozachtal. Besonders sehenswert sind einige der historischen Fachwerkhäuser aus dem 15./16. Jahrhundert und die Burg Wildeck bei Vohenlohe, welche im 12. Jahrhundert erbaut wurde. ',
            imgPath: '/img/abstatt.jpg'
        },
        {
            title: 'Ingersheim',
            description: 'Abstatt liegt im Süden des Landkreises Heilbronn am Rande der Löwensteiner Berge im idyllischen Schozachtal. Besonders sehenswert sind einige der historischen Fachwerkhäuser aus dem 15./16. Jahrhundert und die Burg Wildeck bei Vohenlohe, welche im 12. Jahrhundert erbaut wurde. ',
            imgPath: '/img/abstatt.jpg'
        },
        {
            title: 'Liebenstein',
            description: 'Abstatt liegt im Süden des Landkreises Heilbronn am Rande der Löwensteiner Berge im idyllischen Schozachtal. Besonders sehenswert sind einige der historischen Fachwerkhäuser aus dem 15./16. Jahrhundert und die Burg Wildeck bei Vohenlohe, welche im 12. Jahrhundert erbaut wurde. ',
            imgPath: '/img/abstatt.jpg'
        },
        {
            title: 'Löchgau',
            description: 'Abstatt liegt im Süden des Landkreises Heilbronn am Rande der Löwensteiner Berge im idyllischen Schozachtal. Besonders sehenswert sind einige der historischen Fachwerkhäuser aus dem 15./16. Jahrhundert und die Burg Wildeck bei Vohenlohe, welche im 12. Jahrhundert erbaut wurde. ',
            imgPath: '/img/abstatt.jpg'
        },
        {
            title: 'Walheim',
            description: 'Abstatt liegt im Süden des Landkreises Heilbronn am Rande der Löwensteiner Berge im idyllischen Schozachtal. Besonders sehenswert sind einige der historischen Fachwerkhäuser aus dem 15./16. Jahrhundert und die Burg Wildeck bei Vohenlohe, welche im 12. Jahrhundert erbaut wurde. ',
            imgPath: '/img/abstatt.jpg'
        }
    ])

</script>
<style scoped>
.todays-section {
    height: 100vh;
    width: 100%;
    background-image:
        linear-gradient(10deg, rgba(0, 0, 0, 0.9) 50%, rgba(66, 66, 66, 0.93) 90%, rgba(66, 66, 66, 0.73) 100%),
        url('/img/weinfaesser.jpg');
    background-position: center center;
    background-size: cover;
    padding: var(--page-padding-y) var(--page-padding-x);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

.heading-gold {
    font-size: 4rem;
    text-align: center;
    margin-top: 7rem;
}
</style>