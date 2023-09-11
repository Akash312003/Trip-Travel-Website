import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg"
import Trip2 from "../assets/8.jpg"
import Trip3 from "../assets/6.jpg"
function Trip() {
    return (
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destination using Google Maps.
            </p>
            <div className="tripcard">
                <TripData
                    image={Trip1}
                    heading="Trip in Indonesia"
                    text="Indonesia, a captivating archipelago nation located in Southeast Asia, is a land of rich diversity and natural beauty. With over 17,000 islands spanning the equator, 
                    it boasts a stunning array of landscapes, from lush rainforests and towering volcanoes to pristine beaches and vibrant coral reefs. "
                />
                <TripData
                    image={Trip2}
                    heading="Trip in Malaysia"
                    text="Malaysia, located in Southeast Asia, is a captivating and diverse country known for its rich cultural tapestry, stunning natural landscapes, and vibrant modern cities. 
                    With a population that reflects a harmonious blend of Malay, Chinese, Indian, and indigenous cultures, Malaysia is a true melting pot of traditions and ethnicities. "
                />
                <TripData
                    image={Trip3}
                    heading="Trip in France"
                    text="France, often hailed as the epitome of romance, culture, and art, is a country of immense charm and historical significance in Western Europe. With a rich tapestry of history,
                     France boasts iconic landmarks like the Eiffel Tower, Notre-Dame Cathedral, and the Palace of Versailles, which draw millions of visitors from around the world. Its capital, Paris, is not only the City of Lights but also a hub of fashion, gastronomy, and intellectual thought.  "
                />
            </div>
        </div>
    )
}
export default Trip;