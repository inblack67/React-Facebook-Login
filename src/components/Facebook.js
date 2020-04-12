import React, { useState } from 'react'
import FacebookLogin from 'react-facebook-login'
import Preloader from './Preloader'
import M from 'materialize-css/dist/js/materialize.min.js'

const Facebook = () => {

    const [userData, setUserData] = useState({
        isLoggedIn: false,
        userId: '',
        name: '',
        email: '',
        picture: '',
        loading: true
    })

    let { isLoggedIn, name, email, picture, loading } = userData

    let fbContent;

    const componentClicked = () => {

    }

    const responseFacebook = (response) => {

        setUserData({
            isLoggedIn: true,
            userId: response.userId,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        })
    }

    if(isLoggedIn){
        loading = false;
        fbContent = <div className='container'>
            <div className="container">
                <img src={picture} alt='' className='responsive-img'/>
            </div>
            <p className="flow-text">Welcome {name}</p>
            <span className="red-text">{email}</span>
        </div>
    }           

    else{
        loading = false;
        fbContent = (
            <FacebookLogin appId={process.env.REACT_APP_APPID} autoLoad={true} fields='name,email,picture' onClick={componentClicked} callback={responseFacebook} />
        )
    }

    const onLogOut = e => {
        e.preventDefault();
        window.FB.logout();
        fbContent = null;
        setUserData({
            isLoggedIn: false,
            userId: '',
            name: '',
            email: '',
            picture: '',
            loading: false
        })

        M.toast({ html: 'Logged Out' })
    }

    if(loading){
        return <Preloader />
    }

    return (
        <div className="container center" style={{'marginTop': '10rem'}}>
            { fbContent }
            <br/><br/><br/>
            { isLoggedIn && <a href="#!" className="btn red" onClick={onLogOut}>Logout</a> }
        </div>
    )
}

export default Facebook
