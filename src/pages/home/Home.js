import React, { Component } from 'react'

import withRoot from '../../theme/WithRoot'
import { connect } from 'react-redux'
import * as actions from '../../actions/authActions'

import AppAppBar from '../../components/AppAppBar/AppAppBar'
import ProductHero from '../../components/productHero/ProductHero';
import ProductValues from '../../components/productValues/ProductValues';
import ProductCategories from '../../components/productCategories/ProductCategories';
import ProductHowItWorks from '../../components/productHowItWorks/ProductHowItWorks'
import ProductSmokingHero from '../../components/productSmokingHero/ProductSmokingHero';
import AppFooter from '../../components/appFooter/AppFooter'

import Button from "@material-ui/core/Button"
import { Role } from '../../utils/constants';

class Home extends Component {
    login  = e => {
        localStorage.setItem("TOKEN",1);
        this.props.updateUser({isAuthenticated: true,role: Role.Employer,name: "Roma Vardiyani"})
    }

    render() {
        return (
            <>
                <AppAppBar/>
                <ProductHero/>
                <ProductValues/>
                <ProductCategories/>
                <ProductHowItWorks/>
                <ProductSmokingHero/>
                <AppFooter/>    
            </>
        )
    }
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps,actions)(withRoot(Home));

