import { createStore } from "vuex";
import kino from "@/assets/gifs/kino.gif";
import kafe from "@/assets/gifs/kafe.gif";
import cart from "@/assets/gifs/cart.gif";
import car from "@/assets/gifs/car.gif";
import heart from "@/assets/gifs/heart.gif";
import gift from "@/assets/gifs/gift.gif";
const store = createStore({
  state: {
    // доходы
    // сумма дохода, сумма трат
    // массив с категориями
    categories: [
      { name: "Продукты", amount: 0, icon: cart, color: "#1C546F" },
      { name: "Кафе", amount: 2, icon: kafe, color: "#240046" },
      { name: "Досуг", amount: 3, icon: kino, color: "#ff7b00" },
      { name: "Транспорт", amount: 0, icon: car, color: "#7f5539" },
      { name: "Здоровье", amount: 3, icon: heart, color: "#004b23" },
      { name: "Подарки", amount: 0, icon: gift, color: "#fb6f92" },
      { name: "Семья", amount: 0, icon: "", color: "#006494" },
      { name: "Покупки", amount: 0, icon: "", color: "#006494" },
    ],
    count: 0,
    prevValue: [],
    activePage: "expenses",
  },
  mutations: {
    increment(state) {
      state.prevValue.push(state.count);
      state.count++;
      localStorage.setItem("count", JSON.stringify(state.count));
    },
    decrement(state) {
      state.prevValue.push(state.count);
      state.count--;
      localStorage.setItem("count", JSON.stringify(state.count));
    },
    setValue(state, lox) {
      state.prevValue.push(state.count);
      state.count = lox;
      localStorage.setItem("count", JSON.stringify(state.count));
    },
    changePage(state, newPage) {
      console.log("asdsaddas", newPage);
      state.activePage = newPage;
    },
     addExpenses(state,  {categoryName, amountToAdd}) {
      console.log(categoryName, amountToAdd)
      const cet = state.categories
      cet.forEach(category => {
        console.log(category.amount)
        if (category.name === categoryName) {
          category.amount += amountToAdd;
        console.log('asdadasdasd')

        }
      });
    }

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
    activePage: (state) => state.activePage,
    categories: (state) => state.categories
  },
});

export default store;
