import a1 from "../assets/button.png";
import a2 from "../assets/speaker.png";
import Image from "next/image";
import { useRouter } from "next/router";  

export default function header() {
  const router = useRouter();

  function handlepush() {
    router.push("/");
  }
  return (
    <div className="grid grid-cols-3 h-auto max-w-[screen] my-[10px] md:my-[30px] ">
      <div className="grid grid-cols-1 md:h-[100px] h-auto md:max-w-[100px] max-w-[50px] ">
        <Image src={a1} alt="buttons" className="" />
      </div>
      <div className="grid grid-cols-1 md:mt-[30px] mt-[5px] h-[30px] max-w-[1000px] ">
        <Image src={a2} alt="speakers" className="" />
      </div>
      <button
        className=" sticky shadow-xl bg-emerald-700 w-[15vw] ml-[14vw] md:mt-[30px] mt-[8px] h-[30px] max-w-[1000px] text-center mr-[4px] rounded-xl text-bold md:text-xl"
        onClick={handlepush}
      >
        Home
      </button>
    </div>
  );
}
