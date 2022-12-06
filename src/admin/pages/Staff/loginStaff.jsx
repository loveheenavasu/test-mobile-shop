import React, { useState } from 'react'
import { toast } from "react-toastify";
import Spinner from '../../../components/Spinner';
import { loginAdmin } from "../../../functions/staff";

const LoginStaff = ({ history }) => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const data = {username,password}

        loginAdmin(data)
            .then((res) => {
                setLoading(false);
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('role', res.data.role);
                localStorage.setItem('username', res.data.username);
                history.push('/admin/dashboard')
                toast.success("Staff Successfully LoggedIn!");
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
                toast.error("Error while logging!");
            });
    };

    return (
        <section class="gry-bg py-4">
            <div class="profile">
                <div class="container">
                    <div class="row">
                        <div class="col-xxl-4 col-xl-5 col-lg-6 col-md-8 mx-auto">
                            <div class="card">
                                <div class="text-center pt-4">
                                    <h1 class="h4 fw-600">
                                        Login into Admin Module.
                                </h1>
                                </div>
                                <div class="px-4 py-3 py-lg-4">

                                    <form id="reg-form" class="form-default" onSubmit={handleSubmit}>
                                        <div class="form-group">
                                            <input type="text" class="form-control"
                                                placeholder="username"
                                                name="username"
                                                value={username}
                                                onChange={(e) => setUserName(e.target.value)}

                                            />
                                        </div>

                                        <div class="form-group">
                                            <input type="password" class="form-control" placeholder="password"
                                                name="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)} />
                                        </div>

                                        <div class="mb-5">
                                            <button type="submit" class="btn btn-primary btn-block fw-600">{loading ? <Spinner /> : 'Login'}</button>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section >
    )
}

export default LoginStaff;
