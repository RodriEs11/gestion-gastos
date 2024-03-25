import React from "react";
import { ComprasTabla } from "@/components/compras";

const Compras = () => {
  return (
    <div className="h-full lg:px-6">
      <div className="flex justify-center gap-4 xl:gap-6 pt-3 px-4 lg:px-0  flex-wrap xl:flex-nowrap sm:pt-10 max-w-[90rem] mx-auto w-full">
       <ComprasTabla/>
      </div>
    </div>
  );
};

export default Compras;
