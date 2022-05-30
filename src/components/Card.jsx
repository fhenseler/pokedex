import React from "react";
import './Card.css';

const Card = ({ img, type, name, id, stats }) => {
  return (
          <div className="flip ml-5">
          <div className="flip-content">
          <div className={`${
          // type === 'water' ? 'bg-blue-700' :
          // type === 'ice' ? 'bg-blue-300' :
          // type === 'fire' ? 'bg-red-700' :
          // type === 'bug' ? 'bg-green-700' :
          // type === 'grass' ? 'bg-green-600' :
          // type === 'poison' ? 'bg-pink-500' :
          // type === 'ground' ? 'bg-yellow-800' :
          // type === 'rock' ? 'bg-yellow-900' :
          // type === 'fighting' ? 'bg-yellow-700' :
          // type === 'fairy' ? 'bg-pink-300' :
          // type === 'normal' ? 'bg-white' :
          // type === 'dragon' ? 'bg-white' :
          // type === 'electric' ? 'bg-yellow-400' :
          // type === 'psychic' ? 'bg-violet-700' :
          // type === 'ghost' ? 'bg-violet-800' :
          // 'bg-black'
          type === 'water' ? 'bg-water-pattern' :
          type === 'ice' ? 'bg-water-pattern' :
          type === 'fire' ? 'bg-fire-pattern' :
          type === 'bug' ? 'bg-bug-pattern' :
          type === 'grass' ? 'bg-grass-pattern' :
          type === 'poison' ? 'bg-poison-pattern' :
          type === 'ground' ? 'bg-ground-pattern' :
          type === 'rock' ? 'bg-rock-pattern' :
          type === 'fighting' ? 'bg-fighting-pattern' :
          type === 'fairy' ? 'bg-fairy-pattern' :
          type === 'normal' ? 'bg-normal-pattern' :
          type === 'dragon' ? 'bg-dragon-pattern' :
          type === 'electric' ? 'bg-electric-pattern' :
          type === 'psychic' ? 'bg-psychic-pattern' :
          type === 'ghost' ? 'bg-psychic-pattern' :
          'bg-black'
        } 

        h-44 rounded-xl w-full lg:w-80 p-8 pt-9 border-solid border-2 border-slate-500 dark:border-solid dark:border-2 dark:rounded-xl
        max-w-sm shadow-lg relative bg-no-repeat bg-cover bg-center
        flip-front`}>
              <h1 className="font-semibold text-black font-custom"> { id } </h1>
              <h1 className="font-black text-black text-xl font-custom"> { 
                name[0].toUpperCase() + name.slice(1) 
              } 
              </h1>
              <span className={`${
              type === 'water' ? 'bg-blue-600' :
              type === 'ice' ? 'bg-blue-500' :
              type === 'fire' ? 'bg-red-600' :
              type === 'bug' ? 'bg-green-900' :
              type === 'grass' ? 'bg-green-600' :
              type === 'poison' ? 'bg-purple-900' :
              type === 'ground' ? 'bg-yellow-800' :
              type === 'rock' ? 'bg-yellow-900' :
              type === 'fighting' ? 'bg-orange-700' :
              type === 'fairy' ? 'bg-pink-400' :
              type === 'normal' ? 'bg-slate-500' :
              type === 'dragon' ? 'bg-purple-500' :
              type === 'electric' ? 'bg-amber-500' :
              type === 'psychic' ? 'bg-violet-700' :
              type === 'ghost' ? 'bg-violet-900' :
             'bg-black'} 
             font-custom text-xs text-white font-medium mr-2 px-2.5 py-0.5 rounded absolute bottom-8 left-8`}> 
              { type.toUpperCase() } 
              </span>
              <img className="float-right object-contain" src={img} alt={name}></img>
          </div>
          <div className={`${
            type === 'water' ? 'bg-water-pattern' :
            type === 'ice' ? 'bg-water-pattern' :
            type === 'fire' ? 'bg-fire-pattern' :
            type === 'bug' ? 'bg-bug-pattern' :
            type === 'grass' ? 'bg-grass-pattern' :
            type === 'poison' ? 'bg-poison-pattern' :
            type === 'ground' ? 'bg-ground-pattern' :
            type === 'rock' ? 'bg-rock-pattern' :
            type === 'fighting' ? 'bg-fighting-pattern' :
            type === 'fairy' ? 'bg-fairy-pattern' :
            type === 'normal' ? 'bg-normal-pattern' :
            type === 'dragon' ? 'bg-dragon-pattern' :
            type === 'electric' ? 'bg-electric-pattern' :
            type === 'psychic' ? 'bg-psychic-pattern' :
            type === 'ghost' ? 'bg-psychic-pattern' :
             'bg-black'} 
             flip-back rounded-lg bg-no-repeat bg-cover bg-center`}>

              <h1 className="font-black text-black text-center font-custom">
                {name.toUpperCase()}'S STATS
              </h1>
              <div>
                {stats}
              </div>
          </div>
          </div>
          </div>

  );
};

export default Card;