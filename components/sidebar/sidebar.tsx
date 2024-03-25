import React from "react";
import { Sidebar } from "./sidebar.styles";
import { Avatar, Link, Tooltip } from "@nextui-org/react";
import { CompaniesDropdown } from "./companies-dropdown";
import { SidebarItem } from "./sidebar-item";
import { SidebarMenu } from "./sidebar-menu";
import { useSidebarContext } from "../layout/layout-context";
import { usePathname } from "next/navigation";
import { IoHome, IoSettings, IoSettingsSharp } from "react-icons/io5";
import { FaDollarSign, FaUsers } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa6";
import { MdOutlineAddCard, MdOutlineDeveloperMode } from "react-icons/md";
import { GrView } from "react-icons/gr";
import { GoHistory } from "react-icons/go";

export const SidebarWrapper = () => {
  const pathname = usePathname();
  const { collapsed, setCollapsed } = useSidebarContext();

  return (
    <aside className="h-screen z-[202] sticky top-0">
      {collapsed ? (
        <div className={Sidebar.Overlay()} onClick={setCollapsed} />
      ) : null}
      <div
        className={Sidebar({
          collapsed: collapsed,
        })}
      >
        <div className={Sidebar.Header()}>
          <CompaniesDropdown />
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className={Sidebar.Body()}>
            <SidebarItem
              title="Inicio"
              icon={<IoHome />}
              isActive={pathname === "/"}
              href="/"
            />
            <SidebarMenu title="Menú principal">
              <SidebarItem
                isActive={pathname === "/autores"}
                title="Autores"
                icon={<FaUsers />}
                href="autores"
              />

              <SidebarItem
                isActive={pathname === "/tarjetas"}
                title="Tarjetas"
                icon={<FaRegCreditCard />}
                href="tarjetas"
              />
              <SidebarItem
                isActive={pathname === "/compras"}
                title="Compras"
                icon={<FaDollarSign />}
                href="compras"
              />
              <SidebarItem
                isActive={pathname === "/agregar-compras"}
                title="Agregar compras"
                icon={<MdOutlineAddCard />}
                href="agregar-compras"
              />
            </SidebarMenu>

            <SidebarMenu title="General">
              <SidebarItem
                isActive={pathname === "/developers"}
                title="Developers"
                icon={<MdOutlineDeveloperMode />}
              />
              <SidebarItem
                isActive={pathname === "/view"}
                title="View Test Data"
                icon={<GrView />}
              />
              <SidebarItem
                isActive={pathname === "/settings"}
                title="Settings"
                icon={<IoSettingsSharp  />}
              />
            </SidebarMenu>

            <SidebarMenu title="Updates">
              <SidebarItem
                isActive={pathname === "/changelog"}
                title="Changelog"
                icon={<GoHistory  />}
              />
            </SidebarMenu>
          </div>
          <div className={Sidebar.Footer()}>
            <Tooltip content={"Configuración"} color="primary">
              <div className="max-w-fit">
                <Link href={"configuracion"}>
                  <IoSettings  />
                </Link>
              </div>
            </Tooltip>

            <Tooltip content={"Perfil"} color="primary">
              <Link href={"perfil"}>
                <Avatar
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                  size="sm"
                />
              </Link>
            </Tooltip>
          </div>
        </div>
      </div>
    </aside>
  );
};
