<template>
  <div class="containerAll">
    <div class="containerLeft">
      <div>
        <Contacts />
      </div>
      <div>
        <Skills />
      </div>
<!--      <div>-->
<!--        <Education />-->
<!--      </div>-->
    </div>
    <div class="containerRight">
      <div>
        <Education />
      </div>
      <div>
        <Experience />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import Contacts from "../components/Contacts.vue";
import Skills from "../components/Skills.vue";
import Education from "../components/Education.vue";
import Summary from "../components/Summary.vue";
import Experience from "../components/Experience.vue";

const props = defineProps({
  layout: 'default'
});
</script>

<style>
  .containerAll {
    display: flex;
    flex-direction: column;
  }
  .containerLeft, .containerRight {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    .containerLeft, .containerRight {
      width: 768px;
    }
  }

  @media screen and (min-width: 1024px) {
    .containerAll {
      display: flex;
      flex-direction: row;
    }
    .containerLeft {
      width: 375px;
      flex-direction: column;
      background-color: darkgray;
    }
    .containerRight {
      width: 649px;
      flex-direction: column;
    }
  }

  @media screen and (min-width: 1440px) {

    .containerRight {
      width: 1075px;
    }
  }
</style>