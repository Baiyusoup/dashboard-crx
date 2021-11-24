import { CHROME } from './chrome'
// 快捷键 ss

function loadEventListener(target) {
  // 监听快捷键
  window.addEventListener('keydown', () => {})
}

export function search(param, url) {
  CHROME.tabs.create({ url: `${url}?${param}`})
}

const param = {
  juejin: 'query',
  github: 'q',
  stackOverflow: 'search?q',
  baidu: 's?wd',
  bing: 'search?q'
}