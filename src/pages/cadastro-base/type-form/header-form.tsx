import Input from "@/components/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { postFormType } from "@/services/form-type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, { message: "O campo nome é obrigatório." }),
});

type FormData = z.infer<typeof schema>;

const HeaderForm = () => {
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

  const handleFormType = (data: FormData) => {
    try {
      setIsSubmitting(true);
      console.log("Data a ser enviada para o servidor:", data);
      const response = postFormType(data);
      console.log("Resposta do servidor:", response);
      reset();
      toast({
        variant: "default",
        title: `Formulário cadastrado com sucesso !`,
      });
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Erro ao cadastrar formulário",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="mb-2">
        <span>Dados Para cadastro: </span>
      </div>
      <form
        className="w-full flex gap-2"
        onSubmit={handleSubmit(handleFormType)}
      >
        <div className="w-full">
          <Input
            name="name"
            type="text"
            placeholder="Digite seu nome completo"
            register={register}
            error={errors.name?.message}
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Voltar</Button>
          <Button variant="default" disabled={isSubmitting} type="submit">
            Cadastrar
          </Button>
        </div>
      </form>
    </div>
  );
};
export default HeaderForm;
