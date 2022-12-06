import React from 'react'
import './styles.css'
import Footer from '../../components/Layout/Footer/index'
import BottomFooter from '../../components/Layout/Footer/BottomFooter'

const Warranty = () => {
    return (
        <>
            <section className="faqs">
                <div class="wpb_wrapper bg-white py-4 px-3">
                    <h5 className="text-center p-3 text-uppercase">WARRANTY, RETURN POLICY AND SERVICE AFTER PURCHASE</h5>

                    <p className="pb-3">Uganda's leading and most reliable online vendor of smartphones and basic consumer electronics in uganda, “mobileshop.ug” is a top-level domain and reliable e-commerce site fully owned, managed and operated by <strong>YO-MOBILESHOP (U) LTD</strong>. </p>

                    <p className="pb-3">Among our products ; Smartphones (brand new and imported used), Tvs , Game consoles, Fridges mobile/computer accessories among others. All items are covered by a viable warranty and consumer protection policy. We offer timely-nation-wide deliveries to all major towns and districts , in the shortest time possible.
                        Our online inventory matches our available stock/catalogue of products with both brand new and uk pre-owned or foreign used premium products."
                    </p>

                    <div>
                        <strong className="fs-16">WARRANTY DOES NOT COVER (Incase ):</strong>
                        <ul>
                            <li>Replacements of accessories (batteries, headphones, charger, cables, memory cards etc.).</li>
                            <li>Damages and other consequences that can happen if the product is used inadequately and
                                inappropriately. Clients are advised to take their time and read carefully the instructions for
                                proper use of all products (brand new items)</li>
                            <li>If products are stored improperly, and not according to manufacturer instructions.</li>
                            <li>Damages and other consequences that may come as a result of repairs or any other
                                involvements from an unauthorized service centre.</li>
                            <li>Damages and other consequences resulting from external influences (such as all kind of
                                accidents or natural disasters).</li>
                            <li>Damages of waterproof devices caused by submergence in especially water with chlorine or
                                salts.</li>
                            <li>Mechanical damages, damages caused by vis major, damages caused by not taking relevant
                                care of the goods.</li>
                            <li>Damages which the customer was informed about before the delivery of the product</li>
                            <li>Damages caused by using the product in unsuitable conditions</li>
                            <li>Damages caused by water</li>
                            <li>Damages caused by using an non-official supplements to the product, damages caused by
                                non-professional assembly</li>
                        </ul>
                        <p>Mobileshop.ug is NOT liable in the case that the manufacturer or official service centre refuse
                            to accept the warranty from any of the reasons stated above.</p>
                    </div>
                    <div>
                        <p>In the case of the warranty is declined, MOBILESHOP will make you an offer for the repair of
                            the product. In the case that you accept the offer; you are obligated to pay a total cost of the
                            repair.</p>
                        <p>After receiving the returned product, MOBILESHOP.UG will determine the condition of the
                            product and offer you one of the following options:</p>
                        <ul>
                            <li>Service: you will be forwarded to the closest service centre (official brand service such as
                                Calcare for Tecno products or , an official service trusted technician ).


                            </li>
                            <li>Replacement: The same product that you ordered will be shipped or arranged for pickup at our
                                expense
                                .</li>
                            <li>Refund: you will be refunded excluding insurance costs.</li>
                        </ul>
                        <p>Choosing one of the following options is a right reserved and excuted by Mobileshop</p>
                    </div>
                    <div className='pt-2'>
                        <strong className="fs-16">GENERAL RECLAMATION PROCEDURE</strong>

                        <p className='pb-2'>The customer may report the defect of the product via a phone call to our support team or form
                            describing the defect via any of our social media handles. In the complaint protocol the
                            customer shall provide his contact address, telephone number and e-mail address if required .
                            Mobileshop Uganda is not responsible for any inaccuracies provided by the customer in the
                            reclamation and is not responsible for the impossibility of delivery the product to the customer in
                            case of providing false or inaccurate address. </p>
                        <p className='pb-2'>The customer is obliged to provide the reciept connected to the product together with the
                            product. If the customer fails to deliver the reciept of the product the reclamation will be
                            considered to be unjustified. </p>
                        <p className='pb-2'>If the product is intended to contain passwords, the customer is obliged to notify the appropriate
                            passwords in reclamation, or remove them before the delivery of the product. If it does not, the
                            date of starting reclamation procedure will be postponed until the day of delivery of access
                            codes and passwords to the product. Note: If the product isn't sent back to us within the
                            deadline set by Mobileshop Uganda support centre, the customer loses the right to return the
                            device to us. This applies to both types of warranty. </p>
                        <p className='pb-2'>Mobileshop is not responsible for damage to data and programs in the goods in case of
                            reclamation. In this context, the customer is advised to make a backup copy of all data and
                            programs of the product sent for reclamation.</p>
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

export default Warranty
