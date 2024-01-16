<template>
  <div id="app">
    <!-- nav bar -->
    <nav class="navbar " role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item is-size-4">
         <h3 class="textnav">เราให้ยืม</h3>
        </router-link>
      </div>

      <div class="navbar-menu">
        <div class="navbar-start">
          <div class="navbar-item">
            <router-link to="">
              <p class="textnav">เงื่อนไขการเช่า</p>
            </router-link>
          </div>
          <!-- v-if="user" -->
          <div class="navbar-item">
            <router-link to="">
              <p class="textnav">ประวัติการจอง</p>
            </router-link>
          </div>
          <div class="navbar-item">
            <router-link to="">
              <p class="textnav">ติอต่อเรา</p>
            </router-link>
          </div>
          <!-- v-if="admin"  -->
          <div class="navbar-item" >
            <router-link to="" class="button is-primary is-outlined">
              <p>ยืนยันออร์เดอร์</p>
            </router-link>
          </div>
          
        </div>
        <div class="navbar-menu">
        <div class="navbar-end">
          
          <div class="navbar-item">
            <router-link to="/blogs/create" class="button is-primary is-outlined">
              <strong>New Blog</strong>
            </router-link>
          </div>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              <figure class="image is-24x24 my-auto">
                <img
                  class="is-rounded"
                  src="https://bulma.io/images/placeholders/128x128.png"
                />
              </figure>
              <!-- <span class="pl-3"
                >{{ user.first_name }} {{ user.last_name }}</span
              > -->
              <span class="pl-3">Sasikan Longkrachang</span>
            </a>
            <div class="navbar-dropdown">
              <a class="navbar-item">Profile</a>
              <!--  <a class="navbar-item" @click="logout">Log out</a>-->
              <a class="navbar-item">Log out</a>
            </div>
          </div>

          <div class="navbar-item">
            <router-link to="/login" class="button is-primary is-outlined">
              <strong>Login</strong>
            </router-link>
          </div>
        </div>
      </div>
      </div>
    </nav>

    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Itim&display=swap");

body {
  font-family: "Itim", cursive;
  /* background-color:#000 ; */
}
#app {
  width: 100%;
  font-family: "Itim", cursive;
}
.textnav{
  color: black;
}
.textnav:hover {
  color: #1B9C85;
}


</style>
