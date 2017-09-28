<template>
  <div class="beatles">
    <h1>THe Beatles</h1>
    <ul>
      <li>{{beatles[0].name}}</li>
      <li>{{beatles[1].name}}</li>
      <li>{{beatles[2].name}}</li>
      <li>{{beatles[3].name}}</li>
    </ul>
    <router-link to="/">TOP</router-link>
  </div>
</template>

<script>
export default {
  name: 'beatles',
  data () {
    return {
      beatles: [
        {
          'id': '001',
          'name': 'John Lennon',
          'part': 'Guitar'
        },
        {
          'id': '002',
          'name': 'Paul MacCartney',
          'part': 'Bass Guitart'
        },
        {
          'id': '003',
          'name': 'George Harrison',
          'part': 'Guitar'
        },
        {
          'id': '004',
          'name': 'Ringo Starr',
          'part': 'Drums'
        }
      ]
    }
  },
  created () {
  }
}
</script>

<style lang="scss" scoped>
  ul {
    width: 150px;
    margin-left: auto;
    margin-right: auto;

    > li {
      text-align: left;
    }
  }
</style>
