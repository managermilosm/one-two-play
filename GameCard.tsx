import React from "react";
import { Props, Game } from "@/types";
import { platform } from "os";
import {
  FaBeer,
  FaPlaystation,
  FaWindows,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo, SiNintendoswitch } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import PlatformIconList from "./PlatformIconList";

import RatingSquare from "./RatingSquare";
import RatingSquare from "./RatingSquare";
import RatingSquare from "./RatingSquare";
import RatingSquare from "./RatingSquare";


const GameCard = ({ game }: Props) => {
  return (
    <div className="bg-heroimageprpl h-[450px] xl:h-[300px] card-component overflow-hidden rounded-[10px]">
      <img
        className="h-2/3 w-100 md:object-cover xl:object-fill "
        src={game.background_image}
        draggable={false}
      ></img>

      <div className="card-body p-[8px] relative">
        <h2 className="game-name-text">{game.name}</h2>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
        <RatingSquare score={game.metacritic} />
      </div>
    </div>
  );
};

export default GameCard;
