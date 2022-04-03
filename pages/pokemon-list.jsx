import React, { useEffect, useState } from "react";
import Header from "../components/header.jsx";
import Card from "../components/card.jsx";

export default function pokemonlist() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=151"
  );

  const List = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    function createPokemonObject(results) {
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setAllPokemons((currentList) => [...currentList, data]);
        await allPokemons.sort((a, b) => a.id - b.id);
      });
    }
    createPokemonObject(data.results);
  };

  useEffect(() => {
    window.localStorage.clear();
    List();
  }, []);

  return (
    <div>
      <div className="flex w-screen h-screen lg:h-[1000px] bg-red-700 overflow-y-scroll ">
        <div className="grid grid-cols-1 my-[10px] lg:mx-[40px] mx-[15px] w-screen h-[50px]">
          <div>
            <Header />
          </div>
          <div className=" bg-blue-300 rounded-xl mx-[15vw] text-xl uppercase text-center mb-[10px] md:mb-[30px] lg:mb-[50px] md:text-4xl lg:text-6xl text-bold">
            Pokemon List
          </div>
          <div></div>
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 ">
            {allPokemons.map((pokemonStats, index) => (
              <Card
                key={index}
                id={pokemonStats.id}
                image={pokemonStats.sprites.other.dream_world.front_default}
                name={pokemonStats.name}
                type={pokemonStats.types[0].type.name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
