/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "./api";

export interface FormApi {
  id: number;
  name: string;
  updatedAt: string;
}

export interface FormResponse {
  data: FormApi[];
}

const getFormType = async (): Promise<FormResponse[]> => {
  try {
    const response = await api.get<FormResponse[]>("/tipo-ficha");
    return response.data;
  } catch (error) {
    console.log("Erro ao buscar ficha: " + error);
    throw error;
  }
};

const postFormType = async (obj: any): Promise<FormApi[]> => {
  try {
    const response = await api.post<FormApi[]>("/tipo-ficha", obj, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.log("Erro ao buscar ficha: " + error);
    throw error;
  }
};

const updateFormType = async (id: number): Promise<boolean> => {
  try {
    await api.put(`/tipo-ficha/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return true;
  } catch (error) {
    console.log("Erro ao buscar ficha: " + error);
    throw error;
  }
};

const deleteFormType = async (id: number): Promise<boolean> => {
  try {
    await api.delete(`/tipo-ficha/${id}`);
    return true;
  } catch (error) {
    console.log("Erro ao deletar ficha: " + error);
    throw error;
  }
};

export { getFormType, postFormType, updateFormType, deleteFormType };
