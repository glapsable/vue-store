<template>
  <div class="home">
    <CartBox v-bind:cartList="cartList" />
    <div class="home__cards-wrapper">
        <ShopCard v-bind:shopItem="shopItem" v-bind:key="shopItem.id" v-for="shopItem in shopItems"/>
    </div>
    <div class="isLoading" v-if="isLoading">
      <LoaderIcon/>
    </div>
  </div>
</template>

<script>
  import unsplash from '../api/unsplash';
  import CartBox from '../components/CartBox';
  import ShopCard from '../components/ShopCard';
  import LoaderIcon from '../assets/icons/loader.svg';

  export default {
    name: 'Home',
    components: {
      CartBox,
      ShopCard,
      LoaderIcon,
    },
    data() {
      return {
        isLoading: false,
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
      fetchData() {
        this.isLoading = true;
        unsplash.get('/collections')
          .then(res => {
            res.data.forEach(item => {
              this.isLoading = false;
              this.shopItems.push({
                id: item.id,
                photo: item.preview_photos[0].urls.regular,
                title: item.title,
                description: item.cover_photo.alt_description
              });
            });
          })
          .catch(err => {
            this.isLoading = false;
            // eslint-disable-next-line
            console.log('err', err)
          })
      }
    },
    created() {
      this.fetchData();
      // axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      //   .then(res => this.todos = res.data)
      //   // eslint-disable-next-line
      //   .catch(err => console.log(err));

      // axios
      //   .get('https://api.unsplash.com/photos/?client_id=7b963717e253c2b6dad7be8a7e5793c77e9d37c46b1ba4f64047039b8966651a')
      //   .then(data => {
      //     console.log(data)
      //   })
      //   .catch(err => {
      //     console.log('Error happened during fetching!', err);
      //   });


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
