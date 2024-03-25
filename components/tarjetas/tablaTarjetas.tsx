"use client";
import React from "react";
import { tarjetas, columnas } from "../../data_db/tarjetas";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  getKeyValue,
  Tooltip,
} from "@nextui-org/react";

import { MdEdit } from "react-icons/md";
import { IoMdEye } from "react-icons/io";

export const TablaTarjetas = () => {
  const renderCell = React.useCallback(
    (tarjeta: any, columnKey: string | number) => {
      const cellValue = tarjeta[columnKey];

      switch (columnKey) {
        case "acciones":
          return (
            <div className="relative flex items-center gap-2">
              <Tooltip content="Detalles">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <IoMdEye />
                </span>
              </Tooltip>
              <Tooltip content="Editar tarjeta">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <MdEdit />
                </span>
              </Tooltip>
            </div>
          );
        default:
          return cellValue;
      }
    },
    []
  );

  return (
    <div className="h-full lg:px-6">
      <div className="flex justify-center gap-4 xl:gap-6 pt-3 px-4 lg:px-0  flex-wrap xl:flex-nowrap sm:pt-10 max-w-[90rem] mx-auto w-full">
        <Table>
          <TableHeader columns={columnas}>
            {(columna) => (
              <TableColumn
                key={columna.uid}
                align={columna.uid === "acciones" ? "center" : "start"}
              >
                {columna.name}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={tarjetas}>
            {(item) => (
              <TableRow key={item.id}>
                {(columnKey) => (
                  <TableCell>{renderCell(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
