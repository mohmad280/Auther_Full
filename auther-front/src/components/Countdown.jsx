// src/components/Countdown.jsx

import {useEffect,useState} from "react";


function Countdown(){


const [time,setTime]=useState("--");


useEffect(()=>{


const target =
new Date("2026-07-26T00:00:00");



function update(){


const now=new Date();

const diff=target-now;



if(diff<=0){

setTime("—");
return;

}



const days=Math.floor(
diff/(1000*60*60*24)
);


const hours=Math.floor(
(diff/(1000*60*60))%24
);


const minutes=Math.floor(
(diff/(1000*60))%60
);



setTime(
`${days}d:${hours}h:${minutes}m`
);


}



update();


const timer=setInterval(update,60000);


return()=>clearInterval(timer);



},[]);



return (

<div
className="
fixed
bottom-6
left-6
z-50
flex
flex-col
items-start
gap-3
"
>


{/* Countdown */}

<div
className="
bg-[#2fa2c4]/95
text-white
rounded-2xl
shadow-lg
px-5
py-3
min-w-[220px]
"
>


<p className="
font-black
text-sm
">

فتح باب التسجيل

</p>


<p className="
text-xs
mt-1
">

الوقت المتبقي:

<span className="font-mono font-bold mr-2">

{time}

</span>

</p>


</div>




{/* Back top */}

<button

onClick={()=>
window.scrollTo({
top:0,
behavior:"smooth"
})
}

className="
bg-[#d8a42b]
hover:bg-[#f0c266]
transition
w-12
h-12
rounded-full
shadow-lg
flex
items-center
justify-center
text-white
text-xl
"

>

↑

</button>


</div>

)

}


export default Countdown;