import React from "react";

import * as S from "./styles";

export const Login: React.FC = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.LeftWrapper>
          <S.LeftWrapperSection>
            <S.Form>
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div className="w-full py-10 md:py-8 lg:py-0">
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold xl:leading-8 text-gray-800 pt-6">
                    Entrar
                  </h3>
                  <div>
                    <button className="w-full border rounded-lg border-gray-800 py-2 px-2 md:py-3 md:px-3 flex items-center mt-4 md:mt-8">
                      <p className="text-xs sm:text-sm md:text-base font-medium leading-none  ml-4 text-gray-800">
                        Continuar com Google
                      </p>
                    </button>
                  </div>
                  <div className="flex items-center justify-center my-6">
                    <div className="border-b border-gray-400 w-1/2"></div>
                    <p className="text-xs sm:text-sm md:text-base font-medium leading-none text-gray-400 px-2.5">
                      OU
                    </p>
                    <div className="border-b border-gray-400 w-1/2"></div>
                  </div>
                  <div>
                    <div className="flex flex-col">
                      <label className="text-sm sm:text-base md:text-lg font-semibold fleading-tight">
                        E-mail
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-1.5 text-gray-700 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-brand focus:outline-none"
                        id="exampleFormControlInput1"
                        placeholder="Example label"
                      />
                    </div>
                    <div className="flex flex-col mt-6">
                      <label className="text-sm sm:text-base md:text-lg font-semibold leading-tight">
                        Senha
                      </label>
                      <input
                        type="password"
                        className="h-10 px-2 w-full text-white bg-gray-200 focus:outline-none rounded mt-2  "
                      />
                    </div>
                  </div>
                  <button className="bg-brand text-white w-full transition duration-150 ease-in-out hover:opacity-75 rounded px-8 py-3 text-xs md:text-sm mt-6 uppercase">
                    Fazer Login
                  </button>
                  <div className="flex items-center mt-5">
                    <p className="text-xs font-medium leading-none text-gray-500">
                      Ainda não tem uma conta?
                    </p>
                    <a className="text-xs font-medium leading-none underline text-gray-800 ml-2">
                      Cadastra-se
                    </a>
                  </div>
                </div>
                <div className="pb-6 md:pb-12"></div>
              </div>
            </S.Form>
          </S.LeftWrapperSection>
        </S.LeftWrapper>
        <S.RightWrapper>
          <S.RightWrapperSection>
            <S.RightWrapperImage src="https://a-static.besthdwallpaper.com/dog-animals-puppies-wallpaper-1920x1200-84131_6.jpg" />
          </S.RightWrapperSection>
        </S.RightWrapper>
      </S.Wrapper>
    </S.Container>
  );
};
