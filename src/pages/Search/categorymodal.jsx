import React, { useState } from 'react';
import Modal from 'react-modal';


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

const CategoriesModal = ({ modalIsOpen, close }) => {

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={close}
            style={customStyles}
            contentLabel="Filters"
            className="modal-dialog modal-dialog-centered"
            id="login-modal" >
            <div className="modal-content">

                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={close}>
                    <span aria-hidden="true"><i className="icon-close"></i></span>
                </button>
                <section className="shadow-lg p-3 mb-5 bg-white rounded">



                    <section class="border-bottom mb-4">

                        <h6 class="font-weight-bold mb-3">Condition</h6>

                        <div class="form-check mb-3">
                            <input type="checkbox" class="form-check-input filled-in" id="34" />
                            <label class="form-check-label  text-uppercase card-link-secondary" for="34">New</label>
                        </div>
                        <div class="form-check mb-3">
                            <input type="checkbox" class="form-check-input filled-in" id="36" />
                            <label class="form-check-label  text-uppercase card-link-secondary" for="36">Uk used</label>
                        </div>



                    </section>


                    <section class="border-bottom mb-4">

                        <h6 class="font-weight-bold mb-3">Price</h6>

                        <div class="slider-price d-flex align-items-center my-4">
                            <span class="font-weight-normal  text-muted mr-2">$0</span>
                            <form class="multi-range-field w-100 mb-1">
                                <input id="multi" class="multi-range" type="range" />
                            </form>
                            <span class="font-weight-normal  text-muted ml-2">$100</span>
                        </div>
                        <div class="d-flex align-items-center mt-4 pb-1">
                            <div class="md-form md-outline my-0">
                                <input id="from" type="text" class="form-control mb-0" />
                                <label for="form">$ Min</label>
                            </div>
                            <p class="px-2 mb-0 text-muted"> - </p>
                            <div class="md-form md-outline my-0">
                                <input id="to" type="text" class="form-control mb-0" />
                                <label for="to">$ Max</label>
                            </div>
                        </div>

                    </section>

                    <section class="border-bottom mb-4">

                        <h6 class="font-weight-bold mb-3">Product</h6>

                        <div class="form-check mb-3">
                            <input type="checkbox" class="form-check-input filled-in" id="34" />
                            <label class="form-check-label  text-uppercase card-link-secondary" for="34">Phones</label>
                        </div>
                        <div class="form-check mb-3">
                            <input type="checkbox" class="form-check-input filled-in" id="36" />
                            <label class="form-check-label  text-uppercase card-link-secondary" for="36">Television</label>
                        </div>
                        <div class="form-check mb-3">
                            <input type="checkbox" class="form-check-input filled-in" id="38" />
                            <label class="form-check-label text-uppercase card-link-secondary" for="38">Laptop</label>
                        </div>


                    </section>

                    <section class="border-bottom mb-4">

                        <h6 class="font-weight-bold mb-3">Color</h6>

                        <div class="btn-group btn-group-toggle btn-color-group d-block mt-n2 ml-n2" data-toggle="buttons">
                            <label class="btn rounded-circle white border-inset-red p-3 m-2">
                                <input type="checkbox" autocomplete="off" />
                            </label>
                            <label class="btn rounded-circle grey p-3 m-2">
                                <input type="checkbox" autocomplete="off" />
                            </label>
                            <label class="btn rounded-circle black p-3 m-2">
                                <input type="checkbox" autocomplete="off" />
                            </label>
                            <label class="btn rounded-circle green p-3 m-2">
                                <input type="checkbox" autocomplete="off" />
                            </label>
                            <label class="btn rounded-circle blue p-3 m-2">
                                <input type="checkbox" autocomplete="off" />
                            </label>
                            <label class="btn rounded-circle purple p-3 m-2">
                                <input type="checkbox" autocomplete="off" />
                            </label>
                            <label class="btn rounded-circle yellow p-3 m-2">
                                <input type="checkbox" autocomplete="off" />
                            </label>
                            <label class="btn rounded-circle indigo p-3 m-2">
                                <input type="checkbox" checked autocomplete="off" />
                            </label>
                            <label class="btn rounded-circle red p-3 m-2">
                                <input type="checkbox" autocomplete="off" />
                            </label>
                            <label class="btn rounded-circle orange p-3 m-2">
                                <input type="checkbox" autocomplete="off" />
                            </label>
                        </div>

                    </section>

                    <button type="button" class="btn btn-soft-primary add-to-cart fw-600 align-self-center" style={{ whiteSpace: "nowrap" }}>
                        <span class="d-md-inline-block"> Apply</span>
                    </button>
                </section>


            </div>
        </Modal>
    )
}


export default CategoriesModal;