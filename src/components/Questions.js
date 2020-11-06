import React,{useEffect}from 'react';
function Questions(props){
    // displaying animation of faq questions
    useEffect(()=>{
        function ani(){
            var qns=document.getElementsByClassName('qns');
            qns[props.ith].style.opacity="1";
        }
        var animation=setTimeout(ani,props.ith*1000+3500);
        // clear animation when chatbot will off 
        return()=>{
            clearTimeout(animation);
        }
    },[]);
    return(
        <div className="qns">
            <ul>
                <li>{props.qn}</li>
            </ul>
        </div>
    )
}
export default Questions;