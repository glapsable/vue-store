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
  import unsplash from '../api/unsplash';
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
        shopItems: []
      }
    },
    methods: {
      // deleteTodo(id) {
      //   axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      //     .then(res => this.todos = this.todos.filter(todo => todo.id !== res.id))
      //     // eslint-disable-next-line
      //     .catch(err => console.log(err))
      // },
      // addTodo(newTodo) {
      //   const { title, completed } = newTodo;
      //
      //   axios.post('https://jsonplaceholder.typicode.com/todos', {
      //     title,
      //     completed
      //   })
      //     .then(res => {
      //       this.todos = [res.data, ...this.todos];
      //       // eslint-disable-next-line
      //       console.log(res);
      //     })
      //     // eslint-disable-next-line
      //     .catch(err => console.log(err));
      //
      // }
    },
    created() {
      // axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      //   .then(res => this.todos = res.data)
      //   // eslint-disable-next-line
      //   .catch(err => console.log(err));
      // unsplash.get('/collections')
      //   .then(res => console.log('res', res))
      //   .catch(err => console.log('err', err))

      // axios
      //   .get('https://api.unsplash.com/photos/?client_id=7b963717e253c2b6dad7be8a7e5793c77e9d37c46b1ba4f64047039b8966651a')
      //   .then(data => {
      //     console.log(data)
      //   })
      //   .catch(err => {
      //     console.log('Error happened during fetching!', err);
      //   });

      unsplash.get('/collections')
        .then(res => {
          res.data.map(item => {
            this.shopItems.push({
              id: item.id,
              photo: item.preview_photos[0].urls.regular,
              title: item.title,
              description: item.cover_photo.alt_description
            });
          });
        })
        // eslint-disable-next-line
        .catch(err => console.log('err', err))
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
