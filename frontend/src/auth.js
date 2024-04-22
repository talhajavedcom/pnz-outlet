export const setUserAuthentication = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('authenticated', 'true');
  };