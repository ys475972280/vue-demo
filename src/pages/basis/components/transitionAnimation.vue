<template>
  <div>
    <h1>vue过渡与动画</h1>
    <button @click="show=!show">Toggle</button>
    <transition name="fade">
      <p v-show="show">hello</p>
    </transition>

    <button @click="moveShow=!moveShow">Toggle</button>
    <transition name="move">
      <p v-show="moveShow">hello</p>
    </transition>

    <button @click="showAnimation=!showAnimation">Toggle show</button>
    <br/>
    <transition name="bounce">
      <p style="display: inline-block" v-if="showAnimation">Lorem ipsum dolor sit amet</p>
    </transition>
  </div>
</template>

<script>
export default {
  name: "TransitionAnimation",
  data() {
    return {
      show: true,
      moveShow: true,
      showAnimation: true
    }
  },
}
</script>

<style scoped>
/*
显示/隐藏
*/
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
  opacity: 0;
}

.move-enter-active {
  transition: all 1s;
}

.move-leave-active {
  transition: all 3s;
}

.move-enter, .move-leave-to {
  opacity: 0;
  transform: translateX(20px);
}


.bounce-enter-active {
  animation: bounce-in .5s;
}

.bounce-leave-active {
  animation: bounce-in .5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
