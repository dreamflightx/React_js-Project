import React, { useState } from 'react'

function App() {
    const [games,setGames] = useState([

        {id:1, name:"Volleyball", players:"10M"},
        {id:2, name:"Basketball", players:"2M"},
        {id:3, name:"Football", players:"50M"},
    ])

  return (
    <div>
    <h1 className='text-3xl  '>  THis in index page</h1>

    <h1 className="text-5xl font-bold text-center">Popular Games</h1>

    {games.map(
        (game) =>{
            return(
                <div key={game.id} className="bg-indigo-400 rounded-xl text-white m-4 p-4">
                    <h2 className="text-2xl font-bold">{game.name}</h2>
                    <p className="text-lg">{game.players} players</p>
                    </div>
            )
        }
    )}



    </div>
  )
}

export default App


// function App(){
//     return (<div>

//         This is App INDEX PAGE
//     </div>)
// }

// export default App