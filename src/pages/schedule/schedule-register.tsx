import HeaderTitle from "@/components/header-title";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PatientApi, getPatients } from "@/services/patients";
import { useEffect, useState } from "react";



const RegisterSchedule = () => {
  const [date, setDate] = useState<Date>();
  const [patient, setPatient] = useState<PatientApi[]>([]);

  useEffect(() => {
    const fecthPatient = async () => {
      const response = await getPatients();
      setPatient(response);
    };
    fecthPatient();
  }, []);

  const handleSchedule = () => {
    console.log(date);
    console.log(patient);
  };

  return (
    <div className="p-4">
      <div>
        <HeaderTitle title="Agendamento" />
      </div>
      <Card>
        <CardContent className="flex justify-center">
          <CardHeader>
            <CardTitle className="flex items-center justify-center w-fit">
              Novo Agendamento
            </CardTitle>
          </CardHeader>
        </CardContent>
        <CardContent className="flex justify-center gap-5 flex-col lg:flex-row lg:items-center">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
            className="flex items-center justify-center"
          />
          <div className="flex flex-col w-full max-w-3xl items-center justify-center ">
            <div className="flex flex-col gap-2 w-full">
              <div className="w-full flex gap-2">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Buscar Paciente" />
                  </SelectTrigger>
                  <SelectContent>
                    {patient.map((item) => (
                      <SelectItem key={item.id} value={item.name}>
                        {item.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button variant="outline">Selecionar</Button>
              </div>
              <div className="flex flex-col gap-2">
                <Input placeholder="Paciente" disabled />
                <Button onClick={handleSchedule}>Agendar</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterSchedule;
