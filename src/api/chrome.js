/**
 * @type {chrome}
 */
export const CHROME = chrome;

export function go(url) {
  if (url) {
    CHROME.tabs.create({ url })
  }
}

export function processTheme(theme) {

}

export function processEngine(engine) {

}