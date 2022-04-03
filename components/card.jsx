import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Card = ({ id, image, name, type, _callback }) => {
  const [total, setTotal] = useState("0");
  const router = useRouter();

  function handleClick() {
    router.push(`/detail/${name}`);
  }
  return (
    <div
      className="bg-white rounded-xl mx-[3px] my-[3px] md:mx-[6px] md:my-[6px] lg:mx-[9px] lg:my-[9px] shadow-lg hover:bg-slate-300"
      onClick={handleClick}
    >
      <div className="number text-sm mt-[5px] text-center">#0{id}</div>
      <img
        src={image}
        className="object-center mx-[2px] md:mx-[6px] lg:mx-[10px] w-[100px] h-[100px]"
      />
      <div className="detail-wrapper text-sm pb-3 text-center">
        <h3 className="uppercase">{name}</h3>
        <h3 className="mt-[3px] lg:mt-[10px]">Owned: {total}</h3>
      </div>
    </div>
  );
};

export default Card;
