import React, { useCallback } from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import { usePeopleFetch } from "hooks";
import * as S from "./style";
import Filter from "components/Filter";

const natKey = "nat";
const genderKey = "gender";

const Home = ({ likeUser, unLikeUser, favoriteUsers }) => {
  const { users, isLoading, setFilter, filter } = usePeopleFetch();

  const handleChangeFilter = useCallback(
    (key, insideKey) => {
      setFilter({
        ...filter,
        [key]: {
          ...filter[key],
          [insideKey]: {
            ...filter[key][insideKey],
            checked: !filter[key][insideKey].checked,
          },
        },
      });
    },
    [filter]
  );

  return (
    <S.Home>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            PplFinder
          </Text>
        </S.Header>
        <Filter
          filterItems={filter.nat}
          filterType={natKey}
          handleChangeFilter={handleChangeFilter}
        />
        <Filter
          filterItems={filter.gender}
          filterType={genderKey}
          handleChangeFilter={handleChangeFilter}
        />
        <UserList
          users={users}
          isLoading={isLoading}
          filter={filter}
          handleChangeFilter={handleChangeFilter}
          unLikeUser={unLikeUser}
          likeUser={likeUser}
          favoriteUsers={favoriteUsers}
        />
      </S.Content>
    </S.Home>
  );
};

export default Home;
