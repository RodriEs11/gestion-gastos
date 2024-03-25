"use client";

import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import React, { FormEvent, useState } from "react";

import axios from "axios";

interface Autor {
  nombre: string;
  apellido: string;
}

export const AddAutor = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  
  const [autor, setAutor] = useState<Autor>({
    nombre: "",
    apellido: "",
  });

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    let nombre = autor.nombre;
    let apellido = autor.apellido;

    switch (event.target.id) {
      case "nombre":
        nombre = event.target.value;
        break;
      case "apellido":
        apellido = event.target.value;
        break;
    }

    setAutor({
      nombre: nombre,
      apellido: apellido,
    });
  };

  
  const enviarFormulario = async (event: any) => {
    event.preventDefault();

    try {
      console.log("enviando...", autor);
      const response = await axios.post("https://httpbin.org/post", autor);
      console.log("Respuesta del servidor:", response.data);
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }

    console.log("enviado");
  };

  return (
    <div>
      <>
        <Button onPress={onOpen} color="primary">
          Agregar autor
        </Button>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement="top-center"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Agregar autor
                </ModalHeader>
                <ModalBody>
                  <Input
                    label="Nombre"
                    variant="bordered"
                    onChange={handleInput}
                    id="nombre"
                  />
                  <Input
                    label="Apellido"
                    variant="bordered"
                    onChange={handleInput}
                    id="apellido"

                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onClick={onClose}>
                    Cerrar
                  </Button>
                  <Button color="primary" onClick={enviarFormulario}>
                    Agregar autor
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    </div>
  );
};
