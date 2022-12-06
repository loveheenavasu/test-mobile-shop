import React, { useState, useEffect } from "react";
import _ from "lodash";
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import CurrencyFormat from 'react-currency-format';
import SweetAlert from 'react-bootstrap-sweetalert';
import BuyNowModal from "../../components/Modal/buynow-modal";
import { addToCart } from '../../store/actions/cartActions';
import RelatedAccessories from './RelatedAccessories';
import { useHistory, useLocation } from 'react-router-dom';


const ProductInfo = ({ product }) => {
	const [modalIsOpen, setIsOpen] = useState(false);
	const [showAlert, setShowAlert] = useState(false);
	const [storageSize, setStorageSize] = useState('64GB');
	const [color, setColor] = useState('');
	const [colorName, setColorName] = useState('');
	const [storagePrice, setStoragePrice] = useState(product.storageprice && product.storageprice.sixtyfour);
	const [quantity, setQuantity] = useState(1);
	const [currency, setCurrency] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState({});

	const hideAlert = () => setShowAlert(false);
	const changeColor = (e) => setColor(e.target.value);
	const handleOptionChange = (e) => setStorageSize(e.target.value);
	let location = useLocation();
	let currentUrl = "https://mobileshop.ug" + location.pathname;

	const decQuantity = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1)
		}
	}
	const iconstyles = {
		fontSize: "20px",
		border: "none",
		color: "#f90",

	}
	const shippingprice = product.price
	let shareImage = product.images && product.images.length ? product.images[0].url : ''

	const urlToObject = async (url) => {
		const response = await fetch(url);
		const blob = await response.blob();
		const file = new File([blob], { shareImage }, { type: blob.type });
		return file;
	};
	const files = urlToObject({ currentUrl })

	const sharePage = () => {
		if (navigator.share) {
			navigator
				.share({
					title: "Checkout this product on mobileshop",
					text: product.title,
					url: document.location.href,
					file: { files }
				})
				.then(() => {
					console.log('Successfully shared');
				})
				.catch(error => {
					console.error('Something went wrong sharing the blog', error);
				});
		}
		console.log(files)
	};

	const history = useHistory();
	const token = localStorage.getItem('token');

	const openModal = () => {

		const data = {
			id: product._id,
			title: product.title,
			images: product.images[0].url,
			price: product.price,
			discount: product.discount,
			discountprice: product.discountprice,
			countInStock: product.countInStock,
			quantity: quantity,
			totalprice: product.discount ? product.discountprice * quantity : product.price * quantity,
			storageSize,
			storagePrice,
			color,
			img: product.images[0].filename
		}

		if (token) {
			setSelectedProduct(data);
			dispatch(addToCart(data));
            history.push("/new-checkout");
		} else {
			setSelectedProduct(data);
			setIsOpen(true);
		}
	};

	const closeModal = () => setIsOpen(false);
	const dispatch = useDispatch();

	const Msg = () => (
		<div>
			Product Added To Cart Successfully
			<Link to='/cart' className="pl-2">
				<button class="btn btn-sm btn-primary">Go To Cart</button>
			</Link>
		</div>
	)

	const handleAddToCart = () => {
		const cat = {
			id: product._id,
			title: product.title,
			images: product.images[0].url,
			price: product.price,
			discount: product.discount,
			discountprice: product.discountprice,
			quantity: quantity,
			storageSize,
			storagePrice,
			color,
			img: product.images[0].filename
		}

		dispatch(addToCart(cat))
		toast.info(Msg)
	};

	useEffect(() => {
		if (storageSize === '32GB') {
			setStoragePrice(product.storageprice && product.storageprice.thirtytwo)
		} else if
			(storageSize === '64GB') {
			setStoragePrice(product.storageprice && product.storageprice.sixtyfour)
		} else if (storageSize === '128GB') {
			setStoragePrice(product.storageprice && product.storageprice.onetwentyeight)
		}
		else if
			(storageSize === '16GB') {
			setStoragePrice(product.storageprice && product.storageprice.sixteen)
		}
		else if (storageSize === '256GB') {
			setStoragePrice(product.storageprice && product.storageprice.twofiftysix)
		}
		else if (storageSize === '512GB') {
			setStoragePrice(product.storageprice && product.storageprice.fivetwelve)
		}

	}, [storageSize]);

	useEffect(() => {
		if (color === '#343d52') {
			setColorName('Space Gray')
		} else if
			(color === '#C0C0C0') {
			setColorName('Silver')
		} else if (color === '#E6BE8A') {
			setColorName('Gold')
		}
		else if (color === '#000000') {
			setColorName('Black')
		}
		else if (color === '#FFFF00') {
			setColorName('Yellow')
		}
		else if (color === '#FF0000') {
			setColorName('Red')
		}
		else if (color === '#0000FF') {
			setColorName('Blue')
		}
		else if (color === '#B76E79') {
			setColorName('Rose Gold')
		}
		else if (color === '#28282B') {
			setColorName('Matte Black')
		}
		else if (color === '#0A0A0A') {
			setColorName('Jet Black')
		}
		else if (color === '#B76E79') {
			setColorName('Rose Gold')
		}
		else if (color === '#800080') {
			setColorName('Purple')
		}
		else if (color === '#383428') {
			setColorName('Graphite')
		}
		else if (color === '#B76E79') {
			setColorName('Rose Gold')
		}
		else if (color === '#1ca9c9') {
			setColorName('Pacific Blue')
		}
		else if (color === '#FFC0CB') {
			setColorName('Pink')
		}
		else if (color === '#808080') {
			setColorName('Grey')
		}
		else if (color === '#EE82EE') {
			setColorName('Violet')
		}
		else if (color === '#cd7f32') {
			setColorName('Bronze')
		}
	}, [color]);

	const mystyle = {
		marginLeft: "80px",
		backgroundColor: "DodgerBlue",

	};

	const convertCurrency = () => {
		setCurrency(!currency)
	};

	const handlePreOrder = () => {
		history.push("/preorder");
	}

	return (
		<section id='productinfo'>
			<div class="text-left">
				{showAlert && (
					<SweetAlert
						info
						onConfirm={() => hideAlert()}
						onCancel={() => hideAlert()}
						title="Product Added to Cart Successfully!"
						timeout={2000}
					/>
				)}
				<BuyNowModal modalIsOpen={modalIsOpen} selectedProduct={selectedProduct} close={closeModal} />
				<h1 class="mb-2 fs-20 fw-600">
					<strong>{product.title}</strong>
				</h1>
				<div class="d-flex justify-content-between">
					<div class="">
						<span class="rating">
							<i class="las la-star active"></i><i class="las la-star active"></i><i class="las la-star active"></i><i class="las la-star active"></i><i class="las la-star active"></i>
						</span>
					</div>
					<div class="">
						{product.condition === "Brand New" ? (
							<span class="badge badge-md badge-inline rounded-pill text-dark text-light fw-400 mr-5" style={{ backgroundColor: "#d4af37" }}>12months warranty</span>

						) : (
							""
						)}
					</div>
					<div class="">
						<span class="badge badge-md badge-inline badge-pill badge-success">{product.condition}</span>
					</div>
				</div>

				<hr />
				<div class="row no-gutters mt-2 pb-2">
					<div class="col-sm-10">
						<div class="">
							{
								!currency ?

									<strong class="h2 fw-700 text-primary">

										{product.discount && !storagePrice && <strong id="chosen_price" class="h4 fw-600 text-primary">UGX <CurrencyFormat
											value={product.discountprice * quantity}
											displayType="text"
											thousandSeparator
										/></strong>}
										{!product.discount && !storagePrice && <strong id="chosen_price" class="h4 fw-600 text-primary">UGX <CurrencyFormat
											value={product.price * quantity}
											displayType="text"
											thousandSeparator
										/></strong>}
										{storagePrice && product.storageChecked && <strong id="chosen_price" class="h4 fw-600 text-primary">UGX
											<CurrencyFormat
												value={storagePrice * quantity}
												displayType="text"
												thousandSeparator
											/></strong>}


									</strong> :
									<strong class="h2 fw-700 text-primary">

										{product.discount && !storagePrice && <strong id="chosen_price" class="h4 fw-600 text-primary">USD  <CurrencyFormat
											value={Math.round(product.discountprice * quantity * 0.00026)}
											displayType="text"
											thousandSeparator
										/></strong>}
										{!product.discount && !storagePrice && <strong id="chosen_price" class="h4 fw-600 text-primary">USD  <CurrencyFormat
											value={Math.round(product.price * quantity * 0.00026)}
											displayType="text"
											thousandSeparator
										/></strong>}
										{storagePrice && product.storageChecked && <strong id="chosen_price" class="h4 fw-600 text-primary">USD
											<CurrencyFormat
												value={Math.round(storagePrice * quantity * 0.00026)}
												displayType="text"
												thousandSeparator
											/></strong>}


									</strong>
							}

							<button class={currency ? "btn-primary-soft py-1 px-2 ml-5 usd" : "py-1 px-2 ml-5 ugx"} onClick={convertCurrency} style={{ right: 20, top: 10 }}></button>

							<span class="opacity-70"></span>
							{
								(shippingprice >= 300000) ? <><br></br><span class="align-self-center pb-2" style={{ color: 'red', fontWeight: "600" }}>Eligible Free Delivery</span></> : ""
							}
						</div>
					</div>
				</div>
				<div class="row no-gutters">
					<div class="col-sm-2">
						<div class="opacity my-2"><strong>Description:</strong></div>
					</div>
					<div className="col-sm-10">
						<div className="">
							<span className="strong-700">{product.description}</span>
						</div>
					</div>
				</div>
				<hr />
				{/* ***** */}
				<form id="option-choice-form">
					{product.storageChecked ? <div class="row no-gutters">
						<div class="col-sm-2">
							<div class="my-2"><strong>Storage Capacity: &nbsp;</strong>{storageSize}</div>
						</div>
						<div class="col-sm-10">
							{product.storageprice.sixteen &&
								<div class="form-check form-check-inline">
									<input class="form-check-input" type="radio" id="16" name="storage" value="16GB" onChange={handleOptionChange} />
									<label class="form-check-label" for="16">16GB</label>
								</div>
							}
							{product.storageprice.thirtytwo &&
								<div class="form-check form-check-inline">
									<input class="form-check-input" type="radio" id="32" name="storage" value="32GB" onChange={handleOptionChange} />
									<label class="form-check-label" for="32">32GB</label>
								</div>
							}
							{product.storageprice.sixtyfour &&
								<div class="form-check form-check-inline">
									<input class="form-check-input" type="radio" id="64" name="storage" value="64GB" onChange={handleOptionChange} />
									<label class="form-check-label" for="64">64GB</label>
								</div>
							}
							{product.storageprice.onetwentyeight &&
								<div class="form-check form-check-inline">
									<input class="form-check-input" type="radio" id="128" name="storage" value="128GB" onChange={handleOptionChange} />
									<label class="form-check-label" for="128">128GB</label>
								</div>
							}
							{product.storageprice.twofiftysix &&
								<div class="form-check form-check-inline">
									<input class="form-check-input" type="radio" id="256" name="storage" value="256GB" onChange={handleOptionChange} />
									<label class="form-check-label" for="256">256GB</label>
								</div>
							}
							{product.storageprice.fivetwelve &&
								<div class="form-check form-check-inline">
									<input class="form-check-input" type="radio" id="512" name="storage" value="512GB" onChange={handleOptionChange} />
									<label class="form-check-label" for="512">512GB</label>
								</div>
							}
							{/* <div class="aiz-radio-inline">
                <label class="aiz-megabox pl-0 mr-2">
                  {product.storageprice.sixteen && <><input type="radio" name="storage" value="16GB" onChange={handleOptionChange} />
                    <span class="aiz-megabox-elem rounded d-flex align-items-center justify-content-center py-2 px-3 mb-2">
                      16GB
                                        </span></>
                  }
                </label>
                <label class="aiz-megabox pl-0 mr-2">
                  {product.storageprice.thirtytwo && <><input type="radio" name="storage" value="32GB" onChange={handleOptionChange} />
                    <span class="aiz-megabox-elem rounded d-flex align-items-center justify-content-center py-2 px-3 mb-2">
                      32GB
                                        </span></>
                  }
                </label>
                <label class="aiz-megabox pl-0 mr-2">
                  {product.storageprice.sixtyfour && <><input type="radio" name="storage" value="64GB" onChange={handleOptionChange} />
                    <span class="aiz-megabox-elem rounded d-flex align-items-center justify-content-center py-2 px-3 mb-2">
                      64GB
                                        </span></>
                  }
                </label>
                <label class="aiz-megabox pl-0 mr-2">
                  {product.storageprice.onetwentyeight && <>
                    <input type="radio" name="storage" value="128GB" onChange={handleOptionChange} />
                    <span class="aiz-megabox-elem rounded d-flex align-items-center justify-content-center py-2 px-3 mb-2">
                      128GB
                                        </span>
                  </>
                  }
                </label>
                <label class="aiz-megabox pl-0 mr-2">
                  {product.storageprice.twofiftysix && <>
                    <input type="radio" name="storage" value="256GB" onChange={handleOptionChange} />
                    <span class="aiz-megabox-elem rounded d-flex align-items-center justify-content-center py-2 px-3 mb-2">
                      256GB
                                        </span>
                  </>
                  }
                </label>
                <label class="aiz-megabox pl-0 mr-2">
                  {product.storageprice.fivetwelve && <>
                    <input type="radio" name="storage" value="512GB" onChange={handleOptionChange} />
                    <span class="aiz-megabox-elem rounded d-flex align-items-center justify-content-center py-2 px-3 mb-2">
                      512GB
                                        </span>
                  </>
                  }
                </label>
              </div> */}
						</div>
					</div> : ''}


					{/* ************ */}

					<div class="row no-gutters">
						<div class="col-sm-2">
							{product.color && product.color.length > 1 ? <div class="my-2"><strong>Color:</strong> {colorName}</div> : ''}
						</div>

						<div class="col-sm-10">
							<div class="aiz-radio-inline">
								{product.color && product.color.length > 1 ? product.color.map((c) =>
									<label class="aiz-megabox pl-0 mr-2">
										<input type="radio" name="color" value={c} onChange={changeColor} />
										<span class="aiz-megabox-elem rounded d-flex align-items-center justify-content-center p-1 mb-2">
											<span class="size-30px d-inline-block rounded" style={{ background: `${c}` }}></span>
										</span>
									</label>
								)
									: ''}
							</div>
						</div>
					</div>

					<div className="row no-gutters">
						<div className="col-sm-2">
							<div className="opacity my-2"><strong>Quantity:</strong></div>
						</div>
						<div className="col-sm-10">
							<div className="product-quantity d-flex align-items-center">
								<div className="row no-gutters align-items-center aiz-plus-minus mr-3" style={{ width: '130px' }}>
									<button className="btn col-auto btn-icon btn-sm btn-circle btn-light" type="button" data-type="minus" data-field="quantity" onClick={decQuantity}>
										<i className="las la-minus" />
									</button>
									<input type="text" name="quantity" className="col border-0 text-center flex-grow-1 fs-16 input-number" placeholder="1" value={quantity} min="1" max="0" />
									<button className="btn  col-auto btn-icon btn-sm btn-circle btn-light" type="button" data-type="plus" data-field="quantity" onClick={() => setQuantity(quantity + 1)}>
										<i className="las la-plus" />
									</button>
								</div>
							</div>
						</div>
					</div>

					<hr />
					<div className="d-none d-lg-block p-2 mb-2 bg-white ">
						<div class="mt-2" style={{
							display: "flex",
							position: "relative",
							transition: "all .35s ease",
						}}>
							<button type="button" class="btn btn-soft-primary mr-2 add-to-cart fw-600" onClick={handleAddToCart}>
								<span class="d-md-inline-block"> Add to cart</span>
							</button>

							{
								product.itemStock > 0 ? (
									<button type="button" class="btn btn-primary buy-now fw-600" onClick={openModal}>
										<span class="d-md-inline-block">Buy Now</span>
									</button>
								) : (
									<button type="button" class="btn btn-primary text-uppercase buy-now fw-600" style={{ backgroundColor: 'red' }} onClick={handlePreOrder}>
										<span class="d-md-inline-block">Pre Order</span>
									</button>
								)
							}

							<button type="button" className=" btn btn-product-call">
								<i class="bi bi-share" onClick={sharePage} style={iconstyles}>
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
										<path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
									</svg>
								</i>
							</button>
						</div>
					</div>

					<div className="row no-gutters" id="chosen_price_div">
						<RelatedAccessories product={product} />
					</div>

				</form>
				<div className="d-sm-none shadow p-2 mb-2 bg-white rounded scroll">
					<div class="mt-2" style={{
						display: "flex",
						position: "relative",
						transition: "all .35s ease",
					}}
					>
						<button type="button" class="btn btn-soft-primary mr-2 add-to-cart fw-600 pl-0 ml-0 pr-0 mr-0" onClick={handleAddToCart}>
							<i class="bi bi-cart-dash-fill" style={{ paddingLeft: "0%", marginRight: "0%", marginLeft: "0%", paddingRight: "0%" }}><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-cart-dash-fill" viewBox="0 0 16 16">
								<path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM6.5 7h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1z" />
							</svg></i>
						</button>

						{/* Button for mobile device */}
						{product.itemStock > 0 ? (
							<button type="button" class="btn btn-primary buy-now fw-600" onClick={openModal}>
								<span class="d-md-inline-block">Buy Now</span>
							</button>
						) : (
							<button type="button" class="btn btn-primary buy-now text-uppercase fw-600" style={{ backgroundColor: 'red' }} onClick={handlePreOrder}>
								<span class="d-md-inline-block ">Pre Order</span>
							</button>
						)}

						<div class="btn btn-primary shadow-lg ml-2 pr-2 pl-2 pt-2 pb-1 bg-white rounded">
							<a href="tel:0709744874" >
								{/* <i class="las la-phone la-2x"></i> */}
								<i class="bi bi-telephone-fill" style={{ paddingLeft: "0%", marginRight: "0%", marginLeft: "0%", paddingRight: "0%" }}>
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
										<path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
									</svg>
								</i>

							</a>
						</div>


					</div>
				</div>
				{/* } */}
			</div>

		</section>
	)
}

export default ProductInfo