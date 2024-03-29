
import React from "react";
import {Button, DatePicker, Form, InputNumber, message, Result, Spin} from "antd";
import "./BookAppointment.css";
import {payment} from "../service/ApiService";

class bookAppointment extends React.Component{


    constructor(props) {
        super(props);
        this.state={
            firstname:'',
            lastname:'',
            mdate:'',
            loading:false,
            amount:'',
            mtime:'',
            success:false
        }
        this.mydChangeHandler=this.mydChangeHandler.bind(this);
        this.myPayment=this.myPayment.bind(this);


    }


    mydChangeHandler = (event,b) => {
      //  this.setState({mdate:b})
     //   console.log(this.state.mdate)
        console.log(this.state.mdate);

    }


    handleSubmit=(value:any)=>{
         this.myPayment(value);
    }
    myPayment=(value)=>{
        console.log(value);
        payment(value).then(response=> {
                console.log(response);
                    this.displayRazorpay(response);
         }
                 );

    }
     loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }

    displayRazorpay=(response)=>{
        const res = this.loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }
        this.setState({amount:response.amount})



        const options = {
            key: "rzp_test_QfyV0fXC48wlrM", // Enter the Key ID generated from the Dashboard
            amount: response.amount,
            currency: response.currency,
            name: "Soumya Corp.",
            description: "Test Transaction",

            order_id: response.id,
            handler: (res)=>{
               // alert(res.razorpay_payment_id);
               message.success("Your payment is successfully done")
                this.setState({success:true})
            },

            prefill: {
                name: "sanekt",
                email: "SoumyaDey@example.com",
                contact: "8585858585",
            },
            notes: {
                address: "Soumya Dey Corporate Office",
            },
            theme: {
                color: "#0f3fb8",
            },

        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
        paymentObject.on('payment.failed', function (res){
            alert(res.error.code);
            alert(res.error.description);
            alert(res.error.source);
            alert(res.error.step);
            alert(res.error.reason);
            alert(res.error.metadata.order_id);
            alert(res.error.metadata.payment_id);
        });



    }
    onFinish = (fieldsValue) => {
             // Should format date value before submit.
             let values = {
                 ...fieldsValue,
                 'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
               //  'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),

             };

             console.log(values);
             this.setState({mdate:values["date-picker"],mtime:values["time-picker"],loading:true})
          this.mydChangeHandler();
         this.myPayment(values);

         };


render() {

        const container=(
            <Form
                className="appointment-form"
                onFinish={this.onFinish}>
                <Form.Item name="amount" rules={[{required:true}]}>
                    <InputNumber  style={{width:"300px"}}  pattern="^[0-9]*$" defaultValue={3} size="large" name="amount" placeholder="enter amount"/>
                </Form.Item>

                <Form.Item name="date-picker" rules={[{required:true}]}>
                    <DatePicker style={{width:"300px"}} />
                </Form.Item>
                <Form.Item >
                    <Button size="large"  className="appointment-form-button"   shape="round" type="primary" htmlType="submit">
                        Pay
                    </Button>
                </Form.Item>

            </Form>
        )
    if(this.state.success===true){

        return (
            <Result status="success"/>
        )
    }
        return (
            <div className="appointment-container">
                <Spin spinning={this.state.loading}>
                    {container}
                </Spin>
                {this.state.mdate}

                {this.state.mtime}
            </div>
        );
    }

}
export default bookAppointment;
