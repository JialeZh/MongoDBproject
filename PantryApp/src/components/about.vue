<template>
    <div class="container">
            <nav class="navbar">
      <router-link to="/">Home</router-link> 

      <router-link to="/about">About</router-link> 

    <router-link to="/pantry">Pantry DSM App</router-link> 
      <router-link to="/help">Help</router-link> 
    </nav>

                <img src="../assets/messypantry.jpg">
<h2>An App for Everyone</h2>
    <p> Pantry Display Shelves Management Application is designed to be useable for anyone. Ranging from big corporations to even personal individual use. </p>
      <p>  This application allows the user to have an easier time assigning pantry to certain shelves. </p>
      <p>   Remember the times when you always have to tumble all over the shelves to find your specific pantry item?</p>
        <p>  With this application capability, that will no longer be an issue. Just assign the appropriate shelf slot number for the pantry item and it will save all the details for you.</p>
        <p>   Whenever you need to find the pantry item in the future, all you have to do is look back at the Pantry DSM application and it will tell you the slot that you assigned for that particular pantry item.</p>
 <p>  This application will be even more useful for businesses that have to manage thousands or hundreds of pantry items on their display shelves.</p>
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