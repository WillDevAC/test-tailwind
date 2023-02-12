import React, { useContext, useState } from "react";

import * as S from "./styles";

import Icons from "../../../utils/icons.config";

import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../../schemas/login.schema";
import { AuthContext } from "../../../contexts/auth.context";
import { RotatingLines } from "react-loader-spinner";

export const Login: React.FC = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { Login } = useContext(AuthContext);

  const {
    register,
    handleSubmit: onSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const defaultValues = {
    username: "",
    password: "",
  };

  const handleSubmit = async (data: any) => {
    setIsLoading(true);
    const { username, password } = data;

    try {
      await Login(username, password);
    } catch (error) {
      toast.error("Senha ou usuário inválido.");
    } finally {
      setIsLoading(false);
      reset(defaultValues);
    }
  };

  return (
    <>
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
                    <S.FormTitle>Entrar</S.FormTitle>
                    <S.FormSocial>
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
                        type="email"
                        placeholder="E-mail *"
                        {...register("username")}
                      />
                      <div className="text-brand">
                        <>{errors?.username?.message}</>
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
                    <S.FormButtonAction>
                      {!isLoading ? (
                        "Fazer Login"
                      ) : (
                        <RotatingLines width="20" strokeColor="#9fa3a9" />
                      )}
                    </S.FormButtonAction>
                    <S.FormFooter>
                      <S.FormFooterNotAccount>
                        Ainda não tem uma conta?
                      </S.FormFooterNotAccount>
                      <S.FormFooterSignup
                        onClick={() => router.push("/auth/register")}
                      >
                        Cadastra-se
                      </S.FormFooterSignup>
                    </S.FormFooter>
                  </S.FormContent>
                </S.FormWrapper>
              </S.Form>
            </S.LeftWrapperSection>
          </S.LeftWrapper>
        </S.Wrapper>
      </S.Container>
    </>
  );
};
