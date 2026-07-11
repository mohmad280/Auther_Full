import { useState } from "react";
import apiClient from "../../services/apiClient";
import TermsSection from "../../components/register/TermsSection";
import PersonalInfoForm from "../../components/register/PersonalInfoForm";
import AcademicInfoForm from "../../components/register/AcademicInfoForm";
import ContactInfoForm from "../../components/register/ContactInfoForm";
import ExperienceForm from "../../components/register/ExperienceForm";
import UploadFilesForm from "../../components/register/UploadFilesForm";
import StepButtons from "../../components/register/StepButtons";

function Register({ onBack }) {
  const [step, setStep] = useState(0);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    arFirstName: "",
    arFatherName: "",
    arLastName: "",
    enFirstName: "",
    enFatherName: "",
    enLastName: "",
    nationality: "",
    nationalId: "",
    gender: "",
    dob: "",
    nameOfUniversity: "",
    specialization: "",
    theAcademicYear: "",
    academicLevel: "",
    phone: "",
    email: "",
    password: "",
    location: "",
    experienceLevel: "",
    participatedBefore: "",
    participationReason: "",
    howDidYouKnow: "",
    imageUrl: "",
    videoUrl: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const canGoNext = () => {
    if (step === 0) return agreedToTerms;
    if (step === 1) {
      return [
        formData.arFirstName,
        formData.arFatherName,
        formData.arLastName,
        formData.enFirstName,
        formData.enFatherName,
        formData.enLastName,
        formData.nationality,
        formData.nationalId,
        formData.gender,
        formData.dob,
      ].every(Boolean);
    }
    if (step === 2) {
      return [formData.nameOfUniversity, formData.specialization, formData.theAcademicYear].every(Boolean);
    }
    if (step === 3) {
      return [formData.phone, formData.email, formData.password, formData.location].every(Boolean);
    }
    if (step === 4) {
      return [formData.experienceLevel, formData.participatedBefore].every(Boolean);
    }
    if (step === 5) {
      return [formData.imageUrl, formData.videoUrl].every(Boolean);
    }
    return true;
  };

  const buildPayload = () => ({
    firstName: formData.enFirstName,
    middleName: formData.enFatherName,
    lastName: formData.enLastName,
    firstNameArabic: formData.arFirstName,
    middleNameArabic: formData.arFatherName,
    lastNameArabic: formData.arLastName,
    nationality: formData.nationality,
    nationalNumber: formData.nationalId,
    nameOfUniversity: formData.nameOfUniversity,
    gender: formData.gender === "أنثى" ? "FEMALE" : formData.gender === "ذكر" ? "MALE" : "OTHER",
    berthOfDate: formData.dob,
    specialization: formData.specialization,
    theAcademicYear: Number(formData.theAcademicYear),
    phone: formData.phone,
    email: formData.email,
    password: formData.password,
    location: formData.location,
    imageUrl: formData.imageUrl,
    videoUrl: formData.videoUrl,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      await apiClient.post("/users", buildPayload());
      setMessage("تم إرسال الطلب بنجاح. سيتم مراجعته قريبًا.");
      setStep(0);
      setAgreedToTerms(false);
      setFormData({
        arFirstName: "",
        arFatherName: "",
        arLastName: "",
        enFirstName: "",
        enFatherName: "",
        enLastName: "",
        nationality: "",
        nationalId: "",
        gender: "",
        dob: "",
        nameOfUniversity: "",
        specialization: "",
        theAcademicYear: "",
        academicLevel: "",
        phone: "",
        email: "",
        password: "",
        location: "",
        experienceLevel: "",
        participatedBefore: "",
        participationReason: "",
        howDidYouKnow: "",
        imageUrl: "",
        videoUrl: "",
      });
    } catch (error) {
      setMessage(error.response?.data?.message || "حدث خطأ أثناء إرسال الطلب. يرجى المحاولة لاحقًا.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    {
      title: "المعلومات الشخصية",
      component: <PersonalInfoForm formData={formData} handleInputChange={handleInputChange} />,
    },
    {
      title: "المعلومات الأكاديمية",
      component: <AcademicInfoForm formData={formData} handleInputChange={handleInputChange} />,
    },
    {
      title: "بيانات التواصل",
      component: <ContactInfoForm formData={formData} handleInputChange={handleInputChange} />,
    },
    {
      title: "الخبرة والمشاركة",
      component: <ExperienceForm formData={formData} handleInputChange={handleInputChange} />,
    },
    {
      title: "الملفات",
      component: <UploadFilesForm formData={formData} handleInputChange={handleInputChange} />,
    },
  ];

  return (
    <section id="register" className="scroll-mt-32 min-h-screen bg-[#fbfaf7] px-4 py-24">
      <div className="mx-auto max-w-6xl rounded-[32px] border border-[#e9e0c7] bg-white p-6 shadow-2xl shadow-[#0f4357]/10 md:p-10">
        {onBack ? (
          <button
            onClick={onBack}
            className="mb-6 rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-[#0f4357]"
          >
            ← العودة إلى الصفحة الرئيسية
          </button>
        ) : null}

        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#2fa2c4] text-2xl text-white">
            ✦
          </div>
          <h1 className="text-3xl font-black text-[#0f4357]">إنشاء حساب مشارك</h1>
          <p className="mt-3 text-lg text-[#0f4357]/70">املأ الخطوات التالية لتقديم طلبك على المنبر.</p>
        </div>

        {message ? (
          <div className={`mb-6 rounded-2xl p-4 text-sm ${message.includes("نجاح") ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700"}`}>
            {message}
          </div>
        ) : null}

        {step === 0 ? (
          <TermsSection agreedToTerms={agreedToTerms} setAgreedToTerms={setAgreedToTerms} nextStep={nextStep} />
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="mb-6 flex items-center gap-4 border-b border-gray-200 pb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2fa2c4] font-bold text-white">
                {step}
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#0f4357]">{steps[step - 1].title}</h2>
                <p className="text-sm text-gray-500">الخطوة {step} من 5</p>
              </div>
            </div>

            {steps[step - 1].component}

            <StepButtons
              step={step}
              prevStep={prevStep}
              nextStep={nextStep}
              isLastStep={step === 5}
              isSubmitting={isSubmitting}
              canGoNext={canGoNext()}
            />
          </form>
        )}
      </div>
    </section>
  );
}

export default Register;
