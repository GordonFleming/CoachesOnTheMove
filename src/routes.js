// Components
import Home from './routes/Home.svelte'
import About from './routes/About.svelte'

// Export the route definition object
export default {
    // Exact path
    '/': Home,
    '/about': About,

    // Catch-all, must be last
    '*': NotFound,
}