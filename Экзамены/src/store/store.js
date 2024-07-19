import { createStore } from "vuex";
// import kino from "@/assets/gifs/kino.gif";
// import kafe from "@/assets/gifs/kafe.gif";
// import cart from "@/assets/gifs/cart.gif";
// import car from "@/assets/gifs/car.gif";
// import heart from "@/assets/gifs/heart.gif";
// import gift from "@/assets/gifs/gift.gif";

import cart from "@/assets/images/cart-w.png";
import pizza from "@/assets/images/pizza-w.png";
import kino from "@/assets/images/kino-w.png";
import car from "@/assets/images/car-w.png";
import heart from "@/assets/images/heart-w.png";
import gift from "@/assets/images/gift-w.png";
import family from "@/assets/images/family-w.png";
import buy from "@/assets/images/buy-w.png";
import salary from "@/assets/images/salary-w.png";
import earn from "@/assets/images/earn-w.png";

const localCategories = JSON.parse(localStorage.getItem("categories"));
const categories = localCategories
  ? localCategories
  : [
      {
        name: "Продукты",
        amount: 0,
        icon: cart,
        color: "#0077b6",
        activeColor: "#48cae4",
      },
      {
        name: "Кафе",
        amount: 0,
        icon: pizza,
        color: "#231942",
        activeColor: "#9f86c0",
      },
      {
        name: "Досуг",
        amount: 0,
        icon: kino,
        color: "#654a02",
        activeColor: "#ffba08",
      },
      {
        name: "Транспорт",
        amount: 0,
        icon: car,
        color: "#540b0e",
        activeColor: "#9e2a2b",
      },
      {
        name: "Здоровье",
        amount: 0,
        icon: heart,
        color: "#244834",
        activeColor: "#4c956c",
      },
      {
        name: "Подарки",
        amount: 0,
        icon: gift,
        color: "#322446",
        activeColor: "#6a4c93",
      },
      {
        name: "Семья",
        amount: 0,
        icon: family,
        color: "#0e373f",
        activeColor: "#1f7a8c",
      },
      {
        name: "Покупки",
        amount: 0,
        icon: buy,
        color: "#003554",
        activeColor: "#00a6fb",
      },
    ];

const localIncomeCategories = JSON.parse(
  localStorage.getItem("incomeCategories")
);
const incomeCategories = localIncomeCategories
  ? localIncomeCategories
  : [
      {
        name: "Зарплата",
        amount: 0,
        icon: salary,
        color: "#4c3ab2",
        activeColor: "#6e54ff",
      },
      {
        name: "Фриланс",
        amount: 0,
        icon: earn,
        color: "#9e3f1a",
        activeColor: "#eb5e28",
      },
      {
        name: "Подарили",
        amount: 0,
        icon: gift,
        color: "#470d05",
        activeColor: "#941b0c",
      },
    ];

console.log(
  localCategories,
  "localCategorieslocalCategorieslocalCategorieslocalCategories"
);

const store = createStore({
  state: {
    categories: categories,
    incomeCategories: incomeCategories,
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
      state.activePage = newPage;
    },
    addExpenses(state, { categoryName, amountToAdd }) {
      state.categories.forEach((category) => {
        if (category.name === categoryName) {
          category.amount += amountToAdd;
        }
      });
      localStorage.setItem("categories", JSON.stringify(state.categories));

      console.log(state.incomeCategories, "Добавлены траты");
    },
    addIncome(state, { categoryName, amountToAdd }) {
      state.incomeCategories.forEach((category) => {
        if (category.name === categoryName) {
          category.amount += amountToAdd;
        }
      });
      localStorage.setItem(
        "incomeCategories",
        JSON.stringify(state.incomeCategories)
      );

      console.log(state.incomeCategories, "Добавлены пополнения");
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
    activePage: (state) => state.activePage,
    categories: (state) => state.categories,
    incomeCategories: (state) => state.incomeCategories,
    expensesSum: (state) =>
      state.categories.reduce((sum, category) => sum + category.amount, 0),
    incomeSum: (state) =>
      state.incomeCategories.reduce(
        (sum, category) => sum + category.amount,
        0
      ),
    mainSum: (state) => {
      const totalIncome = state.incomeCategories.reduce(
        (sum, category) => sum + category.amount,
        0
      );
      const totalExpenses = state.categories.reduce(
        (sum, category) => sum + category.amount,
        0
      );
      return totalIncome - totalExpenses;
    },
  },
});

export default store;
