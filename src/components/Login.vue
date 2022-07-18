<template>
<div class="container">
<ul>
   <li v-for="errs in errors" :key="errs"> 
      {{ errs }} 
   </li>
</ul>


<form @submit.prevent="handleSubmit">


  <div class="input-group mb-3">
    <label class="input-group-text">Email</label>
    <input type="text" v-model="email" name="email"  class="form-control"/>
  </div>
 
  <div class="input-group mb-3">
    <label class="input-group-text">Pasword</label>
    <input type="text" v-model="password" name="password"  class="form-control"/>
  </div> 

  <div>
     <button type="submit" name="submit" value="Register" v-on:click="login" class="btn btn-info">Login</button> &nbsp;
     <router-link to="/signup" class="btn btn-info">Signup</router-link> 
  </div>
</form>
</div>
</template>

<script>

import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'


export default {
  name: 'Login',
  
  data(){
    return {
       errors:this.errors,
       email:null,
       password:null
     }
  },
   beforeMount(){    
      var res = localStorage.getItem('LoginData');
      if(res){
        this.$router.push("/");
      }
  },
  methods:{
    handleSubmit(event)
    {
     
      this.errors=[];
      if(this.email) 
      {
        console.log('entered name');
      }else{
        this.errors.push("Please enter email address");
      }
       if(this.password)
      {
        console.log('entered password');
      }else{
        this.errors.push("Please enter password");
      }
      console.log(this.errors.length);
      event.preventDefault();
    },
   async login()
    { 
       let res = await axios.post('http://localhost/starfan/api/v1/login',{
        email:this.email,
        password:this.password,
        fcm_token:'sdsd'
       },{headers:{'APP-TOKEN':'GV5TmkI8lCyPqBTLExji'}});
       console.log(res);  
      if(res.data.status==true)
      {
        localStorage.setItem('AccessToken',res.data.data.api_access_token);
        localStorage.setItem('LoginData',JSON.stringify(res.data.data));
       
         this.$router.push("/");
      }
      else{
        this.errors = res.errors;
      }


    }//login
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
