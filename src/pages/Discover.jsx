import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';
import {useGetTopChartsQuery} from '../redux/services/shazamCore'
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';

const Discover = () => {
     const genreTitle='pop'

     const dispatch = useDispatch();
     const { genreListId } = useSelector((state) => state.player);

     const {data,isFetching, Error}=useGetTopChartsQuery()
    
     
     if(isFetching) return <Loader title='Loading songs..'/>
     if (Error) return <Error/>
    return(
   

        <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">Discover {genreTitle}</h2>

        <select
          
          
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >
          {genres.map((genre) => <option key={genre.value} value={genre.value}>{genre.title}</option>)}
        </select>
      </div>
      <div className='flex flex-wrap gap-8 justify-center sm;justify-start'>
         {data?.map((song,i, activeSong, isPlaying)=>(
            <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
                     />
         ))},
      </div>,
      </div>
    )
}
export default Discover;
