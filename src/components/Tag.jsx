import React, { useEffect, useState } from 'react'
import axios from 'axios'; 
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const API_KEY=process.env.REACT_APP_GIPHY_API_KEY

const Tag = () => {

  // const [gif, setGif] = useState('');
  // const [loading, setloading] = useState(false);
  const [Tag, setTag] = useState('');

  // function changeHandler(event){
  //   setTag(event.target.value)
  // }
  
  // async function fetchData(){
  //   setloading(true);
  //   const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${Tag}`;
  //   const {data}=await axios.get(url);
  //   const imageSource= data.data.images.downsized_large.url;
  //   setGif(imageSource);
  //   setloading(false);
  // }


  // useEffect( ()=>{
  //   fetchData();
  // },[])
  const{gif,loading,fetchData}=useGif();

  // function clickHandler(){
  //   fetchData();
    
  // }
  return (
    <div className='w-1/2 border-2 py-[10px] border-black bg-blue-400 mt-[40px] mb-[40px] flex flex-col justify-center items-center'>
      <h1 className='font-bold underline text-3xl'>A RANDOM {Tag} GIF</h1>
      {
        loading?<Spinner/>:<img src={gif} width={450} className='py-2'/>
      }

      <input
        type='text'
        onChange={(event)=>setTag(event.target.value)}
        value={Tag}
        className='w-10/12 rounded-md py-2 text-center my-[20px] font-bold'
      />
      
      <button onClick={()=>fetchData(Tag)}
      className='w-10/12 rounded-md py-2 bg-green-200 font-bold'>
        GENERATE
      </button>
    </div>
  )
}

export default Tag;