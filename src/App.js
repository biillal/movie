import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import MovieList from "./components/MovieList";
import NavBar from "./components/NavBar";
import axios from "axios";
import MovieDetails from "./components/MovieDetails";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { getAllMovie } from "./redux/action/MovieAction";

function App() {
  const [Movies,setMovies]=useState([])
  const [pageCount,setPageCount]=useState('')

  const dispatch=useDispatch();

  //get all movie
  const getallmovie= async()=>{
     const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar-US")
     setMovies(res.data.results)
     setPageCount(res.data.total_pages)
  }

  useEffect(()=>{
    getallmovie();
    dispatch(getAllMovie());
  },[])
  //search movie
  const Search=async(word)=>{
    if(word === ""){
      getallmovie()
    }else{
      const res=await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${word}&language=en-US&page=1&include_adult=false`)
      setMovies(res.data.results)
      setPageCount(res.data.total_pages)
    }
  }

  //get page 
  const getpage= async(page)=>{
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar-US&page=${page}`)
    setMovies(res.data.results)
    setPageCount(res.data.total_pages)
 }
  return (
    
    <div className="font color-body ">
      <NavBar Search={Search} />
      <Container>    
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MovieList Movies={Movies} getpage={getpage}  pageCount={pageCount} />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
