import api from "./api";

export interface QuestionProps {
  id: number;
  questions: string;
}

export interface PlugType {
  id: number;
  name: string;
}

export interface QuestionApi {
  id: number;
  name: string;
  id_plug_type: number;
  plug_type: PlugType;
  questions: QuestionProps[];
}

const getQuestions = async (): Promise<QuestionApi[]> => {
  try {
    const response = await api.get<QuestionApi[]>("/tipo-ficha");
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("Erro ao buscar ficha: " + error);
    throw error;
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const postPatiente = async (obj: any) => {
  try {
    const response = await api.post<QuestionApi[]>(`/tipo-ficha`, obj, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.log("Erro ao cadastrar ficha: " + error);
  }
};

// const deletePatient = async (id: number) => {
//   try {
//     await api.delete(`/tipoFicha/${id}`);
//     return true;
//   } catch (error) {
//     console.log("Erro ao deletar Paciente: " + error);
//   }
// };

export { getQuestions, postPatiente };
