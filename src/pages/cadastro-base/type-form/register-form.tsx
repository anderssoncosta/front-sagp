import HeaderTitle from "@/components/header-title";
import FormTypeTable from "./table-form";
import HeaderForm from "./header-form";

const RegisterFormType = () => {
  return (
    <div className="p-4">
      <div>
        <HeaderTitle title="Cadastrar Tipo de Formulário" />
      </div>
      <div className="w-full ">
        <HeaderForm />
      </div>
      <div>
        <FormTypeTable />
      </div>
    </div>
  );
};
export default RegisterFormType;
