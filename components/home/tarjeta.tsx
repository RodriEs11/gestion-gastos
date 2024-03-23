import { Card, CardBody } from "@nextui-org/react";
import React from "react";
import { Community } from "../icons/community";
import { Button } from "@nextui-org/react";


export const Tarjeta = (props: any) => {

  const nombre = props.nombre;
  const deuda = props.deuda;
  const limiteTotal = props.limiteTotal;
  const limiteDisponible = props.limiteDisponible;
  const cierre = props.cierre;
  const vencimiento = props.vencimiento;

  return (
    <Card className="xl:max-w-sm bg-primary rounded-xl shadow-md px-3 w-full">
      <CardBody className="py-5">
        <div className="flex gap-2.5">
          <Community />
          <div className="flex flex-col">
            <span className="text-white">{nombre}</span>
          </div>
        </div>

        <div className="flex gap-2.5 py-2 items-center">
          <span className="text-white text-xl font-semibold">{deuda}</span>
        </div>

        <div className="flex items-center gap-6 my-3">
          <div>
            <div>
              <span className="text-white ">Limite total</span>
            </div>
            <span className=" text-white">{limiteTotal}</span>
          </div>

          <div>
            <div>
              <span className="text-white ">Disponible</span>
            </div>
            <span className=" text-white">{limiteDisponible}</span>
          </div>
         
        </div>

        <div className="flex items-center gap-6 my-3">
          <div>
            <div>
              <span className="text-white ">Cierre</span>
            </div>
            <span className=" text-white">{cierre}</span>
          </div>

          <div>
            <div>
              <span className="text-white ">Vencimiento</span>
            </div>
            <span className=" text-white">{vencimiento}</span>
          </div>
         
        </div>

        <Button variant="bordered">
          Ver detalles
        </Button>
        
      </CardBody>
    </Card>
  );
};
