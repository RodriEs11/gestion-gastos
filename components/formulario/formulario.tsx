"use client";

import React, { useState } from "react";
import { autores, tarjetas } from "./data";
import { RiMenuAddFill } from "react-icons/ri";

import {
  Input,
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

interface Autor {
  id: number;
  nombre: string;
}

interface Tarjeta {
    id: number;
    nombre: string;
  }

  
const Formulario = () => {
  const [autor, setAutor] = useState<Autor | null>(null);
  const [descripcion, setDescripcion] = useState();
  const [detalleTarjeta, setDetalleTarjeta] = useState();
  const [tarjeta, setTarjeta] = useState<Autor | null>(null);
  const [montoTotal, setMontoTotal] = useState();
  const [cantidadCuotas, setCantidadCuotas] = useState();
  const [montoCuota, setMontoCuota] = useState();
  const [fechaCompra, setFechaCompra] = useState();

  const handleAutorSeleccion = (autor: Autor) => {
    setAutor(autor);
  };

  
  const handleTarjetaSeleccion = (tarjeta: Tarjeta) => {
    setTarjeta(tarjeta);
  };

  return (
    <form className="flex flex-col gap-4">
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered">

            {autor ? autor.nombre : "Seleccionar autor"}
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">

          {autores.map((autor) => (
            <DropdownItem
              key={autor.id}
              onClick={() => handleAutorSeleccion(autor)}
            >
              {autor.nombre}
            </DropdownItem>
          ))}

        </DropdownMenu>
      </Dropdown>

      <Input type="text" label="Compra" />
      <Input type="text" label="Detalle en tarjeta" />

      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered">
            {tarjeta ? tarjeta.nombre : "Seleccionar tarjeta"}
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">

          {tarjetas.map((tarjeta) => (
            <DropdownItem
              key={tarjeta.id}
              onClick={() => handleTarjetaSeleccion(tarjeta)}
            >
              {tarjeta.nombre}
            </DropdownItem>
          ))}

        </DropdownMenu>
      </Dropdown>
      
      <Input
          type="number"
          label="Monto total"
          min={1}
          placeholder="0.00"
          labelPlacement="outside"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">$</span>
            </div>
          }
        />

        <Input
          type="number"
          label="Cantidad de cuotas"
          min={1}
          placeholder="1"
          labelPlacement="outside"
        
        />

        <Input 
            type="date"
            label="Fecha de la compra"
            placeholder="Fecha de la compra"
            labelPlacement="outside"
        />

        <Button color="success" startContent={<RiMenuAddFill/>}>
            Agregar compra
        </Button>
    </form>
  );
};

export default Formulario;
