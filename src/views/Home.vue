<template>
	<div class="menu">
		<left-menu></left-menu>
		<div :class="{'content': true,'menu-unfold':$store.state.collapsed}">
      <slide-nav></slide-nav>
    </div>
	</div>
</template>

<script>
import LeftMenu from '@/views/layout/Menu'
import SlideNav from '@/views/layout/SlideNav'
export default {
  components: {
    LeftMenu,
    SlideNav,
  },
	data() {
		return {
			collapsed: false,
		}
	},
	methods: {
		toggleCollapsed() {
			this.collapsed = !this.collapsed
		},
	},
}
</script>

<style lang="less">
  @import url('~@/assets/css/home.less');
</style>
