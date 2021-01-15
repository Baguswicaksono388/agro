<template>
  <div>
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      fade
      indicators
      img-width="1024"
      img-height="480"
    >
      <b-carousel-slide
        img-src="/assets/slider/slider1.jpg"
        img-width="200%"
      ></b-carousel-slide>
      <b-carousel-slide
        img-src="/assets/slider/slider2.jpg"
        img-width="200%"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "Slider"
};
</script>

<style></style>
