import React, { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { generatePublicUrl } from "../../helpers/publicUrl";

const customStyles = {
  content: {
    top: "50%",
    // bottom:'-10%',
    transform: "translateY(-50%)",
    backgroundColor: "white",
    minwidth: "100%",
    minHeight: "100%",
    border: "none",
    height: "auto",
  },
  overlay: {
    // background: 'rgba(0,0,0,.5)',
    backgroundColor: "white",
    zIndex: "10000",
  },
};

const styles = {
  marginTop: "-100%",
  marginRight: "5%",
};

const styles2 = {
  // marginTop:'10%',
  marginRight: "20%",
};
const imgstyle = {
  marginTop: "-100%",
  paddingTop: "-70%",
};
Modal.setAppElement("#root");

const ProductImage = ({ product }) => {
  const [currentImage, setCurrentImage] = useState("");
  const history = useHistory();
  const auth = useSelector((state) => state.auth);

  let location = useLocation();
  let currentUrl = "https://mobileshop.ug" + location.pathname;
  let shareImage =
    product.images && product.images.length ? product.images[0].url : "";

  const renderImage = () => {
    return (
      <LazyLoadImage
        class="responsive-img"
        src={
          currentImage
            ? currentImage
            : product.images && product.images.length
            ? generatePublicUrl(product.images[0].filename)
            : ""
        }
        alt="image-details"
      />
    );
  };

  const iconstyles = {
    fontSize: "20px",
    border: "none",
    color: "#f90",
  };
  const urlToObject = async (url) => {
    const response = await fetch(url);
    const blob = await response.blob();
    const file = new File([blob], { shareImage }, { type: blob.type });
    return file;
  };
  const files = urlToObject({ currentUrl });

  const sharePage = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Checkout this product on mobileshop",
          text: product.title,
          url: document.location.href,
          file: { files },
        })
        .then(() => {
          console.log("Successfully shared");
        })
        .catch((error) => {
          console.error("Something went wrong sharing the blog", error);
        });
    }
  };

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        transparent={true}
        contentLabel="Image Modal"
      >
        <button class="float-right" onClick={closeModal}>
          close
        </button>

        <div>
          <LazyLoadImage
            class="responsive-img"
            src={
              currentImage
                ? currentImage
                : product.images && product.images.length
                ? generatePublicUrl(product.images[0].filename)
                : ""
            }
            alt="image-details"
            max-height="auto"
          />

          <div
            class="thumbnail-container"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              paddingTop: "2%",
            }}
          >
            {product.images && product.images.length
              ? product.images.map((thumb, index) => (
                  <Link
                    to="#"
                    key={thumb.id}
                    onClick={() =>
                      setCurrentImage(
                        index === 0
                          ? generatePublicUrl(thumb.filename)
                          : generatePublicUrl(thumb.filename)
                      )
                    }
                  >
                    <div class="border  border border-dark p-1 rounded thumbnail-box">
                      <LazyLoadImage
                        class="thumbnail-img"
                        src={
                          index === 0
                            ? generatePublicUrl(product.images[0].filename)
                            : generatePublicUrl(thumb.filename)
                        }
                        alt="thumbnail"
                      />
                    </div>
                  </Link>
                ))
              : ""}
          </div>
        </div>
      </Modal>

      <span style={{ width: '100%' }}>
				{ Math.sign(product.itemStock) === -1 ? (
					<span className="badge badge-inline text-uppercase" style={{ color:  'green', fontSize: '18px' }}>
						<b>Coming Soon</b>
					</span>
				) : Math.sign(product.itemStock) === 0 ? (
					<span className="badge badge-inline text-uppercase" style={{ color:  'red', fontSize: '18px' }}>
						<b>Out of Stock</b>
					</span>
				) : '' }
			</span>

      <div className="row">
        <div className="col-3">
          <div class="thumbnail-container">
            {product.images && product.images.length
              ? product.images.map((thumb, index) => (
                  <Link
                    to="#"
                    key={thumb.id}
                    onClick={() =>
                      setCurrentImage(
                        index === 0
                          ? generatePublicUrl(thumb.filename)
                          : generatePublicUrl(thumb.filename)
                      )
                    }
                  >
                    <div class="border p-1 rounded thumbnail-box">
                      <LazyLoadImage
                        class="thumbnail-img"
                        src={
                          index === 0
                            ? generatePublicUrl(product.images[0].filename)
                            : generatePublicUrl(thumb.filename)
                        }
                        alt="thumbnail"
                      />
                    </div>
                  </Link>
                ))
              : ""}
          </div>
        </div>
        <div className="col-9">
          <div className="d-none d-lg-block">
            <div>{renderImage()}</div>
          </div>
          <div class="d-lg-none">
            <div class="border p-1 rounded float-right thumbnaily-box">
              <i class="bi bi-share" onClick={sharePage} style={iconstyles}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-share"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                </svg>
              </i>
            </div>
            <button type="button" className=" btn btn-product-call float-right">
              <i class="las la-search-plus la-2x " onClick={openModal}></i>
            </button>

            <div className="img-box" onClick={openModal}>
              {renderImage()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductImage;
