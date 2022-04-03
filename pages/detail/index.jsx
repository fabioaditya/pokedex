import { useRouter } from "next/router";
import Header from "../../components/header.jsx";

export default function detail() {
  return (
    <div>
      <div className="flex w-screen h-screen lg:h-[1100px] bg-red-700 ">
        <div className="grid grid-cols-1 my-[10px] lg:mx-[100px] mx-[35px] w-screen h-[50px]">
          <div>
            <Header />
          </div>
        </div>
      </div>
    </div>
  );
}
