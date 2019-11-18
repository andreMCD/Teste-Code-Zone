import React from "react";
import PropTypes from "prop-types";

import * as S from "./styled";

const PostItem = ({ title, date, timeToRead, description }) => (
  <S.PostItemWrapper>
    <S.PostItemContainer>
      <S.PostItemTitle>{title}</S.PostItemTitle>
      <S.PostItemDate>
        {date} - {timeToRead} de leitura
      </S.PostItemDate>
      <S.PostItemDescription>{description}</S.PostItemDescription>
    </S.PostItemContainer>
    <S.PostItemContainer>
      <S.PostItemTitle>{title}</S.PostItemTitle>
      <S.PostItemDate>
        {date} - {timeToRead} de leitura
      </S.PostItemDate>
      <S.PostItemDescription>{description}</S.PostItemDescription>
    </S.PostItemContainer>
  </S.PostItemWrapper>
);

PostItem.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.string.isRequired
};

export default PostItem;
