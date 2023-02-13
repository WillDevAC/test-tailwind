import React, { useContext, useEffect, useState } from "react";

import { TUser } from "../../interfaces/user";
import { AuthContext } from "../../contexts/auth.context";
import { useRouter } from "next/router";

import Icon from "../../utils/icons.config";

import * as S from "./styles";
import { UserOptions } from "../Cards";

export const HeaderDesktop: React.FC = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const [user, setUser] = useState<TUser>({} as TUser);

  const router = useRouter();

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      const credentials = localStorage.getItem("nextauth-credentials");
      const user: TUser = JSON.parse(credentials || "{}");
      setUser(user);
    }
  }, []);

  return (
    <>
      <S.Header>
        <S.HeaderWrapper>
          <S.HeaderContent>
            <S.HeaderLogo>
              <img src="/logo.svg" alt="Logo do site" className="w-40" />
            </S.HeaderLogo>
            
            <S.HeaderLinks>
              <>
                <S.HeaderLink>
                  <Icon.SiDatadog className="text-gray-600" size={20} />
                  <span className="text-sm font-medium">Animais perdidos</span>
                </S.HeaderLink>
                <S.HeaderLink>
                  <Icon.AiOutlineTags className="text-gray-600" size={20} />
                  <span className="text-sm font-medium">ID Tags</span>
                </S.HeaderLink>
                <div className="flex items-center">
                {isAuthenticated ? (
                  <>
                    <div className="flex items-center cursor-pointer" onClick={() => setIsDropdownVisible(!isDropdownVisible)}>
                      <div className="pl-3">
                        {user.profilePicture && (
                          <S.Avatar src={user.profilePicture} />
                        )}
                        {!user.profilePicture && <S.Avatar src="/gravatar.png" />}
                      </div>
                      <div className="pl-3">
                        <Icon.MdKeyboardArrowDown size={15} />
                      </div>
                    </div>
                    { isDropdownVisible && <UserOptions/> }
                  </>
                ) : (
                  <S.HeaderActions>
                    <span
                      className="text-sm font-medium"
                      onClick={() => router.push("/auth/login")}
                    >
                      Começar agora
                    </span>
                  </S.HeaderActions>
                )}
                </div>
              </>
            </S.HeaderLinks>
          </S.HeaderContent>
        </S.HeaderWrapper>
      </S.Header>
    </>
  );
};
