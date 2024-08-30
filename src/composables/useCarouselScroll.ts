import {ref, onMounted, onUnmounted, type Ref} from 'vue'
import {useEventListener} from '@vueuse/core'

export function useCarouselScroll(carouselDiv: Ref | null) {
  const prevIsVisible = ref(false)
  const nextIsVisible = ref(true)

  let cleanup: Function | null = null

  onMounted(() => {
    if (carouselDiv) {
      let isScrolling: number | undefined = undefined
      cleanup = useEventListener(carouselDiv, 'scroll', () => {
        clearTimeout(isScrolling)
        isScrolling = setTimeout(() => {

          const maxScrollLeft = carouselDiv.value.scrollWidth - carouselDiv.value.clientWidth
          const scrollLeft = carouselDiv.value.scrollLeft

          prevIsVisible.value = scrollLeft > 0
          nextIsVisible.value = maxScrollLeft !== scrollLeft

        }, 150);
      })
    }
  });
  onUnmounted(() => {
    if (carouselDiv && cleanup) {
      cleanup()
    }
  });

  return {
    prevIsVisible,
    nextIsVisible,
  };
}
