<template>
  <div class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-half">
            <!-- Register -->
            <div class="box">
              <h1 class="textmain my-2">Register</h1>
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

              <!-- Confirm password -->
              <div class="field">
                <label class="label">Confrim Password</label>
                <div class="control has-icons-left">
                  <input type="password" class="input" />
                  <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                  </span>
                </div>
              </div>

              <!-- firstname -->
              <div class="field">
                <label class="label">Firstname</label>
                <div class="control has-icons-left">
                  <input type="text" class="input" />
                  <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                  </span>
                </div>
              </div>

              <!-- lastname -->
              <div class="field">
                <label class="label">Lastname</label>
                <div class="control has-icons-left">
                  <input type="text" class="input" />
                  <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                  </span>
                </div>
              </div>

              <!-- ID Card -->
              <div class="field">
                <label class="label">ID Card</label>
                <div class="control has-icons-left">
                  <input type="text" class="input" />
                  <span class="icon is-small is-left">
                    <i class="fas fa-address-card"></i>
                  </span>
                </div>
              </div>

              <!-- email -->
              <div class="field">
                <label class="label">Email</label>
                <div class="control has-icons-left">
                  <input type="text" class="input" />
                  <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                  </span>
                </div>
              </div>

              <!-- phone -->
              <div class="field">
                <label class="label">Phone Number</label>
                <div class="control has-icons-left">
                  <input type="text" class="input" />
                  <span class="icon is-small is-left">
                    <i class="fas fa-phone"></i>
                  </span>
                </div>
              </div>

              <button class="button is-primary is-fullwidth my-4">
                Register
              </button>
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

</style>