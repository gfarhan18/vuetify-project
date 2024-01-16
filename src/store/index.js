// store/index.js
import { createStore } from "vuex";

export default createStore({
  state: {
    users: [],
    darkTheme: true,
    devices: [],
  },
  mutations: {
    toggleTheme(state) {
        console.log(state);
      state.darkTheme = !state.darkTheme;
    },
    addUser(state, user) {
      state.users.push(user);
    },
    setUserToDelete(state, userId) {
      state.userToDelete = userId;
    },
    deleteUser(state, userId) {
      state.users = state.users.filter((user) => user.id !== userId);
    },
    addDevice(state, device) {
      state.devices.push(device);
    },
    deleteDevice(state, deviceId) {
      state.devices = state.devices.filter((device) => device.id !== deviceId);
    },
  },
});
