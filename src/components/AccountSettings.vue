<template>
  <div class="AccountSettings">
    <div class="welcome-text-2"><b>ACCOUNT SETTINGS</b></div>
      <div class="top-container">
        <img src="@/assets/images/info-logo.png" alt="watermark-icon" class="info-logo">
        <span class="account-header-1">PERSONAL INFORMATION</span>
        <p class="page-info">Use this page to update your contact information and change your password.</p>
        <div class="row avatar-section">
          <div class="col-3"><img src="@/assets/images/avatar.png" alt="watermark-icon" class="avatar"></div>
          <div class="col-9">
          <p class="upload-text">Upload a new profile image</p>
          <div class="size-text">Maximum size allowed is 600kb of PNG, JPEG, JPG </div>
        </div>
      </div>

      <form>
        <div class="row">
          <div class="form-group col-3">
            <label for="email">Email address</label>
            <input type="email" class="form-control" id="email"  placeholder="amarachukwu.gmail.com" disabled>    
          </div>
        </div>
        <div class="row">
          <div class="form-group col-3">
            <label for="fullname">FULL NAME</label>
            <input type="text" class="form-control" id="fullname"  placeholder="Olatunji Joseph" >    
          </div>
          <div class="form-group col-3">
            <label for="username">USER NAME</label>
            <input type="text" class="form-control" id="username"  placeholder="Madjozi" >    
          </div>
          <div class="form-group col-3">
            <label for="birthdate">BIRTH DATE</label>
            <input type="date" class="form-control" id="birthdate"  placeholder="07/15/1990" disabled>    
          </div>
        </div>      
        <button type="submit" class="btn save_button">Save Changes</button>
        <div class="row spacing">          
          <div class="form-group col-3">
            <label for="current_password">CURRENT PASSWORD</label>
            <input type="text" class="form-control" id="current_password"  placeholder="" >    
          </div>
          <div class="form-group col-3">
            <label for="new_password">NEW PASSWORD</label>
            <input type="password" class="form-control" id="new_password"  placeholder="" >    
          </div>
          <div class="form-group col-3">
            <label for="confirm_password">CONFIRM PASSWORD</label>
            <input type="password" class="form-control" id="confirm_password"  placeholder="" >    
          </div>
        </div>      
        <button type="submit" class="btn save_button" id="save">Save Changes</button>
      </form>
    </div>
    <div class="top-container">
      <img src="@/assets/images/info-logo.png" alt="watermark-icon" class="info-logo">
      <span class="account-header-1">PERSONAL INFORMATION</span>
      <p class="page-info">Use this page to update your contact information and change your password.</p>
      <form>
        <div class="row">
          <div class="form-group col-3">
            <label for="email">CURRENT STATE</label>
            <input type="email" class="form-control" id="email"  placeholder="Niger" disabled>    
          </div>
        </div>
        <div class="row">
          <div class="form-group col-3">
            <label for="fullname">NEW STATE OF RESIDENCE</label>
            <input type="text" class="form-control" id="fullname"  placeholder="" >    
          </div>
          <div class="form-group col-3">
            <label for="lga">WHAT LGA DO LIVE IN</label>
            <input type="text" class="form-control" id="lga"  placeholder="" >    
          </div>
          <div class="form-group col-3">
            <label for="federal">FEDERAL CONSTITUENCIES </label>
            <input type="text" class="form-control" placeholder="" >    
          </div>
        </div>      
        <button type="submit" class="btn save_button">Save Changes</button>
        <div class="row spacing">          
          <div class="form-group col-3">
            <label for="senate">SENATORIAL DISTRICT</label>
            <input type="text" class="form-control" id="senate"  placeholder="" >    
          </div>
          <div class="form-group col-3">
            <label for="state">STATE CONSTITUENCIES</label>
            <input type="text" class="form-control"   placeholder="" >    
          </div>
        </div>      
        <button type="submit" class="btn save_button">Save Changes</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccountSettings',
  props: {
   
  }
}
</script>

<style scoped>

</style>
