import { InferGetServerSidePropsType, NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import Slider from "react-slick";
import { Layout } from "../../layout";
import { api } from "../../services/api";
import Icon from "../../utils/icons.config";

export async function getServerSideProps(context: any) {
  const { id } = context.query;

  const pet = await api.get(`/pet/${id}/non-logged`);

  return {
    props: { pet: pet.data },
  };
}

type IPetPage = InferGetServerSidePropsType<typeof getServerSideProps>;

const PetPage: NextPage<IPetPage> = ({ pet }) => {
  const router = useRouter();

  const settingsSlider = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  console.log(pet)

  return (
    <Layout>
      <section className="py-10 font-poppins">
        <div className="max-w-7xl px-3 mx-auto">
          <span className="py-10 text-gray-500">
            <b className="text-brand" onClick={() => router.replace("/")}>
              Home
            </b>{" "}
            | Visualizar Pet | {pet.name}
          </span>
          <div className="flex flex-wrap mb-24 -mx-4 mt-5">
            <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
              <div className="sticky top-0 overflow-hidden ">
                <div className="relative mb-6 lg:mb-10 lg:h-96">
                  <Slider {...settingsSlider}>
                    <div className="h-96">
                      <img
                        className="object-contain w-full lg:h-full"
                        src={pet.profilePicture}
                        alt=""
                      />
                    </div>
                    <div className="h-96">
                      <img
                        className="object-contain w-full lg:h-full"
                        src={pet.profilePicture}
                        alt=""
                      />
                    </div>
                    <div className="h-96">
                      <img
                        className="object-contain w-full lg:h-full"
                        src={pet.profilePicture}
                        alt=""
                      />
                    </div>
                  </Slider>
                </div>
                <div className="flex gap-5 pt-10">
                  <button className="bg-transparent hover:bg-brand text-brand font-semibold hover:text-white py-2 px-4 border border-brand hover:border-transparent rounded">
                    Compartilhar
                  </button>
                  <a className="bg-transparent cursor-pointer hover:bg-brand text-brand font-semibold hover:text-white py-2 px-4 border border-brand hover:border-transparent rounded" href={`tel:${pet.ong.phone}`}>
                    Falar com a ONG
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2">
              <div className="lg:pl-20">
                <div className="mb-6 ">
                  <span className="px-2.5 py-0.5 text-xs text-blue-600 bg-blue-100 bg-green-700 rounded-xl dark:text-gray-200">
                    Disponivel para adoção
                  </span>
                  <h2 className="max-w-xl mt-6 text-3xl font-semibold leading-loose tracking-wide text-brand md:text-2x uppercase">
                    {pet.specie.specieName} {pet.name}
                  </h2>
                  <p>Publicado por {pet.ong.name}</p>
                  <div className="flex flex-wrap items-center pt-10 mb-6 text-gray-500">
                    {pet.description}
                  </div>
                </div>
                <div className="mb-6 pt-5">
                  <h2 className="mb-5 text-lg font-bold text-brand">
                    Sobre o animal :
                  </h2>
                  <div className="bg-gray-50 rounded-sm">
                    <div className="p-3 lg:p-5 ">
                      <div className="p-2 rounded-xl lg:p-6 bg-gray-50">
                        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
                          <div className="w-full mb-4 md:w-2/5">
                            <div className="flex ">
                              <span className="mr-3 text-brand">
                                <Icon.GiWeightCrush size={20} />
                              </span>
                              <div>
                                <p className="mb-2 text-sm font-medium text-brand">
                                  Peso
                                </p>
                                <h2 className="text-base font-semibold text-black">
                                  {pet.weight}
                                </h2>
                              </div>
                            </div>
                          </div>
                          <div className="w-full mb-4 md:w-2/5">
                            <div className="flex ">
                              <span className="mr-3 text-brand">
                                <Icon.BsExclamationCircle size={20} />
                              </span>
                              <div>
                                <p className="mb-2 text-sm font-medium text-brand">
                                  Sexo
                                </p>
                                <h2 className="text-base font-semibold text-black">
                                  {pet.sex}
                                </h2>
                              </div>
                            </div>
                          </div>
                          <div className="w-full mb-4 lg:mb-0 md:w-2/5">
                            <div className="flex ">
                              <span className="mr-3 text-brand">
                                <Icon.MdPets size={20} />
                              </span>
                              <div>
                                <p className="mb-2 text-sm font-medium text-brand">
                                  Idade
                                </p>
                                <h2 className="text-base font-semibold text-black">
                                  {pet.age} anos
                                </h2>
                              </div>
                            </div>
                          </div>
                          <div className="w-full mb-4 lg:mb-0 md:w-2/5">
                            <div className="flex ">
                              <span className="mr-3 text-brand">
                                <Icon.TbVaccineBottle size={20} />
                              </span>
                              <div>
                                <p className="mb-2 text-sm font-medium text-brand">
                                  Sáude
                                </p>
                                <h2 className="text-base font-semibold text-black">
                                  <a
                                    href="#"
                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                  >
                                    ver carteirinha
                                  </a>
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
