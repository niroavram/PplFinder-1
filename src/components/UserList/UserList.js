import React from "react";
import Spinner from "components/Spinner";
import * as S from "./style";
import User from "components/User";


const UserList = ({ users, isLoading, favoriteUsers,likeUser, unLikeUser}) => {

  return (
    <S.UserList>
      <S.List>
        {users.map((user, index) => {
          return (
           <User  user={user} index={index} key={index}  favoriteUsers={favoriteUsers}  unLikeUser={unLikeUser} likeUser={likeUser}  />
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
