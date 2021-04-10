<template>
  <div>
    <b-navbar class="nav-box" toggleable="lg" type="gray" variant="light" fixed>
      <b-navbar-brand href="#">
        <b-img src="@/assets/images/logo.png"></b-img>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">首页</b-nav-item>
          <b-nav-item-dropdown
            id="my-nav-dropdown"
            text="产品中心"
            toggle-class="nav-link-custom"
            right
          >
            <b-dropdown-item>跨境电商</b-dropdown-item>
            <b-dropdown-item>跨境分销</b-dropdown-item>
            <b-dropdown-divider>智能工具</b-dropdown-divider>
            <b-dropdown-item>进口保税</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item>跨境电商</b-nav-item>
          <b-nav-item>跨境分销</b-nav-item>
          <b-nav-item>智能工具</b-nav-item>
          <b-nav-item>进口保税</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="语言" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <template v-slot:button-content>
              <em>admin</em>
            </template>
            <b-dropdown-item href="#">设置</b-dropdown-item>
            <b-dropdown-item href="#">退出</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.nav-box{
  background: #b3b1b1;
  color: aqua;
}
.dropdown:hover>.dropdown-menu{
  display: block;
}
.dropdown>.dropdown-toggle:active{
  pointer-events: none;
}
</style>
