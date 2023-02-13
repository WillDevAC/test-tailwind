import React, { useContext, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import { SpecieCard } from "../../components/Cards";
import { FilterCard } from "../../components/Cards/FilterCard";
import { FilterContext } from "../../contexts/filter.context";
import { ICategories } from "../../interfaces/categories";
import { Layout } from "../../layout";

import * as S from "./styles";

interface IHomeProps {
  filters: ICategories;
}

export const Home: React.FC<IHomeProps> = ({ filters }) => {
  const { selectedOptions } = useContext(FilterContext);

  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    console.log(selectedOptions);
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
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              <div className="flex justify-center p-3 h-80 bg-white border-2 rounded-md">
                <div className="w-full h-2/4">
                  <img src="https://scontent.frbr2-1.fna.fbcdn.net/v/t1.6435-9/30652433_1225707757560853_4849660582816645120_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9267fe&_nc_eui2=AeH2ZtSQ7MirymdGNf59MVoO48RIAJ55PKjjxEgAnnk8qK4Ikk0_Fy2t_wMNo3Sj1_8qvGHJedE5HPmE8Nzcvpux&_nc_ohc=IJujVrWjgUUAX903JWi&_nc_ht=scontent.frbr2-1.fna&oh=00_AfDfhasrJYLHBBknxP73X5baZ72KurlpzoP1A0YCqdLs7g&oe=6411492C" alt="" className="w-full h-full object-cover bg-center rounded-md"/>
                </div>
              </div>
              <div className="flex justify-center p-3 h-80 bg-white border-2 rounded-md">
                <div className="w-full h-2/4">
                  <img src="https://scontent.frbr2-1.fna.fbcdn.net/v/t1.6435-9/47200263_2235351546498099_5770323450195345408_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGNOTpZVfW-q_CqRTQF-3_monha9V9eP8OieFr1X14_w3sWLifcejGb06MVAzOBcoBhZzy2VbbEQ3Rbmzk52fyJ&_nc_ohc=1E2JgsusmZAAX_2ykQY&_nc_ht=scontent.frbr2-1.fna&oh=00_AfDygc_b9TVN4dkcEQFCuOWbUWl-1qySLU7OBrZqiofWbg&oe=64112702" alt="" className="w-full h-full object-cover bg-center rounded-md"/>
                </div>
              </div>
              <div className="flex justify-center p-3 h-80 bg-white border-2 rounded-md">
                <div className="w-full h-2/4">
                  <img src="https://scontent.frbr2-1.fna.fbcdn.net/v/t31.18172-8/10688434_517931648344167_6949550487631113186_o.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEiT_gF9vDEIhgDMMAUMuEXKunCeydMcPkq6cJ7J0xw-YF22sGCqAezZo_OCRRoskUV1o3FPWg_7zFXFvQUrBhq&_nc_ohc=4FEp8je6bHsAX8vL2xX&tn=xlxH099B-VM9NKnS&_nc_ht=scontent.frbr2-1.fna&oh=00_AfA52yhnNjU55amn6JRqxo5Cajpvs_rHALpuLyKklIOgrA&oe=6411454E" alt="" className="w-full h-full object-cover bg-center rounded-md"/>
                </div>
              </div>
            </div>
          </div>
        </S.FiltersGrid>
      </S.Main>
    </Layout>
  );
};
