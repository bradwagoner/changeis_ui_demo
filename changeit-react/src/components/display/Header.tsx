import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <div id='header' className='d-flex flex-row justify-content-between'>
            <div className='nav-links'>
                <Link to='' className=''>Home</Link>
                |
                <Link to='/faker-data' className=''>Faker Data</Link>
                |
                <Link to='/faker-data-carousel' className=''>Faker Data Carousel</Link>
            </div>

            <div className='header-buttons'>
                <a href='http://localhost:4200'>Angular Changeis</a>
            </div>
        </div>
    );
};