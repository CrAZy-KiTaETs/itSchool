<script>
export default {
  name: "userInfo",
  props: {
    user: Object
  }
};

</script>

<template>
    <li class="user">
      <h3>{{ user.name }} {{ user.secondName }}</h3>
      <p>{{ user.email }}</p>
      <p>Gender - {{ user.gender }}</p>
      <p>Interests - {{ user.interests }}</p>
    </li>
</template>


<style >
    .user {
        display: flex;
        flex-direction: column;
        gap: .3rem;
        padding: 1rem;
        border: 1px solid white;
    }
    

</style>