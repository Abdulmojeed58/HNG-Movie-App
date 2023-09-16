import {Link} from 'react-router-dom';
import { MdKeyboardArrowRight } from "react-icons/md";

import MovieItem from './MovieItem';


const Movies = ({data}: any) => {
    return (
        <div className='mt-[44px] md:mt-[70px]'>
            <div className='flex justify-between items-center'>
                <h1 className='font-bold text-[20px] md:text-[36px] text-black'>Featured Movies</h1>
                <Link to='/' className='font-normal text-[18px] leading-[24px] text-[#BE123C] flex items-center gap-[8px]'>View All <MdKeyboardArrowRight /></Link>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-[30px] lg:gap-[80px] mt-[44px]'>
                {
                    data.map((item: any, index: number)=>{
                        return (
                        <MovieItem key={index} image={item.poster_path} title={item.title} date={new Date(item.release_date).toUTCString()} id={item.id} vote_average={item.vote_average * 10} />

                    )})
                }
            </div>
        </div>
    );
};

export default Movies;
