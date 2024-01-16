<template>
  <div class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-half">
            <!-- login -->
            <div class="box">
              <h1 class="textmain my-2">Login</h1>
              <!-- user -->
              <div class="field">
                <label class="label">Username</label>
                <div class="control has-icons-left">
                  <input type="text" class="input" />
                  <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                  </span>
                </div>
              </div>
              <!-- password -->
              <div class="field">
                <label class="label">Password</label>
                <div class="control has-icons-left">
                  <input type="password" class="input" />
                  <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                  </span>
                </div>
              </div>

              <button class="button is-primary is-fullwidth my-4">Login</button>

              <p class="text my-1">
                Don't have an account yet?
                <router-link to="/register"> Register</router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
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
.textmain {
  text-align: center;
  font-size: 40px;
}

.text {
  text-align: center;
}
</style>