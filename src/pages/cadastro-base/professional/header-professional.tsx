import Input from "@/components/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { postProfessional } from "@/services/professional";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, { message: "O campo nome é obrigatório." }),
  office: z.string().min(1, { message: " O campo cargo é obrigatório." }),
  funcional_register: z
    .string()
    .min(1, { message: " O campo registro funcional é obrigatório." }),
  number_funcional_register: z.string().min(1, {
    message: " O campo de numero de registro funcional é obrigatório.",
  }),
});

type FormData = z.infer<typeof schema>;

const HeaderProfessional = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const handleRegisterProfessional = async (data: FormData) => {
    try {
      console.log("Dados a serem enviados => ", data);
      const response = await postProfessional(data);
      console.log("Resposta do servidor:", response);
      toast({
        variant: "default",
        title: `Profissional ${data.name} cadastrado(a) com sucesso!`,
      });
      reset();
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Erro ao cadastrar profissional",
      });
    }
  };

  return (
    <div>
      <div></div>
      <div className="flex">
        <form
          className="w-full flex flex-col gap-4"
          onSubmit={handleSubmit(handleRegisterProfessional)}
        >
          <div>
            <div className="w-full gap-2 grid grid-cols-2">
              <div>
                <Input
                  name="name"
                  type="text"
                  placeholder="Digite nome da ficha para cadastro"
                  register={register}
                  error={errors.name?.message}
                />
              </div>
              <div>
                <Input
                  name="office"
                  type="text"
                  placeholder="Digite seu cargo"
                  register={register}
                  error={errors.office?.message}
                />
              </div>
              <div>
                <Input
                  name="funcional_register"
                  type="text"
                  placeholder="Digite registro funcional - Ex.: CRM"
                  register={register}
                  error={errors.funcional_register?.message}
                />
              </div>
              <div>
                <Input
                  name="number_funcional_register"
                  type="text"
                  placeholder="Digite o numero de registro funcional - Ex.: 000000"
                  register={register}
                  error={errors.number_funcional_register?.message}
                />
              </div>
            </div>
          </div>
          <div>
            <Button
              variant="default"
              type="submit"
              // disabled={isSubmitting}
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
export default HeaderProfessional;
