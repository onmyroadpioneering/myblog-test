<template>
  <div id="d">
    <input type="text" v-model="todo.name" />
    <br />
    <div id="content">
      {{ todo.details }}
    </div>
    <div id="butt">
        <button>保存</button>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  props: {
    id: String,
  },
  computed: {
    todo() {
      if (this.id) {
        return this.$store.state.todos.find((item) => {
          return item.name == this.id;
        });
      } else {
        return this.$store.state.todos.find((item) => {
          return item.name == this.$store.getters.todo[0];
        });
      }
    },
  },
};
</script>

<style scoped>
#d {
  position: relative;
  height: 100%;
  margin-left: 5%;
}
input {
  margin-top: 5%;
  border: 0;
  height: 30px;
  width: 100%;
  border-bottom: 1px solid;
  line-height: 30px;
  vertical-align: middle;
  font-size: 30px;
  outline: none;
}
#butt {
  position: relative;
  bottom: 0%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
button{
    border-radius: 3px;
    border-color: rgb(122, 253, 253);
    background-color: rgb(122, 253, 253);
    box-shadow: 2px 2px 2px 1px rgb(181, 201, 207);
    font-size:15px;
}
button:hover{
    background-color: aqua;
    box-shadow: 2px 2px 2px 1px rgb(120, 194, 216);
}
#content {
  height: 80%;
  
}
</style>