import React,{useEffect} from 'react';
function ChatbotIntro(){
    useEffect(()=>{
        //displaying of animation intro of chat
        function ani(){
            var intro=document.getElementById('intro');
            intro.style.opacity="1";
        }
        var animation=setTimeout(ani,1500);
        //clear timeout animation when chatbot will off
        return()=>{
            clearTimeout(animation);
        }
    },[])
    return(
        <div id="intro">
            <div style={{fontSize:25,paddingTop:20}}>IRIS</div>
                <div style={{fontSize:19,paddingTop:10}}>
                    Hello
                    <img 
                        style={styles.handWave}
                        src="https://www.flaticon.com/svg/static/icons/svg/1093/1093271.svg"
                        alt="hand-wave logo"
                     />
            </div>
            <div style={{fontSize:16,paddingTop:10}}>
                I am iris ,a virtual assistant how may i help you
            </div>
            
        </div>
    )
}
const styles={
    handWave:{
                position:"absolute",
                top:68,
                height:22,
                width:22,
                marginLeft:15
    }
}
export default ChatbotIntro;