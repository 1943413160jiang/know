import { onMounted, onUnmounted, ref, Ref } from "vue";

function useClickOutSide(wrapper: Ref<null | HTMLElement>) {
  const isClickOutSide = ref(false);

  const handler = (e: MouseEvent) => {
    const warpVal = wrapper.value;
    if (warpVal) {
      if (warpVal.contains(e.target as HTMLElement)) {
        isClickOutSide.value = false;
      } else {
        isClickOutSide.value = true;
      }
    }
  };

  onMounted(() => {
    document.addEventListener("click", handler);
  });

  onUnmounted(() => {
    document.addEventListener("click", handler);
  });

  return {
    isClickOutSide
  };
}

export default useClickOutSide;
