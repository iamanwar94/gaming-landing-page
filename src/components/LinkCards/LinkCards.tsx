import { useState } from "react";
import { SlClose } from "react-icons/sl";
import discord from "../../assets/discord.png";
import store from "../../assets/store.png";
import voting from "../../assets/vote.png";
import "./LinkCards.css"; // Create this CSS file if necessary

interface ImageCard {
  id: number;
  title: string;
  desc: string;
  image: string;
  link: string;
}

const LinkCards = () => {
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  const handleCardClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    image: ImageCard
  ) => {
    e.stopPropagation();
    if (image.link) {
      window.open(image.link, "_blank");
    } else {
      setIsSliderOpen(true);
    }
  };

  const handleCloseSlider = () => {
    setIsSliderOpen(false);
  };

  const images: ImageCard[] = [
    {
      id: 1,
      title: "Discord",
      desc: "Chat on our",
      image: discord,
      link: "https://discord.com/invite/ePdJr3nra7",
    },
    {
      id: 2,
      title: "Store",
      desc: "Donate on our",
      image: store,
      link: "https://store.skylyfe.net/",
    },
    {
      id: 3,
      title: "Voting",
      desc: "Support us by",
      image: voting,
      link: "",
    },
    {
      id: 4,
      title: "Wiki",
      desc: "Learn more on our",
      image: discord,
      link: "https://info.skylyfe.net/",
    },
  ];

  const sliderLinks: ImageCard[] = [
    {
      id: 1,
      title: "Discord",
      desc: "Chat on our",
      image: discord,
      link: "https://discord.com/invite/ePdJr3nra7",
    },
    {
      id: 2,
      title: "Store",
      desc: "Donate on our",
      image: store,
      link: "https://store.skylyfe.net/",
    },
    {
      id: 3,
      title: "Voting",
      desc: "Support us by",
      image: voting,
      link: "",
    },
    {
      id: 4,
      title: "Wiki",
      desc: "Learn more on our",
      image: discord,
      link: "https://info.skylyfe.net/",
    },
  ];

  return (
    <div className="link-cards-container">
      <div className="cards-container">
        {images.map((image) => (
          <div
            key={image.id}
            className="card"
            onClick={(e) => handleCardClick(e, image)}
          >
            <img
              src={image.image}
              alt={image.title}
              className="card-image"
              height={200}
              width={200}
            />
          </div>
        ))}
      </div>
      <div className={`slider ${isSliderOpen ? "open" : ""}`}>
        <button onClick={handleCloseSlider}>
          <SlClose />
        </button>
        <div className="slider-links">
          {sliderLinks.map((link) => (
            <div
              key={link.id}
              className="slider-link"
              onClick={() => window.open(link.link, "_blank")}
            >
              <img
                src={link.image}
                alt={link.title}
                className="slider-link-image"
              />
              <div className="slider-link-content">
                <h3>{link.title}</h3>
                <p>{link.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LinkCards;
