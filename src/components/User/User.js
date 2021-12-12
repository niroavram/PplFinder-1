import React, { useEffect, useState } from "react";
import Text from "components/Text";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import * as S from "./style";

const User = ({ user, index, isFavorite, likeUser, unLikeUser }) => {
  const [hoveredUserId, setHoveredUserId] = useState();

  const handleMouseEnter = (index) => {
    setHoveredUserId(index);
  };

  const handleMouseLeave = () => {
    setHoveredUserId();
  };

  return (
    <S.User onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
      <S.UserPicture src={user?.picture.large} alt="" />
      <S.UserInfo>
        <Text size="22px" bold>
          {user?.name.title} {user?.name.first} {user?.name.last}
        </Text>
        <Text size="14px">{user?.email}</Text>
        <Text size="14px">
          {user?.location.street.number} {user?.location.street.name}
        </Text>
        <Text size="14px">
          {user?.location.city} {user?.location.country}
        </Text>
      </S.UserInfo>
      {isFavorite ? (
        <S.IconButtonWrapper isVisible={true}>
          <IconButton onClick={() => unLikeUser(user)}>
            <FavoriteIcon color="error" />
          </IconButton>
        </S.IconButtonWrapper>
      ) : (
        <S.IconButtonWrapper isVisible={index === hoveredUserId}>
          <IconButton onClick={() => likeUser(user)}>
            <FavoriteIcon color="error" />
          </IconButton>
        </S.IconButtonWrapper>
      )}
    </S.User>
  );
};

export default User;
