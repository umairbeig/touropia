import { MDBCard, MDBCardBody, MDBCardFooter, MDBInput, MDBValidation, MDBSpinner, MDBIcon, MDBBtn } from "mdb-react-ui-kit"
import { useState } from "react"
import { Link } from "react-router-dom";



export const Login = () => {
    const [form, setForm] = useState({ email: "", password: "" });
    // const { email, password } = form;

    const handleChange = (e) => {
        // e.preventDefault()
        let { name, value } = e.target;
        console.log(value)
        setForm({ ...form, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div style={{ margin: "auto", alignContent: "center", marginTop: "120px" }}>

            <MDBCard alignment="center">
                <MDBIcon icon="user-circle" >
                    <h6>Sign In</h6>
                </MDBIcon>
                <MDBCardBody>

                    <MDBValidation onSubmit={handleSubmit} >

                        <MDBInput
                            label="Email"
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            // invalid
                            validation="please provide email"
                        />

                        <MDBInput style={{ marginTop: "20px" }}
                            label="Password"
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            required
                            // invalid
                            validation="please provide password"

                        />

                        {/* ascascasc */}
                        <MDBBtn style={{ marginTop: "20px" }}>Sign In</MDBBtn>
                        {/* aajkbkajc */}

                    </MDBValidation>
                </MDBCardBody>
                <MDBCardFooter>
                    <Link to={"/register"}>
                        <p>don't have an account?</p></Link>

                </MDBCardFooter>

            </MDBCard>




        </div>

    )
}