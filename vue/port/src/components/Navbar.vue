<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/home" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/projects" class="nav-link">Projects</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/resume" class="nav-link">Resume</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/testimonials" class="nav-link">Testimonials</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
  <div class="home">
      <div class="container">
        <div class="row vh-100 justify-content-center align-items-center">
      <div class="col-5">
        <div class="clearfix">
          <div class="home-header">
            <h2 class="typed"><i class="bi bi-dash"></i> Hi I'm Lebo Mtomboti</h2>
          </div>
          <p class="home-con display-2">Aspiring full stack web developer</p>
        
         
          <div class="home-button">
          </div>
        </div>
        <div class="social-icons">
          <i class="bi bi-github fs-3"></i>
          <i class="bi bi-linkedin fs-3"></i>
        </div>

      </div>
      <div class="col-3">
        <div id="image" class="container">
          <img src="https://lebomtomboti.github.io/hostedimages/images/20240422_120346.jpg" alt="Lebo's-profile-image" width="250" class="img-fluid rounded" loading="lazy">
        </div>
      </div>
    </div>
      </div>
    </div>
  <footer>©LebuMtomboti</footer>
</template>

<script>
export default {
  name: 'Navbar-nav'
}
</script>

<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: brown;
}
body{
  background-color:black;
}
.typed{
    color: brown;
    overflow: hidden;
    white-space: nowrap;
    width: 0;
    animation: typing;
    animation-duration: 1.5s;
    animation-timing-function: steps(30, end);
    animation-fill-mode: forwards;
}
@keyframes typing {
    from { width: 0 }
    to { width: 100% }
  } 
  .social-icons{
    position: absolute;
    margin-left: -20%;
}
.card{
    width: 50px;
    height: 50%;
}

</style>

  