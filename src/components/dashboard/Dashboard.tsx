/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth } from '../../contexts/auth';
import fetchUserInfo from '../../services/fetchUserInfo';
import getUserInfoFromStorage from '../../services/getUserInfoFromStorage';

function Dashboard() {
  const [userFound, setUserFound] = useState(true);
  const { user, setUser } = useAuth();

  useEffect(() => {
    async function fetchUser() {
      const data = getUserInfoFromStorage();
      if (!data?.account_id) setUserFound(false);
      if (data) {
        const userInfo = await fetchUserInfo(data.access_token, data.account_id);
        setUser(userInfo);
      }
    }

    fetchUser();
  }, []);

  if (!userFound) {
    return (
      <Redirect to="/" />
    );
  }
  return (
    <div>
      {user?.email}
    </div>
  );
}

export default Dashboard;
