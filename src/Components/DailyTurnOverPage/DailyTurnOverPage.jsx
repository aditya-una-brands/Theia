import React,{useState} from 'react'
import style from './DailyTurnOverPage.module.css'
export default function DailyTurnOverPage() {
    const [state,setState]=useState(true);
  return (
    <div>
        <div className={style.firstDivContianer} >
        <div className={style.firstDivNestedFirstContianer}>
        <h4 style={{fontFamily:"sans-serif",fontWeight:"600",padding:"10px 7px"}}>DAILY TURNOVER</h4>
        <div style={{backgroundColor:"white",padding:"15px"}}>
        <div className={style.divOfNote}>
        <div><span style={{border:"1px solid black",borderRadius:"25px",padding:"0px 6px"}}>i</span> Note : </div>
        <div><button className={style.contentButton} onClick={()=>{setState(!state)}}>{state ? <span>&and; hide</span>: <span>&#8744; expand</span>}</button></div>
        </div>
        {
            state ? <div className={style.contentByButtonDiv}>
                    <p className={style.contentByButtonPTagFirst}>&bull; Expect Amazon channel data to have latency against Amazon Business reports as Amazon only provides us shipped order data at any point</p>
                    <p style={{padding:"5px 0 0 0"}}>&bull; For countries behind 5G time zone, TO data can be slower to refresh as the dashboard is refreshed basus 5G time zone</p>
            </div> : null
        }
        </div>
        <div  className={style.timezoneOutterDiv}>
            <div>
                <p className={style.timezonePTag}>TIME ZONE</p>
            </div>
            <div className={style.timezoneDiv}>
                <div className={style.timezoneDivInnerDiv}><p>Singapore 16:38</p></div>
                <div className={style.timezoneDivInnerDiv}><p>India 13:10</p></div>
                <div className={style.timezoneDivInnerDiv}><p>EU-Paris 08:40</p></div>
                <div className={style.timezoneDivInnerDiv}><p>UK-London 07:40</p></div>
                <div className={style.timezoneDivInnerDiv}><p>US-PST 23:41</p></div>
            </div>
        </div>
        </div>
        </div>
        <div className={style.turnOverDiv}>
            <div className={style.turnOverDivFirstInnerDiv}>
                <div className={style.dollarSignDiv}><p className={style.dollarSignPTag}>$</p></div>
                <div><p className={style.turnOverAmoutPTagFirst}>$ 8,106</p><span className={style.turnOverAmoutSpanTag}>Today's turnover</span></div>
            </div>
            <div className={style.turnOverDivFirstInnerDiv}>
                <div className={style.dollarSignDiv}><p className={style.dollarSignPTag}>$</p></div>
                <div><p className={style.turnOverAmoutPTagSecond}>$ 4,69,836</p><span className={style.turnOverAmoutSpanTag}>MTD turnover</span></div>
            </div>
            <div className={style.turnOverDivFirstInnerDiv}>
                <div className={style.dollarSignDiv}><p className={style.dollarSignPTag}>$</p></div>
                <div><p className={style.turnOverAmoutPTagSecond}>$ 10,099,489</p><span className={style.turnOverAmoutSpanTag}>YTD turnover</span></div>
            </div>
        </div>
    </div>
  )
}
