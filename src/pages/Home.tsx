import { useState, useEffect } from "react";
import { json, useLoaderData, useNavigation } from "react-router-dom";
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoTwitter } from "react-icons/bi";

import Header from "../components/Header";
import Movies from "../components/Movies";
import { useGlobalContext } from "../store/globalContext";

const Home = () => {
  const navigate = useNavigation()


  const data: any = useLoaderData();
  const [filteredData, setFilterData] = useState<any>([]);
  const { value } = useGlobalContext();

  useEffect(() => {
    console.log(value);
    if (!value) {
      setFilterData(data.splice(0, 10));
      return;
    }

    const newMovies = data.filter((item: any) =>
      item.title.toLowerCase().includes(value.toLowerCase().trim())
    );
    setFilterData(newMovies);
    console.log(newMovies);
  }, [value]);


  console.log(filteredData);
  return (
    <>
      <div className="bg-hero-gb bg-center bg-no-repeat bg-cover">
        <div className="px-[25px] md:px-[50px] lg:px-[95px] pt-[15px] pb-[70px] md:pb-[157px]">
          <Header />
        </div>
      </div>
      <section
        className={`${
          filteredData.length === 0 && value !== ""
            ? "flex items-center justify-center h-[5rem]"
            : ""
        } px-[25px] md:px-[50px] lg:px-[95px] pt-[15px]`}
      >
        {navigate.state === 'loading' ? (
          <p>Loading...</p>
        ) : filteredData.length === 0 && value !== "" ? (
          <p className="font-bold text-[24px]">No Movie Found</p>
        ) : (
          <Movies data={filteredData} />
        )}
      </section>
      <footer className="flex flex-col items-center justify-center gap-[36px] my-[70px] md:mt-[170px] px-[25px] md:px-[50px] lg:px-[95px]">
        <div className="flex items-center gap-[48px] text-[24px]">
          <FaFacebookSquare />
          <AiOutlineInstagram />
          <BiLogoTwitter />
          <FaYoutube />
        </div>
        <div className="font-bold text-[18px] text-[#111827] flex gap-[48px] items-center">
          <p>Conditions of Use</p>
          <p>Privacy & Policy</p>
          <p>Press Room</p>
        </div>
        <p className="font-medium text-[18px] text-[#6B7280] text-center">
          © {new Date().getFullYear()} MovieBox by Ayoola Abdulmojeed
        </p>
      </footer>
    </>
  );
};

export const loader = async () => {

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`,
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
    return data.results;
  }
};

export default Home;
