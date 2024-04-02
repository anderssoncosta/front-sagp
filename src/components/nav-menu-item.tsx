import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Icon from "@/assets/icon";

import logo from "../assets/logo_sagp.png";

interface navProps {
  name: string;
  href: string;
  icon: string;
  subnav?: SubNavProps[];
}

interface SubNavProps {
  submenu: string;
  href: string;
}

const nav: navProps[] = [
  {
    name: "Pacientes",
    href: "/pacientes",
    icon: "User",
    subnav: [
      {
        submenu: "Lista dos Pacientes",
        href: "/pacientes/lista-paciente",
      },
      {
        submenu: "Cadastrar Paciente",
        href: "/pacientes/cadastrar-paciente",
      },
    ],
  },
  {
    name: "Agenda",
    href: "/agenda",
    icon: "Calendar",
    subnav: [
      {
        submenu: "Lista de agendamento",
        href: "agenda/lista-de-agendamentos",
      },
      {
        submenu: "Agendar consulta",
        href: "/agenda/agendar-paciente",
      },
    ],
  },
  {
    name: "Financeiro",
    href: "/financeiro",
    icon: "CreditCard",
    subnav: [
      {
        submenu: "Cadastrar entrada",
        href: "/financeiro",
      },
      {
        submenu: "Cadastrar saída",
        href: "/financeiro",
      },
      {
        submenu: "Dashboard financeiro",
        href: "/financeiro",
      },
    ],
  },
  {
    name: "Cadastro Base",
    href: "/cadastro-base",
    icon: "Box",
    subnav: [
      {
        submenu: "Cadastrar Formulário de atendimento",
        href: "/cadastro-base/tipo-de-ficha",
      },
      {
        submenu: "Cadastrar Profissional",
        href: "/cadastro-base/profissional",
      },
    ],
  },
  {
    name: "Opções",
    href: "/opcoes",
    icon: "Settings2",
    subnav: [
      {
        submenu: "Perfil",
        href: "/opcoes",
      },
      {
        submenu: "usuários",
        href: "/opcoes",
      },
    ],
  },
];

const NavMenuItem = () => {
  return (
    <div className="p-4 mt-4">
      <div className="flex justify-center items-center">
        <div>
          <img src={logo} width={100} alt="Logo" />
        </div>
      </div>

      <div>
        <Button className="w-full mt-4 justify-start">
          <Link to="/" className="flex items-center gap-2">
            <Icon name="Home" size={22} />
            Início
          </Link>
        </Button>
        {nav.map((item, index) => (
          <Button className="w-full mt-4 justify-start">
            <DropdownMenu key={index}>
              <DropdownMenuTrigger className="w-full">
                <Link to={item.href} className="flex items-center gap-2 w-full">
                  <Icon name={item.icon} size={22} />
                  <span>{item.name}</span>
                </Link>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-1 w-full">
                {item.subnav &&
                  item.subnav.map((subItem, subIndex) => (
                    <DropdownMenuItem key={subIndex}>
                      <Link to={subItem.href}>{subItem.submenu}</Link>
                    </DropdownMenuItem>
                  ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </Button>
        ))}
      </div>
    </div>
  );
};
export default NavMenuItem;
