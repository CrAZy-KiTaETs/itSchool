<template lang="en">
    <div class="myComponent">
        <!-- <h1>
          ohiao!
          {{text}}
          <input v-model="inputVal" type="text">
          <p>text - {{inputVal}}</p>
          <p v-if="seen">это текс видно </p>
          <p v-else>это second</p>
          <button @click="toggleSeen">CLICK</button> 
          <p v-show="seen">AAAA</p>
          <div>
            <ul>
              <li v-for="item in items" v-bind:key="item.id">
                <p>{{item.id}}</p>
                <p>{{item.name}}</p>
              </li>
            </ul>
          </div>
        </h1>     -->
        <h1>Список задач</h1>
        <div class="wrapper">
          <div class="wrapper__inp">
            <input v-model="inpValName" placeholder="Название задачи" type="text">
            <input v-model="inpValText" name="story" >
            <button @click="addTask">Добавить</button>
          </div>
          <ul>
            <li v-for="i in items" :key="i.id" >
              <p>{{i.name}}</p>
              <p>{{i.text}}</p>
              <button @click="deleteTask(i.id)">
                delete
              </button>
            </li>
          </ul>
        </div>
    </div>
</template>
<script>
export default {
  name: "MyComponent",
  data() {
    return {
      inpValName: "",
      inpValText: "",
      // seen: true,
      items: [
      ],
    };
  },
  methods: {
    addTask() {
      if((this.inpValName && this.inpValText).trim() != '' ) {
        this.items.push({id: this.items.length, name: this.inpValName, text: this.inpValText})
      }
    },
    deleteTask(id) {
      let a = this.items.find((x) => x == id)
      console.log(id, this.items,'del', a)
      this.items = this.items.filter((x) => x.id !== id)
    }
  }
  // name: "MyComponent",
  // props: {
  //   text: String,
  // },
  // data() {
  //   return {
  //     inputVal: "",
  //     seen: true,
  //     items: [
  //       { id: 1, name: "name1" },
  //       { id: 2, name: "name1" },
  //       { id: 3, name: "name1" },
  //     ],
  //   };
  // },
  // methods: {
  //   toggleSeen() {
  //     this.seen = !this.seen;
  //   },
  // },
};
</script>
<style lang=""></style>
