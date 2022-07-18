<template>
<div class="container">

</div>
</template>

<script>

import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'


export default {
  name: 'Logout',
  
  data(){
    return {
       errors:this.errors      
     }
  },
   beforeMount(){    
      var res = localStorage.getItem('LoginData');
      if(res){
        localStorage.removeItem('LoginData');
         this.$router.push("/");
      }
      
  },
 
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
