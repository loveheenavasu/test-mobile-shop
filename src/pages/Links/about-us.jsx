import React from 'react'
import './styles.css'
import Footer from '../../components/Layout/Footer/index'
import BottomFooter from '../../components/Layout/Footer/BottomFooter'

const AboutUs = () => {
    return (
        <>
            <section className="faqs">
                <div class="wpb_wrapper bg-white py-4 px-3">
                <h5 className="text-center p-3 text-uppercase">About us</h5>
                    <p className="pb-3">Uganda's leading and most reliable online vendor of smartphones and basic consumer electronics in uganda, “mobileshop.ug” is a top-level domain and reliable e-commerce site fully owned, managed and operated by <strong>YO-MOBILESHOP (U) LTD</strong>. </p>

                    <p className="pb-3">Among our products ; Smartphones (brand new and imported used), Tvs , Game consoles, Fridges mobile/computer accessories among others. All items are covered by a viable warranty and consumer protection policy. We offer timely-nation-wide deliveries to all major towns and districts , in the shortest time possible.
                        Our online inventory matches our available stock/catalogue of products with both brand new and uk pre-owned or foreign used premium products."
                    </p>

                    <div>
                        <strong className="fs-16">Mission Statement</strong>

                        <p>With convinience at its best, Mobileshop Uganda aims to restore buyer trust in consumer electronics and the smartphones business by offering a one-stop online shop with exceptional services such as viable warranty policies and fastest deliveries in the industry. Our foreign used stock is certified European and global standard hense assurance of quality products from  the international markets to our local consumer. We offer same day delivery since we know the urgency of an order.

                            We strive to serve Ugandans best products at lowest and most competitive prices ever both online and brick and motor stores, without compromising quality.
                            We are Uganda’s Leading Smartphones’ vendor. </p>
                    </div>
                    <div>
                        <p className="pb-3">Thank you for believing in Mobileshop.ug</p>
                        <div>
                            <strong> Contact us:</strong>
                            <p>Email; info@mobileshop.ug</p>
                            <p>+256- 709744874</p>
                            <p>Sales and co-perate bulk orders; sales@mobileshop.ug</p>
                        </div>
                    </div>
                </div>

            </section>
            <div className='d-lg-none pb-5'>
                <Footer />
                <BottomFooter />
            </div>
            <div className='d-none d-lg-block' style={{ marginBottom: "-2%" }} >
                <Footer />
                <BottomFooter />
            </div>
        </>
    )
}

export default AboutUs
