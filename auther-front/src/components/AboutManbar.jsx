import manbarImage from "../assets/image_1783272699387.png";


function AboutManbar(){

return (

<section
id="about-manbar"
className="
bg-[#0a2e3b]
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

<img
src={manbarImage}
className="
rounded-3xl
shadow-lg
aspect-video
object-cover
"
/>

</div>



<div className="reveal">


<span className="
text-[#d8a42b]
font-black
">

المسابقة

</span>


<h2 className="
text-4xl
font-black
text-white
mt-2 mb-6
">

عن منبر

</h2>



<p className="
text-white/70
text-lg
leading-loose
">

منبر هي مسابقة في فن الخطابة تهدف إلى تنمية مهارات الإلقاء والتأثير، وتعزيز الثقة بالنفس والقدرة على التعبير، وخلق تجربة تنافسية راقية بين مجموعة من الشباب.

تُقيّم المشاركات من خلال لجنة تحكيم متخصصة.

</p>


</div>


</div>


</section>

)

}


export default AboutManbar;