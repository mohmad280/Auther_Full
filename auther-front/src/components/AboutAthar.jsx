import atharImage from "../assets/WhatsApp_Image_2025-02-26_at_22.11.13_ffccba2d_1783272693369.jpg";


function AboutAthar(){

return (

<section 
id="about-athar"
className="
bg-white
py-24
px-6
"
>


<div className="
max-w-6xl
mx-auto
grid md:grid-cols-2
gap-12
items-center
">


<div className="reveal">

<span className="
text-[#d8a42b]
font-black
">
من نحن
</span>


<h2 className="
text-4xl
font-black
text-[#0f4357]
mt-2 mb-6
">
عن أثر
</h2>


<p className="
text-[#0f4357]/70
text-lg
leading-loose

">

أثر هي مبادرة شبابية تطوعية انطلقت من محافظة إربد، تُعنى بتمكين الشباب وتنمية مهاراتهم الحياتية والشخصية، من خلال تصميم وتنفيذ أنشطة استثنائية تُحاكي اهتماماتهم وتلبي احتياجاتهم المعرفية والاجتماعية.

نؤمن بأن لكل شاب طاقة وقصة تستحق أن تُروى، ونحرص على توفير مساحات تفاعلية تعزز الإبداع، وتُطلق قدراتهم نحو الأثر الإيجابي.

</p>


</div>



<div className="reveal">

<img
src={atharImage}
className="
rounded-3xl
shadow-lg
w-full
aspect-square
object-cover
"
/>


</div>


</div>


</section>

)

}


export default AboutAthar;