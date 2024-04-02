/* eslint-disable @typescript-eslint/no-explicit-any */
import Icon from "@/assets/icon";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
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
import { toast } from "@/components/ui/use-toast";
import {
  FormApi,
  deleteFormType,
  getFormType,
} from "@/services/form-type";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderForm from "./header-form";

const PAGE_SIZE = 8;

const FormTypeTable = () => {
  const [typeForm, setTypeForm] = useState<FormApi[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchTypeForm = async () => {
      const response = await getFormType();
      setTypeForm(response);
    };

    fetchTypeForm();
  }, [currentPage, typeForm]);

  const handleDeleteFormType = (item: number) => {
    try {
      deleteFormType(item);
      toast({
        title: "Excluído com sucesso!",
      });
    } catch (error) {
      console.error(error);

      toast({
        title: "Erro ao excluir!",
      });
    }
  };

  // função para retornar os pacientes correspondentes à página atual
  const getCurrentPagePatients = () => {
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    return typeForm.slice(startIndex, endIndex);
  };

  // função para calcular o número total de páginas
  const getTotalPages = () => {
    return Math.ceil(typeForm.length / PAGE_SIZE);
  };

  // função para navegar para a próxima página
  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, getTotalPages()));
  };

  // função para navegar para a página anterior
  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div>
      {typeForm.length === 0 ? (
        <Card className="flex justify-center items-center flex-col p-5 mt-4">
          <CardTitle className="text-center">
            Ops, ainda não temos formulários cadastrados !
          </CardTitle>
          <CardContent className="flex items-center p-3">
            <p>Deseja cadastrar um formulário ? </p>
            <Button variant="link">
              <Link to="/pacientes/cadastrar-paciente">Clique aqui</Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <>
          <Table>
            <TableHeader className="">
              <TableRow className="">
                <TableHead className="flex items-center justify-center">
                  Ações
                </TableHead>
                <TableHead className="">ID</TableHead>
                <TableHead className="">Nome</TableHead>
                <TableHead className="flex items-center justify-center">
                  Data de Cadastro
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {getCurrentPagePatients().map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="flex justify-center items-center gap-1">
                    <Dialog>
                      <DialogTrigger>
                        <Button
                          variant="default"
                          title="Editar"
                          onClick={() => handleUpdateFormType(item.id)}
                        >
                          <Icon name="PenLine" color="#FFF" size={16} />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="p-2">
                        <HeaderForm />
                      </DialogContent>
                    </Dialog>
                    {/* <Button variant="default" title="Editar">
                      <Icon name="PenLine" color="#FFF" size={16} />
                    </Button> */}
                    <Button
                      variant="default"
                      title="Excluir"
                      onClick={() => handleDeleteFormType(item.id)}
                    >
                      <Icon name="Trash" color="#FFF" size={16} />
                    </Button>
                  </TableCell>
                  <TableCell className="font-medium">{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell className="flex items-center justify-center">{`${new Date(
                    item.updatedAt
                  ).toLocaleDateString("pt-BR")}`}</TableCell>
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
export default FormTypeTable;
