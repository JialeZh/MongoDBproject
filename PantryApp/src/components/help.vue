<template>
    <div class="container">
            <nav class="navbar">
      <router-link to="/">Home</router-link> 

      <router-link to="/about">About</router-link> 

    <router-link to="/pantry">Pantry DSM App</router-link> 
      <router-link to="/help">Help</router-link> 
    </nav>

                <img src="../assets/faq.png">
<h2>Frequently Asked Questions</h2>
    <h4>1. Where is the application?</h4>
    <p> Click the "Pantry DSM App" at the top navigation bar</p>

    <h4>2. How to add an new pantry item?</h4>
    <p> Click the "Assign Pantry Item" button in Pantry DSM App page </p>

    <h4>3. What is the slot number?</h4>
    <p> Slot number is the number that you will assign for the compartments in your shelves</p>

    <h4>4. How to remove an assigned pantry item?</h4>
    <p> Click the "Remove Item" button on the pantry item that you wnat to remove</p>

    <h4>5. Do I have to save my data before exiting the application?</h4>
    <p> No, the data is saved automatically whenever you add or remove items</p>

    </div>
</template>

        }
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