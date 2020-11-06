import React,{useEffect} from 'react';
import Faq from './Faq';
import ChatbotIntro from './ChatbotIntro';
function ChatbotContainer(props){
    // displaying of animation chatbot robot logo
    useEffect(()=>{
        function ani(){
            var robot=document.getElementById('robot');
            robot.style.opacity="1";
        }
        var animation=setTimeout(ani,1500);
        //clear timeout when chatbot will off
        return()=>{
            clearTimeout(animation);
        }
    },[])
    return(
        <div className="chatbot-container">
            <div>
                <img 
                    className="chatbot-deactivevate"
                    src="https://www.flaticon.com/svg/static/icons/svg/109/109602.svg"
                    alt="chatbot deactivate logo"
                    onClick={props.deActive}
                />
            </div>
            <div id="robot">
                <img 
                    style={styles.robot}
                    src="https://www.flaticon.com/svg/static/icons/svg/2432/2432846.svg"
                    alt="robot-logo"
                />
            </div>
            <Faq />
            <div id="chatbot-intro">
                <ChatbotIntro />
            </div>
        </div>
    )
}
const styles={
    robot:{
        position:"absolute",
        top:"25%",
        left:"5%",
        height:70,
        width:70,
        border: "1px solid orange",
        boxShadow: "1px 1px orange",
        borderRadius:"100%",
        margin:20,
        marginLeft:15
    }
}
export default ChatbotContainer;