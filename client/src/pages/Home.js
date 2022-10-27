import React from 'react';
import {motion} from 'framer-motion'
import {useMediaQuery} from 'react-responsive'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import image from '../images/gallery/DSC01193.jpg'
import hero from '../images/gallery/Hero-Gallery.PNG'
import placeholder from "../images/placeholder/placeholder-image.png"
const Home = () => {

    const isLaptop = useMediaQuery({query: '(min-width: 1024px)',})

    const services = [
        {
            service: "Kids cuts under 11:",
            price: 40,
            id: 1
        },
        {
            service: "Men's Cut: ",
            price: 50,
            id: 2
        },
        {
            service: "Cut and beard:",
            price: 65,
            id: 3
        },
        {
            service: "Beard:",
            price: 20,
            id: 4
        },
        {
            service: "Line up:",
            price: 15,
            id: 5
        },
                {
            service: "Military (on full amount):",
            price: 5,
            id: 6
        },
        {
            service: "Blonde Sesh (short hair) starting price:",
            price: 150,
            id: 7
        },

    ]

    const style = {
        hero1: {
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "100vh",
            backgroundPosition: "50% 100%"
        },
        hero2: {
            backgroundImage: `url(${hero})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "65vh",
            width: "100%",
            backgroundPosition: "100% 70%"
        },
        mask: {
            backgroundColor: "rgba(0, 0, 0, 0.6)",
        },
        maskBox: {
            width: "auto",
            height: "100vh",
        },
        sampleHeight: {
            height: "70vh"
        },
        sampleHeight1: {
            height: "500px"
        },
        sampleBox1: {
            width: "100%",
            height: "80%",
        },
        sampleContent: {
            marginTop: "10%",
            padding: "0 5% 0 5%",
        },
        placeholder: {
            height: "60%",
            width: "25%"
        },
        heroTitle: {
            fontSize: "65px"
        },
        serviceBox: {
            listStyle: "none",
            width: "100%",
            height: "800px",
            fontSize: "210%",
            fontWeight: "bold",
            marginBottom: "0%",
            paddingLeft: "0%"
        },
        listItems: {
            width: "100%",
        }
    }

    return (
        <main>
            <div className="text-center bg-image" style={style.hero1}>
                <div className="mask" style={style.mask}>
                    <div className="d-flex justify-content-center align-items-center h-200 p-2" style={style.maskBox}>
                        <motion.div 
                        initial={ {opacity: 0} }
                        animate={{opacity: 1}} 
                        transition={{duration: 1.0}}
                        className="text-white">
                            <h1 className="mb-3" style={style.heroTitle}>Welcome to PJ-FADES</h1>
                            <h4 className="mb-3">Fresh Haircuts right to you~</h4>
                            <h4 className="mb-5">Make a reservation!</h4>
                            <a className="btn btn-outline-light btn-lg" href="/reservation" role="button">Reservation</a>
                        </motion.div>
                    </div>
                </div>
            </div>
            <motion.div 
            initial={{ y:-50, opacity: 0}}
            whileInView={{y: 0, opacity: 1 }}
            transition={{duration: 1.5}}
            className="container mt-5 d-flex flex-column-reverse flex-lg-row align-item-center shadow p-3 mb-5 bg-body rounded" style={style.sampleHeight}>
                <div className="bg-image shadow p-3 mb-5 bg-body rounded" style={style.hero2}></div>
                <div className="text-center" style={style.sampleBox1}>
                    <div style={style.sampleContent}>
                        <h1 className="mb-4">Sample Visuals</h1>
                        <a className="fs-4" style={{textDecoration: "none"}} href="/gallery">Go to Gallery</a>
                    </div>
                </div>
            </motion.div>
            <div>
                {isLaptop ? (
                <ul className='text-center mx-auto d-flex flex-column justify-content-evenly' style={style.serviceBox}>
                    <Row sm={3} md={3} lg={3}>
                        <Col><li style={style.listItems}>Kids cuts under 11:</li><span>$40</span></Col>
                        <Col><li style={style.listItems}>Men's Cut:</li><span>$50</span></Col>
                        <Col><li style={style.listItems}>Cut and beard:</li><span>$65</span></Col>
                    </Row>
                    <Row sm={3} md={3} lg={3}>
                        <Col><li style={style.listItems}>Beard:</li><span>$20</span></Col>
                        <Col><li style={style.listItems}>Line up:</li><span>$15</span></Col>
                        <Col><li style={style.listItems}>Military (on full amount):</li><span>$5</span></Col>
                    </Row>
                    <Row sm={3} md={3} lg={3} className="justify-content-center">
                        <Col><li style={style.listItems}>Blonde Sesh (short hair) starting price:</li><span>$150</span></Col>
                    </Row>
                </ul>
                ) : (
                <div>
                    <Accordion>
                        {services.map((item) => {
                        return (
                            <Accordion.Item eventKey={item.id}>
                                <Accordion.Header style={style.listItems}>{item.service}</Accordion.Header>
                                <Accordion.Body>${item.price}</Accordion.Body>
                            </Accordion.Item>
                        )
                        })}
                    </Accordion>
                </div>
                )
                }
            </div>
            <motion.div
            initial={{x:-50, opacity: 0}}
            whileInView={{x:0, opacity: 1}}
            transition={{duration: 1.5}}
             className="text-center bg-dark text-white d-flex flex-column" style={style.sampleHeight1}>
                <div className='container'>
                    <h1 className='mt-3'>About me or My story?</h1>
                    <img className='border border-light mt-3' src={placeholder} alt="Placeholder" style={style.placeholder}></img>
                </div>
                <div className='container'>
                    <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </motion.div>
        </main>
    )
};

export default Home;