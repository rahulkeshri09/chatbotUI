import React,{useState,useEffect} from 'react';
import Questions from './Questions';
function Faq(){
    // questions of frequnetly asked questions(faq)
    const [quens,setQuens]=useState(["Can i readeem my fb before the original Term?",
                                    "Can i readeem my fb before the original Term?",
                                    "Can i readeem my fb before the original Term?",
                                    ]);
    // animation of displaying faq container 
    useEffect(()=>{
        function ani(){
            var robot=document.getElementById('robot2');
            var faq=document.getElementById('faq-container');
            faq.style.opacity="1";
            robot.style.opacity="1";
        }
        var animation1=setTimeout(ani,3000);
        var animation2=setTimeout(newConversationAni,6500);
        //animation of displaying start new conversation button
        function newConversationAni(){
            var newConversation=document.getElementById('new-conversation-btn');
            newConversation.style.opacity="1";
        }
        // clear all animation when chatbot off
        return()=>{
            clearTimeout(animation1);
            clearTimeout(animation2);
        }
    },[]);
    // using for knowing faq question index for animation in chatbot
    var i=-1;
    return(
        <div id="faq-container">
            <div id="robot2">
                <img 
                    style={styles.robot}
                    src="https://www.flaticon.com/svg/static/icons/svg/2432/2432846.svg"
                    alt="robot-logo"
                />
            </div>
            <h4 style={styles.faq}>Frequently asked questions</h4>
            <img 
                style={styles.faqLogo}
                src="https://www.flaticon.com/svg/static/icons/svg/1828/1828833.svg"
                alt="faq logo"
            />
            <div className="faq-ques">    
                {
                    quens.map((qn)=>{
                        i++
                        return <Questions qn={qn} key={i} ith={i}/>
                    })
                }
            </div>
            <div id="new-conversation-btn">
                <img
                    style={{height:20,width:20,marginRight:10,}}
                    src="https://www.flaticon.com/svg/static/icons/svg/2950/2950657.svg"
                    alt="message logo"
                />
                Start new conversation
            </div>
        </div>
    )
}
//css styles of robot logo and faq logo and faq heading 
const styles={
    robot:{
        position:"absolute",
        top:"-18%",
        height:70,
        width:70,
        borderRadius:"100%",
        border: "1px solid orange",
        boxShadow: "1px 1px orange",
        margin:25,
        marginLeft:15,
        backgroundColor:"#f58142",
        color:"white"
    },
    faq:{
        fontFamily:"",
        color:"#667063",
        marginTop:45,
        marginLeft: 25,
        display:"inline-block"
    },
    faqLogo:{
        position:"absolute",
        height:20,
        width:20,
        top:"13%",
        marginLeft:10
    }
}
export default Faq;