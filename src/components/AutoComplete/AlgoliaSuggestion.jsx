import React, { useEffect, useState } from 'react';
import { getPopularHits } from "../../functions/products";
import { ALGOLIA_APPLICATION_ID, ALGOLIA_API_KEY, ALGOLIA_PRODUCT_INDEX, ALGOLIA_INDEX_ACCESSORY } from '../../helpers/algolia';
import _ from "lodash";
import algoliasearch from 'algoliasearch';
import { useRecommendations } from '@algolia/recommend-react';
import recommend from '@algolia/recommend';

import Product from '../../components/Product';
import LoadSpinner from '../../components/Spinner';
import Pagination from '../Pagination';



const AlgoliaSuggestion = (props) => {
    const [suggestion, setSuggestion] = useState('');
    const [loading, setLoading] = useState(false);
    const queryData = props.history.location.state?.query;
    // console.log("SEARCH QUERY : ", queryData);

    const client = algoliasearch(ALGOLIA_APPLICATION_ID, ALGOLIA_API_KEY);
    const algoliaIndex = client.initIndex(ALGOLIA_PRODUCT_INDEX);


    const fetchPopularHits = () => {
		setLoading(true);
        algoliaIndex.search(queryData).then(({hits}) => {
            console.log("algolia hits : ", hits);
            let popularProducts = hits;
            setSuggestion(popularProducts);
        }).then((data) => {
            setLoading(false);
        });
	}

    useEffect(() => {
        fetchPopularHits();
    }, [queryData]);

    return (
        <div className="my-3 rounded categories-container container py-5">
            { loading && <LoadSpinner/> }
            <div className="row gutters-5 row-cols-xxl-5 row-cols-lg-5 row-cols-md-3 row-cols-2 ">
                {
                    suggestion.length > 0 && !loading ? (
                        suggestion.map((item, i) => {
                            return <Product key={i} product={item}/>
                        })
                    ) : loading && <LoadSpinner/>
                }
            </div>
        </div>
    );
}
export default AlgoliaSuggestion;