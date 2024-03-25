"use client";

import Link from "next/link";
import React from "react";

import { BsThreeDots } from "react-icons/bs";
import { BiInfoCircle, BiTrash } from "react-icons/bi";
import { FaHouse } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { TablaTarjetas } from "./tablaTarjetas";
import { Input } from "@nextui-org/react";

export const Tarjetas = () => {
  return (
    <div className="my-14 lg:px-6 max-w-[95rem] mx-auto w-full flex flex-col gap-4">
      <ul className="flex">
        <li className="flex gap-2">
          <FaHouse />
          <Link href={"/"}>
            <span>Inicio</span>
          </Link>
          <span> / </span>{" "}
        </li>

        <li className="flex gap-2">
          <span>Tarjetas</span>
          <span> / </span>{" "}
        </li>
        <li className="flex gap-2">
          <span>Lista</span>
        </li>
      </ul>

      <h3 className="text-xl font-semibold">Todas las tarjetas</h3>
      <div className="flex justify-between flex-wrap gap-4 items-center">
        <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
          <Input
            classNames={{
              input: "w-full",
              mainWrapper: "w-full",
            }}
            placeholder="Buscar tarjeta"
          />
          <IoSettingsSharp />
          <BiTrash />
          <BiInfoCircle />
          <BsThreeDots />
        </div>
        <div className="flex flex-row gap-3.5 flex-wrap"></div>
      </div>
      <div className="max-w-[95rem] mx-auto w-full">
        <TablaTarjetas></TablaTarjetas>
      </div>
    </div>
  );
};
