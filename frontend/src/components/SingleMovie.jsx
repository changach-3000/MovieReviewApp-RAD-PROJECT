// import React,{useState,useEffect} from 'react'
// import { useParams,useNavigate} from "react-router-dom";
// import Rate from './Rate';

// function SingleMovie({AddtoWatchlist}) {
//     const [singlemovie,setSingleMovie] =useState(" ");

//     const nav = useNavigate()
//     const {id} = useParams()
//     useEffect(()=>{
//       fetch(`https://movies-csku.onrender.com/movies/${id}`)
//       .then(res=>res.json())
//       .then(singlemovie=>{
//         setSingleMovie(singlemovie)     
//       })
//     },)
//     const goBack = () => {
//       nav(-1);}
    
//   return (
//     <div className='single-movie' >
//         {
//           <div key={singlemovie.id}>
//             <img src='https://img.icons8.com/ultraviolet/40/null/circled-left.png' onClick={goBack} className='back-icon'/>
//             <img src={singlemovie.backgroundImg} className='img-fluid ' alt='loading...' />
//             <div className='bg-details'> 
//             <h5 className='centered-title'> {singlemovie.title}</h5>
//             {/* style the bot details */}
//             <p className='description'>{singlemovie.description}</p>
//             <p style={{fontSize:'13px'}} className='desc2'> {singlemovie.subTitle}</p>
//             <div className="buttons">
//             <button className="btn">WATCH NOW</button>
//             <button className="btn">WATCH TRAILER</button>
//             <img src='https://img.icons8.com/ios/50/000000/add--v1.png' height="50px" width="50px" onClick={() => AddtoWatchlist(singlemovie)} alt="add"/>
//             </div>
//              <Rate />
//           </div>
//           </div>
//           }
//    </div>
//   )
// }

// export default SingleMovie;

import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { MovieContext } from '../context/MovieContext'
import Rate from './Rate'

function SingleMovie() {
  const nav = useNavigate()
  const { id } = useParams()
  const [movie, setMovie] = useState()
  const { AddtoWatchlist} =
    useContext(MovieContext);


  useEffect(() => {
    fetch(`/api/movies/${id}`)
      .then((res) => res.json())
      .then((movie) => {
        setMovie(movie)
       
      })
  }, [])
  const goBack = () => {
          nav(-1);}
  return (
    <div className="m-5">
        { movie ? (
     <div key={movie.id}>
                  <img src='https://img.icons8.com/ultraviolet/40/null/circled-left.png' onClick={goBack} className='back-icon'/>
                  <img src={movie.backgroundImg} className='img-fluid ' alt='loading...' />
                  <div className='bg-details'> 
                  <h5 className='centered-title'> {movie.title}</h5>
                 {/* style the bot details */}
                  <p className='description'>{movie.description}</p>
                  <p style={{fontSize:'13px'}} className='desc2'> {movie.subTitle}</p>
                  <div className="buttons">
                  <button className="btn">WATCH NOW</button>
                 <button className="btn">WATCH TRAILER</button>
                  <img src='https://img.icons8.com/ios/50/000000/add--v1.png' height="50px" width="50px" onClick={() => AddtoWatchlist(movie)} alt="add"/>
                  </div>
                <Rate/>
               </div>
              
               </div>

) : (
  <p>No reviews available.</p>
)}
                
    </div>
  )
}

export default SingleMovie