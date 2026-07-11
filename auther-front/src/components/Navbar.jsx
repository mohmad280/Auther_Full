import logo from "../assets/athar_logo.png";
import manbar from "../assets/manbar_logo.png";

function Navbar({ 
  onHomeClick, 
  onRegisterClick, 
  onAboutAtharClick,
  onAboutManbarClick,
  onAgendaClick,
  onFaqClick
}) {

const links = [
  {
    name: "الرئيسية",
    action: onHomeClick,
    type: "button"
  },
  {
    name: "عن أثر",
    action: onAboutAtharClick,
    type: "button"
  },
  {
    name: "عن منبر",
    action: onAboutManbarClick,
    type: "button"
  },
  {
    name: "أجندة المسابقة",
    action: onAgendaClick,
    type: "button"
  },
  {
    name: "الأسئلة المتكررة",
    action: onFaqClick,
    type: "button"
  }
];


return (

<header 
className="
fixed top-0 inset-x-0 z-50 px-3 pt-3
">

<div 
className="
max-w-7xl mx-auto
bg-white/95
backdrop-blur
rounded-2xl
shadow-lg
px-6 py-3
flex items-center justify-between
">


<button onClick={onHomeClick} className="cursor-pointer">
  <img
    src={logo}
    alt="athar"
    className="h-9"
  />
</button>



<nav
className="
hidden lg:flex gap-2
bg-[#fbfaf7]
rounded-full p-2
"
>

{
links.map((link,index)=>(
  <button
    key={index}
    onClick={link.action}
    className="
nav-link
px-4 py-2
rounded-full
font-bold
transition
text-[#0f4357]
hover:bg-white
"
  >
    {link.name}
  </button>
))
}

</nav>





<div 
className="
flex items-center gap-4
"
>


<button
onClick={onRegisterClick}
className="
hidden md:block
bg-[#d8a42b]
text-white
px-5 py-2
rounded-full
font-bold
"
>

سجل الآن / تسجيل الدخول

</button>



<img
src={manbar}
alt="manbar"
className="h-10"
/>


</div>


</div>

</header>

)

}


export default Navbar;