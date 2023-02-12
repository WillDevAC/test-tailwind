import { object, string } from "yup";

export const registerSchema = object({
  name: string()
    .required("Nome obrigatório.")
    .min(5, "O nome deve ter no mínimo 5 caracteres."),
  email: string()
    .required("Email obrigatório.")
    .min(3, "O email deve ter no mínimo 3 caracteres."),
  password: string()
    .required("Senha obrigatória.")
    .min(3, "A senha deve ter no mínimo 3 caracteres."),
});
