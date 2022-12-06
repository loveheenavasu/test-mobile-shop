import { autocomplete } from '@algolia/autocomplete-js';
import React, { Component, createElement, Fragment, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { render } from 'react-dom';
import { useHistory } from "react-router-dom";

import algoliasearch from 'algoliasearch';

import { createQuerySuggestionsPlugin } from '@algolia/autocomplete-plugin-query-suggestions';
import { createAlgoliaInsightsPlugin } from '@algolia/autocomplete-plugin-algolia-insights';
import insightsClient from 'search-insights';

import { ALGOLIA_APPLICATION_ID, ALGOLIA_API_KEY, ALGOLIA_QUERY_SUGGESTION, ALGOLIA_AI_RECOMMENDATIONS_KEY } from '../../helpers/algolia';

import { getSubs } from "../../functions/sub";

const appId = ALGOLIA_APPLICATION_ID;
const apiKey = ALGOLIA_API_KEY;
const searchClient = algoliasearch(appId, apiKey);

function Autocomplete2(props) {
    const newRef = useRef(null);
    const history = useHistory();
    const [predefinedItems, setPredefinedItems] = useState([]);
    const [brands, setBrands] = useState([]);
    const [searchRes, setSearchRes] = useState(false);

    insightsClient('init', {appId, apiKey, useCookie: true});

    const algoliaInsightsPlugin = createAlgoliaInsightsPlugin({
        insightsClient,
        onItemsChange({ insights, insightsEvents }) {
            const events = insightsEvents.map((insightsEvent) => ({
                ...insightsEvent,
                eventName: 'Viewed products',
            }));
            insights.viewedObjectIDs(...events);
        },
        onSelect({ insights, insightsEvents }) {
            // const events = insightsEvents.map((insightsEvent) => ({
            //     ...insightsEvent,
            //     eventName: 'Product Selected from search result',
            // }));
            const events = insightsEvents.map((insightsEvent) => {
                switch (insightsEvent.index){
                    case 'products':{
                        return{
                            ...insightsEvent,
                            eventName: 'productSelectedOnSearch',
                        }
                    }
                    case 'accessory':{
                        return {
                            ...insightsEvent, 
                            eventName: 'categorySelectedOnSearch',
                        }
                    }
                    case 'products_query_suggestions2': {
                        return {
                            ...insightsEvent, 
                            eventName: 'qurySuggestionSelectedOnSearch',
                        }
                    }
                    default:{
                        return {
                            ...insightsEvent,
                            eventName: 'unknownEvent',
                        }
                    }
                }
            });
            insights.clickedObjectIDsAfterSearch(...events);
        },
    });

    const querySuggestionsPlugin = createQuerySuggestionsPlugin({
        searchClient,
        indexName: ALGOLIA_QUERY_SUGGESTION,
        getSearchParams() {
            return {
                hitsPerPage: 1,
            };
        },
        categoryAttribute: [
            'products',
            'facets',
            'exact_matches',
            'category.name'
        ],
        itemsWithCategories: 1,
        categoriesPerItem: 1,
        transformSource: ({ source }) => {
            return {
                ...source,
                templates: {
                    ...source.templates,
                    header({ items }) {
                        if (items.length === 0) {
                          return null;
                        }
                        return (
                          <>
                            <span className="aa-SourceHeaderTitle text-logo-color">Top Suggestions</span>
                            <div className="aa-SourceHeaderLine" />
                          </>
                        );
                    },
                    item({ item, components }) {
                        return (
                            <a onClick={() => history.push(`/products/${item.products.facets.exact_matches["subs.slug"][0].value}`)} className="aa-ItemWrapper">
                                <div className="aa-ItemContent">
                                    <div className="aa-ItemIcon aa-ItemIcon--noBorder">
                                        <svg
                                            viewBox="0 0 24 24"
                                            width="18"
                                            height="18"
                                            fill="currentColor"
                                        >
                                            <path d="M16.041 15.856c-0.034 0.026-0.067 0.055-0.099 0.087s-0.060 0.064-0.087 0.099c-1.258 1.213-2.969 1.958-4.855 1.958-1.933 0-3.682-0.782-4.95-2.050s-2.050-3.017-2.050-4.95 0.782-3.682 2.050-4.95 3.017-2.050 4.95-2.050 3.682 0.782 4.95 2.050 2.050 3.017 2.050 4.95c0 1.886-0.745 3.597-1.959 4.856zM21.707 20.293l-3.675-3.675c1.231-1.54 1.968-3.493 1.968-5.618 0-2.485-1.008-4.736-2.636-6.364s-3.879-2.636-6.364-2.636-4.736 1.008-6.364 2.636-2.636 3.879-2.636 6.364 1.008 4.736 2.636 6.364 3.879 2.636 6.364 2.636c2.125 0 4.078-0.737 5.618-1.968l3.675 3.675c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z" />
                                        </svg>
                                    </div>
                                    <div className="aa-ItemContentBody">
                                        <div className="aa-ItemContentTitle">
                                            <components.ReverseHighlight hit={item} attribute="query" className="hitTitle" />
                                            {item.__autocomplete_qsCategory && (
                                                <span className="aa-ItemContentSubtitle aa-ItemContentSubtitle--inline">
                                                    <span className="aa-ItemContentSubtitleIcon" /> in{' '}
                                                    <span className="aa-ItemContentSubtitleCategory" id="id_catogeryName">
                                                        {item.__autocomplete_qsCategory}
                                                    </span>
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </a>
                        );
                    },
                    footer({ items, components }){
                        return (
                            <>
                                {
                                    Component && items ? (
                                        <>
                                        <span className="aa-SourceHeaderTitle text-logo-color">Discover Brands</span>
                                        <div className="aa-SourceHeaderLine" />
                                        
                                        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                            {
                                                predefinedItems.map((item, i) => <button className='brand-btn'  onClick={() => history.push(`/products/${item.slug}`)} >{item.name}</button>)
                                            }
                                        </div>
                                    </>
                                    ) : ''
                                }
                            </>
                        )
                    }
                },
            };
        },
    });

    const loadBrands = () => {
        getSubs().then((brand) => {
            setBrands(brand.data);
        });
    };

    React.useEffect(() => {
        loadBrands();
    }, []);

    React.useEffect(() => {
        const defaultBrandList = ['apple', 'samsung', 'google', 'xiaomi', 'oneplus', 'huawai', 'oppo', 'sony', 'tecnno']
        let brands_on_algolia = [];
        brands_on_algolia = brands.filter((item) => item.parent === '6048c23a05a02980d1d5bc39' && item);
        setPredefinedItems(brands_on_algolia);
    }, [brands]);

    function useKey(key, cb){
		const callbackRef = useRef(cb);
		useEffect(() => {
			callbackRef.current = cb;
		});
	
		useLayoutEffect(() => {
			function handle(event){
                if (event.code === key && searchRes){
                    console.log("eventListner executedd.....");
                }
			}
			document.addEventListener("keypress", handle);
			return () => document.removeEventListener("keypress", handle);
		}, [key, searchRes]);
	}

    useLayoutEffect(() => {
        document.addEventListener("search", handleEnter);
        return () => document.removeEventListener('search', handleEnter);
    },[searchRes]);

    const handleEnter = () => {
		history.push('/suggestions');
	};
    
	useKey("enter", handleEnter);


    useEffect(() => {
        if (!newRef.current) {
            return undefined;
        }
        const search = autocomplete({
            container: newRef.current,
            plugins: [querySuggestionsPlugin, algoliaInsightsPlugin],
            debug: false,
            openOnFocus: false,
            placeholder: '',
            renderer: { createElement, Fragment },
            render({ children }, root) {
                render(children, root);
            },
            ...props,
            // detachedMediaQuery: '', //To always turn off detached mode, pass 'none'
            onStateChange({ state }) {
                if (state.isOpen === true){
                    setSearchRes(state.isOpen);
                }
                else if (state.isOpen === false){
                    setSearchRes(state.isOpen);
                }
            },
        });
        return () => {
            search.destroy();
        };
    }, [props]);
    return <div ref={newRef} className='position-relative lowermenu'>
        <span className="position-absolute bottom-0 start-50 translate-middle-x" style={{ color: '#bbb', fontWeight:"bold" }}> Search</span>
    </div>;
}
export default Autocomplete2;