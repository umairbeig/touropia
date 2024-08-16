import React, { useEffect } from "react"
import { MDBBtn, MDBCard, MDBCardBody, MDBFooter, MDBIcon, MDBInput, MDBValidation } from "mdb-react-ui-kit"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { register } from "../redux/Slice"
import { toast } from "react-toastify"

export const Register = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [form, setForm] = useState({ firstName: "", lastName: "", email: "", password: "" })
    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(register({ "form": form, "navigate": navigate, "toast": toast }));
        // console.log(form);
        // const fx = { firstName: "", lastName: "", email: "", password: "" }
        // setForm(fx);
    }

    const handleChange = (e) => {
        e.preventDefault()
        let { name, value } = e.target;
        setForm({ ...form, [name]: value });

    }
    return (
        <div style={{ margin: "auto", alignContent: "center", marginTop: "120px" }}>
            <MDBCard>

                <MDBIcon icon="user-circle" ><h6>Sign Up</h6></MDBIcon>

                <MDBCardBody>
                    <MDBValidation onSubmit={handleSubmit}>

                        <MDBInput
                            style={{ marginBottom: "20px" }}
                            label="First Name"
                            name="firstName"
                            type="text"
                            value={form.firstName}
                            onChange={handleChange}
                            required
                            validation="enter first name"

                        ></MDBInput>
                        <MDBInput
                            style={{ marginBottom: "20px" }}
                            label="Last Name"
                            name="lastName"
                            type="text"
                            value={form.lastName}
                            onChange={handleChange}
                            required
                            validation="enter Last name"

                        ></MDBInput>
                        <MDBInput
                            style={{ marginBottom: "20px" }}
                            label="Email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            validation="enter email"

                        ></MDBInput>
                        <MDBInput
                            style={{ marginBottom: "20px" }}
                            label="Password"
                            name="password"
                            type="password"
                            value={form.password}
                            onChange={handleChange}
                            required
                            validation="enter password"
                        ></MDBInput>
                        <MDBBtn>Sign Up</MDBBtn>

                    </MDBValidation>
                </MDBCardBody>

                <MDBFooter>
                    <Link to={"/login"}>Already have an account</Link>
                </MDBFooter>



            </MDBCard>
        </div>
    )
}