import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Card,
  CardBody,
  CardHeader,
  CardProvider,
} from "@nextui-org/react";
import { MdModeEdit } from "react-icons/md";
import { TbBuildingCommunity } from "react-icons/tb";
import React, { useState } from "react";

interface ModalProps {
  size: string;
  isOpen: boolean;
  onClose: () => void;
}

export const TarjetaResumen = (props: any) => {
  const nombre = props.nombre;
  const deuda = props.deuda;
  const limiteTotal = props.limiteTotal;
  const limiteDisponible = props.limiteDisponible;
  const cierre = props.cierre;
  const vencimiento = props.vencimiento;

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={true}
        isKeyboardDismissDisabled={true}
        placement="center"
        backdrop="blur"
        scrollBehavior="outside"
        size="md"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Visa Platinum
              </ModalHeader>

              <ModalBody>
                <Card>
                  <CardHeader>Saldo actual</CardHeader>
                  <CardBody>$520.000</CardBody>
                </Card>

                <Card>
                  <CardHeader>Credito disponible</CardHeader>
                  <CardBody>$60.000</CardBody>
                </Card>

                <Card>
                  <CardHeader>Credito total</CardHeader>
                  <CardBody>$1.200.000</CardBody>
                </Card>

                <Card>
                  <CardHeader>Cierre Actual</CardHeader>
                  <CardBody>1/1/1000</CardBody>
                </Card>

                <Card>
                  <CardHeader>Vencimiento actual</CardHeader>

                  <CardBody>1/1/1000</CardBody>
                </Card>

                <Card>
                  <CardHeader>Cierre siguiente</CardHeader>

                  <CardBody>1/1/1000</CardBody>
                </Card>

                <Card>
                  <CardHeader>Vencimiento siguiente</CardHeader>

                  <CardBody>1/1/1000</CardBody>
                </Card>
              </ModalBody>

              <ModalFooter className="flex justify-between">
                <div className="flex-initial">
                  <Button startContent={<MdModeEdit />}></Button>
                </div>

                <div className="flex flex-initial">
                  <div className="ml-auto">
                    <Button color="danger" variant="light" onPress={onClose}>
                      Cerrar
                    </Button>
                  </div>
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <Card className="xl:max-w-sm bg-primary rounded-xl shadow-md px-3 w-full">
        <CardBody className="py-5">
          <div className="flex gap-2.5">
            <TbBuildingCommunity />
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

          <Button variant="bordered" onPress={onOpen}>
            Ver detalles
          </Button>
        </CardBody>
      </Card>
    </>
  );
};
