import Mountain1 from "../assets/1.jpg"
import Mountain2 from "../assets/2.jpg"
import Mountain3 from "../assets/5.jpg"
import Mountain4 from "../assets/8.jpg"
import DestinationData from "./DestinationData"
import "./DestinationStyles.css"


const Destination = () => {
    return (
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>Tours give you the opportunity to see the World</p>

            <DestinationData
                className="first-des"
                heading="Taal Volcano, Batangas"

                text="   Taal Volcano, located in Batangas, Philippines, is a mesmerizing geological marvel that captivates visitors with its dramatic beauty and historical significance. Nestled within a massive caldera,
             Taal is not just a single volcano but a complex of stratovolcanoes and craters clustered within the main caldera. At its heart lies a stunning crater lake, Taal Lake, ensconced within the steep, 
             rocky walls of the volcano's inner crater. This crater lake, one of the world's largest, can change in color from blue to green, adding to its mystique."

                img1={Mountain1}
                img2={Mountain2}
            />
            <DestinationData
                className="first-des-reverse"
                heading="Mt.Daguldul, Batangas"

                text="Mount Daguldul is a hidden gem in Batangas, Philippines, offering a serene and relatively unexplored natural sanctuary. This picturesque mountain, part of the rugged Zambales Mountain Range, stands at approximately 672 meters above sea level and is characterized by its lush, tropical rainforests and stunning vistas. It remains off the beaten path for most tourists, making it an ideal destination for those seeking a tranquil escape from the hustle and bustle of city life."

                img1={Mountain3}
                img2={Mountain4}
            />


        </div>

    );
};
export default Destination;