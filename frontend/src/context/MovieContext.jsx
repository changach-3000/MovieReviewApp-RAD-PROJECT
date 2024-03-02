import { createContext, useEffect, useState} from "react"
import { useNavigate } from "react-router"
import  Swal from "sweetalert2"
export const MovieContext= createContext()

export function MovieProvider({children}){
  const nav = useNavigate()
  const [movies , setMovies] = useState('')
  const [selectedMovies, setSelectedMovies] = useState([]);
  const [watchlist, setWatchlist] = useState()
  const [onChange,setonChange] = useState()

  const Addtowatchlist= (movie) => {
    setSelectedMovies([...selectedMovies, movie]);
    const newwatchlist = watchlist ? watchlist.filter((b) => b.id !== movie.id): [];
    setWatchlist([...newwatchlist, movie]);
  };

  const removefromwatchlist = (movie) => {
    const newSelectedMovies = selectedMovies.filter((f) => f.id !== movie.id);
    setSelectedMovies(newSelectedMovies);

    const newwatchlist = watchlist.filter((b) => b.id !== movie.id);
    setWatchlist(newwatchlist);
  };

  useEffect(()=>{
    fetch("/api/movies")
    .then(res => res.json())
    .then(data =>{
      setMovies(data)
    })
  },[])
    
  // Add Food 
const AddMovie= (backgroundImg, cardImg, description, subTitle, title, titleImg, type ) =>{
  fetch("/api/movies", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({backgroundImg, cardImg, description,  subTitle, title, titleImg, type })
  })
  .then((res)=>res.json())
  .then((response)=>{
      console.log(response)
      if(response.error)
      {
          Swal.fire(
              'Error',
              response.error,
              'error'
            )
      }
      else if(response.success)
      { 
          nav("/home")
          Swal.fire(
              'Success',
              response.success,
              'success'
            )
            setonChange(!onChange)
      }
      else{
          Swal.fire(
              'Error',
              "Something went wrong",
              'error'
            )
      }

  })
}

// Delete Food
const deleteMovie = (id) =>{
  fetch(`/api/movies/${id}`, {
   method: "DELETE",
          })
  .then((res)=>res.json())
  .then((response)=>{
        if(response.success)
        {
          nav("/home")
          Swal.fire(
              'Success',
              response.success,
              'success'
            )
            setonChange(!onChange)
        }
        else{
          Swal.fire(
              'Error',
              "Something went wrong",
              'error'
            )
      }
  })
}
  
    const contextData = {
      movies,
      selectedMovies,
      Addtowatchlist,
      removefromwatchlist,
      AddMovie,
      deleteMovie,
   
    }
  return (
    <div>
        <MovieContext.Provider value = {contextData} >
            {children}
        </MovieContext.Provider>
    </div>
  )
}