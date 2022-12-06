import React from 'react';
import Spinner from './Spinner';


function ProductItem({ hit, history }) {

	const handleProductResult = (e, hit) => {
		history.push(`/product/${hit._id}`);
	};

	const handleAccessoryResult = (e, hit) => {
		history.push(`/accessory/${hit._id}`);
	};

	return (
		<>
			{
				hit.subs?.slug ? (
					<a onClick={(e) => handleProductResult(e, hit)} className="aa-ItemLink">
						<div className="aa-ItemContent">
							<div className="aa-ItemIcon--noBorder">
								{
									hit?.images?.length > 0 ? (
										hit?.images[0]?.filename ? <img src={`https://mobileshop.ug/api/uploads/${hit.images[0].filename}`} alt={hit.title} height='auto' width='25' /> : <img src="https://img.icons8.com/ultraviolet/80/000000/no-image.png" height="50px" width="30px" />
									) : 'No Image'
								}
							</div>
							<div className="aa-ItemContentBody">
								<div className="aa-ItemContentTitle">
									<p hit={hit} attribute="title" className='hitTitle'>{hit.title}</p>
									{
										hit?.category ? (
											<p className='text-gray'> Category - {hit.category.name} | From <span id='price-res-color'> Shs.{hit.price} </span></p>
										) : (
											<p className='text-gray'> From <span id='price-res-color'> Shs.{hit.price} </span></p>
										)
									}
								</div>
							</div>
						</div>
					</a>
				) : (
					<a onClick={(e) => handleAccessoryResult(e, hit)} className="aa-ItemLink">
						<div className="aa-ItemContent">
							<div className="aa-ItemIcon--noBorder">
								{
									hit?.images?.length > 0 ? (
										hit?.images[0]?.filename ? <img src={`https://mobileshop.ug/api/uploads/${hit.images[0].filename}`} alt={hit.title} height='auto' width='25' /> : <img src="https://img.icons8.com/ultraviolet/80/000000/no-image.png" height="50px" width="30px" />
									) : 'No Image'
								}
							</div>
							<div className="aa-ItemContentBody">
								<div className="aa-ItemContentTitle">
									<p hit={hit} attribute="title" className='hitTitle'>{hit.title}</p>
									{
										hit?.category ? (
											<p className='text-gray'> Category - {hit.category.name} | From <span id='price-res-color'> Shs.{hit.price} </span></p>
										) : (
											<p className='text-gray'> From <span id='price-res-color'> Shs.{hit.price} </span></p>
										)
									}
								</div>
							</div>
						</div>
					</a>
				)
			}
    	</>
	);
}

export default ProductItem;
