import React from "react";
import Icon from "../../utils/icons.config";

import * as S from "./styles";

export const HeaderMobile: React.FC = () => {
  return (
    <>
      <S.Header>
        <S.HeaderWrapper>
          <S.HeaderContent>
            <S.HeaderLogo>
              <img src="/logo.svg" alt="Logo do site" className="w-40" />
            </S.HeaderLogo>
            <S.HeaderLinks>
              <Icon.FcOnlineSupport size={23}/>
            </S.HeaderLinks>
          </S.HeaderContent>
        </S.HeaderWrapper>
      </S.Header>
    </>
  );
};
