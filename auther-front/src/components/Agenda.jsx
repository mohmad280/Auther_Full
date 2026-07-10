

const events = [
  {
    date: "26 تموز 2026",
    title: "فتح باب التسجيل",
    desc: "يتفعل زر سجل الآن وتقديم البيانات.",
    color: "teal"
  },
  {
    date: "8 آب 2026",
    title: "إغلاق باب التسجيل",
    desc: "ينتهي استقبال الطلبات وحصر الأسماء.",
    color: "teal"
  },
  {
    date: "21 – 29 آب 2026",
    title: "المعسكر التدريبي المكثف",
    desc: "خلال عطلة نهاية الأسبوع (الجمعة والسبت)، برنامج احترافي لتطوير مهارات الإلقاء ومواجهة الجمهور.",
    color: "gold"
  },
  {
    date: "6 أيلول 2026",
    title: "إعلان المتأهلين الـ10",
    desc: "بعد الاختبارات التقييمية، نعلن المتأهلين للمسابقة النهائية.",
    color: "teal"
  },
  {
    date: "السبت، 26 أيلول 2026",
    title: "الحفل الختامي والمسابقة النهائية",
    desc: "من 10:00 صباحاً حتى 3:00 ظهراً، بقاعة مركز إربد الثقافي.",
    color: "final"
  }
];


function Agenda(){

return (

<section 
id="agenda"
className="
bg-[#fbfaf7]
py-24
px-6
">


<div className="
max-w-5xl
mx-auto
">


<div className="
text-center
mb-16
reveal
">

<span className="
text-[#d8a42b]
font-black
">

المسار الزمني

</span>


<h2 className="
text-4xl
font-black
text-[#0f4357]
mt-2
">

أجندة المسابقة

</h2>

</div>



<div className="relative">


{/* الخط */}
<div className="
hidden md:block
absolute
right-1/2
translate-x-1/2
top-0
bottom-0
w-1
bg-gradient-to-b
from-[#2fa2c4]
to-[#d8a42b]
rounded-full
">
</div>



<div className="space-y-12">


{
events.map((event,index)=>(


<div
key={index}
className="
relative
md:grid
md:grid-cols-2
md:gap-10
reveal
"
>


{/* البطاقة */}

<div
className={`
${
index%2===0
?
"md:col-start-2 md:pl-10"
:
"md:col-start-1 md:pr-10"
}
`
}
>


<div
className={`
rounded-2xl
p-6
shadow-md

${
event.color==="final"
?
"bg-[#0a2e3b] text-white"
:
"bg-white"
}

${
event.color==="gold"
?
"border-2 border-[#d8a42b]/40"
:
""
}

`}
>


<span
className={`
inline-block
px-3
py-1
rounded-full
text-xs
font-bold
mb-3

${
event.color==="final"
?
"bg-[#d8a42b] text-white"
:
event.color==="gold"
?
"bg-[#d8a42b]/20 text-[#d8a42b]"
:
"bg-[#2fa2c4]/10 text-[#2fa2c4]"
}

`}
>

{event.date}

</span>



<h3
className={`
font-black
text-lg
mb-2

${
event.color==="final"
?
"text-white"
:
"text-[#0f4357]"
}

`}
>

{event.title}

</h3>



<p
className={`
text-sm
leading-relaxed

${
event.color==="final"
?
"text-white/70"
:
"text-[#0f4357]/60"
}

`}
>

{event.desc}

</p>


</div>


</div>



{/* النقطة */}

<span
className={`
absolute
right-3
md:right-1/2
md:translate-x-1/2
top-7
w-6
h-6
rounded-full
border-4
border-[#fbfaf7]

${
event.color==="gold" || event.color==="final"
?
"bg-[#d8a42b]"
:
"bg-[#2fa2c4]"
}

`}
>

</span>



</div>


))

}


</div>


</div>


</div>


</section>

)

}


export default Agenda;