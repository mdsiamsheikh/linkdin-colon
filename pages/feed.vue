<template>
  <div class="item-container">
    <LeftSidebar></LeftSidebar>
    <MiddleSidebar></MiddleSidebar>
    <RightSidevar></RightSidevar>
  </div>
</template>

<script>
import LeftSidebar from "../components/leftSidebar.vue";
import RightSidevar from "../components/rightSidevar.vue";
import MiddleSidebar from "../components/middleSidebar.vue";

export default {
  name: "IndexPage",
  components: { LeftSidebar, RightSidevar, MiddleSidebar },
};
</script>
<style>
.item-container {
  margin-top: 100px !important;
  display: grid;
  grid-template-columns: 20% 50% 27%;
  width: 84%;
  max-width: 1200px;
  margin: 1.25rem auto;
  gap: 2rem;
}
</style>
