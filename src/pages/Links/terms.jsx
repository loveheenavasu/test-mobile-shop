import React from 'react'
import './styles.css'
import Footer from '../../components/Layout/Footer/index'
import BottomFooter from '../../components/Layout/Footer/BottomFooter'

const Terms = () => {
    return (
        <>
            <section className="terms">
                <div id="content" class="site-content bg-white py-4 px-3">

                    <div class="container">
                        <div class="row">
                            <div class="wpb_column vc_column_container vc_col-sm-2">
                                <div class="vc_column-inner">
                                    <div class="wpb_wrapper"></div>
                                </div>
                            </div>
                            <div class="wpb_column vc_column_container vc_col-sm-8">
                                <div class="vc_column-inner">
                                    <div class="wpb_wrapper">
                                        <p className="heading">TERMS AND CONDITIONS</p>
                                    </div>
                                </div>
                            </div>
                            <div class="wpb_column vc_column_container vc_col-sm-2">
                                <div class="vc_column-inner">
                                    <div class="wpb_wrapper"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <strong>DEFINITIONS AND INTERPRETATION</strong>
                        <p>The name of the company selling goods should be inserted as indicated.  Also, you must identify clearly the “Goods” which are being sold.</p>
                        <p>Clause 1.2 is designed to make it clear that the seller’s terms and conditions will take precedence: online sellers do not have too much of a problem here but in other situations, a purchaser may confirm that he wishes to buy on his own terms and conditions and an argument can then develop as to whose terms and conditions actually apply to the contract – this is known as the “battle of the forms”.</p>
                    </div>
                    <div>
                        <strong>PRICE</strong>
                        <p>
                            It is a legal requirement that the total price of the goods, including taxes and any other charges are clearly shown.  The wording in clause 2.2 is designed to reflect this but it may have to be adjusted depending on what information is provided on the website.</p>
                    </div>
                    <div>
                        <strong>ORDERING GOODS ONLINE</strong>
                        <p>In clause 3.1 the customer is required to “warrant” that the information that he provides when he purchasing is accurate – this is intended to protect the seller against credit card fraud, although in practice this can be difficult.</p>
                        <p>Clause 3.2 attempts to deal with this problem in another way:  when a credit or debit card payment is made online, it sometimes happens that the details provided to the company processing the payment do not fully match the details held by the customer’s bank.  In spite of this, the banks will sometimes allow the payment to proceed.  A discrepancy will usually be highlighted by the company processing the payment and this will then enable the seller to make some further enquiries before dispatch of goods.  Worldpay, for example, notifies the seller with a ‘Caution’ or a ‘Warning’ depending on the perceived level of risk.</p>
                    </div>
                    <div>
                        <strong>PRIVACY</strong>
                        <p>The Data Protection Act controls what people can do with information which is provided to them.  The wording of this clause may need to be amended if, for example, the seller is intending to supply lists of customers to a third party, then the consent of the customer should be obtained.</p>
                    </div>
                    <div>
                        <strong>DELIVERY</strong>
                        <p>It is possible that the delivery date will be specified on the website but if not, it should be provided by the seller and since deliveries cannot always be guaranteed, clause 6.1 is intended to give the seller some protection. Unless otherwise stated in the terms, delivery should be within 30 days.            Clause 6.3 requires the customer to give prompt notice if the goods arrived in a damaged state.</p>
                    </div>
                    <div>
                        <strong>CANCELLATION</strong>


                        <p>
                            There are, as mentioned, numerous regulations with regard to “distance selling” whereby a customer has the right to cancel an order within 14 days from the date he/she receives the goods and to receive a full refund from the trader within 14 days.

This clause largely follows the wording recommended in the Regulations and it includes a reference to the Model Cancellation Form in Schedule 3 of the Regulations. A copy is attached to these notes. Use of the model form is not compulsory and you may refer to have a cancellation form on your website.</p>
                        <p>
                            The seller is entitled to impose certain cancellation charges on the customer and this is covered by clauses 7.2 and 7.3.

                            Under the Regulations, goods which have been personalised for the customer or which have been made to the customer’s specification are excluded from the cancellation provisions and this is made clear by clause 7.8.

                            In the case of digital content, when the content is delivered online once payment has been made, rather than after 14 days, the terms need to be revised to make it clear that the customer consents to early delivery and agrees to waive the 14 day cancellation rights.
</p>
                    </div>
                    <div>
                        <strong>RISK AND OWNERSHIP</strong>
                        <p>
                            Once the goods are delivered to the customer, the customer becomes responsible for loss or damage.  The Regulations refer to a consumer acquiring ‘physical possession’ of the goods. Clause 8.1 also allows for the risk to pass to the customer if there is an arrangement whereby the customer agrees to collect the goods.

                            Under clause 8.2, the seller retains ownership until all payments have been received – this gives the seller the right to recover the goods if they are delivered before full payment has been received.
</p>
                    </div>
                    <div>
                        <strong> WARRANTIES AND LIABILITY</strong>
                        <p>
                            Under the general law there are implied warranties on the part of the seller – that the goods which he is selling will meet the description and that they will be reasonably fit for the purposes for which they are required etc.  This clause contains a fairly basic warranty on behalf of the seller.

                            Under clause 9.3, the seller in effect offers a guarantee that if within a specified period any defect in the goods appears, then the seller will either repair or replace those goods, but the cost of return is at the customer’s expense.  Clauses 9.4 and 9.5 are designed to limit the seller’s liability. Here again there are laws designed to protect the purchaser and the seller should check the legal position.
</p>
                    </div>
                </div>
            </section>
            <div className='d-lg-none pb-5'>
                <Footer />
                <BottomFooter />
            </div>
            <div className='d-none d-lg-block' style={{marginBottom:"-2%"}} >
            <Footer />
            <BottomFooter />
            </div>
        </>
    )
}

export default Terms
