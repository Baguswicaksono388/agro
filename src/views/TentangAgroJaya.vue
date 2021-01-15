<template>
  <div>
    <Navbar />
    <div class="container mb-5">
      <div class="row">
        <div class="col-12 col-md-4">
          <h2 class="font-weight-bold text-center">Tentang Kami</h2>
          <br />
          <div class="bv-example-row d-none d-md-block">
            <img src="/assets/contents/tentang_kami.png" alt="" width="100%" />
          </div>
        </div>
        <div class="col-12 col-md-7 ml-4">
          <h5 class="font-weight-bold">
            Selamat Datang di <span class="text-success">Agro Jaya</span> ,
          </h5>
          <p class="text-secondary" style="line-height: 1.5rem">
            Platform Equity Crowdfunding pertama yang berizin dan diawasi
            Otoritas Jasa Keuangan berdasarkan Surat Keputusan Nomor:
            KEP-59/D.04/2019.
          </p>
          <hr />
          <p class="font-weight-bold">Apa itu Equity Crowdfunding ?</p>
          <p class="text-secondary" style="line-height: 1.5rem">
            Equity Crowdfunding adalah istilah untuk layanan urun dana melalui
            penawaran saham berbasis teknologi informasi.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/users/template/Navbar";

export default {
  name: "TentangAgroJaya",
  components: {
    Navbar,
  },
};
</script>

<style></style>
