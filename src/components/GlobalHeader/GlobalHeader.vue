<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
    <router-link class="navbar-brand" to="/">者也专栏</router-link>
    <ul v-if="!user.isLogin" class="list-inline mb-0">
      <li class="list-inline-item">
        <router-link to="/login" class="btn btn-outline-light my-2"
          >登陆</router-link
        >
      </li>
      <li class="list-inline-item">
        <router-link to="/signup" class="btn btn-outline-light my-2"
          >注册</router-link
        >
      </li>
    </ul>
    <ul v-else class="list-inline mb-0">
      <li class="list-inline-item">
        <DropDown :title="`你好 ${user.nickName}`">
          <DropDownItem>
            <a class="dropdown-item" href="#">新建文章</a>
          </DropDownItem>
          <DropDownItem disabled>
            <a class="dropdown-item" href="#">编辑资源</a>
          </DropDownItem>
          <DropDownItem>
            <a class="dropdown-item" href="#">退出登陆</a>
          </DropDownItem>
        </DropDown>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import DropDown from "./Dropdown.vue";
import DropDownItem from "./DropDownItem.vue";
export interface UserProp {
  isLogin: boolean;
  nickName?: string;
  id?: number;
}
export default defineComponent({
  name: "GlobalHeader",
  components: {
    DropDown,
    DropDownItem
  },
  props: {
    user: {
      type: Object as PropType<UserProp>,
      required: true
    }
  },
  setup() {
    return {};
  }
});
</script>

<style lang="scss"></style>
