<template>
    <section class="todays-section">
        <template v-if="isVisible">
            <h2 class="heading-gold">10 Weingemeinden sind heute die Felsengartenkellerei</h2>
            <div class="slider-container">
                <swiper-container ref="swiperRef" init="false" class="swiper-container" @slidechange="onSlideChange">
                    <swiper-slide v-for="(slide, index) of imageSliderItems" :key="slide.title"
                        :class="index === activeSwiperIndex ? 'slide slide-active' : 'slide'"
                        :style="{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 42%, rgba(0,0,0,0.8) 100%), url(${slide.imgPath})` }">
                        <h4 class="slide-title">{{ slide.title }}</h4>
                    </swiper-slide>
                </swiper-container>
            </div>
        </template>
    </section>
</template>
<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { register as registerSwiper, type SwiperContainer } from "swiper/element/bundle";
import type { SwiperOptions } from 'swiper/types';

registerSwiper();

interface TownsOfFelsengartenkellereiProps {
    isVisible: boolean;
}

defineProps<TownsOfFelsengartenkellereiProps>()

const swiperRef = ref<SwiperContainer | null>(null);
const activeSwiperIndex = ref(swiperRef.value?.swiper.activeIndex || 0);

const onSlideChange = (evt: CustomEvent) => {
    const [swiper] = evt.detail;
    activeSwiperIndex.value = swiper.activeIndex;
}

const swiperConfig: SwiperOptions = {
    navigation: true,
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: true,
    effect: 'slide',
    injectStyles: [
        `
            .swiper-button-next,
            .swiper-button-prev {
                width: 3.2rem;
                height: 3.2rem;
                background: var(--white-transparent) ;
                border-radius: 50%;
                box-shadow: 0 0.5rem 1rem rgba(16, 28, 38, 0.05);
                color: #000000;
            }

            .swiper-button-next svg ,  
            .swiper-button-prev svg{
                width: 20%;
            }
        `,
    ],
};

watchEffect(() => {
    if (swiperRef.value) {
        Object.assign(swiperRef.value, swiperConfig);
        swiperRef.value.initialize();
        console.log('swip', swiperRef.value.swiper.activeIndex);
    }
})

const imageSliderItems = ref(
    [
        {
            title: 'Abstatt',
            description: 'Abstatt liegt im Süden des Landkreises Heilbronn am Rande der Löwensteiner Berge im idyllischen Schozachtal. Besonders sehenswert sind einige der historischen Fachwerkhäuser aus dem 15./16. Jahrhundert und die Burg Wildeck bei Vohenlohe, welche im 12. Jahrhundert erbaut wurde. ',
            imgPath: '/img/abstatt.jpg'
        },
        {
            title: 'Besigheim',
            description: 'Abstatt liegt im Süden des Landkreises Heilbronn am Rande der Löwensteiner Berge im idyllischen Schozachtal. Besonders sehenswert sind einige der historischen Fachwerkhäuser aus dem 15./16. Jahrhundert und die Burg Wildeck bei Vohenlohe, welche im 12. Jahrhundert erbaut wurde. ',
            imgPath: '/img/logo.png'
        },
        {
            title: 'Bietigheim',
            description: 'Abstatt liegt im Süden des Landkreises Heilbronn am Rande der Löwensteiner Berge im idyllischen Schozachtal. Besonders sehenswert sind einige der historischen Fachwerkhäuser aus dem 15./16. Jahrhundert und die Burg Wildeck bei Vohenlohe, welche im 12. Jahrhundert erbaut wurde. ',
            imgPath: '/img/weinfaesser.jpg'
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
    row-gap: 5rem;
}

.slide {
    border-radius: 5%;
    width: 70%;
    color: var(--white);
    background-color: var(--white-transparent);
    background-position: center center;
    background-size: cover;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    transition: opacity 0.3s ease-in-out;
    opacity: 0.6;
}

.slide-active {
    opacity: 1;
}

.slide-title {
    color: var(--white);
    font-size: 3rem;
    margin-left: 3rem;
    margin-bottom: 3rem;
    font-weight: 400;
    letter-spacing: 1px;
}


.slider-container {
    width: 80vw;
    height: 100%;
}

.swiper-container {
    height: 100%;
}

.city-img {
    width: 100%;
    height: 100%;
}

.heading-gold {
    font-size: 4rem;
    text-align: center;
    margin-top: 7rem;
    line-height: 120%;
}
</style>