<script>
  import { go } from '@/api/chrome'

  export let article

  const handleJump = () => {
    go(article.src)
  }
</script>

<div class="message-box" on:click={handleJump}>
  <div class="message-content">
    <div class="message-header">
      <div class="name">{article.name}</div>
    </div>
    <p class="message-line">
      {article.content}
    </p>
    <p class="message-line time">
      {article.time}
    </p>
  </div>
</div>

<style>
  .message-box {
    border-top: 1px solid var(--message-box-border);
    padding: 16px;
    display: flex;
    align-items: flex-start;
    width: 100%;
    cursor: pointer;
  }
  .message-box:hover {
    background-color: var(--message-box-hover);
    border-top-color: var(--link-color-hover);
  }

  .message-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  .message-header .name {
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
    color: var(--main-color);
    margin: 0;
  }
  .message-line {
    font-size: 14px;
    line-height: 20px;
    margin: 8px 0;
    color: var(--secondary-color);
    opacity: 0.7;
  }
</style>
