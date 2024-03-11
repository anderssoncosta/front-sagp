import Icon from "@/assets/icon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { PatientApi, getPatients } from "@/services/patientes";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PatientAccordion = () => {
  const { id } = useParams();
  const [regs, setRegs] = useState<PatientApi[]>([]);

  const fetchPatients = async () => {
    try {
      const response = await getPatients();
      // console.log(response);
      setRegs(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  const pacienteAtual = regs.find((paciente) => paciente.id === Number(id));
  console.log(pacienteAtual);
  return (
    <div>
      <Accordion type="single" collapsible className="w-full mt-5 ">
        <AccordionItem value="item-1" className="mb-2 border-b-0">
          <AccordionTrigger className="text-primary-foreground p-4 bg-primary rounded-lg ">
            <Icon name="UserRound" />
            Ficha Clínica
          </AccordionTrigger>
          <AccordionContent className="rounded-lg mt-1">
            {pacienteAtual && (
              <div className="flex flex-col w-full h-full bg-primary-foreground gap-2 p-4 rounded-lg">
                <h1 className="">
                  Nome:{" "}
                  <span className="font-semibold">{pacienteAtual.name}</span>
                </h1>
                <h1>
                  Idade:{" "}
                  <span className="font-semibold">{pacienteAtual.age}</span>
                </h1>
                <h1>
                  Data Nasc.:{" "}
                  <span className="font-semibold">
                    {new Date(pacienteAtual.birth).toLocaleDateString(
                      "pt-BR"
                    )}
                  </span>
                </h1>
                <h1>
                  Tel.:{" "}
                  <span className="font-semibold">{pacienteAtual.phone}</span>
                </h1>
                <h1>
                  Sexo:{" "}
                  <span className="font-semibold">{pacienteAtual.gender}</span>
                </h1>
                <h1>
                  Naturalidade:{" "}
                  <span className="font-semibold">
                    {pacienteAtual.naturalness}
                  </span>
                </h1>
                <h1>
                  Endereço:{" "}
                  <span className="font-semibold">{pacienteAtual.address}</span>
                </h1>
                <div className="w-8/12 flex justify-between">
                  <h1>
                    Cidade:{" "}
                    <span className="font-semibold">{pacienteAtual.city}</span>
                  </h1>
                  <h1>
                    Bairro:{" "}
                    <span className="font-semibold">
                      {pacienteAtual.district}
                    </span>
                  </h1>
                  <h1>
                    Cep:{" "}
                    <span className="font-semibold">
                      {pacienteAtual.zipcode}
                    </span>
                  </h1>
                </div>
              </div>
            )}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="mb-2 border-b-0">
          <AccordionTrigger className="text-primary-foreground p-4 bg-primary rounded-lg">
            <Icon name="LayoutDashboard" />
            Anamnese
          </AccordionTrigger>
          <AccordionContent className="bg-primary-foreground rounded-lg mt-1 py-2">
            Ficha Ananmese
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="mb-2 border-b-0">
          <AccordionTrigger className="text-primary-foreground p-4 bg-primary rounded-lg">
            <Icon name="CheckCircle" />
            Sessões de Fisioterapia
          </AccordionTrigger>
          <AccordionContent className="bg-primary-foreground rounded-lg mt-1 py-2">
            Sessões de Fisioterapia
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="mb-2 border-b-0">
          <AccordionTrigger className="text-primary-foreground p-4 bg-primary rounded-lg">
            <Icon name="ClipboardCheck" />
            Evolução
          </AccordionTrigger>
          <AccordionContent className="py-2 bg-primary-foreground rounded-lg mt-1">
            <div className="p-2">
              <textarea
                className="w-full bg-primary-foreground text-primary border border-blue-500 rounded-lg p-2 focus:border-blue-300 focus:outline-none"
                name="Evolucao do Paciente"
                placeholder="Relate a evolução do paciente"
              />
              <div className="w-full flex items-center justify-end">
                <Button
                  variant="secondary"
                  className="text-blue-600 border border-blue-600 rounded-lg hover:bg-primary hover:text-white hover:opacity-80"
                >
                  Salvar
                </Button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
export default PatientAccordion;
