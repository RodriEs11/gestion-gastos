"use client";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

import { BsThreeDots } from "react-icons/bs";
import { BiExport, BiInfoCircle, BiTrash  } from "react-icons/bi";
import { FaHouse, FaUsers  } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";

import { TablaAutores } from "@/components/autores/tabla-autores";
import { AddAutor } from "./add-autor";

export const Autores = () => {
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
          <FaUsers />
          <span>Autores</span>
          <span> / </span>{" "}
        </li>
        <li className="flex gap-2">
          <span>Lista</span>
        </li>
      </ul>

      <h3 className="text-xl font-semibold">Todos los autores</h3>
      <div className="flex justify-between flex-wrap gap-4 items-center">
        <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
          <Input
            classNames={{
              input: "w-full",
              mainWrapper: "w-full",
            }}
            placeholder="Buscar autor"
          />
          <IoSettingsSharp />
          <BiTrash />
          <BiInfoCircle />
          <BsThreeDots />
        </div>
        <div className="flex flex-row gap-3.5 flex-wrap">
          <AddAutor />
          <Button color="primary" startContent={<BiExport />}>
            Exportar a CSV
          </Button>
        </div>
      </div>
      <div className="max-w-[95rem] mx-auto w-full">
        <TablaAutores />
      </div>
    </div>
  );
};
