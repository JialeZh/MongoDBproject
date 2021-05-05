<template>
    <div class="container">
            <nav class="navbar">
      <router-link to="/">Home</router-link> 

      <router-link to="/about">About</router-link> 

    <router-link to="/pantry">Pantry DSM App</router-link> 
      <router-link to="/help">Help</router-link> 
    </nav>

        <Assign></Assign>

    <br>
    <div class="col-lg-3" v-for="pantry in pantryDetails">
      <div class="panel panel-primary">
        <div class="panel-heading">Name: {{ pantry.pantry_name }}
        </div>
        <div class="panel-body">
          Slot Number: {{ pantry.slot_number }}
          <br>
          <br>
          Pantry Type: {{ pantry.pantry_type }} 
          <br>
          <br>
          <button type="button" class="btn btn-danger pull-right" data-toggle="modal" data-target=".bd-example-modal-sm" @click="DELETE(pantry, pantry._id)">Delete</button>
        </div>
        <div class="panel-footer">
        </div>
      </div>
    </div>
  
    <div class="modal fade bd-example-modal-sm" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title" id="exampleModalLabel">Confirmation</h1>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            </button>
          </div>
          <div class="modal-body">
            Confirm to delete this pantry item? </div>
          <div class="modal-footer">
  
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <router-link to="/">
              <button type="button" class="btn btn-danger" @click="deleteData(data_pantry, data_id)">Delete</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  
  
  </div>
</template>

<script>
import Assign from './assign.vue'
import axios from 'axios'
import About from './about.vue'
import Help from './help.vue'


export default {
  name: 'pantry',
  data() {
    return {
      pantryDetails: [],
      data_pantry: {},
      data_id: ''
    }
  },
  components: {
    Assign,
    About,
    Help,
  },
//Script to delete the data from backend server
  methods: {

    DELETE(pantryDetails1, id1) {
      $("#my-modal").modal('show');
      this.data_pantry = pantryDetails1;
      this.data_id = id1;

    },
    deleteData(pantryDetails, id) {

      axios.delete('http://localhost:3000/pantrys/' + id)
        .then(response => this.pantryDetails.splice(index, 1));

      window.location.reload();
    }

//Script to retrieve the data from backend server
  }, created() {
    axios.get('http://localhost:3000/pantrys')
      .then((response) => {
        this.pantryDetails = response.data;
        
        e.log(response);
      })
      .catch((error) => {
        console.log(error);
      })

  }
}
</script>

<style>
   .navbar {
        overflow: hidden;
        background-color: #337ab7;
        display: block;
    }

    .navbar a {
        float: left;
        display: block;
        color: #f2f2f2;
        text-align: center;
        padding: 14px 33px;
        text-decoration: none;
        font-size: 19px;
    }

    .active {
        background-color: #333f48;
        color: white;
    }

    .navbar .icon {
        display: none;
    }

    h2{
        font-family: "Noto Sans", "Noto Sans CJK JP", sans-serif;
    }

    body{
        font-family: "Noto Serif", "Noto Serif CJK JP", sans-serif;
    }


</style>
