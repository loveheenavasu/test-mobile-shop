import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import Modal from 'react-modal';
import Spinner from '../../components/Spinner';
import './tel.css';
import { Link } from 'react-router-dom';


const customStyles = {
    content: {
        top: '50%',
        transform: 'translateY(-50%)'
    },
    overlay: {
        backgroundColor: 'rgba(77,77,77,0.6)',
        zIndex: '10000'
    }
};

Modal.setAppElement('#root');

const ContactModal = ({ modalIsOpen, close, setContact, contact, placeOrder }) => {

    
    const [loading, setLoading] = useState(false);
    const [inputUpdate, setInputUpdation] = useState(false);

    let dispatch = useDispatch();
    const history = useHistory();

    const number = parseInt(contact, 10)
    const phonenumber = `+256${number}`

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={close}
            style={customStyles}
            contentLabel="Login Modal"
            className="modal-dialog modal-dialog-centered"
            id="login-modal" >
            <div className="modal-content">
                <div className="modal-body">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={close}>
                        <span aria-hidden="true"><i className="icon-close"></i></span>
                    </button>
                     <section class="gry-bg py-2">
                     <div class="profile">
                        <div class="container">
                           <div class="row">
                              <div class="col-xxl-4 col-xl-5 col-lg-6 col-md-8 mx-auto">
                                 <div class="modal-card">
                                       <div class="text-center pt-4">
                                          <h1 class="h4 fw-600">
                                             Confirm Phone Number
                                          </h1>
                                          <span class="opacity-60">Please make sure you fill in a valid phone number. You will receive a confirmation message on this number, after completing order..</span>
                                       </div>
                                       
                                       { !inputUpdate && (
                                          <div class="px-2 py-2 py-lg-4">
                                                   <div class="row inline-block py-2" style={{alignItems:"center"}}>
                                                      <div class="col-sm-6 col-md-6 col-lg-6">
                                                         <Link to="/receipt">
                                                            <button onClick={placeOrder} type="button" class="btn btn-success fw-600" style={{ width: '100%' }}>
                                                               {loading ? <Spinner /> : <span>Complete Order Now!</span>}
                                                            </button>
                                                         </Link>
                                                      </div>
                                                      <div class="col-sm-6 col-md-6 col-lg-6 mt-sm-2" >
                                                         <Link to="#">
                                                            <button type="button" class="btn btn-secondary fw-600" 
                                                               onClick={() => setInputUpdation(true)}
                                                               style={{ width: '100%'}}>
                                                               <span className='w-full'>Update Number</span>
                                                            </button>
                                                         </Link>
                                                      </div>
                                                   </div>
                                          </div>
                                       )}

                                       { inputUpdate && (
                                          <div class="py-4">
                                             <div class="">
                                                <input 
                                                   type="tel" 
                                                   name="updated-phone-number" 
                                                   id="id-updated-phone-number" 
                                                   onChange={(e) => setContact(e.target.value)}
                                                   value={contact} />
                                             </div>

                                             <button type="button" class="btn btn-primary fw-600 my-3 py-2" 
                                                onClick={() => setInputUpdation(false)}
                                                style={{ width: '60%', border: '1px solid #f90', borderRadius: '10px'}}>
                                                <span>Update Number</span>
                                             </button>
                                          </div>
                                       )}
                                       
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </section>
                </div>
            </div>
        </Modal>
    )
}


export default ContactModal;