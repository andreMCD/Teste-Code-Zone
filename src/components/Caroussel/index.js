import React from "react";

import catOne from "../../images/catOne.png";

import * as S from "./styled";

const Caroussel = props => {
  return (
    <S.CarousselWrapper>
      <S.CarousselContainerImg>
        <img src={catOne} alt="gatinho fofinho!" />
      </S.CarousselContainerImg>
    </S.CarousselWrapper>
  );
};
export default Caroussel;
