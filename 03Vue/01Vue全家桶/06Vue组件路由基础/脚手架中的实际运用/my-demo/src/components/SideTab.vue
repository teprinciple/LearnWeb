<template>
  <div class="side-div flex-column">
    <ul class="flex-column">
      <li v-for="(item,index) in tabs" :key="index" class="flex-column">
        <router-link :to="item.path" class="tab">{{item.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SideTab',
  data () {},
  methods: {},
  props: ['tabs']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.side-div {
  width: 100%;
  height: 100%;
  background: #252526;
  color: white;
}

ul {
  width: 100%;
}
li {
  width: 100%;
  list-style: none;
}

.tab {
  flex: 1;
  padding-left: 20px;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  color: white;
  text-decoration: none;
}

.tab:hover {
  background: #37373d;
}
</style>
