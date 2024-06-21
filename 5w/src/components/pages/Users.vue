<script>
import User from "../User";

export default {
  name: "usersPage",
  components: {
    User,
  },
  data() {
    return {
      users: [],
      filter: [
        { value: "name", text: "Имени" },
        { value: "secondName", text: "Фамилии" },
        { value: "email", text: "Имейлу" },
      ],
      selectedFilterMethod: "name",
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      let usersFromLC = JSON.parse(localStorage.getItem("users"));
      this.users = usersFromLC;
    },
    sortUsers(filterMethod) {
      if (filterMethod === "name") {
        this.users.sort((a, b) => a.name.localeCompare(b.name));
      }
      if (filterMethod === "secondName") {
        this.users.sort((a, b) => a.secondName.localeCompare(b.secondName));
      }

      if (filterMethod === "email") {
        this.users.sort((a, b) => a.email.localeCompare(b.email));
      }
      console.log(this.users);
    },
    handleChange(e) {
      console.log(e);
      this.selectedFilterMethod = e;
      this.sortUsers(e);
    },
  },
};
</script>

<template>
  <div class="users">
    <div class="filter-box">
      Филтрация по -
      <select
        name="userFilter"
        id="filter"
        @change="handleChange($event.target.value)"
      >
        <option v-for="(text, i) in filter" :key="i" :value="text.value">
          {{ text.text }}
        </option>
      </select>
    </div>
    <ul class="users-list">
      <User v-for="(user, key) in users" :key="key" v-bind:user="user" />
    </ul>
  </div>
</template>


<style scoped>
.users {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.filter-box {
  display: flex;
}

.users-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}
</style>