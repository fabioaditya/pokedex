import Carousel from "../components/Carousel.jsx";
import { useRouter } from "next/router";
import Header from "../components/header.jsx";
export default function Index() {
  const router = useRouter();

  function listpokemon() {
    router.push("/pokemon-list");
  }

  return (
    <div>
      <div className="flex w-screen h-screen lg:h-[1000px] bg-red-700 ">
        <div className="grid grid-cols-1 my-[10px] lg:mx-[100px] mx-[35px] w-screen h-[50px]">
          <div>
            <Header />
          </div>

          <div className="grid grid-cols-1 h-auto max-w-[screen] ">
            <Carousel />
          </div>

          <button
            className="mt-[40px] bg-green-500 px-[100px] h-[30px] lg:-h-[60px] w-75 rounded-full md:text-xl shadow-2xl hover:shadow-inner hover:bg-white"
            onClick={listpokemon}
          >
            Pokemon List
          </button>
          <button className="my-[20px] bg-black text-white px-[100px] h-[30px]  lg:-h-[60px] w-75 rounded-full md:text-xl shadow-2xl hover:shadow-inner hover:bg-white hover:text-black">
            My Pokemon
          </button>
        </div>
      </div>
    </div>
  );
}
