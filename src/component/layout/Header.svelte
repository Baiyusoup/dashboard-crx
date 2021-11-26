<script>
  import githubIcon from '@/assets/images/github.png';
  import baiduIcon from '@/assets/images/baidu.png';
  import chromeIcon from '@/assets/images/chrome.png';
  import bingIcon from '@/assets/images/bing.png';
  import stackOvefflowIcon from '@/assets/images/stackoverflow.png';
  import { useDbKey } from '@/hooks/useDbkey';
  import { processTheme } from '@/api/chrome';

  let inputEl;


  useDbKey('s', () => {
    inputEl && inputEl.focus()
  })

  const handleKeyup = (e) => {
    if (e.key === 'Enter') {
      handleSeach()
    } else if (e.key === 'ArrowDown') {
      handleSwitchEngin(1)
    } else if (e.key === 'ArrowUp') {
      handleSwitchEngin(-1)
    }
  }

  const imgSrc = [githubIcon, baiduIcon, chromeIcon, bingIcon, stackOvefflowIcon]
  const iconSize = imgSrc.length
  let enginIdx = 0
  const handleSwitchEngin = (step) => {
    enginIdx = (enginIdx + step + iconSize) % iconSize
  }

  let q = '';
  const handleSeach = () => {
    console.log(q)
    q = ''
  }

  const handleSwitchTheme = () => {
    const html = document.getElementsByTagName('html')[0]
    let res = html.classList.toggle('dark')
    processTheme(res ? 'dark': '')
  }
</script>

<header class="crx-header">
  <div class="crx-header--left">
    <span class="app-icon" style="margin-left: 6px;margin-right: 14px;" />
    <div class="search-wrapper">
      <img class="enginIcon" src={imgSrc[enginIdx]} alt="engin">
      <input
        class="search-input" 
        type="text" 
        placeholder="输入关键词搜索 | ↓/↑键切换引擎"
        bind:this={inputEl}
        bind:value={q} 
        on:keyup={handleKeyup}
      />
      <svg
        on:click={handleSeach}
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        class="search-icon"
        viewBox="0 0 24 24"
      >
        <defs></defs>
        <circle cx="11" cy="11" r="8"></circle>
        <path d="M21 21l-4.35-4.35"></path>
      </svg>
    
    </div>
  </div>
  <div class="crx-header--right">
    <button on:click={handleSwitchTheme} class="mode-switch" title="Switch Theme">
      <svg 
        class="moon"
        fill="none" 
        stroke="currentColor" 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        stroke-width="2" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24"
      >
        <defs></defs>
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
      </svg>
    </button>
  </div>
  <button class="messages-btn">
    <svg
      xmlns="http://www.w3.org/2000/svg" 
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      stroke-width="2" 
      stroke-linecap="round" 
      stroke-linejoin="round" 
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
  </button>
</header>

<style>
.crx-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px 24px 16px 8px;
  position: relative;
}

.crx-header--left,
.crx-header--right {
  display: flex;
  align-items: center;
}

.crx-header--left {
  flex-grow: 1;
}

.crx-header--right button {
  margin-left: 10px;
  cursor: pointer;
}

.app-icon {
  width: 26px;
  height: 2px;
  border-radius: 4px;
  background-color: var(--main-color);
  position: relative;
}
.app-icon:before,
.app-icon:after {
  content: "";
  position: absolute;
  width: 12px;
  height: 2px;
  border-radius: 4px;
  background-color: var(--main-color);
  left: 50%;
  transform: translatex(-50%);
}
.app-icon:before {
  top: -6px;
}
.app-icon:after {
  bottom: -6px;
}


.mode-switch {
  background-color: transparent;
  border: none;
  padding: 0;
  color: var(--main-color);
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-wrapper {
  border-radius: 10px;
  background-color: var(--search-area-bg);
  padding-right: 12px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 480px;
  color: var(--light-font);
  overflow: hidden;
}

.search-input {
  border: none;
  flex: 1;
  outline: none;
  height: 100%;
  padding: 0 10px;
  font-size: 16px;
  background-color: var(--search-area-bg);
  color: var(--main-color);
}

.search-input:placeholder {
  color: var(--main-color);
  opacity: 0.6;
}

.search-icon {
  cursor: pointer;
}

.enginIcon {
  width: 25px;
  height: 25px;
  margin-left: 8px;
  opacity: 0.6;
}

.messages-btn {
  border-radius: 4px 0 0 4px;
  position: absolute;
  right: 0;
  top: 58px;
  background-color: var(--message-btn);
  border: none;
  color: var(--main-color);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  display: none;
}

</style>