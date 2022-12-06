import React, { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import "./styles.css";
import algoliasearch from 'algoliasearch';
import { getAlgoliaResults } from '@algolia/autocomplete-js';
import ComponentAuto from './CompleteAuto';
import ProductItem from './ProductItem';
import { ALGOLIA_APPLICATION_ID, ALGOLIA_API_KEY, ALGOLIA_INDEX, ALGOLIA_QUERY_SUGGESTION } from '../../helpers/algolia'; 

const appId = ALGOLIA_APPLICATION_ID;
const apiKey = ALGOLIA_API_KEY;
const searchClient = algoliasearch(appId, apiKey);


const AutoComplete = ({ options }) => {
	const [text, setText] = useState("");
	const [suggestions, setSuggestions] = useState([]);
	const history = useHistory();
	const [loading, setLoading] = useState(true);

	const onChangeHandler = (text) => {
		let matches = [];
		if (text.length > 0) {
			matches = options.filter((v) => {
				const regex = new RegExp(`^${text}`, "gi");
				return v.title.match(regex);
			});
			setSuggestions(matches);
			setText(text);
		}
	};
	const suggestionSelected = (text) => {
		setText(text);
		setSuggestions([]);
		history.push(`/search?q=${text}`);
	};

	return (
		<div className="autocomplete" style={{ width: "100%" }}>
			<div>
				<ComponentAuto
					openOnFocus={true}
					getSources={({ query }) => [
						{
							sourceId: ALGOLIA_QUERY_SUGGESTION,
							getItems() {
								return getAlgoliaResults({
									searchClient,
									queries: [
										{
											indexName: 'products',
											query,
											params: {
												hitsPerPage: 6,
												clickAnalytics: true,
											}
										},
									],
								});
							},
							templates: {
								item({ item, components }) {
									return (
										<>
											<ProductItem hit={item} query={query} components={components} history={history} loading={loading} setLoading={setLoading} />
										</>
									)
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
												clickAnalytics: true,
											}
										},
									],
								});
							},
							templates: {
								item({ item, components }) {
									return (
										<>
											<ProductItem hit={item} query={query} components={components} history={history} loading={loading} setLoading={setLoading} />
										</>
									)
								},
							},
						},
					]} />
			</div>
		</div>
	);
};

export default AutoComplete;
