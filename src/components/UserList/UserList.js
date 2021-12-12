import React, { useCallback } from "react";
import Spinner from "components/Spinner";
import * as S from "./style";
import User from "components/User";


const UserList = ({ users, isLoading, favoriteUsers,likeUser, unLikeUser}) => {

    const checkIsLike = useCallback((id) => {
      let isLiker = false;
      if (favoriteUsers.length > 0) {
        isLiker =
          favoriteUsers.filter((u) => u.login.uuid ===id).length > 0;
      }
      return isLiker;
    },)

  return (
    <S.UserList>
      <S.List>
        {users.map((user, index) => {
          return (
           <User  user={user} index={index} key={index}  isFavorite={checkIsLike(user.login.uuid)}  unLikeUser={unLikeUser} likeUser={likeUser}  />
          );
        })}
        {isLoading && (
          <S.SpinnerWrapper>
            <Spinner color="primary" size="45px" thickness={6} variant="indeterminate" />
          </S.SpinnerWrapper>
        )}
      </S.List>
    </S.UserList>
  );
};

export default UserList;
