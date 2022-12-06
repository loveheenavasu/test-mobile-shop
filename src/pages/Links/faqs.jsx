import React from 'react'
import './styles.css'
import Footer from '../../components/Layout/Footer/index'
import BottomFooter from '../../components/Layout/Footer/BottomFooter'

const FAQS = () => {
    return (
        <>
            <section className="faqs">
                <div className='wpb_wrapper bg-white py-4 px-2'>
                    <h5 className="text-center p-3 text-uppercase">FREQUENTLY ASKED QUESTIONS</h5>

                    <div className='py-2'>
                        <strong className='pb-1'>Q: Are all your phones new and original?</strong>
                        <p>A: all the phones listed on mobileshop.ug online store are 💯 percent original and . We have
                            two categories of phones on the online portal and each category is indicated on the details page
                            of the product. The phone can either; Be brand new or imported premium used.</p>
                        <ol type="i">
                            <li>The brand new smartphones are 100 percent, from manufacturers to the distributors and
                                suppliers, then to the final consumers. You can directly purchase these products from our
                                website, being the most reliable and trusted source in the country.</li>
                            <li>Our imported premium used smartphones also listed as Uk used. This particular category of
                                smartphones are imported from Europe and USA from authorized resellers who purchase
                                directly from big dealerships like Apple store and Samsung stores. Most phones returned in
                                trade-in transactions resurface on the market with guarantee from the manufacturer and quality
                                check certificates as of there in perfect condition. We choose to give these masterpieces are
                                second chance on mobileshop.ug online and at our physical store.</li>
                        </ol>
                    </div>
                    <div className='pb-4'>
                        <strong className='pb-1'>Q: How can I buy a phone at MOBILESHOP.UG?</strong>
                        <p>A: To buy a phone or a related electronic from mobileshop portal has been made simple and
                            easy, and doesn’t require any specific knowledge. It’s simple and basic;</p>
                        <ol type="i">
                            <li>Type or search mobileshop uganda , in your search engine</li>
                            <li>Click on the result, it will take you directly to our homepage which is customized for
                                user-friendliness.</li>
                            <li>Browse your desired product or type in the AI powered smart search bar to get
                                recommendations from your query</li>
                            <li>Click “Buy Now” , you will be promoted to enter your phone number. (Used to call you
                                during delivery and order confirmation)</li>
                            <li>Enter address where you want the package to be delivered, and Click confirm order.</li>
                            <li>Sit back and wait for a call from mobileshop sales team, normally you get feedback
                                immediately. (All order processing is instant and immediate)</li>
                        </ol>
                    </div>
                    <div className='pb-4'>
                        <strong className='pb-1'>Q: Is it possible for me to cancel my order and what would be the procedure of doing it?</strong>
                        <p>A: IT possible to cancel the order anytime, when our sales reaches out, simply give a directive
                            via the phone call to cancel or proceed with the order processing.</p>
                    </div>
                    <div className='pb-4'>
                        <strong className='pb-1'>Q: Can I order and buy a phone from the website from anywhere in East Africa ?</strong>
                        <p>A: At the moment, we are serving locally in uganda but in the future mobileshop.ug website will
                            be accessible and available in neighboring Rwanda and Tanzania online. We can only deliver to
                            Kigali through our partners. For more information on cross border deliveries, send us an inquiry
                            info@mobileshop.ug.</p>
                    </div>
                    <div className='pb-4'>
                        <strong className='pb-1'>Q: Are there any additional costs other than those that I see when confirming the order?</strong>
                        <p>A: No, there are no additional costs other than those reflected on the final invoice after
                            confirmation of the order. Extra costs may only arise when the delivery distance is beyond the
                            preset regional coverage eligible for free delivery and beyond the standard fee (5000).</p>
                    </div>
                    <div className='pb-4'>
                        <strong className='pb-1'>Q: How do the warranties work?</strong>
                        <p>A: For an in-depth compression of our warranty policies and how they are excited, see footer
                            link (warranty and return policy) We have put together a whole page to help our users
                            understand our warranty policy.</p>
                    </div>
                    <div className='pb-4'>
                        <strong className='pb-1'>Q: Can I expect to get the User manual together with the phone?</strong>
                        <p>A: User manual only comes in the brand new and certified refurbished phones and items. For
                            Premium UK-used smartphones and consumer electronics we don’t provide the user manual.</p>
                    </div>
                    <div className='pb-4'>
                        <strong className='pb-1'>Q: Can I buy the phone in installments?</strong>
                        <p>A: At the moment NO, our installment policy is still under scrutiny although our customers
                            should expect the service in the future. This section of FAQs will be updated when the
                            installment plan is available.</p>
                    </div>
                    <div className='pb-4'>
                        <strong className='pb-1'>Q: Can I personally come and take over my order?</strong>
                        <p>A: YES, We have a physical shop or showroom where our customers come and physically buy
                            and take the items without ordering through the website.</p>
                    </div>
                    <div className='pb-4'>
                        <strong className='pb-1'>Q: Can I swap or trade in my phone for a newer phone or latest version? And , what is the
                            procedure and the time period ?</strong>
                        <p>A: yes we do swaps and topup for our customers who have previously purchased from our
                            stores. We only accept trade-in and topup if the client is trading in a handset previously sold to
                            him from any of our outlets.</p>
                        <p>The time doesn’t matter how long the party has used the phone but it should be noted , the
                            longer the duration the more the phone depreciates in value (monetary ) during the trade-in
                            transaction.
                            We require all customers returning for top-up and swap deals to keep a copy or picture of the
                            original receipt.</p>
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

export default FAQS
