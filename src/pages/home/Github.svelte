<script>

  import Repo from "@/component/repo/Repo.svelte";

  let repos = []

  let titleIdx = 0
  const titles = ['Github', 'Todo']
  const handleSwitch = () => {
    titleIdx = (titleIdx + 1) % 2
  }
</script>

<div class="projects-section">
  <div class="projects-section-header">
    <p>{titles[titleIdx]}</p>
    <button on:click={handleSwitch} class="view-btn grid-view active" title="切换">
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
        class="feather feather-grid"
      >
        <rect x="3" y="3" width="7" height="7"></rect>
        <rect x="14" y="3" width="7" height="7"></rect>
        <rect x="14" y="14" width="7" height="7"></rect>
        <rect x="3" y="14" width="7" height="7"></rect></svg>
    </button>
  </div>
  <div class="project-boxes">
    {#each repos as repo}
      <Repo repo={repo}/>
    {/each}
  </div>
</div>

<style>
  .projects-section {
    flex: 2;
    background-color: var(--projects-section);
    border-radius: 6px;
    padding: 10px 10px 0 10px;
    overflow: hidden;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .projects-section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    color: var(--main-color);
  }

  .projects-section-header p {
    font-size: 24px;
    line-height: 32px;
    font-weight: 700;
    opacity: 0.9;
    margin: 0;
    color: var(--main-color);
  }


  .view-btn {
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px;
    border-radius: 4px;
    background-color: transparent;
    border: none;
    color: var(--main-color);
    margin-left: 8px;
    transition: 0.2s;
    cursor: pointer;
  }

  .view-btn.active {
    background-color: var(--link-color-active-bg);
    color: var(--link-color-active);
  }

  .view-btn:not(.active):hover {
    background-color: var(--link-color-hover);
    color: var(--link-color-active);
  }

  .project-boxes {
    display: flex;
    flex-wrap: wrap;
  }

  .project-boxes {
    margin: 0 -8px;
    overflow-y: auto;
  }
</style>