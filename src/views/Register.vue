<template>
  <div>
    <Navbar />
    <div class="container mb-5 mt-5">
      <div class="row">
        <div class="col-12 col-md-5 mb-3 bv-example-row d-none d-md-block">
          <img src="/assets/contents/register.png" alt="" width="100%" />
        </div>
        <div class="col-12 col-md-6">
          <h2 class="font-weight-bold text-center">Daftar Sekarang</h2>
          <br />
          <b-form>
            <div class="form-group">
              <div>
                <b-input-group-prepend>
                  <b-input-group-prepend is-text>
                    <b-icon icon="person"></b-icon>
                  </b-input-group-prepend>
                  <b-form-input
                    type="text"
                    placeholder="Nama Lengkap"
                  ></b-form-input>
                </b-input-group-prepend>
              </div>
              <div>
                <label for=""></label>
                <b-input-group-prepend>
                  <b-input-group-prepend is-text>
                    <b-icon icon="envelope"></b-icon>
                  </b-input-group-prepend>
                  <b-form-input type="email" placeholder="Email"></b-form-input>
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
                  ></b-form-input>
                </b-input-group-prepend>
              </div>
            </div>
            <button type="submit" class="btn btn-danger mt-3">
              <b-icon-key></b-icon-key> Daftar
            </button>
          </b-form>
          <div class="row mt-3">
            <div class="col-5 col-md-6">
              <p style="font-size: 13px">Lupa Password ?</p>
            </div>
            <div class="col-7 col-md-6">
              <p style="font-size: 12px">
                Sudah Daftar ? <a href="/login">Silahkan Login</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/users/template/Navbar";

export default {
  name: "Register",
  components: {
    Navbar,
  },
};
</script>

<style>
</style>