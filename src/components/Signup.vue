<template>
<div class="container">
<ul>
   <li v-for="errs in errors" :key="errs">
      {{ errs }}
   </li>
</ul>


<form @submit.prevent="handleSubmit">
  <div class="input-group mb-3">
    <label class="input-group-text">First Name</label>
    <input v-model="first_name" name="first_name"  class="form-control"/>
   
  </div>

   <div class="input-group mb-3">
    <label class="input-group-text">Last Name</label>
    <input type="text" v-model="last_name" name="last_name"  class="form-control"/>
  </div>

  <div class="input-group mb-3">
    <label class="input-group-text">Email</label>
    <input type="text" v-model="email" name="email"  class="form-control"/>
  </div>

   <div class="input-group mb-3">
    <label class="input-group-text">Date Of Birth</label>
    <input type="date" v-model="dob" name="dob"   class="form-control"/>
  </div>

  <div class="input-group mb-3">
   <label class="input-group-text">Gender</label>
    <select class="form-select" id="gender" v-model="gender">
      <option selected>Choose...</option>
      <option value="male">Male</option>
      <option value="female">Female</option>   
    </select>
  </div>

  <div class="input-group mb-3">
   <label class="input-group-text">Profile Type</label>
    <select class="form-select" id="profile_type" v-model="profile_type">
      <option selected>Choose...</option>
      <option value="1">Celebrity</option>
      <option value="2">Fan</option>   
    </select>
  </div>

  <div class="input-group mb-3">
    <label class="input-group-text">Contact</label>
    <input type="text" v-model="contact" name="contact"   class="form-control"/>
  </div>

  <div class="input-group mb-3">
    <label class="input-group-text">Pasword</label>
    <input type="text" v-model="password" name="password"   class="form-control"/>
  </div> 

   <div class="input-group mb-3">
    <label class="input-group-text">Confirm Pasword</label>
    <input type="text" v-model="confirm_password" name="confirm_password"  class="form-control"/>
  </div> 
 
  <div>
     <button type="submit" name="submit" value="Register" v-on:click="register" class="btn btn-info">Register</button> &nbsp;
      <router-link to="/login" class="btn btn-info">Login</router-link>
  </div>
</form>
</div>

</template>

<script>

import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'



export default {
  name: 'Signup',
 data(){
    return {
    msg: String,
    first_name:null,
    last_name:null,
    email:null,
    gender:null, 
    profile_type:null,
    contact:null,
    dob:null,
    password:null,
    confirm_password:null,
    errors:[]
    }
  },
   beforeMount(){    
      var res = localStorage.getItem('LoginData');
      if(res){
        this.$router.push("/");
      }
  },
  methods: {
   
    handleSubmit(event)
    {
      this.errors=[];
      if(this.first_name=="")
      {
        this.errors.push('Please enter first name');
      }
      if(this.last_name=="")
      {
        this.errors.push('Please enter last name');
      }
      if(this.email=="")
      {
        this.errors.push('Please enter email');
      }
      if(this.profile_type=="")
      {
        this.errors.push('Please select profile type');
      }
      if(this.gender=="")
      {
        this.errors.push('Please select gender');
      }
      if(this.contact=="")
      {
        this.errors.push('Please enter contact number');
      }
      if(this.password=="")
      {
        this.errors.push('Please enter password');
      }
      if(this.confirm_password=="")
      {
        this.errors.push('Please enter confirm password');
      }

      if(this.errors.length>0)
      {
        event.preventDefault();
      }
      console.log(this.errors);

    }//handleSubmit
    ,

    async register()
    {
      let res = await axios.post('http://localhost/starfan/api/v1/user-registration',{
          first_name:this.first_name,
          last_name : this.last_name,
          email:this.email,
          gender:this.gender,
          profile_type:this.profile_type,
          dob:this.dob,
          contact:this.contact,
          password:this.password,
          confirm_password:this.confirm_password,
          country_code:27
      },{headers:{'APP-TOKEN':'GV5TmkI8lCyPqBTLExji'}} );
      console.log(res);

      if(res.status==false)
      {
        this.errors = res.data.errors;
      }
      else{     
        localStorage.setItem('userData', res.data)
        console.log(res.data);
          if (localStorage.getItem("userData") === null) {
            console.log('not have localstorage data');
          }else{
            window.location.href="";
          }
      }


    }//register
    ,
    
  } 
}
</script>
