<template>
  <div>
    <Navbar />
    <div class="container mb-5 mt-5">
      <div class="row">
        <div class="col-12 col-md-5 mb-3 bv-example-row d-none d-md-block">
          <img src="/assets/contents/login.png" alt="" width="100%" />
        </div>
        <div class="col-12 col-md-6">
          <h2 class="font-weight-bold text-center">Selamat Datang</h2>
          <br />
          <b-form @submit.prevent="submit">
            <div class="form-group">
              <div>
                <b-input-group-prepend>
                  <b-input-group-prepend is-text>
                    <b-icon icon="envelope"></b-icon>
                  </b-input-group-prepend>
                  <b-form-input
                    type="email"
                    placeholder="Email"
                    name="email"
                    id="email"
                    v-model="form.email"
                  ></b-form-input>
                </b-input-group-prepend>
              </div>
              <div>
                <label for=""></label>
                <b-input-group-prepend>
                  <b-input-group-prepend is-text>
                    <b-icon icon="file-lock"></b-icon>
                  </b-input-group-prepend>
                  <b-form-input
                    type="password"
                    placeholder="Password"
                    name="password"
                    id="password"
                    v-model="form.password"
                  ></b-form-input>
                </b-input-group-prepend>
              </div>
            </div>
            <button type="submit" class="btn btn-danger mt-3">
              <b-icon-key></b-icon-key> Login
            </button>
          </b-form>
          <div class="row mt-3">
            <div class="col-5 col-md-6">
              <p style="font-size: 13px">Lupa Password ?</p>
            </div>
            <div class="col-7 col-md-6">
              <p style="font-size: 12px">
                Belum punya akun ? <a href="/register">Daftar</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";
import Navbar from "@/components/users/template/Navbar";

export default {
  name: "Login",
  components: {
    Navbar,
  },

  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },

  state: {
    token: null,
  },

  methods: {
    ...mapActions({
      signIn: "auth/signIn",
    }),
    async submit() {
      // this.signIn(this.form);
      let response = await axios.post(
        "http://localhost:8000/api/auth/signin",
        this.form
      );
      if (response.data.token == "Ulangi") {
        this.$toast.success("Password dan Email salah.", {
          type: "success",
          position: "top-right",
          duration: 3000,
          dismissible: true,
        });
      } else {
        this.signIn(response.data).then(() => {
          this.$router.push({ path: "/dashboard" });
        });
        // console.log(response.data);
        // this.$router.push({ path: "/dashboard" });
      }
    },
  },
};
</script>

<style>
</style>