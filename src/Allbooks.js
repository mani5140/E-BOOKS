import React from "react";
import Books from "./books";
import Header from "./header";
import ScrollToTop from "./scrolltotop";

const Allbooks = () => {
    return(
        <div>
            {/* <Header></Header> */}
            <Books></Books>
            <ScrollToTop></ScrollToTop>
        </div>
    )
}

export default Allbooks;