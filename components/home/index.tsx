"use client";
import React from "react";
import dynamic from "next/dynamic";
import { Tarjeta } from "./tarjeta";
import { CardTransactions } from "./card-transactions";

const Chart = dynamic(
  () => import("../charts/steam").then((mod) => mod.Steam),
  {
    ssr: false,
  }
);

export const Index = () => (
  <div className="h-full lg:px-6">
    <div className="flex justify-center gap-4 xl:gap-6 pt-3 px-4 lg:px-0  flex-wrap xl:flex-nowrap sm:pt-10 max-w-[90rem] mx-auto w-full">
      <div className="mt-6 gap-6 flex flex-col w-full">

        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold">Tarjetas de crédito</h3>
          <div className="grid md:grid-cols-2 grid-cols-1 2xl:grid-cols-3 gap-5  justify-center w-full">
            <Tarjeta
              nombre="Visa Platinum"
              deuda="$45.000"
              limiteTotal="$1.200.000"
              limiteDisponible="$50.000"
              cierre="1/1/1900"
              vencimiento="1/1/1900"
            />
          </div>
        </div>


      </div>

      <div className="mt-4 gap-2 flex flex-col xl:max-w-md w-full">
        <h3 className="text-xl font-semibold">Historial</h3>
        <div className="flex flex-col justify-center gap-4 flex-wrap md:flex-nowrap md:flex-col">
          <CardTransactions />
        </div>
      </div>
    </div>
  </div>
);
