import logo from "../assets/athar_logo.png";
import manbar from "../assets/manbar_logo.png";

function Navbar() {

const links = [
  {
    name: "الرئيسية",
    path: "#home"
  },
  {
    name: "عن أثر",
    path: "#about-athar"
  },
  {
    name: "عن منبر",
    path: "#about-manbar"
  },
  {
    name: "أجندة المسابقة",
    path: "#agenda"
  },
  {
    name: "الأسئلة المتكررة",
    path: "#faq"
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


<img
src={logo}
alt="athar"
className="h-9"
/>



<nav
className="
hidden lg:flex gap-2
bg-[#fbfaf7]
rounded-full p-2
"
>


{
links.map((link,index)=>(

<a
key={index}
href={link.path}
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
</a>

))
}


</nav>





<div 
className="
flex items-center gap-4
"
>


<a
href="#register"
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

</a>



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