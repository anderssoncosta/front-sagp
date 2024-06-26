import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { postPatient } from "@/services/patients";
import Input from "@/components/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import HeaderTitle from "@/components/header-title";
import { Separator } from "@/components/ui/separator";

const schema = z.object({
  name: z.string().min(1, { message: "O campo nome é obrigatório." }),
  age: z.string().min(1, { message: "O campo idade é obrigatório." }),
  birth: z
    .string()
    .min(1, { message: "O campo data de nascimento é obrigatório." }),
  resp: z.string().min(1, { message: "O campo responsável é obrigatório." }),
  email: z.string().min(1, { message: "O campo e-mail é obrigatório." }),
  gender: z
    .string()
    .max(1, { message: "Digite M para Masculino ou F para Feminino" })
    .min(1, { message: "O campo sexo é obrigatório." }),
  phone: z
    .string()
    .max(12, { message: "Apenas números, Ex.: 011912341234 ou 11912341234" })
    .min(1, { message: "O campo telefone é obrigatório." }),
  naturalness: z
    .string()
    .min(1, { message: "O campo naturalidade é obrigatório." }),
  city: z.string().min(1, { message: "O campo cidade é obrigatório." }),
  district: z.string().min(1, { message: "O campo bairro é obrigatório." }),
  zipcode: z
    .string()
    .max(8, { message: "Sem traço ou ponto, Ex.: 60000000" })
    .min(1, { message: "O campo CEP é obrigatório." }),
  address: z.string().min(1, { message: "O campo endereço é obrigatório." }),
});

type FormData = z.infer<typeof schema>;

const RegisterPatient = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleRegister = async (data: FormData) => {
    try {
      setIsSubmitting(true);
      console.log("Data a ser enviada para o servidor:", data);
      const response = await postPatient(data);
      console.log("Resposta do servidor:", response);

      toast({
        variant: "default",
        title: `Paciente ${data.name} cadastrado(a) com sucesso !`,
      });

      reset();
    } catch (error) {
      console.error("Erro ao cadastrar paciente", error);
      toast({
        variant: "destructive",
        title: "Erro ao cadastrar paciente",
        description: `${error}`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBack = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <div className="p-4">
      <div className="">
        <HeaderTitle title="Cadastro de Paciente" />
      </div>
      <div className="">
        <form
          className="flex flex-col gap-2 overflow-auto p-2"
          onSubmit={handleSubmit(handleRegister)}
        >
          <div>
            <span>Dados Pessoais: </span>
          </div>
          <div className="flex gap-3 w-full ">
            <div className="w-full flex flex-col"></div>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-3 w-full ">
            <div className="col-span-full md:col-span-2">
              <Input
                name="name"
                type="text"
                placeholder="Nome completo"
                register={register}
                error={errors.name?.message}
              />
            </div>
            <div className="col-span-1">
              <Input
                name="birth"
                type="text"
                placeholder="Data de nascimento"
                register={register}
                error={errors.birth?.message}
              />
            </div>
            <div className="col-span-1">
              <Input
                name="age"
                type="text"
                placeholder="Idade"
                register={register}
                error={errors.age?.message}
              />
            </div>
            <div className="col-span-1 md:col-span-1">
              <Input
                name="gender"
                type="text"
                placeholder="M ou F"
                register={register}
                error={errors.gender?.message}
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-3 w-full">
            <div className="col-span-2 md:col-span-1">
              <Input
                name="naturalness"
                type="text"
                placeholder="Naturalidade"
                register={register}
                error={errors.naturalness?.message}
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <Input
                name="resp"
                type="text"
                placeholder="Responsável pelo paciente"
                register={register}
                error={errors.resp?.message}
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <Input
                name="email"
                type="email"
                placeholder="E-mail"
                register={register}
                error={errors.email?.message}
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <Input
                name="phone"
                type="text"
                placeholder="Telefone"
                register={register}
                error={errors.phone?.message}
              />
            </div>
          </div>
          <Separator className="my-3" />
          <div className="">
            <span>Endereço</span>
          </div>
          <div className="grid grid-cols-1 gap-3">
            <div className="col-span-full">
              <Input
                name="zipcode"
                type="text"
                placeholder="CEP"
                register={register}
                error={errors.zipcode?.message}
              />
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-1/2">
              <Input
                name="city"
                type="text"
                placeholder="Cidade"
                register={register}
                error={errors.city?.message}
              />
            </div>
            <div className="w-1/2">
              <Input
                name="district"
                type="text"
                placeholder="Bairro"
                register={register}
                error={errors.district?.message}
              />
            </div>
          </div>
          <div>
            <Input
              name="address"
              type="text"
              placeholder="Digite seu endereco"
              register={register}
              error={errors.address?.message}
            />
          </div>
          <div className="w-full py-3 gap-2 flex items-center justify-center">
            <Button variant="outline" className="w-full" onClick={handleBack}>
              Voltar
            </Button>
            <Button
              variant="default"
              type="submit"
              disabled={isSubmitting}
              className="w-full"
            >
              Cadastrar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default RegisterPatient;
