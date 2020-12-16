import Home from './routes/Home.svelte';
import About from './routes/About.svelte';
import Contact from './routes/Contact.svelte';
import Gallery from './routes/Gallery.svelte';
import NotFound from './routes/NotFound.svelte';

export default {
    '/': Home,
    '/about': About,
    '/Gallery': Gallery,
    '/contact': Contact,
    // The catch-all route must always be last
    '*': NotFound
};
