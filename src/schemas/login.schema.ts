import { object, string } from "yup";

export const loginSchema = object({
    username: string()
      .required("Email obrigatório.")
      .min(3, "O email deve ter no mínimo 3 caracteres."),
    password: string()
      .required("Senha obrigatória.")
      .min(3, "A senha deve ter no mínimo 3 caracteres."),
});