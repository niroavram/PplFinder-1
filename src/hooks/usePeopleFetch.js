import { useState, useEffect } from "react";
import {countries,gender} from "../pages/Home/filterData"
import axios from "axios";

export const usePeopleFetch = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState({
    nat: countries,
    gender: gender,
  });

  const filters = async () => {
    let filterByUsers = "";
    let gender = Object.values(filter.gender);
    let countries = Object.values(filter.nat);
    if (gender.some((e) => e.checked) && !gender.every((e) => e.checked)) {
      filterByUsers += "&gender=";
      gender.map((sex) => {
        if (sex.checked) {
          filterByUsers += sex.key;
        }
        return sex;
      });
    }
    if (
      countries.some((e) => e.checked) &&
      !countries.every((e) => e.checked)
    ) {
      filterByUsers += "&nat=";
      countries.map((country) => {
        if (country.checked) {
          filterByUsers += country.key + ",";
        }
        return country;
      });
    }
    fetchUsers(filterByUsers);
  };

  useEffect(() => {
    filters();
  }, [filter]);

  async function fetchUsers(filterByUsers) {
    setIsLoading(true);
    const response = await axios.get(`https://randomuser.me/api/?results=25&page=1${filterByUsers}`);
    setIsLoading(false);
    setUsers(response.data.results);
  }

  return { users, isLoading,setFilter,filter, fetchUsers };
};
