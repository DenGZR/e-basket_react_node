const auth = {
    logout: () => { localStorage.removeItem('token'); localStorage.removeItem('id'); localStorage.removeItem('name'); localStorage.removeItem('isSuper')},
    set: (key, value) => localStorage.setItem(key, value),
    get: (key) => localStorage.getItem(key),
    isLogin: () => !!localStorage.getItem('token'),
    isSuper: () => JSON.parse(localStorage.getItem('isSuper')),
};

export default auth;