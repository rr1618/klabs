import React from "react";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const PaymentSuccess=(props)=>
{
    return(
        <React.Fragment>

            <div className="container-success">
                <div className="printer-top"></div>

                <div className="paper-container">
                    <div className="printer-bottom"></div>

                    <div className="paper-payment">
                        <div className="main-contents">
                            <div className="success-icon">&#10004;</div>
                            <div className="success-title">
                                Payment Complete
                            </div>

                            <div className="order-details">
                                <div className="order-number-label">Order Number</div>
                                <div className="order-number">{props.match.params.orderId}</div>
                            </div>
                            <div className="order-footer">Thank you!</div>
                        </div>
                        <div className="jagged-edge"></div>
                    </div>
                </div>
            </div>



        </React.Fragment>
    )
}

export default PaymentSuccess