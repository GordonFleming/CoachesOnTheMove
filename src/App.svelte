<script>
    import Router from 'svelte-spa-router';
    import routes from './routes';
    
    import Nav from './components/Nav.svelte'
    import Footer from './components/Footer.svelte'
</script>

<div class="container pb-5 mb-2">
    <center><img class="logo-banner" src="/images/logo-black.webp" alt="logo" width="300px"></center>
</div>

<Nav />

<main>
	<Router {routes} />
</main>

<Footer />

<style>
	main {
		text-align: center;
	}
</style>
