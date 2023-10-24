import { ref } from 'vue';

export const useImageSliderItems = () => {
  const imageSliderItems = ref<{ title: string; imgPath: string }[]>([
    {
      title: 'Abstatt',
      imgPath: '/img/abstatt.jpg'
    },
    {
      title: 'Besigheim',
      imgPath: '/img/besigheim-1-min.jpg'
    },
    {
      title: 'Bietigheim',
      imgPath: '/img/bietigheim.jpg'
    },
    {
      title: 'Gemmrigheim',
      imgPath: '/img/gemmrigheim.jpg'
    },
    {
      title: 'Hessigheim',
      imgPath: '/img/hessigheim.jpg'
    },
    {
      title: 'Ilsfeld',
      imgPath: '/img/ilsfeld.jpg'
    },
    {
      title: 'Ingersheim',
      imgPath: '/img/ingersheim.jpg'
    },
    {
      title: 'Liebenstein',
      imgPath: '/img/liebenstein.jpg'
    },
    {
      title: 'Löchgau',
      imgPath: '/img/loechgau.jpg'
    },
    {
      title: 'Walheim',
      imgPath: '/img/walheim.jpg'
    }
  ]);

  return { imageSliderItems };
};
