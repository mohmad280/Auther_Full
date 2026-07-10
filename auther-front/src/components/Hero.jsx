import hero from "../assets/menberr_2026.png"

function Hero(){

return (

<section 
id="home"
className="
min-h-screen
flex items-center justify-center
pt-32
relative
overflow-hidden
"
>


<div className="
absolute inset-0
opacity-10
bg-[radial-gradient(#2fa2c4_1px,transparent_1px)]
bg-[length:18px_18px]
">
</div>


<div className="
relative z-10 text-center px-6 reveal
">


<img
src={hero}
className="
mx-auto w-[220px] mb-6
"
/>


<h2 className="
text-3xl md:text-4xl
font-black
text-[#2fa2c4]
">

منبر... كلمتك لها أثر

</h2>


<p className="
max-w-xl mx-auto
mt-6
text-lg
text-[#0f4357]/70
leading-loose
">

مسابقة رسمية في فن الخطابة، تنظمها فريق أثر التطوعي، لاكتشاف أصوات شابة قادرة على صناعة الأثر بكلمتها.

</p>


<div className="
mt-10 flex justify-center gap-4
">


<a
className="
bg-[#d8a42b]
text-white
px-8 py-3
rounded-full
font-bold
"
>

سجل الآن

</a>


<a
className="
border-2
border-[#2fa2c4]
text-[#2fa2c4]
px-8 py-3
rounded-full
font-bold
"
>

شاهد الأجندة

</a>


</div>


</div>


</section>

)

}

export default Hero;