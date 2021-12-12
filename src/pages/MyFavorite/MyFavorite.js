import React from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import * as S from "./style";

const MyFavorite = ({ favoriteUsers,isLoading,likeUser, unLikeUser }) => {

    return (
    <S.MyFavorite>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            My Favorites
          </Text>
        </S.Header>  
        <UserList users={favoriteUsers} isLoading={isLoading} favoriteUsers={favoriteUsers}  unLikeUser={unLikeUser} likeUser={likeUser}  />
      </S.Content>
    </S.MyFavorite>
  );
};

export default MyFavorite;
