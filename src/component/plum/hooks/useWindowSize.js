import { onMount } from "svelte";

export function useWindowSize() {
  let height = window.innerHeight;
  let width = window.innerWidth;

  onMount(() => {
    const handleResize = () => {
      height = window.innerHeight;
      width = window.innerWidth;
    };
    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return {
    width,
    height,
  };
}
