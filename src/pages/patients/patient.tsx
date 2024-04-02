import Icon from "@/assets/icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import PatientTable from "./patient-table";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import RegisterPatient from "./register-patient";
import HeaderTitle from "@/components/header-title";

const Patient = () => {
  return (
    <div className="p-4">
      <div>
        <HeaderTitle title="Pacientes" />
      </div>
      <div className="flex gap-2 mb-5">
        <Input />
        <Button variant="outline">
          <Icon name="Search" />
        </Button>
        <Dialog>
          <DialogTrigger>
            <Button>
              <Icon name="Plus" />
            </Button>
          </DialogTrigger>
          <DialogContent className="p-2">
            <RegisterPatient />
          </DialogContent>
        </Dialog>
      </div>
      <div>
        <PatientTable />
      </div>
    </div>
  );
};
export default Patient;
