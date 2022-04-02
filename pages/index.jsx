import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Index() {
  return (
    <div>
      <div className="flex w-screen h-screen bg-red-600 ">
        <div className="grid grid-cols-1 my-[10px] mx-[10px] px-5 w-screen h-[50px]">
          <div>component header, bulet2 </div>
          <div className="bg-white h-[500px] ">
            test diisi sambutan, welcome, carousel
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
