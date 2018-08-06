<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
	  <span class="navbar-brand"><img src="./../assets/logo.png"><span class="ml-2">My Vue App</span></span>
	  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	    <span class="navbar-toggler-icon"></span>
	  </button>

	  <div class="collapse navbar-collapse" id="navbarSupportedContent">
	    <ul class="navbar-nav mr-auto">
	      <li class="nav-item active" v-for="menuItem in rawMenuData" :key="menuItem.id">
	        <a class="nav-link" :href="menuItem.uri">{{menuItem.name}}</a>
	      </li>
	    </ul>
	  </div>
	</nav>
</template>

<script>
import rawMenuData from './../rawMenuData'

export default {
  name: 'my-menu',
  data () {
    return {
      rawMenuData: rawMenuData
    }
  }
}
</script>

<style lang="scss" scoped>
	nav {
		margin-bottom: 25px;
	}
</style>
