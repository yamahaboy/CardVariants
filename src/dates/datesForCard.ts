import { CardProps } from "../models/CardProps";
import { CardSize } from "../models/CardSize";

export const datesForCards = (): CardProps[] => {
  return [
    {
      id: 1,
      title: "Exploring Nature",
      imgSrc: "image1.jpg",
      text: "This is a card dedicated to exploring the diverse nature of our world. Here, you will find information about animals, plants, and ecosystems.",
      variant: CardSize.Large,
    },
    {
      id: 2,
      title: "Urban Adventures",
      imgSrc: "image2.jpg",
      text: "Travel to different cities around the world with our collection of cards. Learn about local attractions and cultural peculiarities.",
      variant: CardSize.Medium,
    },
    {
      id: 3,
      title: "The Art of Culinary",
      imgSrc: "image3.jpg",
      text: "Discover the world of flavors and recipes. Our cards will help you prepare a variety of dishes from different cuisines around the world.",
      variant: CardSize.Small,
    },
    {
      id: 4,
      title: "Historical Wonders",
      imgSrc: "image4.jpg",
      text: "Explore the wonders of history from ancient civilizations to modern times. Learn about significant events, people, and places that shaped our world.",
      variant: CardSize.Large,
    },
    {
      id: 5,
      title: "Space Exploration",
      imgSrc: "image5.jpg",
      text: "Embark on a journey through the cosmos and discover the mysteries of space. Explore planets, stars, and the universe beyond.",
      variant: CardSize.Medium,
    },
    {
      id: 6,
      title: "Health and Wellness",
      imgSrc: "image6.jpg",
      text: "Take care of your body and mind with our wellness tips and advice. Learn about fitness, nutrition, and mental well-being.",
      variant: CardSize.Small,
    },
    {
      id: 7,
      title: "Travel Photography",
      imgSrc: "image7.jpg",
      text: "Capture the beauty of your travels through the lens. Get photography tips and inspiration to create stunning travel memories.",
      variant: CardSize.Large,
    },
    {
      id: 8,
      title: "Tech Innovations",
      imgSrc: "image8.jpg",
      text: "Stay up to date with the latest technological advancements. Explore the world of gadgets, software, and innovative solutions.",
      variant: CardSize.Medium,
    },
    {
      id: 9,
      title: "Ocean Exploration",
      imgSrc: "image9.jpg",
      text: "Dive into the depths of the ocean and discover its mesmerizing life forms and ecosystems. Learn about marine biology and conservation.",
      variant: CardSize.Small,
    },
    {
      id: 10,
      title: "Art and Creativity",
      imgSrc: "image10.jpg",
      text: "Unleash your creative side and explore the world of art and artistic expression. Get inspired by different forms of creative expression.",
      variant: CardSize.Large,
    },
  ];
};
