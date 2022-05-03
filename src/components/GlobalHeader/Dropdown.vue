<template>
  <div class="dropdown" ref="dropdownRef">
    <a
      href="#"
      class="btn btn-outline-light my-2 dropdown-toggle"
      @click.prevent="toggle"
    >
      {{ title }}
    </a>
    <ul
      class="dropdown-menu"
      :style="{
        display: 'block'
      }"
      v-if="isOpen"
    >
      <slot></slot>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, ref } from "vue";
import useClickOutSide from "@/hook/useClickOutSide";

export default defineComponent({
  name: "drop-down",
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup() {
    const isOpen = ref(false);
    const dropdownRef = ref<null | HTMLElement>(null);

    const { isClickOutSide } = useClickOutSide(dropdownRef);

    watch(isClickOutSide, (val) => {
      if (val && isOpen) {
        isOpen.value = false;
      }
    });

    const toggle = () => {
      isOpen.value = !isOpen.value;
    };

    return {
      isOpen,
      toggle,
      dropdownRef
    };
  }
});
</script>

<style lang="scss"></style>
