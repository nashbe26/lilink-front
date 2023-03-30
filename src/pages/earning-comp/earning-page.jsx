import React from "react";
import EarningComp from "../../components/earnings-page/earning-comp";
import Footer from "../../partials/footer/footer";
import HeaderJobs from "../../partials/header-jobs/header-jobs";
import LoggedHeader from "../../partials/header-logged/header-logged";

const EarningPage = () =>{

    return(
        <div className="">
            <LoggedHeader></LoggedHeader>
            <HeaderJobs></HeaderJobs>
            <div className="custom-container">
                <div className="row">
                    <div className="col-12">
                        <EarningComp></EarningComp>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    )

}


export default EarningPage;