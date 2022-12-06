import React, { useState, useEffect } from 'react'
import _ from "lodash";
import Modal from 'react-modal';
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import CurrencyFormat from 'react-currency-format';
import { addToCart } from '../../store/actions/cartActions';

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

const StorageModal = ({ modalIsOpen, close, product }) => {
    const [storageSize, setStorageSize] = useState('');
    const [storagePrice, setStoragePrice] = useState('');
    const [color, setColor] = useState('');
    const [colorName, setColorName] = useState('');

    const handleOptionChange = (e) => {
        setStorageSize(e.target.value);
    };

    const changeColor = (e) => {
        setColor(e.target.value);
    };

    const dispatch = useDispatch();

    useEffect(() => {
        if (storageSize === '32GB') {
            setStoragePrice(product.storageprice && product.storageprice.thirtytwo)
        } else if
            (storageSize === '64GB') {
            setStoragePrice(product.storageprice && product.storageprice.sixtyfour)
        } else if
            (storageSize === '16GB') {
            setStoragePrice(product.storageprice && product.storageprice.sixteen)
        }
        else if (storageSize === '128GB') {
            setStoragePrice(product.storageprice && product.storageprice.onetwentyeight)
        }
        else if (storageSize === '256GB') {
            setStoragePrice(product.storageprice && product.storageprice.twofiftysix)
        }
        else if (storageSize === '512GB') {
            setStoragePrice(product.storageprice && product.storageprice.fivetwelve)
        }

    }, [storageSize])

    const addToCartHandler = () => {
        const cat = {
            id: product._id,
            title: product.title,
            images: product.images[0].url,
            price: product.price,
            discount: product.discount,
            discountprice: product.discountprice,
            countInStock: product.countInStock,
            quantity: 1,
            storageSize,
            storagePrice,
            color,
			img: product.images[0].filename
        }

        dispatch(addToCart(cat))
        toast.success("Product Added To Cart Successfully");
        close();
    }

    useEffect(() => {
        if (color === '#343d52') {
            setColorName('Space Gray')
        } else if
            (color === '#C0C0C0') {
            setColorName('Silver')
        } else if (color === '#FFD700') {
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
                    <div class="text-center text-success mb-2">
                        <i class="las la-check-circle la-3x"></i>
                        <h3>Select Storage Capacity and Color</h3>
                    </div>
                    <div class="row no-gutters">
                        <div class="col-sm-2">
                            <div class="opacity-50 my-2">Storage Capacity: {storageSize}</div>
                        </div>
                        <div class="col-sm-10">
                            <div class="aiz-radio-inline">
                                <label class="aiz-megabox pl-0 mr-2">
                                    {product.storageprice && product.storageprice.sixteen && <><input type="radio" name="storage" value="16GB" onChange={handleOptionChange} />
                                        <span class="aiz-megabox-elem rounded d-flex align-items-center justify-content-center py-2 px-3 mb-2">
                                            16GB
                                        </span></>
                                    }
                                </label>
                                <label class="aiz-megabox pl-0 mr-2">
                                    {product.storageprice && product.storageprice.thirtytwo && <><input type="radio" name="storage" value="32GB" onChange={handleOptionChange} />
                                        <span class="aiz-megabox-elem rounded d-flex align-items-center justify-content-center py-2 px-3 mb-2">
                                            32GB
                                        </span></>
                                    }
                                </label>
                                <label class="aiz-megabox pl-0 mr-2">
                                    {product.storageprice && product.storageprice.sixtyfour && <><input type="radio" name="storage" value="64GB" onChange={handleOptionChange} />
                                        <span class="aiz-megabox-elem rounded d-flex align-items-center justify-content-center py-2 px-3 mb-2">
                                            64GB
                                        </span></>
                                    }
                                </label>
                                <label class="aiz-megabox pl-0 mr-2">
                                    {product.storageprice && product.storageprice.onetwentyeight && <>
                                        <input type="radio" name="storage" value="128GB" onChange={handleOptionChange} />
                                        <span class="aiz-megabox-elem rounded d-flex align-items-center justify-content-center py-2 px-3 mb-2">
                                            128GB
                                        </span>
                                    </>
                                    }
                                </label>
                                <label class="aiz-megabox pl-0 mr-2">
                                    {product.storageprice && product.storageprice.twofiftysix && <>
                                        <input type="radio" name="storage" value="256GB" onChange={handleOptionChange} />
                                        <span class="aiz-megabox-elem rounded d-flex align-items-center justify-content-center py-2 px-3 mb-2">
                                            256GB
                                        </span>
                                    </>
                                    }
                                </label>
                                <label class="aiz-megabox pl-0 mr-2">
                                    {product.storageprice && product.storageprice.fivetwelve && <>
                                        <input type="radio" name="storage" value="512GB" onChange={handleOptionChange} />
                                        <span class="aiz-megabox-elem rounded d-flex align-items-center justify-content-center py-2 px-3 mb-2">
                                            512GB
                                        </span>
                                    </>
                                    }
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="row no-gutters pb-3" id="chosen_price_div">
                        <div class="col-sm-2">
                        </div>
                        <div class="col-sm-10">
                            <div class="product-price">

                                {storagePrice && <strong id="chosen_price" class="h4 fw-600 text-primary">{storageSize} : UGX  <CurrencyFormat
                                    value={storagePrice}
                                    displayType="text"
                                    thousandSeparator
                                /></strong>
                                }
                            </div>
                        </div>
                    </div>

                    <div class="row no-gutters">
                        {/* <div class="col-sm-2">
                            {product.color && product.color.length > 1 ? <div class="my-2">Color: {colorName}</div> : ''}
                        </div> */}

                        <div class="col-sm-10">
                            <div class="aiz-radio-inline">
                                {product.color && product.color ? product.color.map((c) =>
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

                    <div class="text-center">
                        <button class="btn btn-outline-primary mb-3 mb-sm-0 mr-3" onClick={close}>Cancel</button>
                        <button class="btn btn-primary mb-3 mb-sm-0" onClick={addToCartHandler}>Add To Cart</button>
                    </div>

                </div>
            </div>
        </Modal>
    )
}

export default StorageModal