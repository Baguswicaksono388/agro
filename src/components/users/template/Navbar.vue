<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="faded">
      <b-navbar-brand href="/">Logo</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item class="nav-link" to="/">Home</b-nav-item>
          <b-nav-item class="nav-link" to="/tentangagrojaya"
            >Tentang Kami</b-nav-item
          >
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <template v-if="authenticated">
          <b-navbar-nav class="ml-auto">
            <router-link class="nav-link" to="/dashboard"
              ><b-icon-person></b-icon-person> {{ user.name }}
            </router-link>
            <router-link class="nav-link" to="#" @click.native.prevent="clicked"
              ><b-icon-door-closed></b-icon-door-closed> Sign Out
            </router-link>
            <!-- <li>
              <a href="" @click.prevent="clicked">Log Out</a>
            </li> -->
          </b-navbar-nav>
        </template>
        <template v-else>
          <b-navbar-nav class="ml-auto">
            <router-link class="nav-link" to="/login"
              ><b-icon-person></b-icon-person> Login
            </router-link>
            <router-link class="nav-link" to="/register"
              ><b-icon-person-plus></b-icon-person-plus> Register
            </router-link>
          </b-navbar-nav>
        </template>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Navbar",

  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),
  },

  methods: {
    ...mapActions({
      signOutAction: "auth/signOut",
    }),
    clicked: function () {
      this.signOutAction().then(() => {
        this.$router.push({ path: "/login" });
        this.$toast.success("Terima Kasih", {
          type: "success",
          position: "top-right",
          duration: 3000,
          dismissible: true,
        });
      });
    },
  },
};
</script>

<style></style>
