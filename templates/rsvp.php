<?php

?>
<div class="row">
    <h1>RSVP <small>Banerelle Wedding</small></h1>
    <p class="lead">We'd love for you to join us. Start by finding your name:</p>
    <form class="" role="form">
        <!-- add .has-success or .has-error -->
        <div class="form-group has-success has-feedback">
            <input id="inputLastName" class="form-control input-lg" type="text" placeholder="Last name">
            <!-- .glyphicon-ok or .glyphicon-remove -->
            <span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
        </div>
        <blockquote>
            <p>Pick Your Eats</p>
        </blockquote>
        <div class="form-group">
            <div class="radio">
                <label>
                    <input type="radio" name="foodOptions" id="foodOptions1" value="Burrito">
                    Breakfast Burrito
                </label>
            </div>
            <div class="radio">
                <label>
                    <input type="radio" name="foodOptions" id="foodOptions2" value="McMuffin">
                    Egg McMuffin
                </label>
            </div>
        </div>
        <blockquote>
            <p>Guest</p>
        </blockquote>
        <div class="form-group">
            <div class="checkbox disabled">
                <label>
                    <input type="checkbox" value="+1" disabled>
                    +1
                </label>
            </div>
        </div>
        <button type="submit" class="btn btn-success">YES</button>
        <button type="button" class="btn btn-danger">Nope</button>
    </form>
</div>