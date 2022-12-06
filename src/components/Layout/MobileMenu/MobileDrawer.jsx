/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState, useRef } from 'react';
import { Link, withRouter } from "react-router-dom";
import { getCategories } from "../../../functions/category";
import { getSubs } from "../../../functions/sub";
import LoadSpinner from '../../Spinner';
import { Helmet } from "react-helmet";

const MobileDrawer = ({ close, history }) => {

    const [categories, setCategories] = useState([]);
    const [subs, setSubs] = useState([]);
    const [loading, setLoading] = useState(false);

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
        <div class="dropdown show">
            <a class="btn btn-secondary dropdown-toggle p-2 m-2" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ background: "transparent" }}>
                <i class="las la-tasks aiz-side-nav-icon"></i>
                <span class="aiz-side-nav-text">{c.name}</span>
                {
                    c.name === "Mobile Phones" ?
                        <i class="bi bi-bell-fill"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16" style={{ marginBottom: 15 + "px" }}>
                            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                        </svg></i> :
                        ''
                }
            </a>

            <div class="dropdown-menu " aria-labelledby="dropdownMenuLink">
                {subs.map((cat) => cat.parent === c._id && (

                    <a onClick={() => {
                        history.push(`/products/${cat.slug}`)
                        close()
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
        close()
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClick);

        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, []);

    return (
        <section ref={node} className="">
            <Helmet>
                {/* <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script> */}
                {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script> */}
                {/* <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script> */}
            </Helmet>
            <div class="sidebar-mobile c-scrollbar">

                <div>
                    <a href="#" class="aiz-side-nav-link active m-1" aria-expanded="false" style={{ color: "#f90", fontSize: 18 + "px" }}>
                        <i class="las la-home aiz-side-nav-icon"></i>
                        <span class="aiz-side-nav-text">Categories</span>
                    </a>
                    {loading && <LoadSpinner />}
                    {showCategories()}

                    <a class="d-flex justify-content-between p-2"  >

                        <a href='https://instagram.com/mobileshop.ug?utm_medium=copy_link' class="aiz-side-nav-text" style={{ color: "#9b6954" }}><i class="lab la-instagram la-3x"></i></a>
                        <a href='https://twitter.com/mobileshopug?t=1ObEAl1Simlr7dZUaODDTw&s=09' class="aiz-side-nav-text" style={{ color: "#1DA1F2" }}><i class="lab la-twitter la-3x"></i></a>
                        <a href='https://youtube.com/user/mugerwa78' class="aiz-side-nav-text" style={{ color: "#FF0000" }}><i class="lab la-youtube la-3x"></i></a>
                        <a href='https://www.facebook.com/mobileshop.ug/' class="aiz-side-nav-text" style={{ color: "#3B5998" }}><i class="lab la-facebook la-3x"></i></a>
                    </a>

                </div>


            </div>
        </section>
    );
}

export default withRouter(MobileDrawer);