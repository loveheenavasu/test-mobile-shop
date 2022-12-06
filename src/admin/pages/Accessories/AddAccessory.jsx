import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import Resizer from "react-image-file-resizer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Spinner from "../../../components/Spinner";
import { createAccessory } from "../../../functions/accessory";
import { generatePublicUrl } from "../../../helpers/publicUrl";

const AddAccessory = ({ history }) => {
  const auth = useSelector((state) => state.auth);

  const [loading, setLoading] = useState(false);
  const [imgloading, setImgLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("");
  const [images, setImages] = useState([]);
  const [files, setFiles] = useState([]);
  const [specs, setSpecs] = useState("");
  const [description, setDescription] = useState("");
  const [discountprice, setDiscountPrice] = useState("");
  const [stock, setStock] = useState(1);


  const onHandler = (e) => {
    setFiles(e.target.files);
  };

  const uploadImage = (e) => {
    e.preventDefault();
    setImgLoading(true);
    let imageFormObj = new FormData();

    for (let i = 0; i < files.length; i++) {
      imageFormObj.append("file", files[i]);
    }

    axios
      .post(`${process.env.REACT_APP_API}/images/upload`, imageFormObj, {
        headers: { "Content-type": "multipart/form-data" },
      })
      .then((res) => {
        if (res.data) {
          setImgLoading(false);
          setImages(res.data);
        }
      })
      .catch((err) => {
        console.log("Error Upload Failed");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      title: title,
      price: price,
      color: color,
      images: images,
      specs: specs,
      brand: brand,
      description: description,
      discountprice: discountprice,
      itemStock: stock,
    };

    createAccessory(data, auth.token)
      .then((res) => {
        setLoading(false);
        history.push("/admin/listaccessories");
        toast.success(res.data.message);
      })
      .catch((err) => {
        setLoading(false);
        toast.error("Error while creating accessory");
      });
  };

  return (
    <>
      <div class="aiz-titlebar text-left mt-2 mb-3">
        <h5 class="mb-0 h6">Add New Accesssory</h5>
      </div>
      <div class="col-md-10 mx-auto">
        <form class="form form-horizontal mar-top" onSubmit={handleSubmit}>
          <div class="card">
            <div class="card-header">
              <h5 class="mb-0 h6">Accessory Information</h5>
            </div>
            <div class="card-body">
              <div class="form-group row">
                <div class="col-md-6">
                  <label>Accessory Name</label>
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    placeholder="Accessory Name"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div class="col-md-6">
                  <label>Brand</label>
                  <select
                    name="subs"
                    className="form-control"
                    placeholder="Please select"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                  >
                    <option>Please select Brand</option>
                    <option value="apple">Apple</option>
                    <option value="samsung">Samsung</option>
                    <option value="opp">Oppo</option>
                    <option value="infinix">Infinix</option>
                    <option value="huwaei">Huwaei</option>
                    <option value="sony">Sony</option>
                    <option value="jbl">JBL</option>
                    <option value="generic">Generic</option>
                  </select>
                </div>
              </div>

              <div class="form-group row">
                <div class="col-md-12">
                  <label>Product Description</label>
                  <textarea
                    rows="3"
                    name="description"
                    className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>

              <div class="form-group row">
                <div class="col-md-12">
                  <label>Specifications</label>
                  <textarea
                    rows="3"
                    name="tv"
                    className="form-control"
                    value={specs}
                    onChange={(e) => setSpecs(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <h5 class="mb-0 h6">Product Images</h5>
            </div>
            <div class="card-body">
              <div class="form-group row">
                <label
                  class="d-none col-md-3 col-form-label"
                  for="signinSrEmail"
                >
                  Product Images <small>(600x600)</small>
                </label>
                <div class="col-md-8">
                  <label
                    className=""
                    style={{ cursor: "pointer" }}
                  >
                    Pick Accessory Images
                    <input type="file" multiple onChange={onHandler} />
                  </label>

                  <button
                    className="btn btn-primary btn-raised mt-3 ml-3"
                    style={{ cursor: "pointer" }}
                    onClick={uploadImage}
                  >
                    Upload Accessory Images 
                  </button>

                  <div class="img-container">
                    {imgloading && <Spinner />}
                    {images &&
                      images.map((image, i) => (
                        <>
                          <LazyLoadImage
                            key={i}
                            src={generatePublicUrl(image.filename)} 
                            alt={image.originalname}
                            class="img-admin"
                          />
                        </>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <h5 class="mb-0 h6">Product Price + Discount</h5>
            </div>
            <div class="card-body">
              <div class="form-group row">
                <label class="col-md-3 col-from-label">Product Price</label>
                <div class="col-md-6">
                  <input
                    type="number"
                    name="price"
                    className="form-control"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-md-3 col-from-label">Discount Price</label>
                <div class="col-md-6">
                  <input
                    type="text"
                    name="discountprice"
                    className="form-control"
                    value={discountprice}
                    onChange={(e) => setDiscountPrice(e.target.value)}
                  />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-md-3 col-from-label">Color</label>
                <div class="col-md-6">
                  <select
                    name="condition"
                    className="form-control"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                  >
                    <option selected>Select Color Type</option>
                    <option value="Black">Black</option>
                    <option value="Red">Red</option>
                    <option value="Blue">Blue</option>
                    <option value="Green">Green</option>
                    <option value="White">White</option>
                  </select>
                </div>
              </div>
              <div class="form-group row">
                  <label class="col-md-3 col-from-label">Stock </label>
                  <div class="col-md-6">
                      <input type="number"
                          name="stock"
                          className="form-control"
                          value={stock}
                          onChange={(event) => setStock(event.target.value)} />
                          { Math.sign(stock) === -1 ? "Product will be Coming Soon" : Math.sign(stock) === 0 ? "Out of Stock" : "Available in Stock" }
                  </div>
              </div>
              <br />
            </div>
          </div>

          <div class="mb-3 text-right">
            <button type="submit" name="button" class="btn btn-primary">
              {loading ? <Spinner /> : "Add Accessory"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddAccessory;
