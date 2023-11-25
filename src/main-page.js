import $ from 'jquery';
export class Main{
    static load(){
        $("#content").before(`<header>
        <h1>The Yggdrasil's fruit</h1>
        <div id="nav">
            <div id="n-home"><a href="#main">HOME</a></div>
            <div id="n-menu"><a href="#menu">MENU</a></div>
            <div id="n-contact"><a href="#contact">CONTACT</a></div>
        </div>
    </header>`);
        $("#content").append(` <section id="main">
        <div id="info">
            <h2>Delight of knowledge</h2>
            <p>The best Restaurant of Asgard, with a variety of exotic foods, with the best ingredients from all
                over the kingdom, as well as the most exquisite beer.</p>
        </div>
        <div id="schedule">
            <h2>Hours</h2>
            <p>Monday-Thursday: 8am - 10pm</p>
            <p>Saturday: 8am - 3pm</p>
            <p>Sunday: 9pm - 2pm</p>
        </div>
        <div id="direction">
            <h2>Direction</h2>
            <p>Yggdrasil Valley, Asgard #2511</p>
        </div>
    </section>`)
    $("#content").after(`<footer>
    © The Odin Project | Photo by Jordan Steranka on Unsplash
</footer>`)

        

    }
}