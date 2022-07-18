<template>
  <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
           <router-link to="/" aria-current="page">Home</router-link> &nbsp;
           <router-link to="/signup" v-if="!islogin">Signup</router-link> &nbsp;
           <router-link to="/login" v-if="!islogin">Login</router-link> &nbsp;
           <router-link to="/edit-user-details" v-if="islogin">Edit Profile</router-link> &nbsp;
           <router-link to="/logout" v-if="islogin">Logout</router-link> &nbsp;
        </li>
      </ul>     
    </div>
  </div>
</nav>
<div class="container"> <br/> <br/> <br/>
   <div class="row">
    <h5 v-if="islogin">Welcome {{ username }}</h5>
    </div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',  
  data(){
    return {
       islogin:0,
       username :null
    }
  },
   beforeMount() {   
      var res = JSON.parse(localStorage.getItem('LoginData'));
      if(res){   
      console.log(res.first_name);   
       this.username = res.first_name+''+res.last_name;
       this.islogin=1
      }//if res
    }//mounted

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
