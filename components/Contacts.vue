<template>
  <div class="blockContact">
    <div class="contactImg"><img alt="img" :src=email /></div>
    <a href="mailto:maleksey09@gmail.com">maleksey09@gmail.com</a>
  </div>
  <div class="blockContact">
    <div class="contactImg"><img alt="img" :src=phone /></div>
    <a href="tel:+38(068)040 03 13" >
      068 040 03 13
    </a>
  </div>
  <div class="blockContact">
    <div class="contactImg"><img alt="img" :src=addressImg /></div>
    <a target="_blank" href="https://maps.app.goo.gl/mmUJrLoQKC3QR8HM8">
      {{ address }}
    </a>
  </div>
  <div class="blockContact">
    <div class="contactImg"><img alt="img" :src=git /></div>
    <a target="_blank" href="https://github.com/MAleksey2022">
      https://github.com
    </a>
  </div>
  <div class="blockContact">
    <div class="contactImg"><img alt="img" :src=linkedin /></div>
    <a target="_blank" href="https://www.linkedin.com/in/melnyk-oleksii-0b9796253/">
      https://www.linkedin.com
    </a>
  </div>
  <hr class="horizontalLine">
</template>

<script setup>
  import email  from '~/assets/email.png';
  import phone  from '~/assets/phone.png';
  import addressImg  from '~/assets/address.png';
  import git  from '~/assets/git.png';
  import linkedin  from '~/assets/linkedin.png';
</script>

<script>
import {ref} from "vue";

export default {
  data() {
    return {
      address: ref('Ukraine, Vinnitsa'),
    };
  },
  watch:{
    '$store.state.language'(newValue, oldValue) {
      if (newValue==='Ua') {this.address ='Україна, Вінниця';}
      else if (newValue==='En') {this.address ='Ukraine, Vinnitsa';}
    }
  },
};
</script>

<style>
  .blockContact{
    display: flex;
    margin: 10px 0 0 20px;
  }
  .contactImg{
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
  .contactImg img {
    width: 20px;
  }
  .blockContact a {
    text-decoration: none;
    color: black;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .horizontalLine {
    margin: 10px auto 0 auto;
    width: 95%;
  }
</style>