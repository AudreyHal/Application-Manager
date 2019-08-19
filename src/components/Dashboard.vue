<template>
  <div class="Dashboard">
    <div class="welcome-text">Welcome, Loius!</div>
    <div class="date">Monday, July 22, 2019</div>
    <div class="cards"> 
      <div class="row"> 
        <div class="col-3">
          <div class="card-1">
            <img src="@/assets/images/insurance_bought_icon.svg" alt="insurance-bought-icon" class="coloured-icon">
            <div class="card-number">06</div>
            <div class="card-text">Total Insurance Bought</div>
            <img src="@/assets/images/insurance_shield.png" alt="insurance-shield-icon" class="background-icon">
          </div>
        </div>        
       <div class="col-3">
          <div class="card-1">
            <img src="@/assets/images/insurance_bought_icon.svg" alt="insurance-bought-icon" class="coloured-icon">
            <div class="card-number">06</div>
            <div class="card-text">Total Insurance Bought</div>
            <img src="@/assets/images/insurance_shield.png" alt="isurance-shielst-icon" class="background-icon">
          </div>
        </div> 
        <div class="col-3">
          <div class="card-1">
            <img src="@/assets/images/insurance_bought_icon.svg" alt="insurance-bought-icon" class="coloured-icon">
            <div class="card-number">06</div>
            <div class="card-text">Total Insurance Bought</div>
            <img src="@/assets/images/insurance_shield.png" alt="isurance-shielst-icon" class="background-icon">
          </div>
        </div> 
        <div class="col-3">
          <div class="card-1" id="last-card">
            <img src="@/assets/images/insurance_bought_icon.svg" alt="insurance-bought-icon" class="coloured-icon">
            <div class="card-number">06</div>
            <div class="card-text">Total Insurance Bought</div>
            <img src="@/assets/images/insurance_shield.png" alt="isurance-shielst-icon" class="background-icon">
          </div>
        </div> 
      </div> 
    </div>
    <div id="board">
    <div class="board-title offset">Insurance Applications</div>
    <hr>
      <table>
        <tr>
          <th class="offset">S.N</th>
          <th>Insurance Type</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Status</th>
          <th>Action</th>
          <th> </th>
        </tr>
        <tr v-for="(application, index) in applications" :key="index" >
          <td class="offset">{{index + 1}}</td>
          <td>{{application.insuranceType}}</td>
          <td>{{application.amount}}</td>
          <td>{{day}} {{months[month]}} {{year}} </td>
          <td v-if="application.complete"><div class="complete"><img src="@/assets/images/green-eclipse.png" alt="dot" class="dot">Completed</div></td>
          <td v-else><div class="incomplete"><img src="@/assets/images/red-eclipse.png" alt="dot" class="dot">Incomplete</div></td>
          <td><div class="action-button">Make a Claim</div></td>
          <td><div class="action-link">More Actions</div></td>
          
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data () {
    return {
      applications: [],
      months:["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
      date:'',
      year:'',
      month:'',
      day:''
      

  }},
  created () {
    var url='http://test.natterbase.com:5050/api/interview/get-applications';
    var axios = require('axios');
    var key= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYjg2NWZmMzFhZWRkMzQxNDU0OTQ2YiIsImlhdCI6MTU2NTk0Nzg1NCwiZXhwIjoxNTY1OTU1MDU0fQ.5ujc_dMloqYdyoQN556PhGwIqa1OfGwt06vD5iKu-lg"
    var config={ headers: { 'token': key } }
    axios.get(url, config  )
    .then(response => (
      console.log(response.data.applications), 
      this.applications = response.data.applications, 
      this.date=response.data.applications.createdDate, 
      this.year= new Date("2019-08-08T16:28:27.446Z").getFullYear(),
      this.month= new Date("2019-08-08T16:28:27.446Z").getMonth(),
      this.day= new Date("2019-08-08T16:28:27.446Z").getDay(),   
      console.log(this.day)
      )) ;
    
  }  
}
</script>

<style scoped>

</style>
