import React, { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import CurrencyFormat from 'react-currency-format';
import Spinner from '../../components/Spinner';
import { removeCart } from '../../store/actions/cartActions'
import OrderList from './OrderList';
import './style.css';
import ContactModal from '../../components/Modal/contact-modal';


const Checkout = ({ history }) => {
	const phonenumber = localStorage.getItem('phonenumber');
	const token = localStorage.getItem('token');
	const Omega = '\u2705';
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [country, setCountry] = useState('Uganda');
	const [contact, setContact] = useState(phonenumber ? phonenumber : '');
	const [address, setAddress] = useState('');
	const [city, setCity] = useState('');
	const [otherCity, setOtherCity] = useState('');
	const [loading, setLoading] = useState(false);
	const [showAlert, setShowAlert] = useState(false);
	const [termsCheck, setTermChecked] = useState(false);
	const [coupon, setCoupon] = useState('');

	const [contactError, setContactError] = useState({});
	const [fullNameErrors, setFullNameErrors] = useState({});
	const [addressErrors, setaddressErrors] = useState({});
	const [termsErrors, settermsErrors] = useState({});

	const [infoFlag, setInfoFlag] = useState(false);
	const [shippingFlag, setShippingFlag] = useState(true);
	const [checkoutFlag, setCheckoutFlag] = useState(false);
	const [paymentMode, setPaymentMode] = useState('cash');
	const [summaryPanel, setSummaryPanel] = useState(true);

	const hideAlert = () => setShowAlert(false);

	const dispatch = useDispatch();
	const { cartItems, totalQuantities } = useSelector((state) => state.cart);

	const productsList = cartItems;

	const [modalIsOpen, setIsOpen] = useState(false);
	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);

	const getTotal = () => {
		if (Array.isArray(cartItems) && productsList.length === cartItems.length && cartItems.length > 0) {
			return productsList.reduce((currentValue, nextValue) => {
				return nextValue.discount ? currentValue + nextValue.quantity * nextValue.discountprice : currentValue + nextValue.quantity * nextValue.price
			}, 0);
		}
		return productsList.discount ? productsList.discountprice : productsList.price;
	};

	const formValidation = () => {
		const fullNameErrors = {};
		const addressErrors = {};
		const termsErrors = {};
		let isValid = true;

		if (!contact) {
			contactError.invalidContact = '** Phone Number is required';
			isValid = false;
		}

		if (!name) {
			fullNameErrors.invalidName = '** Customer name is required';
			isValid = false;
		}
		if (!address) {
			addressErrors.invalidAddress = '*** Delivery address is required';
			isValid = false;
		}
		if (termsCheck === false) {
			termsErrors.invalidTerms = '*** Terms and conditions must be accepted';
			isValid = false;
		}

		setContactError(contactError);
		setFullNameErrors(fullNameErrors);
		setaddressErrors(addressErrors);
		settermsErrors(termsErrors);
		return isValid;
	};

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	const placeOrder = async () => {
		if (paymentMode !== '') {
			const isValid = formValidation();
			if (isValid) {
				setLoading(true)

				try {
					const orderData = {
						orderItems: productsList,
						name: name,
						contact: contact,
						email: email,
						address: address,
						paymentMethod: paymentMode,
						shippingPrice: 0,
						taxPrice: 0,
						totalPrice: getTotal(),
						totalquantity: totalQuantities
					}

					const config = {
						headers: {
							'Content-Type': 'application/json',
							'Authorization': `Bearer ${token}`,
						},
					}

					const res = await axios.post(`${process.env.REACT_APP_API}/orders`, orderData, config);

					setLoading(false)
					setShowAlert(true);

					dispatch(removeCart(cartItems));

					history.push('/receipt', {
						state: res.data
					});

				} catch {
					setLoading(false);
				}
			} else {
				toast.error("Name or Delivery address or terms is required");
			}
		} else {
			// console.log("payment mode", paymentMode);
			toast.error("Payment method is not selected");
		}
	};

	const handleBreadcrumb = (e) => {
		e.preventDefault();

		if (contact && address) {
			const isValid = formValidation();
			if (isValid) {
				placeOrder();
			} else {
				toast.error("Name or Delivery address or terms is required");
			}
		} else {
			toast.error("Contact or Shipping address or terms is required. Cannot proceed to Checkout");
		}


	}

	const handlePaymentMethod = (e) => {
		let value = e.currentTarget.value;
		setPaymentMode(value);
	}

	const toggleOrderSummaryPanel = (e) => {
		e.preventDefault();
		setSummaryPanel(!summaryPanel);
	}

	return (
		<>
			<Helmet>
				<title>Check out Details</title>
				<meta name="description" content="MobileShop Checkout" />
				<script async src="https://www.googletagmanager.com/gtag/js?id=UA-193008384-1"></script>
				<script>
					{`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'UA-193008384-1');
                    `}
				</script>
			</Helmet>

			<section class="container" id="id-checkout-container">
				{loading && <Spinner />}
				<div class="container text-left">
					<div class="row py-2" id="pd-top-links">
						<ul class="breadcrumb bg-transparent p-0">
							<li class="breadcrumb-item" style={{ color: "#f90" }}>
								<Link class="text-reset ml-0" to="#">Information<span className="text-dark px-1"> &gt;&gt;&gt; </span></Link>
							</li>
							<li class="fw-600" style={{ color: "#f90" }}>
								<a class="text-reset" to='#' >Shipping<span className="text-dark px-1"> &gt;&gt;&gt;</span></a>
							</li>
							<li class="fw-600 " style={{ color: "#f90" }}>
								<a class="text-reset" to="#" >Checkout</a>
							</li>
						</ul>
					</div>
					{/* order summery for mobile view */}
					<div className="w-screen flex row mt-2 justify-center align-center" id="id-order-summary-menu-mobile" onClick={toggleOrderSummaryPanel} style={{ backgroundColor: 'rgb(164 186 250 / 40%)' }}>
						<div className="col-1">
							<i className="la la-shopping-cart la-2x "></i>
						</div>
						<div className="col-6 my-1 text-left text-black inline text-nowrap">
							{summaryPanel ? "Hide" : "Show"} order summary {summaryPanel ? <i class="las la-angle-up fw-600"></i> : <i class="las la-angle-down fw-600"></i>}
						</div>
						<div className="col-rest text-black fw-700 my-1 float-right">UGX {getTotal()}</div>
					</div>
					{
						summaryPanel ? (
							<div class="mt-2 my-1 mt-lg-0 md:order-1" id="id-order-summry-mobile">
								<div class="card shadow-sm rounded" id="id-order-summery-container">
									<div class="card-body">
										<div className="">
											{
												productsList && productsList.length > 0 ? <OrderList cartItems={productsList} /> : "No products selected!"
											}

											<hr />

											<div class="row inline-block py-2 px-1" style={{ alignItems: "center" }}>
												<div class="col-8">
													<input type="text" class="form-control " name="discount-code" placeholder="Discount Code" value={coupon} onChange={(e) => setCoupon(e.target.value)} />
												</div>
												<div class="col-2">
													<button type="button" class="btn btn-primary">
														<i className="las la-arrow-right la-2x"></i>
													</button>
												</div>
											</div>

											<hr />
											<div className="">
												<span className="text-left">Sub-Total</span>
												<span className="text-right float-right">
													<span class="fw-600">UGX <CurrencyFormat
														value={getTotal()}
														displayType="text"
														thousandSeparator
													/></span>
												</span>
											</div>

											<div className="">
												<span className="text-left">Tax</span>
												<span className="text-right float-right">
													<span class="fw-600">N/A</span>
												</span>
											</div>

											<div className="">
												<span className="text-left">Shipping</span>
												<span className="text-right float-right">
													<span class="fw-600">N/A</span>
												</span>
											</div>

											<hr />

											<div className="">
												<span className="text-left">Total</span>
												<span className="text-right float-right">
													<span class="fw-600">UGX <CurrencyFormat
														value={getTotal()}
														displayType="text"
														thousandSeparator
													/></span>
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						) : ''
					}

					<div class="row">
						<div class="col-lg-6 mb-5 py-1">
							{/* <div class="row" id="pd-top-links">
								<ul class="breadcrumb bg-transparent p-0">
									<li class="breadcrumb-item" style={{ color: "#f90" }}>
										<Link class="text-reset ml-0" to="#">Information<span className="text-dark px-1"> &gt; </span></Link>
									</li>
									<li class="fw-600" style={{ color: `${shippingFlag} ? "#000000" : "#f90"` }}>
										<a class="text-reset" to='#' onClick={(e) => handleBreadcrumb(e, 'shippingFlag')}>Shipping<span className="text-dark px-1"> &gt;</span></a>
									</li>
									<li class="fw-600 " style={{ color: `${checkoutFlag} ? "#000000" : "#f90"` }}>
										<a class="text-reset" to="#" onClick={(e) => handleBreadcrumb(e, 'checkoutFlag')}>Checkout</a>
									</li>
								</ul>
							</div> */}

							{/* Shipping Address */}
							{/* { shippingFlag ? ( */}
							<>
								<div className="card shadow-sm rounded mb-4">
									<div className="container text-left p-4">
										<h4 className="fw-600 text-xl">Contact Information</h4>
										<br />
										<div className="row">
											<div class="col-md-12">
												<input type="text" class="form-control mb-3" value={`${contact} (verified) ${Omega}`} placeholder="Phone Number" disabled style={{ fontSize: "16px" }} />
												{/* {Object.keys(contactError).map((key) => <div style={{ color: 'red' }}>{contactError[key]}</div>)} */}
											</div>
										</div>
										<p className="text-base">Our sales team will reach you on this number, <b>for delivery and order details.</b></p>
									</div>
								</div>

								<div className="card shadow-sm rounded">
									<h4 className="fw-600 text-xl pt-4 pl-4">Shipping address</h4>
									<div className="container text-left p-4">
										<>
											<div class="row gx-2">
												<div class="col-6 col-md-6 col-lg-6">
													<input id="inputFields" type="text" class="form-control mb-3" name="fullnames" placeholder="Full Name *" value={name} onChange={(e) => setName(e.target.value)} style={{ width: "100%" }} />
													{Object.keys(fullNameErrors).map((key) => <div style={{ color: 'red' }}>{fullNameErrors[key]}</div>)}
												</div>
												<div class="col-6 col-md-6 col-lg-6">
													<input id="inputFields" type="email" class="form-control mb-3" name="email" placeholder="Email Address *" value={email} onChange={(e) => setEmail(e.target.value)} />
												</div>
											</div>
											{/* <div class="row">
												
											</div> */}
											<div class="row">
												<div class="col-6 col-md-6 col-lg-6">
													<input id="inputFields" type="text" class="form-control mb-3" name="address" placeholder="Address *" value={address} onChange={(e) => setAddress(e.target.value)} />
													{Object.keys(addressErrors).map((key) => <div style={{ color: 'red' }}>{addressErrors[key]}</div>)}
												</div>
												{/* </div> */}
												{/* <div class="row"> */}
												<div class="col-6 col-md-6 col-lg-6">
													<select id="inputFields" class="form-control mb-3" name="address" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Delivery City *">
														<option disabled>Select City</option>
														<option selected value="1">Kampala</option>
														<option value="2">Mbarara</option>
														<option value="3">Jinja</option>
														<option value="4">Entebbe</option>
														<option value="5">Mukono</option>
														<option value="6">Nansana</option>
														<option value="7">Kira</option>
														<option value="8">Ssabagabo</option>
														<option value="9">Njeru</option>
														<option value="10">Gulu</option>
														<option value="11">Lugazi</option>
														<option value="12">Kasese</option>
														<option value="13">Hoima</option>
														<option value="14">Lira</option>
														<option value="15">Mityana</option>
														<option value="16">Mubende</option>
														<option value="17">Masindi</option>
														<option value="18">Mbale</option>
														<option value="20">Kitgum</option>
														<option value="21">Other</option>
													</select>
												</div>
											</div>
											{
												city === '21' ? (
													<div class="row">
														<div class="col-md-12">
															<input type="text" class="form-control mb-3" name="country" placeholder="Enter city" value={otherCity} onChange={(e) => setOtherCity(e.target.value)} />
														</div>
													</div>
												) : ""
											}
											<div class="row">
												<div class="col-md-12">
													<input id="inputCountryField" type="text" class="form-control mb-3" name="country" placeholder="Country/Region" value={country} disabled />
												</div>
											</div>
										</>
										{/* <div class="row inline-block py-2" style={{alignItems:"center"}}>
													<div class="col-sm-12 col-md-6 col-lg-6">
														<Link to="#">
															<button onClick={(e) => handleBreadcrumb(e, 'checkoutFlag')} type="button" class="btn btn-primary fw-600" style={{ width: '100%' }}>
																{loading ? <Spinner /> : <span>Continue to checkout</span>}
															</button>
														</Link>
													</div>
													<div class="col-sm-12 col-md-6 col-lg-6">
														<Link to="/cart" class="link link--style-3" style={{ width: '100%' }}>
															<button type="button" class="btn fw-600" style={{ width: '100%' }}>
																<i class="las la-arrow-left"></i> &nbsp;
																<span className="fw-800 fs-16">Return to cart</span>
															</button>
														</Link>
													</div>
												</div> */}
									</div>
								</div>
							</>
							{/* ) : contact && address && termsCheck ? "" : "Please enter shipping details" } */}

							{/* Payment Information */}
							{/* { checkoutFlag && !infoFlag && !shippingFlag  ? ( */}
							<>
								<div className="card shadow-sm rounded mt-4">
									<div className="container text-left py-4">
										<h4 className="fw-600 text-xl">Payment</h4>
										<div className="col ">
											<p className="fs-16 fw-600 pt-2 ">Select a payment option</p>

											<div class="col-md-12">
												<p className="py-2 ">
													<input type="radio" id="cash" name="payment_method" onChange={handlePaymentMethod} value="cash" checked />
													<label for="cash">Cash on delivery</label>
													<img src="images/cash-on-delivary.png" class="img-fluid mb-2 payment-logo" alt="airtel-money" width="60" height='30' />
												</p>
												<p className="py-2 d-flex justify-content-between">
													<input type="radio" id="airtel-money" name="payment_method" onChange={handlePaymentMethod} value="airtel-money" />
													<label for="airtel-money">Airtel/MTN Mobile Money</label>
													<img src="images/MTN-Mobile-Money.jpg" class="img-fluid mb-2 payment-logo" alt="airtel-money" width="40" height='40' />
													<img src="images/Airtel-Money.png" class="img-fluid mb-2 payment-logo" alt="airtel-money" width="40" height='40' />
												</p>
												{/* <p className="py-2">
													<input type="radio" id="mtn-mobile-money" name="payment_method" onChange={handlePaymentMethod} value="mtn-money" />
													<label for="mtn-mobile-money">MTN Mobile Money</label>
													<img src="images/MTN.webp" class="img-fluid mb-2 payment-logo" alt="mtn-money" width="30" height='30' />
												</p> */}
												{/* <p className="py-2">
													<input type="radio" id="lipa-later" name="payment_method" onChange={handlePaymentMethod} value="lipa-later" />
													<label for="lipa-later">LipaLater - Buy now pay later(signup required)</label>
													<img src="images/Lipalater.png" class="img-fluid mb-2 payment-logo" alt="lipa-later" width="70" height='30' />
												</p> */}
											</div>
										</div>



									</div>
								</div>
								<div class="border-0">
									<div className="col-md-12 card shadow-sm rounded p-4 mt-4">
										<h4 className="fw-600 text-xl">Delivery</h4>
												<h3 class="fs-16 fw-600 pt-4">Select a delivery option</h3>
										<div class="d-flex" style={{ justifyContent: 'center', alignItems: 'center' }}>
											<div className="py-2 w-50">
												<input type="radio" id="huey" name="drone" value="huey" checked />
												<label for="huey"><span class="d-block fw-600 fs-14">Delivery</span></label><br></br>
												(Free delivery for eligible items)
												<a class="cursor-pointer d-flex justify-content-center">
													<img class="" src="/images/locationIcon.png" alt="location" width="48" height="25" style={{visibility:"hidden"}}/>
												</a>
											</div>

											<div className="py-2">
												<input type="radio" id="dewey" name="drone" value="dewey" />
												<label for="dewey"><span class="w-full fw-600 fs-14">Pickup station<br></br> City Plaza, Basement 08</span></label>
												<a class="cursor-pointer d-flex justify-content-center" href="https://goo.gl/maps/1UsvmvRsCkFa6h519">
													<img class="" src="/images/locationIcon.png" alt="location" width="48" height="25" />
												</a>
											</div>
										</div>
									</div>
									<div className="pt-3">
										<label class="aiz-checkbox">
											<input type="checkbox" id="agree_checkbox" checked={termsCheck} onChange={(e) => setTermChecked(e.target.checked)} name="terms" />
											<span class="aiz-square-check"></span>
											<span className="fw-700">I agree to the </span>
											<Link to="/terms">terms and conditions</Link>
										</label>
										{Object.keys(termsErrors).map((key) => <div style={{ color: 'red' }}>{termsErrors[key]}</div>)}
									</div>

									<div class="row inline-block py-4" style={{ alignItems: "center" }}>
										<div class="col-sm-12 col-md-6 col-lg-6">
											<button onClick={(e) => handleBreadcrumb(e)} type="button" class="btn btn-primary fw-600" style={{ width: '100%' }}>
												{loading ? <Spinner /> : <span>Complete Order</span>}
											</button>
										</div>
										<div class="col-sm-12 col-md-6 col-lg-6">
											<Link to="/cart" class="link link--style-3" style={{ width: '100%' }}>
												<button type="button" class="btn fw-600" style={{ width: '100%' }}>
													<i class="las la-arrow-left"></i> &nbsp;
													<span className="fw-800 fs-16">Return to cart</span>
												</button>
											</Link>
										</div>
									</div>
								</div>
							</>
							{/* ) : paymentMode ? "" : "" } */}

						</div>



						{/* For mobile device */}
						<div class="col-lg-6 mt-2 my-4 md:order-1" id="id-order-summry-desktop">
							<div class="card bg-violet-300 border-0 shadow-sm rounded" id="id-order-summery-container">
								<div class="card-header">
									<h3 class="fs-16 fw-600 mb-0">Order Summary</h3>
									<div class="text-right">
										<span class="badge badge-inline badge-primary">{productsList.length} Items</span>
									</div>
								</div>
								<div class="card-body">
									<div className="">

										{
											cartItems && Array.isArray(productsList) && productsList.length > 0 ? <OrderList cartItems={productsList} /> : "No product selected!"
										}

										<hr />

										<div class="row inline-block py-2 px-2" style={{ alignItems: "center" }}>
											<div class="sm:col-sm-6 col-lg-8">
												<input type="text" class="form-control " name="discount-code" placeholder="Discount Code" value={coupon} onChange={(e) => setCoupon(e.target.value)} />
											</div>
											&nbsp;
											<div class="sm:col-sm-4">
												<button type="button" class="btn btn-primary fw-600">Apply</button>
											</div>
										</div>

										<hr />
										<div className="">
											<span className="text-left">Sub-Total</span>
											<span className="text-right float-right">
												<span class="fw-600">UGX <CurrencyFormat
													value={getTotal()}
													displayType="text"
													thousandSeparator
												/></span>
											</span>
										</div>

										<div className="">
											<span className="text-left">Tax</span>
											<span className="text-right float-right">
												<span class="fw-600">N/A</span>
											</span>
										</div>

										<div className="">
											<span className="text-left">Shipping</span>
											<span className="text-right float-right">
												<span class="fw-600">N/A</span>
											</span>
										</div>

										<hr />

										<div className="">
											<span className="text-left">Total</span>
											<span className="text-right float-right">
												<span class="fw-600">UGX <CurrencyFormat
													value={getTotal()}
													displayType="text"
													thousandSeparator
												/></span>
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<ContactModal modalIsOpen={modalIsOpen} contact={contact} placeOrder={placeOrder} setContact={setContact} close={closeModal} />

		</>
	)
}

export default Checkout
