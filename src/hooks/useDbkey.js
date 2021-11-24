import { onMount } from 'svelte'

let ot = 0
function handleDbKey(event, key, callback) {
  if (event.key === key) {
    let nt = new Date().getTime()
    let ct = nt - ot
    if (ct > 0 && ct < 300) {
      event.preventDefault();
      callback && callback(event)
    }
    ot = nt
  }
}

export function useDbKey(key = 's', callback = () => {}) {
  onMount(() => {
    const handle = (e) => handleDbKey(e, key, callback)
    window.addEventListener('keypress', handle)
    return () => window.removeEventListener('keypress', handle)
  })
}