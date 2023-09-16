import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import IMDB from "../assets/images/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png";
import tomato from "../assets/icons/PngItem_1381056 1.svg";
import Heart from "../assets/icons/Heart.svg";

interface MovieItemProps {
  image: string;
  title: string;
  date: string;
  id: number;
  vote_average: number;
}

const MovieItem: React.FC<MovieItemProps> = ({
  image,
  title,
  date,
  id,
  vote_average,
}) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  useEffect(() => {
    const id = setTimeout(() => {
      setIsFavorite(false);
    }, 2000);

    return () => clearTimeout(id);
  }, [isFavorite]);

  return (
    <Link to={`/${id}`} className="grid gap-[12px]" data-testid="movie-card">
      {isFavorite && (
        <p className="fixed top-[5%] right-[10%] bg-[#00000067] text-bold font-bold text-white p-5 rounded-[5px]">
          Added To favourite successfully
        </p>
      )}
      <div className="relative">
        <div className="absolute flex top-0 left-0 right-0 items-center justify-between mx-[5px] md:mx-[16px] mt-[16px]">
          <p className="uppercase bg-[#F3F4F6] py-[8px] px-[3px] rounded-[100vh] font-bold text-[12px] text-[#111827]">
            Tv series
          </p>
          <div
            className="p-[5px] bg-[#F3F4F6] rounded-full"
            onClick={(e) => {
              e.preventDefault();
              setIsFavorite(true);
            }}
          >
            <LazyLoadImage src={Heart} alt="favourite" />
          </div>
        </div>
        <LazyLoadImage
          src={`https://www.themoviedb.org/t/p/original${image}`}
          alt={title}
          className="w-full"
          data-testid="movie-poster"
        />
      </div>
      <h3
        className="font-bold text-[12px] text-[#9CA3AF]"
        data-testid="movie-release-date"
      >
        {date}
      </h3>
      <p
        className="text-[#111827] font-bold text-[18px]"
        data-testid="movie-title"
      >
        {title}
      </p>
      <div className="flex gap-[34px] items-center text-[#111827]">
        <div className="flex items-center gap-[10px]">
          <LazyLoadImage src={IMDB} alt="imdb" width={35} height={17} />
          <p className="text-[12px] leading-[12px] font-normal">860/100</p>
        </div>
        <div className="flex items-center gap-[10px]">
          <LazyLoadImage src={tomato} alt="rate" width={16} height={17} />
          <p className="text-[12px] leading-[12px] font-normal">
            {vote_average}%
          </p>
        </div>
      </div>
      <p className="font-bold text-[12px] text-[#9CA3AF]">Action</p>
    </Link>
  );
};

export default MovieItem;
