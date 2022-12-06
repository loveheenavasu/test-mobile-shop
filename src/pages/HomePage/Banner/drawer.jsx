/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState, useRef } from 'react';
import { withRouter } from "react-router-dom";
import { getCategories } from "../../../functions/category";
import { getSubs } from "../../../functions/sub";
import { Helmet } from "react-helmet";
import LoadSpinner from '../../../components/Spinner/index'

const Drawer = ({ history }) => {

    const [categories, setCategories] = useState([]);
    const [subs, setSubs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [drop, setDrop] = useState(false);

    const node = useRef();

    const loadSubs = () => {
        setLoading(true);
        getSubs().then((c) => {
            setSubs(c.data)
            setLoading(false);
        })
    };

    const loadCategories = () => {
        setLoading(true);
        getCategories().then((c) => {
            setCategories(c.data);
            setLoading(false);
        });

    }

    useEffect(() => {
        loadCategories();
        loadSubs()
    }, []);


    const showCategories = () => categories.map((c) => (
        <div class="dropdown show ">
            <a class="btn btn-secondary dropdown-toggle p-2" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ background: "transparent", border: "none", textTransform: "uppercase" }}>
                <i class="las la-tasks aiz-side-nav-icon"></i>
                <span class="aiz-side-nav-text">{c.name}</span>
            </a>

            <div class="dropdown-menu " aria-labelledby="dropdownMenuLink">
                {subs.map((cat) => cat.parent === c._id && (

                    <a onClick={() => {
                        history.push(`/products/${cat.slug}`)

                    }}
                        class="dropdown-item pb-1 drawercat"  >
                        <i class="las la-tasks aiz-side-nav-icon" style={{ color: "white" }}></i>
                        <span class="aiz-side-nav-text" style={{ color: "white" }}>{cat.name}</span>
                    </a>

                ))}

            </div>
        </div>
    ));

    const handleClick = e => {
        if (node.current.contains(e.target)) {
            return;
        }

    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClick);

        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, []);

    return (
        <section ref={node} id="drawer">
            <Helmet>
                {/* <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script> */}
            </Helmet>
            <div class="p-3 bg-soft-primary d-none d-lg-block rounded-top all-category position-relative text-left">
                <i class="las la-home aiz-side-nav-icon"></i>
                <span class="fw-600 fs-16 mr-3" style={{ fontWeight: "bold" }}>CATEGORIES</span>
            </div>

            <div class="bg-dark">
                {loading && <LoadSpinner />}
                {showCategories()}

            </div>

        </section>
    );
}

export default withRouter(Drawer);