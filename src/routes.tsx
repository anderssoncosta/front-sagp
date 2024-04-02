import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home/home";
import Patient from "./pages/patients/patient";
import PatientInfo from "./pages/patients/patient-info";
import RegisterPatient from "./pages/patients/register-patient";
import Schedule from "./pages/schedule/schedule";
import RegisterSchedule from "./pages/schedule/schedule-register";
import Financial from "./pages/financial/financial";
import Options from "./pages/options/options";
import RegisterFormType from "./pages/cadastro-base/type-form/register-form";
import RegisterProfessional from "./pages/cadastro-base/professional/register-professional";

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/pacientes/lista-paciente" element={<Patient />} />
        <Route path="/paciente/:id" element={<PatientInfo />} />
        <Route
          path="/pacientes/cadastrar-paciente"
          element={<RegisterPatient />}
        />
        <Route
          path="/cadastro-base/tipo-de-ficha"
          element={<RegisterFormType />}
        />
        <Route
          path="/cadastro-base/profissional"
          element={<RegisterProfessional />}
        />
        <Route path="/agenda/lista-de-agendamentos" element={<Schedule />} />
        <Route path="/agenda/agendar-paciente" element={<RegisterSchedule />} />
        <Route path="/financeiro" element={<Financial />} />
        <Route path="/opcoes" element={<Options />} />
      </Route>
    </Routes>
  );
};
export default RoutesApp;
