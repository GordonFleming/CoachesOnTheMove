<Navbar />

<main>
    <Home />
</main>

<Router {routes} />

<Contact />

<Footer />

<script>
    import Router from 'svelte-spa-router'
    import routes from './routes'
    //Components
    import Navbar from './routes/Nav.svelte'
    import Footer from './routes/Footer.svelte'
    import Contact from './routes/Contact.svelte'
    import Home from './routes/Home.svelte'
</script>