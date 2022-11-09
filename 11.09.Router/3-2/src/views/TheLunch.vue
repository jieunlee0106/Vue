<template>
  <div class="lunch">
    <h1>점심 메뉴</h1>
    <button @click="selectMenu">Pick Lunch</button>
    <!-- <p>{{ pickLunch }} </p> -->
    <p> {{ pick }}</p>
  </div>
</template>

<script>
export default {
  name: 'TheLunch',
  data() {
    return {
      menu: ['곰탕', '탕수육', '짜장면', '설렁탕', '부대찌개', '피자'],
      pick: null
    }
  },

  methods: {
    selectMenu() { 
      const random = Math.floor(Math.random()*this.menu.length)
      const selected = this.menu[random]
      this.$store.dispatch('selectMenu', selected)
      this.pick = selected
    }
  },

  computed: {
    pickLunch() {
      return this.$store.state.pickLunch
    },
    selected() {
      return this.$store.mutations.selected
    }
  }

}
</script>

<style>

</style>