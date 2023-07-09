import React from 'react'
import img1 from '../images/image6.jpg'
import img2 from '../images/image7.jpg'
import img3 from '../images/image5.jpg'
import img4 from '../images/beautiful-sunset-view-with-snow-covered-mountains-clouds-as-viewed-from-mount-evans-colorado.jpg'
import "./Cardssection.css"
import Card from '../components/Card'
const Cardssection = () => {
    return (
        <>
            <div className='row card1'>
                <h1>When a man's stomach is full it makes no
                    difference whether he is rich or poor.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio
                    finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                <a href='https://www.facebook.com/profile.php?id=100011594749565&mibextid=ZbWKwL'><i class="fas fa-caret-right"></i>WATCH OUR STORY</a>
            </div>

            <div className='row contentcardsection2' >
                <h1>Explore Our Foods</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
            </div>

            <div className="row cards-products">
                <Card image={ img1 } title="Rainbow Vegetable Sandwich" newprice="$10.50 " oldprice="$11.70" />
                <Card image={ img2 } title="Vegetarian Burger" newprice="$9.20 " oldprice="$10.50" />
                <Card image={ img3 } title="Raspberry Stuffed French Toast" newprice="$12.50 " oldprice="$13.20" />

            </div>
        </>
    )
}

export default Cardssection
