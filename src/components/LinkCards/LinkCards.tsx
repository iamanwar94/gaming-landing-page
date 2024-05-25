import { useEffect, useState } from "react";
import discord from "../../assets/discord.png";
import store from "../../assets/store.png";
import voting from "../../assets/vote.png";
import blue from "../../assets/Diamond.png";
import green from "../../assets/Emerald.png";
import gold from "../../assets/Gold.png";
import white from "../../assets/Iron.png";
import red from "../../assets/Redstone.png";
import diamond from "../../assets/Diamond.png";
import obsidian from "../../assets/Obsidian.png";
import barrier from "../../assets/BarrierNew.webp";

import "./LinkCards.css"; // Create this CSS file if necessary
import { getServerStatus } from "../../api/api";

interface ImageCard {
  id: number;
  title: string;
  desc: string;
  image: string;
  link: string;
}

interface SliderLinks {
  id: number;
  title: string;
  image: string;
  link: string;
}

interface Status {
  status: boolean | string;
  players?: { online: number };
  hostname?: string;
}

const LinkCards = () => {
  const [isSliderOpen, setIsSliderOpen] = useState<boolean>(false);
  const [serverStatus, setServerStatus] = useState<Status>(null);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchServerStatus();
    }, 1000);

    const intervalId = setInterval(fetchServerStatus, 30000);

    return () => {
      clearTimeout(timer);
      clearInterval(intervalId);
    };
  }, []);

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(serverStatus.hostname)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((error) => console.error("Error copying text: ", error));
  };

  const fetchServerStatus = async () => {
    try {
      const status = await getServerStatus();
      console.log("loading => status", status);
      if (status) {
        setServerStatus(status);
      }
    } catch (error) {
      console.log("Error");
    }
  };

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
      link: "https://discord.gg/kekXKkjh",
    },
    {
      id: 2,
      title: "Store",
      desc: "Donate on our",
      image: store,
      link: "https://store.roguemc.org/",
    },
    {
      id: 3,
      title: "Voting",
      desc: "Support us by",
      image: voting,
      link: "",
    },
  ];

  const sliderLinks: SliderLinks[] = [
    {
      id: 1,
      title: "Minecraft Buzz",
      image: blue,
      link: "https://www.curseforge.com/servers/minecraft/game/roguemc-network",
    },
    {
      id: 2,
      title: "Minecraft MP",
      image: green,
      link: "https://minecraft-mp.com/server-s326555",
    },
    {
      id: 3,
      title: "Best MC Servers",
      image: gold,
      link: "https://best-minecraft-servers.co/server-roguemc-network.20997/vote",
    },
    {
      id: 4,
      title: "MC Servers",
      image: white,
      link: "https://servers-minecraft.net/server-roguemc-network.26123",
    },
    {
      id: 5,
      title: "MC Server List",
      image: red,
      link: "https://minecraft-server-list.com/server/500934/",
    },
    {
      id: 6,
      title: "MC Server List 2",
      image: obsidian,
      link: "https://minecraft-server-list.com/server/500934/",
    },
    {
      id: 7,
      title: "MC Server List 3",
      image: diamond,
      link: "https://minecraft-server-list.com/server/500934/",
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
      <div
        className="server-status-container"
        onClick={() => handleCopyClick()}
      >
        <div className="server-status">
          {!serverStatus ? (
            <>
              Server Status <br /> <div>{"Offline"}</div>
            </>
          ) : (
            <>
              Player(s) online <br /> <div>{serverStatus.players?.online}</div>
            </>
          )}
        </div>
      </div>
      {isCopied && <div className="copy-notification">IP Copied</div>}
      <div className={`slider ${isSliderOpen ? "open" : ""}`}>
        <span className="button" onClick={handleCloseSlider}>
          <img
            src={barrier}
            alt={"close"}
            className=""
            height={30}
            width={30}
          />
        </span>
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LinkCards;
