import { useEffect } from "react";

function useActiveSection(active = true){

useEffect(()=>{

if(!active) return;

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-link");


const observer = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


links.forEach(link=>{

link.classList.remove(
"bg-[#d8a42b]",
"text-white"
);

link.classList.add(
"text-[#0f4357]"
);

});



const activeLink = document.querySelector(
`a[href="#${entry.target.id}"]`
);



if(activeLink){

activeLink.classList.add(
"bg-[#d8a42b]",
"text-white"
);

activeLink.classList.remove(
"text-[#0f4357]"
);

}


}


});


},{
threshold:0.5
});


sections.forEach(section=>{
observer.observe(section);
});


return ()=>observer.disconnect();


},[active]);


}

export default useActiveSection;