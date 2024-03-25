"use client";

import React, { useState } from "react";
import { autores} from "../../data_db/autores";
import { tarjetas } from "../../data_db/tarjetas";
import { RiMenuAddFill, RiDeleteBack2Line } from "react-icons/ri";

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

const FormularioCompras = () => {
  const [autor, setAutor] = useState<Autor | null>(null);
  const [descripcionCompra, setDescripcionCompra] = useState<string>("");
  const [detalleTarjeta, setDetalleTarjeta] = useState<string>("");
  const [tarjeta, setTarjeta] = useState<Tarjeta | null>(null);
  const [montoTotal, setMontoTotal] = useState<number>(0);
  const [cantidadCuotas, setCantidadCuotas] = useState<number>(0);
  const [montoCuota, setMontoCuota] = useState<number>(0);
  const [fechaCompra, setFechaCompra] = useState<Date>();


  const [errores, setErrores] = useState<{ [key: string]: string }>({});
  const erroresValidacion: { [key: string]: string } = {};
  
  const handleAutorSeleccion = (autor: Autor) => {
    setAutor(autor);
  };

  const handleTarjetaSeleccion = (tarjeta: Tarjeta) => {
    setTarjeta(tarjeta);
  };


  const handleInputForm = (e: React.ChangeEvent<HTMLInputElement>) => {

    switch (e.target.id) {
      case "compra":
        setDescripcionCompra(e.target.value);

        break;

      case "detalle-tarjeta":
        setDetalleTarjeta(e.target.value);
        break;

      case "monto-total":
        setMontoTotal(parseInt(e.target.value));
        break;

      case "cantidad-cuotas":
        setCantidadCuotas(parseInt(e.target.value));

        break;

      case "fecha-compra":
        setFechaCompra(new Date(e.target.value));
        break;

      default:
        break;
    }

  };

  const validarFormulario = () => {
 
    // Validar campos requeridos

    if (!autor) {
      erroresValidacion["autor"] = "Debe seleccionar un autor.";
    }
    if (!descripcionCompra) {
      erroresValidacion["descripcionCompra"] =
        "La descripción de la compra es requerida.";
    }
    if (!tarjeta) {
      erroresValidacion["tarjeta"] = "Debe seleccionar una tarjeta.";
    }
    if (!montoTotal) {
      erroresValidacion["montoTotal"] = "El monto total es requerido.";
    }
    if (!cantidadCuotas) {
      erroresValidacion["cantidadCuotas"] =
        "La cantidad de cuotas es requerida.";
    }
    if (!fechaCompra) {
      erroresValidacion["fechaCompra"] = "La fecha de la compra es requerida.";
    }

    setErrores(erroresValidacion);

    if (Object.keys(erroresValidacion).length === 0) {
      return true;
    } else {
      return false;
    }
  };

  const submitForm = () => {
    if (!validarFormulario()) {
      console.log("hay error en el formulario");
      return;
    }

    const datos = {
      autor: autor,
      descripcionCompra: descripcionCompra,
      detalleTarjeta: detalleTarjeta,
      tarjeta: tarjeta,
      montoTotal: montoTotal,
      cantidadCuotas: cantidadCuotas,
      fechaCompra: fechaCompra,
    };

  };
  return (
    <form className="flex flex-col gap-4 container max-w-[30rem]">
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

      {/* Mensaje de validación */}
      {errores["autor"] && <p className="text-danger text-tiny">{errores["autor"]}</p>}

      <Input
        type="text"
        label="Compra"
        isRequired={true}
        id="compra"
        isInvalid={false}
        color={errores["descripcionCompra"] ? "danger" : "default"}
        errorMessage={errores["descripcionCompra"]}
        onChange={handleInputForm}
        
      />
      <Input
        type="text"
        label="Detalle en tarjeta"
        id="detalle-tarjeta"
        onChange={handleInputForm}
      />

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

      {/* Mensaje de validación */}
      {errores["tarjeta"] && <p className="text-danger text-tiny">{errores["tarjeta"]}</p>}

      <Input
        id="monto-total"
        type="number"
        label="Monto total"
        isRequired={true}
        min={1}
        placeholder="0.00"
        labelPlacement="outside"
        startContent={
          <div className="pointer-events-none flex items-center">
            <span className="text-default-400 text-small">$</span>
          </div>
        }
        color={errores["montoTotal"] ? "danger" : "default"}
        errorMessage={errores["montoTotal"]}
        onChange={handleInputForm}
      />

      <Input
        id="cantidad-cuotas"
        type="number"
        isRequired={true}
        label="Cantidad de cuotas"
        min={1}
        placeholder="1"
        labelPlacement="outside"
        color={errores["cantidadCuotas"] ? "danger" : "default"}
        errorMessage={errores["cantidadCuotas"]}
        onChange={handleInputForm}
      />

      <Input
        id="fecha-compra"
        type="date"
        label="Fecha de la compra"
        isRequired={true}
        placeholder="Fecha de la compra"
        labelPlacement="outside"
        color={errores["fechaCompra"] ? "danger" : "default"}
        errorMessage={errores["fechaCompra"]}
        onChange={handleInputForm}
      />

      <div className="grid grid-cols-2 gap-4">
        <Button
          color="success"
          startContent={<RiMenuAddFill />}
          onClick={submitForm}
        >
          Agregar compra
        </Button>
        <Button color="default" startContent={<RiDeleteBack2Line />}>
          Restablecer
        </Button>
      </div>
    </form>
  );
};

export default FormularioCompras;
