// src/components/FAQ.jsx

import { useState } from "react";


const questions = [
  {
    question: "ما هي شروط المشاركة في مسابقة منبر؟",
    answer:
      "المسابقة مفتوحة للشباب المهتمين بصقل مهارات الخطابة والإلقاء ضمن الفئات المحددة."
  },
  {
    question: "هل المعسكر التدريبي إلزامي؟",
    answer:
      "نعم، المعسكر التدريبي هو مرحلة أساسية لتأهيل المشاركين وصقل موهبتهم قبل الانتقال لمرحلة التقييم والاختبارات."
  },
  {
    question: "أين سيقام الحفل الختامي؟",
    answer:
      "سيقام الحفل الختامي رسمياً على مسرح مركز إربد الثقافي في 26 أيلول 2026."
  },
  {
    question: "كيف يتم تقديم طلبات التسجيل؟",
    answer:
      "من خلال الضغط على زر سجل الآن بعد فتح باب التسجيل، وإنشاء حساب وتعبئة البيانات ورفع المرفقات المطلوبة."
  }
];


function FAQ(){

const [open,setOpen] = useState(null);



return (

<section
id="faq"
className="
bg-white
py-24
px-6
"
>


<div
className="
max-w-3xl
mx-auto
reveal
"
>


<div className="
text-center
mb-12
"
>


<span
className="
text-[#d8a42b]
font-black
tracking-wide
"
>

لديك سؤال؟

</span>


<h2
className="
text-4xl
font-black
text-[#0f4357]
mt-2
"
>

الأسئلة المتكررة

</h2>


</div>



<div className="
space-y-4
"
>


{
questions.map((item,index)=>(


<div
key={index}
className="
border
border-[#0f4357]/10
rounded-2xl
overflow-hidden
reveal
"
>


<button

onClick={()=>setOpen(
open===index ? null : index
)}

className="
w-full
flex
items-center
justify-between
gap-4
p-5
text-right
font-bold
text-[#0f4357]
bg-[#fbfaf7]/70
"
>


<span>
{item.question}
</span>


<svg

className={`
w-5
h-5
text-[#2fa2c4]
transition-transform
${open===index ? "rotate-180" : ""}
`}

viewBox="0 0 24 24"
fill="none"
stroke="currentColor"
strokeWidth="2.5"

>

<path d="M6 9l6 6 6-6"/>

</svg>


</button>



<div

className={`
overflow-hidden
transition-all
duration-500
${open===index ? "max-h-40" : "max-h-0"}
`}

>


<p
className="
p-5
pt-0
text-[#0f4357]/65
leading-relaxed
"
>

{item.answer}

</p>


</div>



</div>


))

}


</div>


</div>


</section>

)

}


export default FAQ;