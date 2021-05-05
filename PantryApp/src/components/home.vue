<template>
    <div class="container">
        <title>Pantry DSM</title>

            <nav class="navbar">
      <router-link to="/">Home</router-link> 

      <router-link to="/about">About</router-link> 

    <router-link to="/pantry">Pantry DSM App</router-link> 
      <router-link to="/help">Help</router-link> 
    </nav>

                <img src="../assets/storedpantry.jpg">
<h2>Welcome to the Pantry Display Shelves Management Application</h2>
    <h4>Click any of the link at the top of the page to navigate</h4>

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