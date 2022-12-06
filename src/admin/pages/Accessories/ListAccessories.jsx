import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import CurrencyFormat from "react-currency-format";
import LoadSpinner from "../../../components/Spinner";
import {
	removeAccessory,
	searchAccessories,
} from "../../../functions/accessory";

import Axios from "axios";

const ListAccessories = () => {
	const [accessorySearch, setAccessorySearch] = useState([]);
	const [loading, setLoading] = useState(false);
	const [pageNumber, setPageNumber] = useState(0);
	const [totalPages, setTotalPages] = useState(0);
	const [searchTerm, setSearchTerm] = useState("");
	const [total, setTotal] = useState(0);

	const pages = new Array(totalPages).fill(null).map((v, i) => i);
	const searchHandler = (e) => setSearchTerm(e.target.value);

	const goToPrevious = () => {
		setPageNumber(Math.max(0, pageNumber - 1));
		window.scrollTo(0, 0);
	};

	const goToNext = () => {
		setPageNumber(Math.min(totalPages - 1, pageNumber + 1));
		window.scrollTo(0, 0);
	};

	const loadSearchAccessories = () => {
		searchAccessories()
			.then((res) => {
				setAccessorySearch(res.data);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleRemove = (slug) => {
		if (window.confirm("Delete?")) {
			removeAccessory(slug)
				.then((res) => {
					loadSearchAccessories();
					toast.error(`${res.data.title} is deleted`);
				})
				.catch((err) => {
					if (err.response.status === 400) toast.error(err.response.data);
					console.log(err);
				});
		}
	};

	const handleStockItem = (e, product) => {
		e.preventDefault();
		console.log("Handling accessory stock item...");

		Axios.post();

		var data = JSON.stringify({
			"accessoryID": product._id,
			"accessorySlug": product.slug
		});
	
		var config = {
		  method: 'POST',
		  url: `${process.env.REACT_APP_API}/accessory/toggleAccessoryStock`,
		  headers: { 
			'Content-Type': 'application/json'
		  },
		  data : data
		};
	
		Axios(config).then((response) => {
			console.log("API RESPONSE : ", response);
			loadSearchAccessories();
		})
		.catch((error) => {
		  console.log("something went wrong..", error);
		})
	  }

	useEffect(() => {
		loadSearchAccessories();
		window.scrollTo(0, 0);
	}, [pageNumber]);

	const filteredAccessories = accessorySearch.filter((product) =>
		product.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
	);

	return (
		<>
			<div class="row align-items-center">
				<div class="col-md-6">
					<h1 class="h3">All Accessories</h1>
				</div>
				<div class="col-md-6 text-md-right">
					<Link to="/admin/addaccessory" class="btn btn-primary">
						<span>Add New Accessory</span>
					</Link>
				</div>
			</div>

			<div class="card">
				{loading && <LoadSpinner />}
				<div class="card-header">
					<h5 class="mb-0 h6">Accessories</h5>
					<div class="pull-right clearfix">
						<form>
							<div class="box-inline pad-rgt pull-left">
								<div class="" style={{ minWidth: "200px" }}>
									<input
										type="text"
										class="form-control"
										name="searchTerm"
										placeholder="search accessories.."
										value={searchTerm}
										onChange={searchHandler}
									/>
								</div>
							</div>
						</form>
					</div>
				</div>
				<div class="card-body">
					<div class="row">
						<div class="col-lg-12 table-responsive">
							<table class="table aiz-table mb-0 footable footable-1 breakpoint-lg">
								<thead>
									<tr class="footable-header">
										<th style={{ display: "table-cell" }}>Name</th>
										<th style={{ display: "table-cell" }}>Brand</th>
										<th style={{ display: "table-cell" }}>Color</th>
										<th sstyle={{ display: "table-cell" }}>Date Created</th>
										<th style={{ display: "table-cell" }}>Price</th>
										<th style={{ display: "table-cell" }}>Availablity</th>
										<th
											width="10%"
											class="text-right footable-last-visible"
											style={{ display: "table-cell" }}
										>
											Options
										</th>
									</tr>
								</thead>
								<tbody>
									{searchTerm ? (
										<>
											{filteredAccessories.map((product) => (
												<tr>
													<td style={{ display: "table-cell" }}>
														{product.title}
													</td>
													<td style={{ display: "table-cell" }}>
														{product.brand}
													</td>
													<td style={{ display: "table-cell" }}>
														{product.color}
													</td>
													<td style={{ display: "table-cell" }}>
														{dayjs(product.createdAt).format("l")}
													</td>
													<td style={{ display: "table-cell" }}>
														{product.price && (
															<CurrencyFormat
																value={product.price}
																displayType="text"
																thousandSeparator
															/>
														)}
													</td>
													<td style={{ display: "table-cell" }}>
														{Math.sign(product.itemStock) === -1 ? "Coming Soon" : Math.sign(product.itemStock) === 0 && !(Math.sign(product.itemStock) === 1) ? "Out of Stock" : "Available"}
													</td>
													<td
														class="text-right footable-last-visible"
														style={{ display: "table-cell" }}
													>
														{Math.sign(product.itemStock) === -1 ? "" :
															<Link
																className={product.itemStock !== 0 && product.itemStock > 0 ? "btn btn-success btn-icon btn-circle btn-sm" : "btn btn-danger btn-icon btn-circle btn-sm"}
																title="Toggle Stock Item"
															onClick={(e) => handleStockItem(e, product)}
															>
																<i className="las la-retweet"></i>
															</Link>
														}
														<Link
															className="btn btn-soft-primary btn-icon btn-circle btn-sm"
															to={`/admin/updateaccessory/${product._id}`}
															title="Edit"
														>
															<i className="las la-edit"></i>
														</Link>
														<span
															className="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
															onClick={() => handleRemove(product.slug)}
															title="Delete"
														>
															<i className="las la-trash"></i>
														</span>
													</td>
												</tr>
											))}
										</>
									) : (
										<>
											{accessorySearch.map((product) => (
												<tr>
													<td style={{ display: "table-cell" }}>
														{product.title}
													</td>
													<td style={{ display: "table-cell" }}>
														{product.brand}
													</td>
													<td style={{ display: "table-cell" }}>
														{product.color}
													</td>
													<td style={{ display: "table-cell" }}>
														{dayjs(product.createdAt).format("l")}
													</td>
													<td style={{ display: "table-cell" }}>
														{product.price && (
															<CurrencyFormat
																value={product.price}
																displayType="text"
																thousandSeparator
															/>
														)}
													</td>
													<td style={{ display: "table-cell" }}>
														{Math.sign(product.itemStock) === -1 ? "Coming Soon" : Math.sign(product.itemStock) === 0 && !(Math.sign(product.itemStock) === 1) ? "Out of Stock" : "Available"}
													</td>

													<td
														class="text-right footable-last-visible"
														style={{ display: "table-cell" }}
													>
														{ Math.sign(product.itemStock) === -1 ? "" : 
															<Link
															className={ product.itemStock !== 0 && product.itemStock > 0 ? "btn btn-success btn-icon btn-circle btn-sm" : "btn btn-danger btn-icon btn-circle btn-sm"}
															title="Toggle Stock Item"
															onClick={(e) => handleStockItem(e, product)}
															>
															<i class="las la-retweet"></i>
															</Link>
														}
														<Link
															class="btn btn-soft-primary btn-icon btn-circle btn-sm"
															to={`/admin/updateaccessory/${product._id}`}
															title="Edit"
														>
															<i class="las la-edit"></i>
														</Link>
														<span
															class="btn btn-soft-danger btn-icon btn-circle btn-sm confirm-delete"
															onClick={() => handleRemove(product.slug)}
															title="Delete"
														>
															<i class="las la-trash"></i>
														</span>
													</td>
												</tr>
											))}
										</>
									)}
								</tbody>
							</table>
						</div>
					</div>
					<div class="aiz-pagination">
						<nav className="text-center">
							<span>Showing 1- 20 of {total} results</span>
							<ul class="pagination d-flex justify-content-center">
								<li class="page-item" onClick={goToPrevious}>
									<span class="page-link">‹</span>
								</li>
								<li class="page-item d-flex">
									{pages.map((pageIndex) => (
										<a
											key={pageIndex}
											class="page-link"
											onClick={() => setPageNumber(pageIndex)}
										>
											{pageIndex + 1}
										</a>
									))}
								</li>
								<li class="page-item" onClick={goToNext}>
									<span class="page-link">›</span>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</>
	);
};

export default ListAccessories;
