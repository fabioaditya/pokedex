import Header from "../components/header.jsx";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function pokemonlist() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
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
    List();
  }, []);

  return (
    <div>
      <div className="flex w-screen h-screen lg:h-[1000px] bg-red-700 ">
        <div className="grid grid-cols-1 my-[10px] lg:mx-[100px] mx-[35px] w-screen h-[50px]">
          <div>
            <Header />
          </div>
        </div>
      </div>
    </div>
  );
}
