/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "./api";

export interface ScheduleApi {
  id: number;
  date: string;
  hour: string;
  id_patient: number;
}

export interface ScheduleResponse {
  data: ScheduleApi[];
}

const getSchedules = async (): Promise<ScheduleApi[]> => {
  try {
    const response = await api.get<ScheduleApi[]>("/agendamento");
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const postSchedule = async (obj: any): Promise<ScheduleApi[]> => {
  try {
    const response = await api.post<ScheduleApi[]>("/agendamento", obj, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("Resposta do servidor ", response)
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { getSchedules, postSchedule };
