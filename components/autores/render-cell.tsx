import { User, Tooltip, Chip } from "@nextui-org/react";
import { autores } from "../../data_db/autores";
import { FaWallet, FaEye  } from "react-icons/fa";

interface Props {
  autor: (typeof autores)[number];
  columnKey: string | React.Key;
}

export const RenderCell = ({ autor, columnKey}: Props) => {
  // @ts-ignore

  const cellValue = autor[columnKey];

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
            <span>{autor.deuda}</span>
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
              <button onClick={() => console.log("Ver autor", autor)}>
                <FaEye size={20} fill="#979797" />
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
