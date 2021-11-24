<script>
  import Article from "@/component/article/Article.svelte";

  const messageName = [
    { 
      name: 'Stephanie',
      content: 'I got your first assignment. It was quite good. 🥳 We can continue with the next assignment.',
      time: 'Dec, 12'
    },
    { 
      name: 'Mark',
      content: 'I got your first assignment. It was quite good. 🥳 We can continue with the next assignment.',
      time: 'Dec, 12'
    },
    { 
      name: 'David',
      content: 'I got your first assignment. It was quite good. 🥳 We can continue with the next assignment.',
      time: 'Dec, 12'
    },
    { 
      name: 'Jessica',
      content: 'I got your first assignment. It was quite good. 🥳 We can continue with the next assignment.',
      time: 'Dec, 12'
    },
    { 
      name: 'Jessica',
      content: 'I got your first assignment. It was quite good. 🥳 We can continue with the next assignment.',
      time: 'Dec, 10'
    },
    { 
      name: 'Jessica',
      content: 'I got your first assignment. It was quite good. 🥳 We can continue with the next assignment.',
      time: 'Dec, 10'
    }
  ]
</script>

<div class="messages-section">
  <div class="section-header">
    <p>掘金今日文章</p>
  </div>
  <div class="messages">
    {#each messageName as item}
      <Article article={item}/>
    {/each}
  </div>
</div>

<style>
  .messages-section {
    flex-shrink: 0;
    background-color: var(--projects-section);
    margin-left: 24px;
    flex: 1;
    width: 100%;
    overflow: hidden;
    padding-bottom: 96px;
    border-radius: 10px;
    transition: all 300ms cubic-bezier(0.19, 1, 0.56, 1);
  }

  .messages {
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }
  

  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    padding: 32px 24px 0 24px;
    background-color: var(--projects-section);
    color: var(--main-color);
  }

  .section-header p {
    font-size: 24px;
    line-height: 32px;
    font-weight: 700;
    opacity: 0.9;
    margin: 0;
    color: var(--main-color);
  }

</style>