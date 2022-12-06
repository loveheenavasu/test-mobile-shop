import React, { useState } from 'react';
import axios from "axios";
import OtpTimer from 'otp-timer'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import Modal from 'react-modal';
import LoadSpinner from "../../components/Spinner"
import { login } from "../../store/actions/auth"
import './verify.css';
import './tel.css';

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

const LoginModal = ({ modalIsOpen, close }) => {

	const [phone, setPhone] = useState('')
	const [hash, setHash] = useState('')
	const [status, setStatus] = useState('')
	const [otp, setOTP] = useState('')
	const [loading, setLoading] = useState(false)

	let dispatch = useDispatch();
	const history = useHistory();
	const auth = useSelector(state => state.auth);

	const number = parseInt(phone, 10)
	const phonenumber = `+256${number}`

	const sendOTP = (e) => {
		setLoading(true)
		e.preventDefault()
		axios.post(`${process.env.REACT_APP_API}/otp/sendOTP`, { phonenumber })
			.then(res => {
				setLoading(false)
				console.log("OTP Response Data", res)
				setHash(res.data.hash)
				//  setStatus(res.data.info.SMSMessageData.Recipients[0].status)
				report(res.data.info.SMSMessageData.Recipients[0].messageId, res.data.info.SMSMessageData.Recipients[0].number);
			})
	}

	const report = (sessionId, phoneNumber) => {
		setLoading(true)
		axios.post(`${process.env.REACT_APP_API}/otp/delivery-reports`, sessionId, phoneNumber)
			.then(res => {
				setLoading(false)
			})
	}

	const handleClick = () => {
		console.log("Resend...")
		// sendOTP()
	}

	const confirmOTP = (e) => {
		e.preventDefault()

		const user = {
			phonenumber, hash, otp,
		}

		dispatch(login(user, history, close));
	}

	let style = {
		otpTimer: {
			margin: '10px',
			color: 'blue',
		},
		resendBtn: {
			backgroundColor: '#5cb85c',
			color: 'white',
			border: '1 px solid #ccc'
		}
	}

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
					{!hash && (
						<section class="gry-bg py-2">
							<div class="profile">
								<div class="container">
									<div class="row">
										<div class="col-xxl-4 col-xl-5 col-lg-6 col-md-8 mx-auto">
											<div class="modal-card">
												<div class="text-center pt-4">
													<h1 class="h4 fw-600">
														Enter Phone Number.
													</h1>
													<span class="opacity-60">Please make sure you fill in a valid phone number so we can reach you during delivery.</span>
												</div>
												<div class="px-4 py-3 py-lg-4">
													<div class="">
														<form id="reg-form" onSubmit={sendOTP}>
															<div class="form-group">
																<input type="tel" id="phone" class="form-control"
																	name="phone"
																	value={phone}
																	onChange={(e) => setPhone(e.target.value)}
																	placeholder="0779XXXXXX" />
															</div>

															<div class="mb-3">
																<span class="opacity-60">By continuing you agree to <a href="#">Terms of Use</a> and {' '}
																	<a href="#">Privacy Notice</a></span>
															</div>
															<div class="mb-3">
																<button type="submit" class="btn btn-primary btn-block fw-600">{loading ? <LoadSpinner /> : <span>Verify Mobile Number</span>}</button>
															</div>
														</form>
													</div>

												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>

					)}

					{hash && (
						<section class="gry-bg py-2">
							<div class="profile">
								<div class="container">
									<div class="row">
										<div class="col-xxl-4 col-xl-5 col-lg-6 col-md-8 mx-auto">
											<div class="modal-card">
												<div class="text-center pt-4">
													<h1 class="h4 fw-600">
														Verify Mobile Number
													</h1>
													<span class="opacity-60">A text with a One Time Password (OTP) has been sent to the number above.</span>
												</div>
												<div class="px-4 py-3 py-lg-4">
													<div class="">
														<form id="reg-form" onSubmit={confirmOTP}>
															<div class="form-group">
																<input type="number" class="form-control"
																	placeholder="Enter OTP Code" name="otp"
																	value={otp}
																	onChange={(e) => setOTP(e.target.value)} />
															</div>

															<div>
																{status === 'success' ? '' : <OtpTimer seconds={20} minutes={0} resend={handleClick} style={style} />}
															</div>

															<div class="mb-3">
																<button type="submit" class="btn btn-primary btn-block fw-600">{auth.authenticating ? <LoadSpinner /> : <span>Login into your account</span>}</button>
															</div>
														</form>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
					)}
				</div>
			</div>
		</Modal>
	)
}


export default LoginModal;