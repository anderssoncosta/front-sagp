/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "./api";

export interface ProfessionalApi {
  name: string;
  office: string;
  funcional_register: string;
  number_funcional_register: string;
}

export interface ProfessionalResponse {
  data: ProfessionalApi[];
}

const getProfessional = async (): Promise<ProfessionalApi[]> => {
  try {
    const response = await api.get<ProfessionalApi[]>("/profissional");
    return response.data;
  } catch (error) {
    console.log("Erro ao buscar profissional: " + error);
    throw error;
  }
};

const postProfessional = async (obj: any): Promise<ProfessionalApi[]> => {
  try {
    const response = await api.post<ProfessionalApi[]>("/profissional", obj, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.log("Erro ao buscar profissional: " + error);
    throw error;
  }
};

export { getProfessional, postProfessional };
