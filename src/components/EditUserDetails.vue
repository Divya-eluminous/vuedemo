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
    <label class="input-group-text">Date Of Birth</label>
    <input type="text" v-model="dob" name="dob" class="form-control" id="datepicker"/>
  </div>
  

  <div class="input-group mb-3">
    <label class="input-group-text">Contact</label>
    <input type="text" v-model="contact" name="contact"   class="form-control"/>
  </div>

 
  <div class="input-group mb-3">
    <label class="input-group-text">Profile Image</label>
    <input type="file"  name="profile_image" class="form-control"/>
  </div>
    <img :src="profile_path" width="100" height="100">
 
  <div>
     <button type="submit" name="submit" value="Update" v-on:click="update" class="btn btn-info">Update</button> &nbsp;
  </div>
</form>
</div>

</template>

<script> 

import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import moment from 'moment'



export default {
  name: 'EditUserDetails',
 data(){
    return {
    msg: String,
    first_name:null,
    last_name:null,
    contact:null,
    dob:null,
    accestoken:null,
    errors:[]
    }
  },
  mounted()
  {
      var res = JSON.parse(localStorage.getItem('LoginData'));
      var accessToken = localStorage.getItem('AccessToken');
      if(res){   
      console.log(res.data);   
       this.id = res.id;
       this.first_name = res.first_name;
       this.last_name = res.last_name;
       this.contact = res.contact;
       this.dob = moment(String(res.dob)).format('YYYY-MM-DD');
       this.accestoken = accessToken;
       this.profile_path = res.profile_path;
      }//if res
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
      if(this.contact=="")
      {
        this.errors.push('Please enter contact number');
      }
      if(this.errors.length>0)
      {
        event.preventDefault();
      }
      console.log(this.errors);

    }//handleSubmit
    ,

    async update()
    {
      let res = await axios.post('http://localhost/starfan/api/v1/edit-user-details',{
          id:this.id,
          first_name:this.first_name,
          last_name : this.last_name,
          email:this.email,
          dob:this.dob,
          contact:this.contact,
      },{'headers':{'Authorization':this.accestoken}} );
      console.log(res);

      if(res.status==false)
      {
        this.errors = res.data.errors;
      }
      else{     
        localStorage.removeItem('LoginData')
        console.log(res.data.data);
          if (localStorage.getItem("LoginData") === null) {
            console.log('not have localstorage data');
            //localStorage.setItem("LoginData",JSON.stringify(res.data));
          }else{
            alert(this.accestoken);
          }
      }


    }//register
    ,
    
  } 
}


</script>
