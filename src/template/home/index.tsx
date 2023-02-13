import React, { useCallback, useContext, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import { FilterCard } from "../../components/Cards";
import { FilterContext } from "../../contexts/filter.context";
import { ICategories } from "../../interfaces/categories";
import { IPet } from "../../interfaces/pet";
import { Layout } from "../../layout";
import { api } from "../../services/api";

import { PetCard, PetLoader, SpecieCard } from "../../components/Cards";

import * as S from "./styles";

interface IHomeProps {
  filters: ICategories;
}

export const Home: React.FC<IHomeProps> = ({ filters }) => {
  const [isPetLoading, setPetLoading] = useState<boolean>(false);
  const [petsList, setPetsList] = useState<IPet[]>([]);
  const { selectedOptions } = useContext(FilterContext);

  const isMobile = useMediaQuery({ maxWidth: 767 });

  const controller = new AbortController();

  const getByPetIsFilterEmpty = useCallback(async () => {
    const tokenBearer = localStorage.getItem("nextauth-token");

    setPetLoading(true);

    if (tokenBearer) {
      const responsePetListLogged = await api.get("/user/profile/pet/feed", {
        headers: {
          Authorization: "Bearer " + tokenBearer,
        },
      });
      return responsePetListLogged;
    } else {
      const responsePetListNotLogged = await api.get(
        "/user/profile/pet/feed-non-logged",
      );
      return responsePetListNotLogged;
    }
  }, [controller.signal]);

  const getByPetIsFilterNotEmpty = useCallback(async () => {
    const { specie, size, sex } = selectedOptions;

    const tokenBearer = localStorage.getItem("nextauth-token");

    setPetLoading(true);

    if (tokenBearer) {
      const pets_filtered_logged = await api.post(
        "/pet/filter/multiparam/non-logged",
        {
          specie: specie,
          size: size,
          sex: sex,
        },
        {
          headers: {
            Authorization: "Bearer " + tokenBearer,
          },
          signal: controller.signal,
        }
      );
      return pets_filtered_logged;
    } else {
      const pets_filtered_notLogged = await api.post(
        "/pet/filter/multiparam/non-logged",
        {
          specie: specie,
          size: size,
          sex: sex,
        },
        {
          signal: controller.signal,
        }
      );
      return pets_filtered_notLogged;
    }
  }, [controller.signal]);

  useEffect(() => {
    const isAllPropertiesFilterEmptyFilter = Object.values(
      selectedOptions
    ).every((val) => val.length === 0);

    if (isAllPropertiesFilterEmptyFilter) {
      getByPetIsFilterEmpty()
        .then((petList) => {
          setPetsList(petList.data);
        })
        .finally(() => {
          setPetLoading(false);
        });
    } else {
      getByPetIsFilterNotEmpty()
        .then((petList) => {
          setPetsList([]);
          setPetsList(petList.data);
        })
        .finally(() => {
          setPetLoading(false);
        });
    }

    return () => {
      controller.abort();
    };
  }, [selectedOptions]);

  return (
    <Layout>
      <S.Main>
        <S.SpecieList>
          <SpecieCard iconName="all" title="Mostrar todos" id={0} />
          <SpecieCard iconName="dog" title="Cachorros" id={1} />
          <SpecieCard iconName="cat" title="Gatos" id={2} />
        </S.SpecieList>
        <S.FiltersGrid>
          {!isMobile && (
            <>
              <S.FiltersContent>
                <FilterCard title="Porte" options={filters.size} />
                <FilterCard title="Sexo" options={filters.sex} />
              </S.FiltersContent>
            </>
          )}
          <S.PetCardContent>
            <S.PetCardList>
              {!isPetLoading ? (
                <>
                  {petsList.length <= 0 ? (
                    "Nenhum pet encontrado."
                  ) : (
                    <>
                      {petsList.map((response, key) => (
                        <PetCard
                          key={key}
                          id={response.id}
                          pet={response.name}
                          sex={response.sex}
                          ong={response.ong}
                          profilePicture={response.profilePicture}
                        />
                      ))}
                    </>
                  )}
                </>
              ) : (
                <>
                  <PetLoader count={5} />
                </>
              )}
            </S.PetCardList>
          </S.PetCardContent>
        </S.FiltersGrid>
      </S.Main>
    </Layout>
  );
};
