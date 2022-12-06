import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import algoliasearch from 'algoliasearch';
import { useHistory } from 'react-router-dom';
import { getAlgoliaResults } from '@algolia/autocomplete-js';
import { ALGOLIA_APPLICATION_ID, ALGOLIA_API_KEY } from '../../../helpers/algolia';
import ComponentAuto2 from '../../AutoComplete/CompleteAuto2';
import ProductItem from '../../AutoComplete/ProductItem';
import './styles.css'

const searchClient = algoliasearch(ALGOLIA_APPLICATION_ID, ALGOLIA_API_KEY);

const BottomMenu = ({ open }) => {
  const { cartItems } = useSelector((state) => state.cart);

  const history = useHistory();

  return (
    <div className="d-block d-lg-none bottom__menu">

      <div className="navigation--list">
        <div className="d-flex justify-content-between">
          <Link to="/" className="navigation__item ">
            <a className="las la-home la-2x" />
            <span style={{ color: '#bbb' }}> Home</span>
          </Link>
          <div className="navigation__item ">

            <ComponentAuto2
              openOnFocus={true}
              getSources={({ query }) => [
                {
                  sourceId: 'products',
                  getItems() {
                    return getAlgoliaResults({
                      searchClient,
                      queries: [
                        {
                          indexName: 'products',
                          query,
                          params: {
                            hitsPerPage: 6,
                          }
                        },
                      ],
                    });
                  },
                  templates: {
                    item({ item, components }) {
                      return <ProductItem hit={item} components={components} history={history} />;
                    },
                  },
                },
                {
                  sourceId: 'accessory',
                  getItems() {
                    return getAlgoliaResults({
                      searchClient,
                      queries: [
                        {
                          indexName: 'accessory',
                          query,
                          params: {
                            hitsPerPage: 6,
                          }
                        },
                      ],
                    });
                  },
                  templates: {
                    item({ item, components }) {
                      return (
                        <>
                          <ProductItem hit={item} query={query} components={components} history={history} />
                        </>
                      )
                    },
                  },
                },
              ]} />
          </div>

          <a to="#" className="navigation__item " onClick={open}>

            <i className="las la-list-ul la-2x position-relative">
              <i class="bi bi-bell-fill"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16" style={{ marginBottom: 15 + "px" }}>
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
              </svg></i>
            </i>


            <span style={{ color: '#bbb' }}> Categories</span>
          </a>

          <a className="navigation__item call-item" href="https://wa.me/256709744874?text=Hello%20MobileShop%20Uganda%20I%20have%20an%20inquiry" title="WhatsApp Call">
            <div className="whatsapp-img position-relative">
              <i className="la la-whatsapp la-3x" style={{ color: '#25D366', fontSize: "29px" }}></i>
              <div class="position-absolute top-0 start-100 translate-middle ml-4" style={{ marginBottom: "90%", color: "red" }}>1</div>
            </div>

            <span style={{ color: '#bbb' }}> WhatsApp</span>
          </a>

          <a href="https://goo.gl/maps/1UsvmvRsCkFa6h519" class="d-flex flex-column">
            <img class="" src="/images/locationIcon.png" alt="location" width="40" height="32" style={{ marginLeft: "-10%" }} />
            <span style={{ color: '#bbb' }}> Location</span>
          </a>
        </div>
      </div>
    </div>
  )
};

export default BottomMenu
