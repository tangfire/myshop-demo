<template>
    <div class="myMenu" id="myMenu">
        <ul>
            <li
                v-for="item in val"
                :key = "item"
                :class="activeClass == item ? 'active':''"
                @mouseover="mouseover($event,item)"
            >
            <router-link>
                <slot :name="item"></slot>
            </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  props: ['val'],
  name: 'MyMenu',
  data () {
    return {
      activeClass: 1
    }
  },
  methods: {
    // 通过mouseover事件控制当前显示的商品分类，1为该类别的热门商品
    mouseover (e, val) {
      this.activeClass = val
    }
  }
}
</script>
