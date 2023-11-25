import $ from 'jquery';
export class Menu{
    static load(){
        $("#content").append(`<section id="menu">
        <div>
            <h3>Appetizers:</h3>
            <li>Bifröst Bites</li>
            <em>Golden Asgardian Fries served with Heimdall's Spicy Rainbow Sauce.</em>

            <li>Mjölnir Munchies</li>
            <em>Crispy Thunderstorm Tempura with Loki's Trickster Dipping Sauce.</em>
        </div>
        <div>
            <h3>Soups and Salads:</h3>
            <li>Valkyrie Velvet Soup</li>
            <em>Smooth Ambrosia Bisque with Celestial Star Croutons.</em>
            <li>Asgardian Aurora Salad</li>
            <em>Rainbow Kale, Yggdrasil Nectar Dressing, and Odin's Favorite Pomegranate Seeds.</em>
        </div>
        <div>
            <h3>Main Courses:</h3>
            <li>Fenrir's Flame-grilled Delight</li>
            <em>Fire-kissed Wyrm Steak with Sif's Garden Herb Infusion.</em>
            <li>Enchanted Elven Quinoa Bowl</li>
            <em>Elven Quinoa, Rainbow Carrots, and Freyja's Rosemary-Glazed Tofu.</em>
            <li>Midgardian Marvel Burger</li>
            <em>Mortal-Sized Beef Burger with Loki's Illusionary Cheese and Thor's Lightning Sauce.</em>
        </div>
        <div>
            <h3>Desserts:</h3>
            <li>Rainbow Bridge Parfait</li>
            <em>Layers of Bifröst Berry Compote and Godly Vanilla Clouds.</em>
            <li>Mystical Mead Sorbet</li>
            <em>Chilled Honey Mead Sorbet served with Iridescent Mint Leaves.</em>
        </div>
        <div>
            <h3>Drinks:</h3>
            <li>Colosal Beer</li>
            <em>The house specialty with special barley and chilled with the essence of an ice giant.
            </em>
            <li>Gjallarhorn Elixir</li>
            <em>Asgardian Spirit Infusion with hints of Odin's Wisdom.</em>
            <li>Bifrost Breeze</li>
            <em>Refreshing Tropical Fruit Punch with a touch of Celestial Sparkle.</em>
        </div>
    </section>`)

        

    }
}