import { ref } from 'vue';

export const useImageSliderItems = () => {
  const imageSliderItems = ref<{ title: string; imgPath: string }[]>([
    {
      title: 'Abstatt',
      imgPath: '/img/abstatt.jpg'
    },
    {
      title: 'Besigheim',
      imgPath: '/img/logo.png'
    },
    {
      title: 'Bietigheim',
      imgPath: '/img/weinfaesser.jpg'
    },
    {
      title: 'Gemmrigheim',
      imgPath: '/img/abstatt.jpg'
    },
    {
      title: 'Hessigheim',
      imgPath: '/img/abstatt.jpg'
    },
    {
      title: 'Ilsfeld',
      imgPath: '/img/abstatt.jpg'
    },
    {
      title: 'Ingersheim',
      imgPath: '/img/abstatt.jpg'
    },
    {
      title: 'Liebenstein',
      imgPath: '/img/abstatt.jpg'
    },
    {
      title: 'Löchgau',
      imgPath: '/img/abstatt.jpg'
    },
    {
      title: 'Walheim',
      imgPath: '/img/abstatt.jpg'
    }
  ]);

  return { imageSliderItems };
};
