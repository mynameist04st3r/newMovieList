// import { useState } from 'react'
import './App.css'

function App() {
  const movies = [
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'}
  ];

  return (
    <>
      <div className='movies-container-app'>
        <h1>Movies</h1>
        <ul>
          <div className='movies-list-container-app'>
            {movies.map((movie) => (
              <li key={movie.title}>{movie.title}</li>
            ))}
          </div>
        </ul>
      </div>
    </>
  )
}

export default App
