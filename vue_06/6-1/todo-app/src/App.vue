<template>
  <div id="app">
    <div class='d-flex'>
      <div class='col-3' id='router-box'>
        <nav class="row justify-content-center align-itemscenter">
            <router-link to="/">모든</router-link>
            <router-link to="/important">중요</router-link>
        </nav>
      </div>

      <div class='col-9 ml-3' id='router-view-box'>
        <router-view/>
      </div>
    </div>

  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-size: 30px ;
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

#router-box {
 border: solid 1px black;
 border-radius: 5px;
}

#router-view-box {
  border: solid 1px black;
 border-radius: 5px;
}
</style>
