import { LazyLoadImage } from "react-lazy-load-image-component";
import { json, useLoaderData, useNavigation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Star from "../assets/icons/Star.svg";
import ExpandArrow from "../assets/icons/Expand Arrow.svg";
import { useState } from "react";

import TwoTicket from "../assets/icons/Two Tickets.svg";
import Play from "../assets/icons/Play (1).svg";
import List from "../assets/icons/List.svg";
import Menu from "../assets/icons/Menu alt 4.svg";
import MoreWatchPoster from "../assets/images/Rectangle 37.png";
import Button from "../components/Button";

const MovieDetails = () => {
    const navigate = useNavigation()


  const data: any = useLoaderData();
  const [isActive, setIsActive] = useState<boolean>(false);
  const releaseDate = new Date(data.release_date).toUTCString();

  // function formatRuntime(minutes: number) {
  //   const hours = Math.floor(minutes / 60);
  //   const remainingMinutes = minutes % 60;

  //   if (hours > 0) {
  //     if (remainingMinutes > 0) {
  //       return `${hours}h ${remainingMinutes}m`;
  //     } else {
  //       return `${hours}h`;
  //     }
  //   } else {
  //     return `${minutes}m`;
  //   }
  // }

  if(navigate.state === 'loading') {
    return <p>Loading...</p>
  }

  return (
    <div className="lg:grid grid-cols-5 gap-[37px]">
      <Sidebar isActive={isActive} setIsActive={setIsActive} />
      <button
        onClick={() => setIsActive((prev: boolean) => !prev)}
        className="w-[36px] h-[36px] flex justify-center items-center rounded-full bg-[#BE123C] cursor-pointer fixed top-[5%] left-[5%] lg:hidden z-20"
      >
        <LazyLoadImage src={Menu} alt="menu" />
      </button>

      <div className="col-span-3 lg:col-span-4 my-[38px] mx-[1rem] lg:mr-[51px]">
        <div className="relative">
            <div className="text-center middle">
                <div className="bg-[#E8E8E833] rounded-full w-[110px] h-[110px] flex items-center justify-center mb-[9px]">
                    <LazyLoadImage src={Play} alt="play" />
                </div>
                <h2 className="font-medium text-[25px] text-[#E8E8E8]">Watch Trailer</h2>
            </div>
          <LazyLoadImage
            src={`https://www.themoviedb.org/t/p/original${data.backdrop_path}`}
            alt={data.title}
            className="w-[100%]  rounded-[20px]"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-[21px] md:gap-[21px] my-[31px]">
          <div className="col-span-2 grid gap-[20px]">
            <div className="font-bold text-[23px] text-[#404040] md:flex flex-wrap gap-2 items-center">
              <p>
                <span data-testid="movie-title">{data.title}</span> •{" "}
                <span data-testid="movie-release-date">{releaseDate}</span> •
                PG-13 •{" "}
                <span data-testid="movie-runtime">
                  {data.runtime}
                </span><span>m</span>
              </p>              
              {data.genres?.map((data: {id: number, name: string})=>(<button key={data.id} className="font-medium text-[15px] text-[#B91C1C] py-2 px-3 rounded-[15px] border border-[#F8E7EB] ml-[11px]">
                {data.name}
              </button>))}
            </div>
            <p
              className="font-normal text-[20px] text-[#333]"
              data-testid="movie-overview"
            >
              {data.overview}
            </p>
            <div className="font-normal text-[20px] text-[#333]">
              <p>
                Director :
                {data?.production_companies.map((data: any) => (
                  <span className="text-[#BE123C]"> {data.name}</span>
                ))}
              </p>
              <p>
                Writers : <span className="text-[#BE123C]">Joseph Kosinski</span>
              </p>
              <p>
                Stars : <span className="text-[#BE123C]">Joseph Kosinski</span>
              </p>
            </div>
            <div className="flex rounded-[10px] border border-[#C7C7C7]">
              <Button
                variant="contained"
                label="Top rated movie #65"
                type="button"
              />
              <div className="hidden md:block">
                <input
                  type="text"
                  placeholder="Awards 9 nominations"
                  className="bg-transparent border-none outline-none font-medium text-[20px] text-[#333] ml-[24px]"
                />
              </div>
              <div className="ml-auto mr-[26px] flex items-center">
                <LazyLoadImage
                  src={ExpandArrow}
                  alt="arrow"
                  className="w-[30px] h-[30px]"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="grid gap-[24px]">
              <div className="flex items-center md:justify-end">
                <LazyLoadImage src={Star} alt="rating" />
                <h2 className="text-[#666] font-medium text-[25px]">
                  <span className="text-[#E8E8E8]">8.5 </span>| 350k
                </h2>
              </div>
              <div>
                <Button
                  variant="contained"
                  label={
                    <>
                      <LazyLoadImage src={TwoTicket} alt="two ticket" />
                      <span>See Showtimes</span>
                    </>
                  }
                  type="button"
                  customClassName="w-[100%] mb-[12px]"
                />
                <Button
                  variant="outlined"
                  label={
                    <>
                      <LazyLoadImage src={List} alt="list" />
                      <span>More Watch Options</span>
                    </>
                  }
                  type="button"
                  customClassName="w-[100%]"
                />
              </div>
              <div className="relative overflow-hidden">
                <LazyLoadImage src={MoreWatchPoster} alt="more watch" />
                <div className="bg-[#12121280] rounded-[10px] flex items-center justify-center absolute bottom-0 left-0 right-0 text-white h-[42px] font-medium text-[14px] gap-[12px]">
                  <LazyLoadImage src={List} alt="list" />
                  <p>The Best Movies and Shows in September</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export const loader = async ({ params }: any) => {


  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NWExY2YyZDU4OGFkZWQ4M2E1ZTRkYjcyNTAyMzBhOCIsInN1YiI6IjY1MDFhYzk3ZmZjOWRlMGVkZjYxNWU0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s7IS3219YRwYIKvXPZ6vm_ZUfw1lcxc7fz3mdVStDlc`,
      },
    }
  );

  if (!res.ok) {
    throw json({ message: "There was an error" }, { status: 400 });
  } else {
    const data = await res.json();
    return data;
  }
};

export default MovieDetails;
