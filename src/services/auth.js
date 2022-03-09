export const authenticate = (user) => {
  if (typeof window !== 'undefined') {
    const jwt = {
      user,
      isAuth: true,
    };
    localStorage.setItem('jwt', JSON.stringify(jwt));
  }
};

export const isAuthenticated = () => {
  if (typeof window == 'undefined') {
    return false;
  }

  if (localStorage.getItem('jwt')) {
    return JSON.parse(localStorage.getItem('jwt'));
  } else {
    return false;
  }
};

export const unAuthenticate = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('jwt');
  }
};
