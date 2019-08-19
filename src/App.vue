<template>
  <div id="app">
    <div id="navbar">
      <img src="@/assets/images/logo.png" alt="logo" class="logo" >
      <span class="nav-links"> Dashboard </span>
      <span class="nav-links"> Buy Insurance </span>
      <span class="nav-links"> Account Settings </span>
    </div>
    <div id="content">
      <!-- <Dashboard></Dashboard> -->
      <AccountSettings></AccountSettings>
    </div>
  </div>
</template>

<script>

import Dashboard from './components/Dashboard.vue'
import AccountSettings from './components/AccountSettings.vue'

export default {
  name: 'app',
  components: {
     Dashboard, AccountSettings
  }
}
</script>

<style>

#navbar{
width: 100%;
height: 80px;
background: #FFFFFF;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.06);
  
}
#content{
  margin: 40px 100px
}
</style>
