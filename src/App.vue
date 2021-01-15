<template>
  <div id="app">
    <router-view />
    <FooterUser />
  </div>
</template>

<script>
import FooterUser from "@/components/users/template/Footer";

export default {
  components: {
    FooterUser,
  },
};
</script>