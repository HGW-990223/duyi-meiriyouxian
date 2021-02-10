<template>
	<div class="menu">
		<div class="menu-list">
			<a-menu
				:default-selected-keys="['1']"
				:default-open-keys="['sub1']"
				mode="inline"
				theme="dark"
				:inline-collapsed="collapsed"
			>
				<a-menu-item key="1">
					<a-icon type="pie-chart" />
					<span>Option 1</span>
				</a-menu-item>
				<a-menu-item key="2">
					<a-icon type="desktop" />
					<span>Option 2</span>
				</a-menu-item>
				<a-menu-item key="3">
					<a-icon type="inbox" />
					<span>Option 3</span>
				</a-menu-item>
				<a-sub-menu key="sub1">
					<span slot="title"
						><a-icon type="mail" /><span>Navigation One</span></span
					>
					<a-menu-item key="5">
						Option 5
					</a-menu-item>
					<a-menu-item key="6">
						Option 6
					</a-menu-item>
					<a-menu-item key="7">
						Option 7
					</a-menu-item>
					<a-menu-item key="8">
						Option 8
					</a-menu-item>
				</a-sub-menu>
				<a-sub-menu key="sub2">
					<span slot="title"
						><a-icon type="appstore" /><span
							>Navigation Two</span
						></span
					>
					<a-menu-item key="9">
						Option 9
					</a-menu-item>
					<a-menu-item key="10">
						Option 10
					</a-menu-item>
					<a-sub-menu key="sub3" title="Submenu">
						<a-menu-item key="11">
							Option 11
						</a-menu-item>
						<a-menu-item key="12">
							Option 12
						</a-menu-item>
					</a-sub-menu>
				</a-sub-menu>
			</a-menu>
		</div>
		<div :class="{'content': true,'menu-unfold':collapsed}">
      <div class="con-head">
        <div class="btn">
          <a-button
            type="primary"
            style="margin-bottom: 16px"
            @click="toggleCollapsed"
          >
            <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
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
            欢迎huangguangwen
            <a-icon type="down" />
          </li>
          <li>退出</li>
        </ul>
      </div>
    </div>
	</div>
</template>

<script>
export default {
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

<style lang="less" scoped>
  .menu{
    height: 100%;
    .menu-list{
      width: 180px;
      height: 100%;

      position: fixed;
      .ant-menu{
        height: 100%;
      }
    }
    .content{
      margin-left: 180px;
      transition: all .3s;
      border-bottom: 1px solid #eee;

      &.menu-unfold{
        margin-left: 80px;
      }
      .con-head{
        padding-left: 10px;
        padding-right: 20px;
        height: 50px;
        line-height: 50px;
        .btn,.crumbs{
          display: inline-block;
        }
        .crumbs{
          margin-left: 10px;
        }
        .user{
          float: right;
          text-align: center;
          li:not(:first-child){
            display: none;
            background: #eee;
            color: #999;
          }
          &:hover{
            li{
              display: block;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
</style>
