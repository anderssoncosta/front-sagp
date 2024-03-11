import api from "./api";

export interface UsersProps {
  id: number;
  username: string;
  email: string;
  password: string;
  created_at: string;
  updated_at: string;
}

export interface UserResponse {
  data: UsersProps[];
}

const getUsuario = async (): Promise<UsersProps[]> => {
  try {
    const response: UserResponse = await api.post("/users");

    return response.data;
  } catch (error) {
    console.error("Erro ao buscar:", error);
    throw error;
  }
};

const deleteUsuario = async (id: number ): Promise<boolean> => {
  try {
    await api.delete(`/auth/${id}`);
    return true;
  } catch (error) {
    console.error("Erro ao buscar:", error);
    return false;
  }
};


export { deleteUsuario, getUsuario };
