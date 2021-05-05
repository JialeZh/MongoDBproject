<template>
    <div class="container">
        <button class="btn btn-primary pull-right" data-toggle="modal" data-target=".bd-example-modal-lg">Assign Pantry Item</button>
        <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close pull-right" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h1 class="modal-title">Assign Pantry Item</h1>
                    </div>
                    <div class="modal-body">
    
                        <form>
                            <div class="form-group">
                                <label class="form-control-label" for="formGroupExampleInput">Pantry Name</label>
    
                                <input type="text" class="form-control" placeholder="Pantry Name" v-model="Pantry.pantry_name">
                            </div>
                             <div class="form-group">
                                <label class="form-control-label" for="formGroupExampleInput">Pantry Type</label>
                                <select class="form-control" id="exampleFormControlSelect1"v-model="Pantry.pantry_type">
                                    <option>Breakfast</option>
                                    <option>Snack</option>
                                    <option>Beverages</option>
                                    <option>Condiments</option>
                                    <option>Pastas and Grains</option>
                                    <option>Baking</option>
                                    <option>Canned Goods</option>
                                    <option>Sauces and Soups</option>
                                    <option>Spices and Oils</option>

                                </select>
                            </div>
                            <div class="form-group">
                                <label class="form-control-label" for="formGroupExampleInput">Slot Number</label>
    
                                <select class="form-control" id="exampleFormControlSelect1"v-model="Pantry.slot_number">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                    <option>11</option>
                                    <option>12</option>
                                    <option>13</option>
                                    <option>14</option>
                                    <option>15</option>
                                    <option>16</option>
                                    <option>17</option>
                                    <option>18</option>
                                    <option>19</option>
                                    <option>20</option>
                                </select>
                            </div>
                            <button type="submit" class="btn btn-primary" @click="addToDB">Assign</button>
                        </form>
                    </div>
                    <div class="modal-footer">
    
                    </div>
                </div>
            </div>
        </div>
    
    </div>
</template>


<script>
import axios from 'axios'

export default {
    data() {
        return {

            Pantry: {
                pantry_name: '',
                pantry_type: '',
                slot_number: ''

            }
        }
    },
    //Script to add the data into backend server
    methods: {

        addToDB() {
            let newPantry = {
                pantry_name: this.Pantry.pantry_name,
                pantry_type: this.Pantry.pantry_type,
                slot_number: this.Pantry.slot_number
            }
      window.location.reload();

            axios.post('http://localhost:3000/pantrys', newPantry)
                .then((response) => {
                    console.log(response);
      window.location.reload();
                })
                .catch((error) => {
                    consol.log(error);
                })


        }
    }

}
</script>

<style>

</style>
