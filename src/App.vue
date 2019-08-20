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
      <!-- <Dashboard></Dashboard> -->
     <!-- <AccountSettings></AccountSettings> -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

// import Dashboard from './components/Dashboard.vue'
// import AccountSettings from './components/AccountSettings.vue'

export default {
  name: 'app',
 
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
  
}
</style>
