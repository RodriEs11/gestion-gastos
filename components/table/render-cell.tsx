import { User, Tooltip, Chip } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { EyeIcon } from "../icons/table/eye-icon";
import { autores } from "./data";

import { FaWallet } from "react-icons/fa";

interface Props {
  user: (typeof autores)[number];
  columnKey: string | React.Key;
}

export const RenderCell = ({ user, columnKey}: Props) => {
  // @ts-ignore

  const cellValue = user[columnKey];

  switch (columnKey) {
    case "nombre":
      return (
        <User
          avatarProps={{
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
          }}
          name={cellValue}
        ></User>
      );
    case "deuda":
      return (
        <div>
          <div>
            <span>{user.deuda}</span>
          </div>
        </div>
      );
    case "estado":
      return (
        <Chip
          size="sm"
          variant="flat"
          color={
            cellValue === "pagado"
              ? "success"
              : cellValue === "depositado"
              ? "warning"
              : "danger"
          }
        >
          <span className="capitalize text-xs">{cellValue}</span>
        </Chip>
      );

    case "acciones":
      return (
        <div className="flex items-center gap-4 ">
          <div>
            <Tooltip content="Ver gastos">
              <button onClick={() => console.log("Ver usuario", user)}>
                <EyeIcon size={20} fill="#979797" />
              </button>
            </Tooltip>
          </div>

          <div>
            <Tooltip content="Pagado" color="success">
              <button>
                <FaWallet size={20} fill="#3fd166" />
              </button>
            </Tooltip>
          </div>

          <div>
            <Tooltip content="Depositado" color="warning">
              <button>
                <FaWallet size={20} fill="#b8963b" />
              </button>
            </Tooltip>
          </div>

          <div>
            <Tooltip content="Deudor" color="danger">
              <button>
                <FaWallet size={20} fill="#9e1811" />
              </button>
            </Tooltip>
          </div>
        </div>
      );
    default:
      return cellValue;
  }
};
