<div class="container pb-3 pt-4">
    <div class="row details">
        <h2>Details</h2>
        <h4>Email</h4>
        <a id="mail" href="mailto:info@coachesonthemove.co.za" >info@coachesonthemove.co.za</a>
        <h4>Tel</h4>
        <a href="tel:+27768896093" >+27(76) 889 6093</a>
        <h4>Consultation</h4>
        <a id="mail" href="mailto:mathobela@coachesonthemove.co.za" >mathobela@coachesonthemove.co.za</a>
        <h4>Talent Identification and Development</h4>
        <a id="mail" href="mailto:nkosis@coachesonthemove.co.za">nkosis@coachesonthemove.co.za</a>
        <h4>Head Office</h4>
        <p>9 Protea Heights <br>
        Cnr Voortrekker and Padstow <br>
        New Redruth, Alberton <br>
        Gauteng, 1449</p>
    </div>
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

<style>
    h2{
        padding-bottom: 2rem;
    }
    .details{
        display: inline-block;
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