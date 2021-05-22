import React,{Component} from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { withRouter, Link } from 'react-router-dom';
import Axios from "axios";
import { toast } from "react-toastify";

class Signup extends Component {
    state = {
        email: '',
        password: ''
    };

    componentDidMount() {
        function formValidation() {
            window.addEventListener('load', function () {
                // Fetch all the forms we want to apply custom Bootstrap validation styles to
                var forms = document.getElementsByClassName('needs-validation');
                // Loop over them and prevent submission
                 Array.prototype.filter.call(forms, function (form) {
                    form.addEventListener('submit', function (event) {
                        if (form.checkValidity() === false) {
                            event.preventDefault();
                            event.stopPropagation();
                        }
                        form.classList.add('was-validated');
                    }, false);
                });

            }, false);
        }
        formValidation();
    }
    
    handleSignUp = (e) => {
        e.preventDefault()
        const {
            email,
            password,
        } = this.state;

        var form = document.getElementsByClassName('needs-validation');
        if (form[0].checkValidity() === false) {
            form[0].classList.add('was-validated');
        }
        else {
                this.setState({disable: true})
                Axios.post(`${process.env.REACT_APP_API}signup`,
                {
                    email: email,
                    password: password
                },
                {
                    headers: {
                    Connection: "keep-alive",
                    Accept: "application/json",
                    },
                }
                )
                .then(function (response) {
                    toast.success("Success SignUp");
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

    }

    handleInput = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    
    render() {
        const {
            email,
            password
        } = this.state;
        return (
            <>
                <Container>
                    <Row>
                        <Col xs={{ span: 12, offset: 0 }} md={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 4 }} style={{marginTop:"20%"}}>
                            <form className="needs-validation" noValidate  onSubmit={this.handleSignUp}>
                                <h3 className="text-center">Create Account</h3>
                                <div className="mb-2">
                                    <label htmlFor="validationCustom010">Email</label>
                                    <div className="input-group">
                                        <input
                                            type="email"
                                            name="email"
                                            value={email}
                                            onChange={this.handleInput}
                                            className="form-control"
                                            id="validationCustom010"
                                            required />
                                        <div className="invalid-feedback">Please provide a valid email.</div>
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="validationCustom09">Password</label>
                                    <div className="input-group">
                                        <input
                                            minLength="6"
                                            type="password"
                                            name="password"
                                            value={password}
                                            onChange={this.handleInput}
                                            className="form-control"
                                            id="validationCustom09"
                                            required />
                                        <div className="invalid-feedback">Please provide a password, at least 6 characters.</div>
                                    </div>
                                </div>
                                <button
                                    className="btn btn-primary mt-4 d-block w-100"
                                    type="submit">
                                    Create Account
                                </button>
                                <p className="mb-0 mt-3 additional_info">Already have an account? &nbsp;
                                <Link className="btn-link" to="/Signin">Sign in</Link>
                                </p>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default withRouter(Signup);