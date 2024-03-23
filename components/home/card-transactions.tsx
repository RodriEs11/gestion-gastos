import { Avatar, Card, CardBody } from "@nextui-org/react";
import React from "react";

const items = [
  {
    nombre: "Rodrigo Espindola",
    foto: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    monto: "$500.000",
    detalle: "TV Samsung",
    fechaCompra: "9/20/2021"   
  },
  {
    nombre: "Emanuel Puertas",
    foto: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    monto: "$500.000",
    detalle: "TV Samsung",
    fechaCompra: "9/20/2021"   
  },
  {
    nombre: "Milagros Luna",
    foto: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    monto: "$500.000",
    detalle: "TV Samsung",
    fechaCompra: "9/20/2021"   
  },
  {
    nombre: "Nicolas Otero",
    foto: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    monto: "$500.000",
    detalle: "TV Samsung",
    fechaCompra: "9/20/2021"   
  },
  
];

export const CardTransactions = () => {
  return (
    <Card className=" bg-default-50 rounded-xl shadow-md px-3">
      <CardBody className="py-5 gap-4">
        <div className="flex gap-2.5 justify-center">
          <div className="flex flex-col border-dashed border-2 border-divider py-2 px-6 rounded-xl">
            <span className="text-default-900 text-xl font-semibold">
              Últimas compras
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-6 ">

          {items.map((item) => (

            <div key={item.nombre} className="grid grid-cols-4 w-full gap-4">
             

              <span className="text-default-900 text-xs  font-semibold">
                {item.nombre}
              </span>
              <div>
                <span className="text-success text-xs">{item.monto}</span>
              </div>
              <div>
                <span className="text-default-500 text-xs">{item.detalle}</span>
              </div>
              <div>
                <span className="text-default-500 text-xs">{item.fechaCompra}</span>
              </div>
            </div>

          ))}


        </div>
      </CardBody>
    </Card>
  );
};
