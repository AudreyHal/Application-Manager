<template>
  <div class="Dashboard">
    <div class="welcome-text">Welcome, Loius!</div>
    <div class="date">Monday, July 22, 2019</div>
    <div class="cards"> 
      <div class="row"> 
        <div class="col-3">
          <div class="card-1">
            <img src="@/assets/images/insurance_bought_icon.svg" alt="insurance-bought-icon" class="coloured-icon">
            <div class="card-number">{{totalInsurancesBought}}</div>
            <div class="card-text">Total Insurance Bought</div>
            <img src="@/assets/images/insurance_shield.png" alt="insurance-shield-icon" class="background-icon">
          </div>
        </div>        
       <div class="col-3">
          <div class="card-1">
            <img src="@/assets/images/total_amount_insurance_icon.svg" alt="insurance-bought-icon" class="coloured-icon">
            <div class="card-number">{{totalInsuranceAmount}}</div>
            <div class="card-text">Total Amount of Insurance</div>
            <img src="@/assets/images/total_amount.png" alt="isurance-shielst-icon" class="background-icon">
          </div>
        </div> 
        <div class="col-3">
          <div class="card-1">
            <img src="@/assets/images/insurance_claim_icon.svg" alt="insurance-bought-icon" class="coloured-icon">
            <div class="card-number">{{totalInsuranceClaims}}</div>
            <div class="card-text">Total Insurance Claim</div>
            <img src="@/assets/images/insurance_claim.png" alt="isurance-shielst-icon" class="background-icon">
          </div>
        </div> 
        <div class="col-3">
          <div class="card-1" id="last-card">
            <img src="@/assets/images/amount_of_claims.svg" alt="insurance-bought-icon" class="coloured-icon">
            <div class="card-number">{{totalClaimsAmount}}</div>
            <div class="card-text">Total Amounts of Claims</div>
            <img src="@/assets/images/amount_of_claims.png" alt="isurance-shielst-icon" class="background-icon">
          </div>
        </div> 
      </div> 
    </div>
    <div id="board">
    <div class="board-title offset">Insurance Applications</div>
    <hr class="divider">
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
          <td class="action-row"><div class="action-link"  @click="show = index">More Actions</div>
          <div class="menu" v-show="show === index" >
            <div class="menu-item">Make a claim</div>
            <hr class="divider-2">
            <div class="menu-item">View Policy</div>
        </div> 
          
          </td> 
                  
        </tr>
        
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Dashboard',
  data () {
    return {   
      show: false,   
      months:["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
      date:'',
      year:'',
      month:'',
      day:''
      

  }},
  computed: {
    ...mapGetters([
      'applications',     
      'totalClaimsAmount',
			'totalInsuranceAmount',
			'totalInsurancesBought',
			'totalInsuranceClaims'

    ])},

  created () {
    var applications_url='http://test.natterbase.com:5050/api/interview/get-applications';
    var statistics_url = 'http://test.natterbase.com:5050/api/interview/get-statistics';
    var axios = require('axios');
    var key= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYjg2NWZmMzFhZWRkMzQxNDU0OTQ2YiIsImlhdCI6MTU2NTk0Nzg1NCwiZXhwIjoxNTY1OTU1MDU0fQ.5ujc_dMloqYdyoQN556PhGwIqa1OfGwt06vD5iKu-lg"
    var config={ headers: { 'token': key } }
    axios.get(applications_url, config  )
    .then(response => (
      this.$store.commit('change_applications', response.data.applications),
      this.date=response.data.applications.createdDate, 
      this.year= new Date("2019-08-08T16:28:27.446Z").getFullYear(),
      this.month= new Date("2019-08-08T16:28:27.446Z").getMonth(),
      this.day= new Date("2019-08-08T16:28:27.446Z").getDay()      
      )) ;
    axios.get(statistics_url, config  )
    .then(response => (            
      this.$store.commit('change_totalClaimsAmount', response.data.statistics.totalClaimsAmount),
      this.$store.commit('change_totalInsuranceAmount', response.data.statistics.totalInsuranceAmount),
      this.$store.commit('change_totalInsurancesBought', response.data.statistics.totalInsurancesBought),
      this.$store.commit('change_totalInsuranceClaims', response.data.statistics.totalInsuranceClaims)      
      )) ;   
  }  
}
</script>

<style scoped>

</style>
