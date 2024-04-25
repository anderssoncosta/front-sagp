/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "./api";

export interface PatientApi {
  id: number;
  name: string;
  age: number;
  birth: string;
  resp: string;
  email: string;
  gender: string;
  phone: string;
  naturalness: string;
  city: string;
  district: string;
  zipcode: string;
  address: string;
  id_scheduling: number;
  updatedAt: string;
}

export interface ApiResponse {
  data: PatientApi[];
}

const getPatients = async (): Promise<PatientApi[]> => {
  try {
    const response = await api.get<PatientApi[]>("/paciente");
    return response.data;
  } catch (error) {
    console.log("Erro ao buscar Paciente:", error);
    throw error;
  }
};

const postPatient = async (obj: any): Promise<PatientApi[]> => {
  try {
    const response = await api.post<PatientApi[]>("/paciente", obj, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("Resposta do servidor (postPatient):", response);
    return response.data;
  } catch (error) {
    console.log("Erro ao cadastrar Paciente:", error);
    throw error;
  }
};

const deletePatient = async (id: number): Promise<boolean> => {
  try {
    await api.delete(`/paciente/${id}`);
    return true;
  } catch (error) {
    console.log("Erro ao deletar Paciente:", error);
    throw error;
  }
};

export { getPatients, postPatient, deletePatient };
