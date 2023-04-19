import React,{useState} from 'react'

export default function DailyTurnOverPage() {
    const [state,setState]=useState(true);
  return (
    <div>
        <div style={{backgroundColor:"rgb(241,242,244)",paddingBottom:"15px"}}>
        <div style={{width:"98%",margin:"auto"}}>
        <h4 style={{fontFamily:"sans-serif",fontWeight:"600",padding:"10px 7px"}}>DAILY TURNOVER</h4>
        <div style={{backgroundColor:"white",padding:"15px"}}>
        <div style={{display:'flex',justifyContent:"space-between"}}>
        <div><span style={{border:"1px solid black",borderRadius:"25px",padding:"0px 6px"}}>i</span> Note : </div>
        <div><button style={{border:"none",backgroundColor:"white",cursor:"pointer"}} onClick={()=>{setState(!state)}}>{state ? <span>&and; hide</span>: <span>&#8744; expand</span>}</button></div>
        </div>
        {
            state ? <div style={{padding:"10px"}}>
                    <p style={{padding:"5px 0"}}>&bull; Expect Amazon channel data to have latency against Amazon Business reports as Amazon only provides us shipped order data at any point</p>
                    <p style={{padding:"5px 0 0 0"}}>&bull; For countries behind 5G time zone, TO data can be slower to refresh as the dashboard is refreshed basus 5G time zone</p>
            </div> : null
        }
        </div>
        <div  style={{backgroundColor:"white",padding:"15px",marginTop:"15px"}}>
            <div>
                <p style={{textAlign:'center'}}>TIME ZONE</p>
            </div>
            <div style={{display:'flex',justifyContent:"space-around",padding:"1%"}}>
                <div style={{border:"1px solid gray",padding:"1%"}}><p>Singapore 16:38</p></div>
                <div style={{border:"1px solid gray",padding:"1%"}}><p>India 13:10</p></div>
                <div style={{border:"1px solid gray",padding:"1%"}}><p>EU-Paris 08:40</p></div>
                <div style={{border:"1px solid gray",padding:"1%"}}><p>UK-London 07:40</p></div>
                <div style={{border:"1px solid gray",padding:"1%"}}><p>US-PST 23:41</p></div>
            </div>
        </div>
        </div>
        </div>
        <div style={{width:"98%",margin:"auto",display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"10px",paddingTop:"15px"}}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"",backgroundColor:"#dee3ed"}}>
                <div style={{padding:"5%"}}><p style={{border:"1px solid gray",fontSize:"24px",padding:'5px 12px',borderRadius:"25px"}}>$</p></div>
                <div style={{fontFamily:"sans-serif"}}><p style={{fontWeight:"500",fontSize:"25px"}}>$ 8,106</p><span style={{color:"gray",fontSize:"15px"}}>Today's turnover</span></div>
            </div>
            <div style={{display:"flex",alignItems:"center",justifyContent:"",backgroundColor:"#dee3ed"}}>
                <div style={{padding:"5%"}}><p style={{border:"1px solid gray",fontSize:"24px",padding:'5px 12px',borderRadius:"25px"}}>$</p></div>
                <div style={{fontFamily:"sans-serif"}}><p style={{fontWeight:"400",fontSize:"25px"}}>$ 4,69,836</p><span style={{color:"gray",fontSize:"15px"}}>MTD turnover</span></div>
            </div>
            <div style={{display:"flex",alignItems:"center",justifyContent:"",backgroundColor:"#dee3ed"}}>
                <div style={{padding:"5%"}}><p style={{border:"1px solid gray",fontSize:"24px",padding:'5px 12px',borderRadius:"25px"}}>$</p></div>
                <div style={{fontFamily:"sans-serif"}}><p style={{fontWeight:"400",fontSize:"25px"}}>$ 10,099,489</p><span style={{color:"gray",fontSize:"15px"}}>YTD turnover</span></div>
            </div>
        </div>
    </div>
  )
}
