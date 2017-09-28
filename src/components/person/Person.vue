<template>
  <div class="person">
    <h1>THe Beatles</h1>
    <p>Hello, I'm {{ person.name }}</p>
    <p>I play the {{ person.part }}</p>
    <router-link to="/">TOP</router-link>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'person',
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
  computed: {
    person () {
      return _.find(this.beatles, (o) => { return o.id === this.$route.params.id })
    }
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
