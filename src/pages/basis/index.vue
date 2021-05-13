<template>
  <div>
    <Grammar/>
    <br/>
    <br/>
    <Calculation/>
    <br/>
    <br/>
    <ClassAndStyle/>
    <br/>
    <br/>
    <VforArray/>
    <br/>
    <br/>
    <Event/>
    <br/>
    <br/>
    <AutomaticCollection/>
    <br/>
    <br/>
    <LifeCycle/>
    <br/>
    <br/>
    <TransitionAnimation/>
    <br/>
    <br/>
    <Filters/>
    <br/>
    <br/>
    <ZhiLing/>
  </div>
</template>

<script>
import Grammar from './components/grammar'
import Calculation from './components/calculation'
import ClassAndStyle from './components/classAndstyle'
import VforArray from './components/vForArray'
import Event from './components/event'
import AutomaticCollection from './components/automaticCollection'
import LifeCycle from './components/lifeCycle'
import TransitionAnimation from './components/transitionAnimation'
import Filters from './components/filters'
import ZhiLing from './components/zhiLing'

export default {
  name: "index",
  components: {
    AutomaticCollection,
    Grammar,
    Calculation,
    ClassAndStyle,
    VforArray,
    Event,
    LifeCycle,
    TransitionAnimation,
    Filters,
    ZhiLing
  },
  data() {
    return {}
  },


}
</script>

<style scoped>

</style>

