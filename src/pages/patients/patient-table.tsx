/* eslint-disable @typescript-eslint/no-explicit-any */
import Icon from "@/assets/icon";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PatientApi, getPatients } from "@/services/patientes";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PAGE_SIZE = 10;

const PatientTable = () => {
  const [patients, setPatient] = useState<PatientApi[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchPatients = async () => {
    const response = await getPatients();
    setPatient(response);
  };

  useEffect(() => {
    fetchPatients();
  }, [currentPage]);

  // Função para retornar os pacientes correspondentes à página atual
  const getCurrentPagePatients = () => {
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    return patients.slice(startIndex, endIndex);
  };

  // Função para calcular o número total de páginas
  const getTotalPages = () => {
    return Math.ceil(patients.length / PAGE_SIZE);
  };

  // Função para navegar para a próxima página
  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, getTotalPages()));
  };

  // Função para navegar para a página anterior
  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div>
      {patients.length === 0 ? (
        <Card className="flex justify-center items-center flex-col p-5">
          <CardTitle className="text-center">
            Ops, ainda não temos pacientes cadastrados !
          </CardTitle>
          <CardContent className="flex items-center p-3">
            <p>Deseja cadastrar paciente ? </p>
            <Button variant="link">
              <Link to="/pacientes/cadastrar-paciente">Clique aqui</Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <>
          <Table>
            <TableHeader>
              <TableRow className="">
                <TableHead className="flex justify-center items-center">
                  Ações
                </TableHead>
                <TableHead>ID</TableHead>
                <TableHead>Nome</TableHead>
                <TableHead>Data de Cadastro</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {getCurrentPagePatients().map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="flex justify-center items-center gap-1">
                    <Button
                      variant="default"
                      title="Abrir Cadastro"
                      className=""
                    >
                      <Link to={`/paciente/${item.id}`}>
                        <Icon name="BookOpen" color="#FFF" size={16} />
                      </Link>
                    </Button>
                    <Button variant="default" title="Editar">
                      <Icon name="PenLine" color="#FFF" size={16} />
                    </Button>
                    <Button variant="default" title="Excluir">
                      <Icon name="Trash" color="#FFF" size={16} />
                    </Button>
                  </TableCell>
                  <TableCell className="font-medium">{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{`${new Date(item.updatedAt).toLocaleDateString(
                    "pt-BR"
                  )}`}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Pagination>
            <PaginationContent className="flex gap-3">
              <PaginationItem>
                <PaginationLink
                  href="#"
                  onClick={prevPage}
                  className="w-full p-2"
                >
                  Anterior
                </PaginationLink>
              </PaginationItem>
              {[...Array(getTotalPages()).keys()].map((page) => (
                <PaginationItem key={page + 1}>
                  <PaginationLink
                    href="#"
                    onClick={() => setCurrentPage(page + 1)}
                    isActive={currentPage === page + 1}
                  >
                    {page + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationLink
                  href="#"
                  onClick={nextPage}
                  className="w-full p-2"
                >
                  Próximo
                </PaginationLink>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </>
      )}
    </div>
  );
};
export default PatientTable;
