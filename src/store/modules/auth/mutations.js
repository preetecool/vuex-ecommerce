export default {
  authenticateUser(state, payload) {
    state.isLoggedIn = payload.isAuthenticated;
  },
};
