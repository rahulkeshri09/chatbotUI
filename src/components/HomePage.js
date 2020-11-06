import React from 'react';
function HomePage(props){
    return(
        <div>
            <div className="chatbot-logo-position">
                <h3>Click on logo for opening chatbot</h3>
                <img className="chatbot-logo"
                    src="https://www.flaticon.com/svg/static/icons/svg/2301/2301233.svg"
                    alt="chatbot logo"
                    onClick={props.active}
                />
            </div>
            
        </div>
    )
}
export default HomePage;