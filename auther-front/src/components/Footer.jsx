import logo from "../assets/athar_logo.png";


function Footer(){

return (

<footer
id="contact"
className="
bg-[#0a2e3b]
text-white
pt-24
pb-10
px-6
"
>


<div
className="
max-w-6xl
mx-auto
grid
md:grid-cols-2
gap-14
"
>


{/* Contact Form */}

<div className="reveal">


<h3 className="
text-2xl
font-black
mb-2
">

تواصل معنا

</h3>


<p className="
text-white/50
mb-6
">

لديك استفسار؟ راسلنا وسنعود إليك بأقرب وقت.

</p>



<form className="space-y-4">


<input
type="text"
placeholder="الاسم الكامل"
className="
w-full
bg-white/5
border
border-white/15
rounded-xl
px-4
py-3
outline-none
focus:border-[#d8a42b]
"
/>



<div className="
grid
sm:grid-cols-2
gap-4
">


<input
placeholder="رقم الهاتف"
className="
bg-white/5
border
border-white/15
rounded-xl
px-4
py-3
"
/>


<input
placeholder="البريد الإلكتروني"
className="
bg-white/5
border
border-white/15
rounded-xl
px-4
py-3
"
/>


</div>



<textarea
rows="4"
placeholder="رسالتك"
className="
w-full
bg-white/5
border
border-white/15
rounded-xl
px-4
py-3
resize-none
"
/>



<button
className="
bg-[#d8a42b]
hover:bg-[#f0c266]
transition
text-white
font-bold
px-8
py-3
rounded-full
"
>

إرسال الرسالة

</button>


</form>


</div>





{/* Info */}


<div className="
flex
flex-col
gap-8
reveal
"
>


<div className="
flex
items-center
gap-3
">

<img
src={logo}
className="h-10"
/>


<span
className="
text-xl
font-black
"
>

مبادرة أثر التطوعية

</span>


</div>



<ul className="
space-y-4
text-white/70
">


<li>
📧 athar.inu@gmail.com
</li>

<li className="flex items-center gap-3">
  <span>📞</span>
  <span dir="ltr">+962 7 85442063</span>
</li>


</ul>



<div className="
flex
gap-3
">


{
["f","◎","𝕏"].map((icon,i)=>(

<a
key={i}
className="
w-10
h-10
rounded-full
bg-white/10
hover:bg-[#d8a42b]
transition
flex
items-center
justify-center
font-bold
"
>

{icon}

</a>

))
}


</div>


</div>



</div>




<div
className="
max-w-6xl
mx-auto
border-t
border-white/10
mt-14
pt-6
text-center
text-white/40
text-sm
reveal
"
>


<p>
جميع الحقوق محفوظة © 2026 مبادرة أثر التطوعي
</p>


<p className="mt-2">

طور من قبل شركة الأثر للصناعات التكنلوجية

</p>


</div>



</footer>

)

}


export default Footer;