<template>
  <div id="app">
    <div id="navbar">
      <div class="row">
        <div class="col-9">  
          <img src="@/assets/images/logo.png" alt="logo" class="logo" >
          <span class="nav-links"> <router-link to="/">Dashboard</router-link> </span>
          <span class="nav-links"> Buy Insurance </span>
          <span class="nav-links"> <router-link to="/account_settings"> Account Settings</router-link> </span>
        </div>
        <div class="col-3">  
           <img src="@/assets/images/Profile.png" alt="profile" class="profile">
        </div>
      </div>     
    </div>
    <div id="content">     
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
 
}
</script>

<style></style>
