"use client";
import { Card, CardBody } from "@nextui-org/react";
import React from "react";
import { TarjetaCardBody } from "./tarjetaCardBody";


export const Tarjetas = () => {

    return (
    <div className="h-full lg:px-6">
      <div className="flex justify-center gap-4 xl:gap-6 pt-3 px-4 lg:px-0  flex-wrap xl:flex-nowrap sm:pt-10 max-w-[90rem] mx-auto w-full">
        <Card>

        <TarjetaCardBody></TarjetaCardBody>


        </Card>
      </div>
    </div>
  );
};
