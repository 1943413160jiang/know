<template>
  <div class="container">
    <global-header :user="user"></global-header>
    <column-list :list="list"></column-list>
    111
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ColumnList, {
  ColumnProps
} from "@/components/colmunList/colmunList.vue";

import GlobalHeader, {
  UserProp
} from "@/components/GlobalHeader/GlobalHeader.vue";

const userData: UserProp = {
  isLogin: true,
  nickName: "viking"
};
const testData: ColumnProps[] = [
  {
    id: 1,
    title: "test1的专栏",
    description: "这是的test1专栏",
    avatar:
      "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100"
  },
  {
    id: 2,
    title: "test2的专栏",
    description: "这是的test2专栏"
  },
  {
    id: 3,
    title: "test2的专栏",
    description: "这是的test2专栏",
    avatar:
      "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100"
  },
  {
    id: 4,
    title: "test2的专栏",
    description: "这是的test2专栏",
    avatar:
      "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100"
  },
  {
    id: 5,
    title: "test2的专栏",
    description: "这是的test2专栏",
    avatar:
      "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100"
  }
];
export default defineComponent({
  components: { ColumnList, GlobalHeader },
  setup() {
    return {
      list: testData,
      user: userData
    };
  }
});
</script>

<style lang="scss"></style>
