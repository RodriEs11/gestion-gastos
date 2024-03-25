"use client";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/react";
import React, { useState } from "react";
import { IoLogoVercel } from "react-icons/io5";
import { RiLayoutBottom2Fill } from "react-icons/ri";

interface Company {
  name: string;
  location: string;
  logo: React.ReactNode;
}

export const CompaniesDropdown = () => {

  const [company, setCompany] = useState<Company>({
    name: "Compania",
    location: "Buenos Aires, Arg",
    logo: <IoLogoVercel />,
  });

  return (
    <Dropdown
      classNames={{
        base: "w-full min-w-[260px]",
      }}
    >
      <DropdownTrigger className="cursor-pointer">
        <div className="flex items-center gap-2">
          {company.logo}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-medium m-0 text-default-900 -mb-4 whitespace-nowrap">
              {company.name}
            </h3>
            <span className="text-xs font-medium text-default-500">
              {company.location}
            </span>
          </div>
          <RiLayoutBottom2Fill  />
        </div>
      </DropdownTrigger>

      <DropdownMenu
        onAction={(e) => {
          if (e === "1") {
            setCompany({
              name: "Compania",
              location: "Buenos Aires, Arg",
              logo: <IoLogoVercel />,
            });
          }
        
        }}
        aria-label="Avatar Actions"
      >
        <DropdownSection title="Companias">
          <DropdownItem
            key="1"
            startContent={<IoLogoVercel />}
            description="Buenos Aires, Arg"
            classNames={{
              base: "py-4",
              title: "text-base font-semibold",
            }}
          >
            Compania
          </DropdownItem>

        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};
