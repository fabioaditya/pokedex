import { useRouter } from "next/router";
import Header from "../../components/header.jsx";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function detail() {
  const router = useRouter();
  let pokemonName = "charmander";
  let { id } = router.query;
  const [pokemon, setPokemon] = useState({
    name: "",
    species: "",
    img: "",
    abilities: "",
    hp: "",
    attack: "",
    defense: "",
    type: "",
  });

  const searchPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        console.log(response);
        setPokemon({
          name: pokemonName,
          species: response.data.species.name,
          img: response.data.sprites.other.dream_world.front_default,
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defense: response.data.stats[2].base_stat,
          type: response.data.types[0].type.name,
          abilities: response.data.abilities[0].ability.name,
        });
      });
  };

  console.log(pokemon);

  useEffect(() => {
    searchPokemon();
  }, []);

  return (
    <div>
      <div className="flex w-screen h-screen lg:h-[1200px] bg-red-700 ">
        <div className="grid grid-cols-1 my-[10px] ml-[10vw] mr-[10vw] w-screen h-[50px]">
          <div>
            <Header />
          </div>
          <div className="bg-white h-[500px] md:h-[600px] w-[80vw] justify-center rounded-md">
            <h1 className="justify-center text-center text-3xl uppercase mt-[5vh] lg:mt-[8vh] mb-[2vh] lg:mb-[5vh]">
              {pokemon.name}
            </h1>
            <img
              className="ml-[25vw] lg:ml-[35vw] justify-center text-center"
              src={pokemon.img}
            />
            <h3 className="justify-center text-center text-2xl my-[1vh] lg:my-[2vh]">
              Type: {pokemon.type}
            </h3>
            <h3 className="justify-center text-center text-2xl my-[1vh] lg:my-[2vh]">
              Abilities: {pokemon.abilities}
            </h3>
            <h4 className="justify-center text-center text-xl my-[1vh] lg:my-[2vh] ">
              HP : {pokemon.hp}
            </h4>
            <h4 className="justify-center text-center text-xl my-[1vh] lg:my-[2vh]">
              Atk : {pokemon.attack}
            </h4>
            <h4 className="justify-center text-center text-xl my-[1vh] lg:my-[2vh]">
              Def : {pokemon.defense}
            </h4>
          </div>
          <button className="text-center md:mt-[40px] mt-[20px] bg-green-500 px-[100px] h-[50px] lg:h-[90px] w-[80vw] rounded-full md:text-4xl text-lg shadow-2xl hover:shadow-inner hover:bg-white">
            Catch
          </button>
        </div>
      </div>
    </div>
  );
}
