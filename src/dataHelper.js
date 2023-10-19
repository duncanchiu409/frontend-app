import story1 from "./assets/story1.png";
import story2 from "./assets/story2.png";
import gallery1 from "./assets/gallery1.png";
import gallery2 from "./assets/gallery2.png";

export const galleryData = [
  {
    id: 1,
    categoryName: "AJ's Adventure",
    stories: [
      {
        id: 11,
        content: "Nik’s rocky mountain adventure",
        title: "Chance Culhane",
        imgSrc: gallery1,
        date: "16 Jan 2023",
      },
      {
        id: 12,
        content: "Nik’s adventure to great wall!",
        title: "Chance Culhane",
        imgSrc: gallery2,
        date: "16 Jan 2023",
      },
    ],
  },
  {
    id: 2,
    categoryName: "Adi's Adventure",
    stories: [
      {
        id: 21,
        content: "Nik’s jazz adventure in new orland",
        title: "Chance Culhane",
        imgSrc: story1,
        date: "16 Jan 2023",
      },
      {
        id: 22,
        content: "Nik’s jazz adventure in new orland",
        title: "Chance Culhane",
        imgSrc: story2,
        date: "16 Jan 2023",
      },
    ],
  },
];
