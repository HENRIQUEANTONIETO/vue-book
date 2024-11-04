<template>
  <Book title="My Book" :places="places" />
</template>

<script lang="ts" setup>
import Place from "@/classes/Place";
const places = ref<Place[]>([
  {
    title: "Place 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic soluta, excepturi vel deleniti cupiditate rerum quae sequi maxime voluptas. Eaque, officiis! Quo, ullam? Reiciendis asperiores voluptatum dolorem architecto, reprehenderit libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic soluta, excepturi vel deleniti cupiditate rerum quae sequi maxime voluptas. Eaque, officiis! Quo, ullam? Reiciendis asperiores voluptatum dolorem architecto, reprehenderit libero.",
    urlImage: "https://picsum.photos/600/300?random=1",
  },
  {
    title: "Place 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic soluta, excepturi vel deleniti cupiditate rerum quae sequi maxime voluptas. Eaque, officiis! Quo, ullam? Reiciendis asperiores voluptatum dolorem architecto, reprehenderit libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic soluta, excepturi vel deleniti cupiditate rerum quae sequi maxime voluptas. Eaque, officiis! Quo, ullam? Reiciendis asperiores voluptatum dolorem architecto, reprehenderit libero.",
    urlImage: "https://picsum.photos/600/300?random=2",
  },
  {
    title: "Place 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic soluta, excepturi vel deleniti cupiditate rerum quae sequi maxime voluptas. Eaque, officiis! Quo, ullam? Reiciendis asperiores voluptatum dolorem architecto, reprehenderit libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic soluta, excepturi vel deleniti cupiditate rerum quae sequi maxime voluptas. Eaque, officiis! Quo, ullam? Reiciendis asperiores voluptatum dolorem architecto, reprehenderit libero.",
    urlImage: "https://picsum.photos/600/300?random=3",
  },
  {
    title: "Place 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic soluta, excepturi vel deleniti cupiditate rerum quae sequi maxime voluptas. Eaque, officiis! Quo, ullam? Reiciendis asperiores voluptatum dolorem architecto, reprehenderit libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic soluta, excepturi vel deleniti cupiditate rerum quae sequi maxime voluptas. Eaque, officiis! Quo, ullam? Reiciendis asperiores voluptatum dolorem architecto, reprehenderit libero.",
    urlImage: "https://picsum.photos/600/300?random=4",
  },
  {
    title: "Place 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic soluta, excepturi vel deleniti cupiditate rerum quae sequi maxime voluptas. Eaque, officiis! Quo, ullam? Reiciendis asperiores voluptatum dolorem architecto, reprehenderit libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic soluta, excepturi vel deleniti cupiditate rerum quae sequi maxime voluptas. Eaque, officiis! Quo, ullam? Reiciendis asperiores voluptatum dolorem architecto, reprehenderit libero.",
    urlImage: "https://picsum.photos/600/300?random=5",
  },
  {
    title: "Place 6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic soluta, excepturi vel deleniti cupiditate rerum quae sequi maxime voluptas. Eaque, officiis! Quo, ullam? Reiciendis asperiores voluptatum dolorem architecto, reprehenderit libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic soluta, excepturi vel deleniti cupiditate rerum quae sequi maxime voluptas. Eaque, officiis! Quo, ullam? Reiciendis asperiores voluptatum dolorem architecto, reprehenderit libero.",
    urlImage: "https://picsum.photos/600/300?random=6",
  },
]);
onMounted(() => {});
</script>
