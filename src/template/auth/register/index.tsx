import React, { useContext, useState } from "react";

import * as S from "./styles";

import Icons from "../../../utils/icons.config";
import { useRouter } from "next/router";
import { AuthContext } from "../../../contexts/auth.context";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../../schemas/register.schema";
import { RotatingLines } from "react-loader-spinner";
import { toast } from "react-toastify";

export const Register: React.FC = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { Register } = useContext(AuthContext);

  const {
    register,
    handleSubmit: onSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const defaultValues = {
    name: "",
    email: "",
    password: ""
  };

  const handleSubmit = async (data: any) => {
    setIsLoading(true);
    const { name, email, password } = data;

    try {
      await Register(name, email, password);
    } catch (error) {
      toast.error("Senha ou usuário inválido.");
    } finally {
      setIsLoading(false);
      reset(defaultValues);
    }
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.RightWrapper>
          <S.RightWrapperSection>
            <S.RightWrapperImage src="/marketing.jpg" />
          </S.RightWrapperSection>
        </S.RightWrapper>
        <S.LeftWrapper>
          <S.LeftWrapperSection>
            <S.Form onSubmit={onSubmit(handleSubmit)}>
              <S.FormWrapper>
                <S.FormContent>
                  <S.FormTitle>Registro</S.FormTitle>
                  <S.FormSocial onClick={() => {}}>
                    <Icons.FcGoogle size={20} />
                    Continuar com Google
                  </S.FormSocial>
                  <S.FormDivider>
                    <S.FormLine />
                    <S.FormLineTitle>OU</S.FormLineTitle>
                    <S.FormLine />
                  </S.FormDivider>
                  <S.FormInputs>
                    <S.FormInput
                      type="text"
                      placeholder="Nome *"
                      {...register("name")}
                    />
                    <div className="text-brand">
                      <>{errors?.name?.message}</>
                    </div>
                    <S.FormInput
                      type="email"
                      placeholder="E-mail *"
                      {...register("email")}
                    />
                    <div className="text-brand">
                      <>{errors?.email?.message}</>
                    </div>
                    <S.FormInput
                      type="password"
                      placeholder="Senha *"
                      {...register("password")}
                    />
                    <div className="text-brand">
                      <>{errors?.password?.message}</>
                    </div>
                  </S.FormInputs>
                  <S.FormButtonAction type="submit" disabled={isLoading}>
                    {!isLoading ? (
                      "Registre-se"
                    ) : (
                      <RotatingLines width="20" strokeColor="#9fa3a9" />
                    )}
                  </S.FormButtonAction>
                  <S.FormFooter>
                    <S.FormFooterNotAccount>
                      Já possui uma conta?
                    </S.FormFooterNotAccount>
                    <S.FormFooterSignup onClick={() => router.back()}>
                      Login
                    </S.FormFooterSignup>
                  </S.FormFooter>
                </S.FormContent>
              </S.FormWrapper>
            </S.Form>
          </S.LeftWrapperSection>
        </S.LeftWrapper>
      </S.Wrapper>
    </S.Container>
  );
};
