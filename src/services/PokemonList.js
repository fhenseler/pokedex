import React from 'react';
import Card from '../components/Card';

export default function PokemonList({ pokemon }) {
  return (
    <Card
      p = { pokemon.id }
    />
  )
}
