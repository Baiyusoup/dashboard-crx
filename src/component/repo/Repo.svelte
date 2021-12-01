<script>
  import { go } from '@/api/chrome'

  export let repo
  const handleJump = () => {
    go(repo.src)
  }
</script>

<div class="project-box-wrapper" on:click={handleJump}>
  <div class="project-box">
    <div class="project-box-header">
      <h3>{repo.usename}/{repo.reponame}</h3>
    </div>
    <div class="project-box-content-header">
      <p class="box-content-subheader">{repo.description}</p>
    </div>

    <div class="project-box-footer">
      <span style={`background-color: ${repo.langColor};`}>
        {repo.lang}
      </span>
      <div class="days-left" style="color: #ff942e;">
        star {repo.starCount}
      </div>
    </div>
  </div>
</div>

<style>
  .project-box-wrapper {
    width: 33.3%;
    padding: 8px;
    cursor: pointer;
    transition: 0.2s;
  }

  .project-box-wrapper:hover {
    background-color: var(--message-box-hover);
    border-top-color: var(--link-color-hover);
  }

  .project-box {
    --main-color-card: #c8f7dc;
    border-radius: 6px;
    color: var(--secondary-color);
    padding: 16px;
    background-color: var(--app-container);
  }
  .project-box-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    color: var(--main-color);
  }
  .project-box-content-header {
    text-align: center;
    margin-bottom: 16px;
  }
  .project-box-content-header p {
    margin: 0;
  }
  .project-box-wrapper {
    padding: 8px;
    transition: 0.2s;
  }

  .box-content-subheader {
    font-size: 14px;
    line-height: 24px;
    opacity: 0.7;
  }

  .project-box-footer {
    display: flex;
    justify-content: space-between;
    padding-top: 16px;
    position: relative;
  }
  .project-box-footer:after {
    content: '';
    position: absolute;
    background-color: rgba(255, 255, 255, 0.6);
    width: calc(100% + 32px);
    top: 0;
    left: -16px;
    height: 1px;
  }
</style>
