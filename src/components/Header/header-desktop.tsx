import React from "react";

import * as S from "./styles";

import Icon from "../../utils/icons.config";

export const HeaderDesktop: React.FC = () => {
  return (
    <>
      <S.Header>
        <S.HeaderWrapper>
          <S.HeaderContent>
            <S.HeaderLogo>
              <img src="/logo.svg" alt="Logo do site" className="w-40" />
            </S.HeaderLogo>
            <S.HeaderLinks>
              <S.HeaderLink>
                <Icon.SiDatadog className="text-gray-600" size={20} />
                <span className="text-sm font-medium">Animais perdidos</span>
              </S.HeaderLink>
              <S.HeaderLink>
                <Icon.AiOutlineTags className="text-gray-600" size={20} />
                <span className="text-sm font-medium">ID Tags</span>
              </S.HeaderLink>
              <S.HeaderActions>
                <span className="text-sm font-medium">Começar agora</span>
              </S.HeaderActions>
            </S.HeaderLinks>
          </S.HeaderContent>
        </S.HeaderWrapper>
      </S.Header>
    </>
  );
};
