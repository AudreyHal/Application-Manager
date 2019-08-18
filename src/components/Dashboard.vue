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
      <table>
        <tr>
          <th>S.N</th>
          <th>Insurance Type</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
        <tr v-for="(application, index) in applications" :key="index" >
          <td >{{index + 1}}</td>
          <td>{{application.insuranceType}}</td>
          <td>{{application.amount}}</td>
          <td>{{day}} {{months[month]}} {{year}} </td>
          <td>Status</td>
          <td>Action</td>
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
      day:'',
      complete: ''

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
