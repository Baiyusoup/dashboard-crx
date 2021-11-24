<script>
  import { Router, Route } from 'svelte-routing'
  import Plum from './component/plum/Plum.svelte';
  import Header from './component/layout/Header.svelte';
  import Content from './component/layout/Content.svelte';
  import Siderbar from './component/layout/Siderbar.svelte';
  import Home from './pages/Home.svelte';
  import About from './pages/About.svelte';

</script>


<Header />
<Content>
  <Router>
    <Siderbar />
    <Route path="/" component={Home} />
    <Route path="about" component={About} />
  </Router>
</Content>
<Plum />
