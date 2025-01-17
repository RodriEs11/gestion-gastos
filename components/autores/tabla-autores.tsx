import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import React from "react";
import { columns, autores } from "../../data_db/autores";
import {RenderCell} from "./render-cell";

export const TablaAutores = () => {

  return (
    <div className=" w-full flex flex-col gap-4">
      <Table aria-label="Example table with custom cells">

        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              hideHeader={column.uid === "actions"}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>

        <TableBody items={autores}>
          {(item) => (
            <TableRow>
              {(columnKey) => (
                <TableCell>
                  {RenderCell({ autor: item, columnKey: columnKey})}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>


      </Table>
    </div>


  );
};
