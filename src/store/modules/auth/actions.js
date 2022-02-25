export default {
  login(context) {
    context.commit({
      type: 'authenticateUser',
      isAuthenticated: true,
    });
  },
  logout(context) {
    context.commit({
      type: 'authenticateUser',
      isAuthenticated: false,
    });
  },
};
