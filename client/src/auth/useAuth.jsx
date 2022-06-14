import { useEffect, useState, useRef } from 'react';
import axios from 'axios';

function useAuth(code) {
  const [auth, setAuth] = useState({});
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();
  const active = useRef({});

  useEffect(() => {
    if (active.current.code !== code) {
      active.current = {
        code,
        request: axios.post('http://localhost:3001/login', { code }),
      };
    }
    active.current.request
      .then(({ data }) => {
        setAuth(data);
        setAccessToken(data.accessToken);
        setRefreshToken(data.refreshToken);
        setExpiresIn(data.expiresIn);
        window.history.pushState({}, null, '/');
      })
      .catch((err) => {
        window.location = '/';
      });
  }, [code]);

  useEffect(() => {
    if (!refreshToken || !expiresIn) return;
    const interval = setInterval(() => {
      axios
        .post('http://localhost:3001/refresh', {
          refreshToken,
        })
        .then((res) => {
          setAccessToken(res.data.accessToken);
          setExpiresIn(res.data.expiresIn);
        })
        .catch(() => {
          window.location = '/';
        });
    }, (expiresIn - 60) * 1000);

    return () => clearInterval(interval);
  }, [refreshToken, expiresIn]);

  return auth && accessToken;
}

export default useAuth;