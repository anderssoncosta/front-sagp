import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PatientApi, getPatients } from "@/services/patients";
import { Separator } from "@/components/ui/separator";
import PatientAccordion from "./patient-accordion";
import { Button } from "@/components/ui/button";
import HeaderTitle from "@/components/header-title";

const PatientInfo = () => {
  const { id } = useParams();
  const [currentPatient, setCurrentPatient] = useState<PatientApi | null>(null);

  const fetchPatient = async (patientId: number) => {
    const result = await getPatients();
    const foundPatient = result.find((patient) => patient.id === patientId);
    setCurrentPatient(foundPatient || null);
  };

  const [time, setTime] = useState<EntryTime[]>([]);

  useEffect(() => {
    if (id) {
      const patientId = Number(id);
      fetchPatient(patientId);
    }
  }, [id]);

  const handlePresencaClick = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString();

    const updatedTime = [...time, { data: formattedDate, hora: formattedTime }];

    setTime(updatedTime);
  };

  return (
    <div className="p-4 max-h-screen min-h-screen ">
      <div>
        <HeaderTitle title={`Paciente:  ${currentPatient?.name}`} />
      </div>
      <div>
        <Card>
          {currentPatient && (
            <CardContent>
              <div className="w-full flex justify-center items-center my-3">
                <h1 className="font-bold text-xl">{currentPatient.name}</h1>
              </div>
              <Separator />
              <div className="flex flex-col justify-between h-full gap-1 mt-3">
                <h1>
                  Idade: <span className="font-bold">{currentPatient.age}</span>
                </h1>
                <h1>
                  Paciente:{" "}
                  <span className="font-bold">
                    {new Date(currentPatient.updatedAt).toLocaleDateString(
                      "pt-BR"
                    )}
                  </span>
                </h1>
                <h1>
                  Responsável:{" "}
                  <span className="font-bold">{currentPatient.resp}</span>
                </h1>

                <h1>
                  Telefone:{" "}
                  <span className="font-bold">{currentPatient.phone}</span>
                </h1>
                <h1>
                  E-mail:{" "}
                  <span className="font-bold">{currentPatient.email}</span>
                </h1>
              </div>
              <div className="flex w-full gap-2 mt-3">
                <Button
                  onClick={handlePresencaClick}
                  variant="outline"
                  className=" text-green-600 px-3 p-3 rounded-lg w-full border-green-600"
                >
                  Marcar Presença
                </Button>
                <Button
                  onClick={() => console.log("teste")}
                  className="text-primary-foreground px-3 rounded-lg w-full"
                >
                  Agendar
                </Button>
              </div>
            </CardContent>
          )}
        </Card>
        <div>
          <PatientAccordion />
        </div>
      </div>
    </div>
  );
};
export default PatientInfo;
