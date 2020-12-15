<script>
    import Nav from '$components/Nav.svelte';
    import Footer from '$components/Footer.svelte';
</script>

<div class="container pb-5 mb-2">
    <center><img class="logo-banner" src="/images/logo-black.webp" alt="logo" width="300px"></center>
</div>

<main>
    <Nav/>

    <div class="container">
        <h2>background</h2>
        <br>
        <p>Coaches On the Move is a private company that has been operating since 2013 and was formally established in 2015 by Simphiwe Nkosi and Darren Kwong. The organization provides sport science support in the form of talent identification, peak performance parameter testing, program design, player and team performance tracking, and empowerment of coaches through sport specific workshops.</p>   
        <p>Opportunities for kids in disadvantaged communities was the primary focus of the company in 2013. After being afforded a scholarship opportunity to attend a prestigious school and being introduced to sport and human performance development. Simphiwe and Darren realized the lack of opportunity that was afforded to disadvantaged schools and with this realized the need for development through sports and education.</p>
        <h2>our values</h2>
        <br>
        <p>We focus on being excellent in everything we do. We aim to improve the lives of coaches and athletes undergoing the programs set by "Coaches On The Move''. We have faith that God's time is perfect in everything we pursue. Being proactive is key, our service delivery is all about being ahead of the game and making sure that we keep up with any changes in the sport and human development industry, thus pro-activeness.</p>
        <h2>what we do</h2>
        <br>
        <p>We are a multifaceted service provider offering performance enhancing support in the development of coaches through informative scientific workshops, with the aim to sustain long term and holistic development and participation of student athletes. Ultimately moving athletes from a state of poor performance to unlocking their true potential.</p>
    </div>

    <div class="container pb-3 pt-4">
        <div class="row">
            <div class="col-md-6 col-sm-12 pt-5 mx-auto">
                <h2>Contact us</h2>
                <form name='contact' method='POST' data-netlify="true">
                    <fieldset>
                    <div class="form-group">
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                        <label>Name</label>
                        <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Enter your name" name="name">
                    </div>
                    <div class="form-group">
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                        <label>Email address</label>
                        <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter your email" name="email">
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                        <label>Subject</label>
                        <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Enter your subject" name="subject">
                    </div>
                    <div class="form-group">
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                        <label>Your message...</label>
                        <textarea name="message" class="form-control" id="exampleTextarea" rows="8"></textarea>
                    </div>
                    <center><button type="submit" class="btn btn-primary submit">Submit</button></center>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>

    <Footer/>
</main>

<style lang="scss">
    main{
        text-align: center;
    }
    h2{
        text-transform: uppercase;
    }
    p{
        color: rgb(58, 55, 55);
        font-size: 1.1rem;
    }
    /* Bootsrap mods */
    .form-control{
        border: 2px solid#221F23;
        border-radius: 1.1rem;
    }
    .form-control:focus{
        border: 3px solid#4a474b;
        border-radius: 0;
        box-shadow: none;
    }
    .btn-primary{
        background-color: #221F23;
        border-color: #221F23;
        margin-top: 2vh;
        margin-bottom: 4vh;
        width: 100%;
        border-radius: 0;
        border-radius: 1.1rem;
    }
    .btn-primary:hover{
        background-color: #2d2c2e;
        border-color: #d0c6d3;
        border-radius: 1rem;
        transition: 1s;
    }.btn-primary:focus{
        background-color: #2d2c2e;
        border-color: #d0c6d3;
        box-shadow: none;
    }
</style>