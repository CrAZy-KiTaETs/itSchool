import { createStore } from "vuex";

const store = createStore({
  state: {
    доходы
    сумма дохода, сумма трат
    массив с категориями
    count: 0,
    prevValue: [],
  },
  mutations: {
    increment(state) {
      state.prevValue.push(state.count);
      state.count++;
      localStorage.setItem("count", JSON.stringify(state.count))
    },
    decrement(state) {
      state.prevValue.push(state.count);
      state.count--;
      localStorage.setItem("count", JSON.stringify(state.count))

    },
    setValue(state, lox) {
      state.prevValue.push(state.count);
      state.count = lox;
      localStorage.setItem("count", JSON.stringify(state.count))

    },
  },
  actions: {
    async incrementAfterDelay({ commit }) {
      await new Promise((res) => setTimeout(res, 1000));
      commit("increment");
    },
    async getData({ commit }) {
      setTimeout(() => {
        const countFromBack = JSON.parse(localStorage.getItem("count"));
        if (countFromBack) {
          commit("setValue", countFromBack);
        }
      });
    },
  },
  getters: {
    count: (state) => state.count,
    history: (state) => state.prevValue,
  },
});

export default store;
