import $ from 'jquery';
export class Contact{
    static load(){
        $("#content").append(`<section id="contact">
        <div>
            <h2>Reservations</h2>
            <address>
                Phone: +961 5658 45621<br>
                Email: YggdrasilFruit@odinproject.asg<br>
            </address>
        </div>
        <div>
            <h2>Delivery</h2>
            <address>
                Phone: +961 4485 65325<br>
                Email: TheFastFenrir@odinproject.asg<br>
            </address>
        </div>
    </section>`)

        

    }
}