import React, { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import Moviecard from './Moviecard.jsx'


const API_URL = 'https://www.omdbapi.com/?apikey=ce1a5cab';


const App = () => {

    const[movies, Setmovies]=useState([]);
    const[searchTerm, SetsearchTerm]=useState('');

    const Searchmovies = async (title) =>{

        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        Setmovies(data.Search);

    }

    useEffect(()=>{

        Searchmovies(''); 


    },[])

    return(

        <div className='app'>
            <h1>MovieLand</h1>

            <div className='search'>
                <input 
                    value= {searchTerm}
                    onChange={(e) => SetsearchTerm(e.target.value)}
                    placeholder='Search for Movies'
                />

                <img
                 src={SearchIcon}
                 alt="search" 
                 onClick={()=> Searchmovies(searchTerm)}
                />
                
            </div>

            {
                movies?.length > 0 ?

                (
                    <div className="container">

                        {movies.map((movie)=>(

                            <Moviecard movie = {movie}/>

                        ))}

                        

                    </div>

                ) : (

                    <div className='empty'>
                        <h2> No movie found</h2>
                    </div>
                )



            }

            
        </div>
        
    );
}

export default App; 