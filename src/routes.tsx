import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";
import Patient from "./pages/patients";
import PatientInfo from "./pages/patients/patient-info";
import RegisterPatient from "./pages/patients/register-patient";
import Schedule from "./pages/schedule";
import RegisterSchedule from "./pages/schedule/schedule-register";

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/pacientes" element={<Patient />} />
        <Route path="/paciente/:id" element={<PatientInfo />} />
        <Route
          path="/pacientes/cadastrar-paciente"
          element={<RegisterPatient />}
        />
        <Route path="/agenda/lista-de-agendamentos" element={<Schedule />} />
        <Route path="/agenda/agendar-paciente" element={<RegisterSchedule />} />
      </Route>
    </Routes>
  );
};
export default RoutesApp;
