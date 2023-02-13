import { NextPage } from "next";
import React from "react";
import { Layout } from "../../layout";

const PetPage: NextPage = () => {
  return (
    <Layout>
      <section className="py-10 font-poppins">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="flex flex-wrap mb-24 -mx-4">
            <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
              <div className="sticky top-0 overflow-hidden ">
                <div className="relative mb-6 lg:mb-10 lg:h-96">
                  <a
                    className="absolute left-0 transform lg:ml-2 top-1/2 translate-1/2"
                    href="#"
                  >
                    <img src="/arrow-left.svg" alt="" />
                  </a>
                  <img
                    className="object-contain w-full lg:h-full"
                    src="https://img.freepik.com/fotos-gratis/lindo-retrato-de-cachorro_23-2149218450.jpg"
                    alt=""
                  />
                  <a
                    className="absolute right-0 transform lg:mr-2 top-1/2 translate-1/2"
                    href="#"
                  >
                    <img src="/arrow-right.svg" alt="" />
                  </a>
                </div>
                <button className="bg-transparent border-brand border-solid">Compartilhar</button>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2">
              <div className="lg:pl-20">
                <div className="mb-6 ">
                  <span className="px-2.5 py-0.5 text-xs text-blue-600 bg-blue-100 bg-green-700 rounded-xl dark:text-gray-200">
                    Disponivel para adoção
                  </span>
                  <h2 className="max-w-xl mt-6 text-3xl font-semibold leading-loose tracking-wide text-brand md:text-2x uppercase">
                    Cachorro Sansão
                  </h2>
                  <p>Publicado por ONG QUATRO PATAS</p>
                  <div className="flex flex-wrap items-center pt-10 mb-6 text-gray-500">
                    Sansão procura uma nova casinha, ele é dócil e amavel e
                    sempre procura novos amiguinhos.
                  </div>
                </div>
                <div className="mb-6 pt-5">
                  <h2 className="mb-5 text-lg font-bold text-brand">
                    Sobre o animal :
                  </h2>
                  <div className="bg-slate-300 rounded-xl">
                    <div className="p-3 lg:p-5 ">
                      <div className="p-2 rounded-xl lg:p-6 bg-gray-50">
                        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
                          <div className="w-full mb-4 md:w-2/5">
                            <div className="flex ">
                              <span className="mr-3 text-brand">
                                A
                              </span>
                              <div>
                                <p className="mb-2 text-sm font-medium text-brand">
                                  Peso
                                </p>
                                <h2 className="text-base font-semibold text-black">
                                  ...
                                </h2>
                              </div>
                            </div>
                          </div>
                          <div className="w-full mb-4 md:w-2/5">
                            <div className="flex ">
                              <span className="mr-3 text-brand">
                                A
                              </span>
                              <div>
                                <p className="mb-2 text-sm font-medium text-brand">
                                  Sexo
                                </p>
                                <h2 className="text-base font-semibold text-black">
                                  ...
                                </h2>
                              </div>
                            </div>
                          </div>
                          <div className="w-full mb-4 lg:mb-0 md:w-2/5">
                            <div className="flex ">
                              <span className="mr-3 text-brand">
                                A
                              </span>
                              <div>
                                <p className="mb-2 text-sm font-medium text-brand">
                                  Porte
                                </p>
                                <h2 className="text-base font-semibold text-black">
                                  ...
                                </h2>
                              </div>
                            </div>
                          </div>
                          <div className="w-full mb-4 lg:mb-0 md:w-2/5">
                            <div className="flex ">
                              <span className="mr-3 text-brand">
                                A
                              </span>
                              <div>
                                <p className="mb-2 text-sm font-medium text-brand">
                                  Sáude
                                </p>
                                <h2 className="text-base font-semibold text-black">
                                  ...
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 mb-6">
                  <a
                    href="#"
                    className="w-full px-4 py-3 text-center text-gray-100 bg-brand border border-transparent rounded-xl"
                  >
                    Adotar animal
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PetPage;
