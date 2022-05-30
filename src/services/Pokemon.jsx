import React, { useState, useEffect } from 'react';
import PokemonList from './PokemonList';
import Pagination from '../Pagination';
import axios from 'axios';
import Card from '../components/Card';


const Pokemon = ({ input }) => {
  const [pokemon, setPokemon] = useState([]);
  const [result, setResult] = useState([]);
  // const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon/?limit=10')
  // const [nextPageUrl, setNextPageUrl] = useState('https://pokeapi.co/api/v2/pokemon')
  // const [prevPageUrl, setPrevPageUrl] = useState('https://pokeapi.co/api/v2/pokemon')
  const [loading, setLoading] = useState(true)
  const arr = [];
  const mapObj = {
    'SPECIAL-ATTACK': 'SP.ATK.',
    'SPECIAL-DEFENSE': 'SP.DEF.',
    'SPEED': 'SPD',
    'ATTACK': 'ATK',
    'DEFENSE': 'DEF'
  };


  // useEffect(() => {
  //   setLoading(true)
  //   let cancel
  //   axios.get(currentPageUrl, {
  //     cancelToken: new axios.CancelToken(c => cancel = c)
  //   }).then(res => {
  //     setLoading(false)
  //     console.log(currentPageUrl)
  //     setNextPageUrl(res.data.next)
  //     setPrevPageUrl(res.data.previous)
  //     setResult(res.data.results.map(p => p.name))
  //     setPokemon(res.data.results.map(p => p.name))
  //   })
  //    return () => cancel()
  // }, [currentPageUrl])

    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
        // console.log(pokemon)
      }, 1000);
      fetch('https://pokeapi.co/api/v2/pokemon/?limit=150')
          .then((response) => response.json())
          .then((data) => setResult(
            data.results.map((item) => {
              fetch(item.url)
                .then((response) => response.json())
                .then((allpokemon) => arr.push(allpokemon));
                setPokemon(arr);
            }),
          ));
      }, []);



  // function goToNextPage() {
  //   setCurrentPageUrl(nextPageUrl)
  // }

  // function goToPrevPage() {
  //   setCurrentPageUrl(prevPageUrl)
  // }


  // return (
  //   <>
  //   <PokemonList pokemon={pokemon} />
  //   <Pagination 
  //     goToNextPage={nextPageUrl ? goToNextPage : null}
  //     goToPrevPage={prevPageUrl ? goToPrevPage : null}
  //   />
  //   </>
  // );
  //}

  return (
    <>
        { loading ? (
          <p className='dark:text-white'>Loading...</p>
        ) : (

        //   const filteredData = arr.filter((el) => {
        //     //if no input the return the original
        //     if (input === '') {
        //       console.log(el);
        //         return el;
        //     }
        //     //return the item which contains the user input
        //     else {
        //       console.log(el);
        //         return el.name.toLowerCase().includes(input)
        //     }
        // })


          pokemon.sort((a, b) => a.id - b.id).filter((el) => {
            //if no input the return the original
            if (input === '') {
              console.log(el);
                return el;
            }
            //return the item which contains the user input
            else {
                return el.name.toLowerCase().includes(input)
            }
          }).map((img) => (
            <div key={img.id}>
              <Card
                img = { img.sprites.front_default }
                type = { img.types[0].type.name }
                name = { img.name }
                id = { img.id }
                stats =  { img.stats.map((p) =>
                  <div className='mt-3 mb-3 h-4 w-full bg-gray-700 text-black font-bold font-custom items-center'>
                     <div className={`h-full font-black text-xs text-center p-0.5 leading-none text-clip overflow-hidden
                     ${p.base_stat < 30 ? 'bg-purple-100' : 
                      p.base_stat < 50 ? 'bg-purple-300' :
                      p.base_stat < 70 ? 'bg-purple-500' :
                      p.base_stat < 90 ? 'bg-purple-700' :
                      p.base_stat < 120 ? 'bg-amber-500' : 
                      'bg-black'}`} style={{ width: `${p.base_stat}%`}}>  
                       { p.base_stat > 100 ? p.base_stat = 100 : p.base_stat + ' ' }
                       { p.stat.name.toUpperCase().replace(/\b(?:SPECIAL-ATTACK|SPECIAL-DEFENSE|DEFENSE|ATTACK|SPEED)\b/gi, matched => mapObj[matched])}
                     </div> 
                 </div> 
                )} 
              />
            </div>
          ))
        )}
    </>
  );
}


export default Pokemon;