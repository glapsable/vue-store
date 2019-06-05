<template>
<!--  <div id="store">-->
<!--    <AddTodo v-on:add-todo="addTodo" />-->
<!--    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />-->
<!--  </div>-->
  <div class="home">
    <CartBox v-bind:cartList="cartList" />
    <div class="home__cards-wrapper">
        <ShopCard v-bind:shopItem="shopItem" v-bind:key="shopItem.id" v-for="shopItem in shopItems"/>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import CartBox from '../components/CartBox';
  import ShopCard from '../components/ShopCard';

  export default {
    name: 'Home',
    components: {
      CartBox,
      ShopCard
    },
    data() {
      return {
        cartList: [],
        shopItems: [
          {
            id: 1,
            photo: 'https://thedesignlove.com/wp-content/uploads/2017/06/152-Gift-Shop-Business-Card-Mockup.jpg',
            title: 'Elo 1',
            description: 'yoyoyoyoyoyo'
          },
          {
            id: 2,
            photo: 'https://thedesignlove.com/wp-content/uploads/2017/06/152-Gift-Shop-Business-Card-Mockup.jpg',
            title: 'Elo 2',
            description: 'yoyoyoyoyoyo'
          },
          {
            id: 3,
            photo: 'https://thedesignlove.com/wp-content/uploads/2017/06/152-Gift-Shop-Business-Card-Mockup.jpg',
            title: 'Elo 3',
            description: 'yoyoyoyoyoyo'
          },
          {
            id: 4,
            photo: 'https://thedesignlove.com/wp-content/uploads/2017/06/152-Gift-Shop-Business-Card-Mockup.jpg',
            title: 'Elo 4',
            description: 'yoyoyoyoyoyo'
          },
          {
            id: 5,
            photo: 'https://thedesignlove.com/wp-content/uploads/2017/06/152-Gift-Shop-Business-Card-Mockup.jpg',
            title: 'Elo 5',
            description: 'yoyoyoyoyoyo'
          },
          {
            id: 6,
            photo: 'https://thedesignlove.com/wp-content/uploads/2017/06/152-Gift-Shop-Business-Card-Mockup.jpg',
            title: 'Elo 6',
            description: 'yoyoyoyoyoyo'
          }
        ]
      }
    },
    methods: {
      deleteTodo(id) {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
          .then(res => this.todos = this.todos.filter(todo => todo.id !== res.id))
          // eslint-disable-next-line
          .catch(err => console.log(err))
      },
      addTodo(newTodo) {
        const { title, completed } = newTodo;

        axios.post('https://jsonplaceholder.typicode.com/todos', {
          title,
          completed
        })
          .then(res => {
            this.todos = [res.data, ...this.todos];
            // eslint-disable-next-line
            console.log(res);
          })
          // eslint-disable-next-line
          .catch(err => console.log(err));

      }
    },
    created() {
      axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(res => this.todos = res.data)
        // eslint-disable-next-line
        .catch(err => console.log(err));
    }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/styles/variables';

  .home {
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media only screen and (min-width: $rwd-small) {
      flex-direction: row;
      align-items: flex-start;
    }
  }
  .home__cards-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
