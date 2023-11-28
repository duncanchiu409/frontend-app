import story1 from "./assets/story1.png";
import story2 from "./assets/story2.png";
import gallery1 from "./assets/gallery1.png";
import gallery2 from "./assets/gallery2.png";

export const plansObj = {
  Starter: {
    id: "Starter",
    name: "Starter",
    noOfStories: 1,
    storiesText: "1 story",
    cost: "$5",
  },
  Dreamer: {
    id: "Dreamer",
    name: "Dreamer",
    noOfStories: 10,
    storiesText: "10 stories",
    cost: "$10",
  },
  Magician: {
    id: "Magician",
    name: "Magician",
    noOfStories: 30,
    storiesText: "30 stories",
    cost: "$15",
  },
  Free: {
    id: "Free",
    name: "Free",
    noOfStories: 1,
    storiesText: "1 story",
    cost: "$0",
  },
};

export const formatDate = (date) => {
  const date_ = new Date(date);
  const day = date_.getDate();
  const month = getMonth(date_.getMonth());
  const year = date_.getFullYear();
  return `${day} ${month} ${year}`;
};

const getMonth = (month) => {
  switch (month) {
    case 0:
      return "Jan";
    case 1:
      return "Feb";
    case 2:
      return "Mar";
    case 3:
      return "Apr";
    case 4:
      return "May";
    case 5:
      return "Jun";
    case 6:
      return "Jul";
    case 7:
      return "Aug";
    case 8:
      return "Sep";
    case 9:
      return "Oct";
    case 10:
      return "Nov";
    case 11:
      return "Dec";

    default:
      return "Jan";
  }
};

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
