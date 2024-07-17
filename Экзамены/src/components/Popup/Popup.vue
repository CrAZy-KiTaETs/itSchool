<script>
import { useStore } from 'vuex';
export default {
  name: "PopupComponent",
  setup(props, { emit }) {
    const closePopup = () => {
      emit("changePopupInfo", { active: false, category: "close", where: 'expenses'  });
    };

    const store = useStore()

    const add = () => {
        store.commit("addExpenses", {categoryName: "Продукты", amountToAdd: 10})
    }
    return { closePopup, add };
  },
  props: {
    popupInfo: {
      type: Object,
    },
  },
};
</script>

<template>
  <div class="popup">
    <div class="background" @click="closePopup"></div>
    <div class="popup_wrapper">
      <div class="popup_wrapper-header">
        <div class="popup_wrapper-wallet">Мой счет</div>
        <div class="popup_wrapper-category">{{ popupInfo.category }}</div>
      </div>
      <div class="popup_wrapper-money">
        <p>Расход {{popupInfo.where}}</p>
        <p>1211</p>
      </div>
      <div class="popup_wrapper-notes">
        <input type="text" placeholder="Заметки..." />
      </div>
      <ul>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
        <span>9</span>
        <span>0</span>
        <span>Del</span>
        <span @click="add">Go</span>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@import "./Popup.scss";
</style>