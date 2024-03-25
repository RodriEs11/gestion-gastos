"use client";
import React from "react";

import { compras } from "../../data_db/compras";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  getKeyValue,
} from "@nextui-org/react";

export const ComprasTabla = () => {
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 16;

  const pages = Math.ceil(compras.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return compras.slice(start, end);
  }, [page, compras]);

  return (
    <Table
      aria-label="Example table with client side pagination"
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            color="secondary"
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      }
      classNames={{
        wrapper: "min-h-[222px]",
      }}
    >
      <TableHeader>
        <TableColumn key="autor">Autor</TableColumn>
        <TableColumn key="descripcion">Descripción</TableColumn>
        <TableColumn key="tarjeta">Tarjeta</TableColumn>
        <TableColumn key="detalleTarjeta">Detalle en resumen</TableColumn>
        <TableColumn key="montoTotal">Monto total</TableColumn>
        <TableColumn key="fechaCompra">Fecha de compra</TableColumn>
        <TableColumn key="cantidadCuotas">Cuotas</TableColumn>
        <TableColumn key="montoCuota">Monto de la cuota</TableColumn>
        <TableColumn key="cuotasRestantes">Cuotas restantes</TableColumn>
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <TableRow key={item?.autor}>
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
