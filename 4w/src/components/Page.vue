<template>
  <div class="page">
    <form action="" @submit.prevent="sendForm">
      <input
        type="text"
        placeholder="Name"
        class="inp"
        v-model="name"
        required
      />
      <input
        type="text"
        placeholder="SecondName"
        class="inp"
        v-model="secondName"
        required
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="password"
        class="inp"
        v-model="password"
        required
      />
      <input
        type="password"
        name="confirm_password"
        id="confirm_password"
        class="inp"
        placeholder="confirm password"
        v-model="passwordConfirm"
        required
      />
      <input
        type="email"
        name="email"
        id="email"
        class="inp"
        placeholder="email"
        v-model="email"
        required
      />
      <div class="radio-wrapper">
        <input
          type="radio"
          name="radio"
          value="male"
          class="radio"
          id="male"
          v-model="gender"
          required
        />
        <label for="male">Male</label>
        <input
          type="radio"
          name="radio"
          value="female"
          class="radio"
          id="female"
          v-model="gender"
          required
        />
        <label for="female">Female</label>
      </div>
      <textarea
        name="interests"
        class="interests"
        cols="30"
        rows="10"
        placeholder="interests"
        v-model="interests"
      ></textarea>
      <input type="submit" value="Registration" />
      <p>{{ wrong }}</p>
    </form>
  </div>
</template>

<script>
export default {
  name: "PageComp",
  props: {

  },
  data() {
    return {
      name: "",
      secondName: "",
      password: "",
      passwordConfirm: "",
      email: "",
      gender: "",
      interests: "",
      wrong: "",
    };
  },
  methods: {
    sendForm() {
      const validPassword = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
      const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!validPassword.test(this.password)) {
        return (this.wrong = "Ошибка в пароле");
      }
      if (this.password !== this.passwordConfirm) {
        console.log(this.password, this.passwordConfirm);
        return (this.wrong = "Пароли не соответсвуют");
      }
      if (!validEmail.test(this.email)) {
        return (this.wrong = "Ошибка в имейле, пример: example@mail.ru");
      }

      let user = {
        name: this.name,
        secondName: this.secondName,
        password: this.password,
        email: this.email,
        gender: this.gender,
        interests: this.interests,
      };

      let users = [];
      let savedUsers = JSON.parse(localStorage.getItem("users"));
      if (savedUsers) {
        users = savedUsers;
        users.push(user);
      }

      localStorage.setItem("users", JSON.stringify(users));
      ready(false)
    },
  },
};
</script>

<style>
.page {
  border: 1px solid yellow;
  margin: 1rem 0;
  height: 100%;
  padding: 1rem;
}
.list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
}

form {
  border: 1px solid black;
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: auto;
}

.inp {
  border: 1px solid black;
  padding: 0.3rem 0.5rem;
  background-color: #f5f5f5;
}

.inp:focus,
textarea:focus {
  outline: none;
}
</style>