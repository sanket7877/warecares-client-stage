import React from "react";
import {Button, Form, Input, Divider, Row,Col} from "antd";
import "./SignUp.css"
import {Link} from "react-router-dom";

class SignUp extends React.Component{

    render() {
        return (
            <div>
                <div>
                    <Row>
                        <Col span={12}>
                            <div className="signup-container">
                                <div>
                                    <Link to="/userRegistration">
                                        <Button  className="button" >Register Yourself as user</Button>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col span={12}>

                         <div className="signup-container">
                                <div>
                                    <Button className="button"  >Register Yourself as Doctor</Button>
                                </div>
                             </div>
                          </Col>
                     </Row>
                </div>
            </div>
        );
    }

}
export default SignUp;
