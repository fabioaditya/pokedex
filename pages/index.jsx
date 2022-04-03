import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Carousel from "../components/Carousel.jsx";

export default function Index() {
  return (
    <div>
      <div className="flex w-screen h-screen lg:h-[900px] bg-red-700 ">
        <div className="grid grid-cols-1 my-[10px] lg:mx-[100px] mx-[35px] w-screen h-[50px]">
          <div>component header, bulet2 </div>
          <div className="bg-white h-auto max-w-[screen] ">
            <Carousel />
          </div>

          <button className="bg-green-500 px-[100px] w-75 rounded-full ">
            test
          </button>
          <button className="bg-black text-white w-[100px] rounded-full ">
            test
          </button>
        </div>
      </div>
    </div>
  );
}
