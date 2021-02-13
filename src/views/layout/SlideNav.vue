<template>
	<div class="con-head">
		<div class="btn">
			<a-button
				type="primary"
				style="margin-bottom: 16px"
				@click="toggleCollapsed"
			>
				<a-icon :type="$store.state.collapsed ? 'menu-unfold' : 'menu-fold'" />
			</a-button>
		</div>
		<div class="crumbs">
			<a-breadcrumb>
				<a-breadcrumb-item>首页</a-breadcrumb-item>
				<a-breadcrumb-item><a href="">统计</a></a-breadcrumb-item>
			</a-breadcrumb>
		</div>
		<ul class="user">
			<li>
				{{ $store.state.user.username }}
				<a-icon type="down" />
			</li>
			<li @click="removeUserCookie">退出</li>
		</ul>
	</div>
</template>

<script>
export default {
  methods: {
    toggleCollapsed () {
      this.$store.dispatch('toggleCollapsed')
    },
    removeUserCookie () {
      this.$store.dispatch('logout')
      this.$router.push({name: 'Login'})
    }
  }
}
</script>
