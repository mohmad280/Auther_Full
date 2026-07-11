function PersonalInfoForm({ formData, handleInputChange }) {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="mb-4 block text-base font-bold text-[#0f4357]">الاسم الكامل بالعربي *</h3>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <input type="text" name="arFirstName" placeholder="الاسم الأول" value={formData.arFirstName} onChange={handleInputChange} className="w-full rounded-lg border border-[#ddd] p-3 text-sm focus:border-[#d8a42b] focus:outline-none focus:ring-1 focus:ring-[#d8a42b]" />
          <input type="text" name="arFatherName" placeholder="اسم الأب" value={formData.arFatherName} onChange={handleInputChange} className="w-full rounded-lg border border-[#ddd] p-3 text-sm focus:border-[#d8a42b] focus:outline-none focus:ring-1 focus:ring-[#d8a42b]" />
          <input type="text" name="arLastName" placeholder="اسم العائلة" value={formData.arLastName} onChange={handleInputChange} className="w-full rounded-lg border border-[#ddd] p-3 text-sm focus:border-[#d8a42b] focus:outline-none focus:ring-1 focus:ring-[#d8a42b]" />
        </div>
      </div>

      <div>
        <h3 className="mb-4 block text-base font-bold text-[#0f4357]" dir="rtl">Full Name in English *</h3>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <input type="text" name="enFirstName" placeholder="First Name" value={formData.enFirstName} onChange={handleInputChange} className="w-full rounded-lg border border-[#ddd] p-3 text-sm focus:border-[#d8a42b] focus:outline-none focus:ring-1 focus:ring-[#d8a42b]" />
          <input type="text" name="enFatherName" placeholder="Father Name" value={formData.enFatherName} onChange={handleInputChange} className="w-full rounded-lg border border-[#ddd] p-3 text-sm focus:border-[#d8a42b] focus:outline-none focus:ring-1 focus:ring-[#d8a42b]" />
          <input type="text" name="enLastName" placeholder="Last Name" value={formData.enLastName} onChange={handleInputChange} className="w-full rounded-lg border border-[#ddd] p-3 text-sm focus:border-[#d8a42b] focus:outline-none focus:ring-1 focus:ring-[#d8a42b]" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div>
          <label className="mb-3 block text-sm font-bold text-[#0f4357]">الجنسية *</label>
          <select name="nationality" value={formData.nationality} onChange={handleInputChange} className="w-full rounded-lg border border-[#ddd] p-3 text-sm focus:border-[#d8a42b] focus:outline-none focus:ring-1 focus:ring-[#d8a42b]">
            <option value="">اختر الجنسية</option>
            <option value="أردني">أردني</option>
            <option value="أخرى">أخرى</option>
          </select>
        </div>

        <div>
          <label className="mb-3 block text-sm font-bold text-[#0f4357]">{formData.nationality === "أخرى" ? "رقم الوثيقة" : "الرقم الوطني"}</label>
          <input type="text" name="nationalId" value={formData.nationalId} onChange={handleInputChange} className="w-full rounded-lg border border-[#ddd] p-3 text-sm focus:border-[#d8a42b] focus:outline-none focus:ring-1 focus:ring-[#d8a42b]" />
        </div>

        <div>
          <label className="mb-3 block text-sm font-bold text-[#0f4357]">تاريخ الميلاد</label>
          <input type="date" name="dob" value={formData.dob} onChange={handleInputChange} className="w-full rounded-lg border border-[#ddd] p-3 text-sm focus:border-[#d8a42b] focus:outline-none focus:ring-1 focus:ring-[#d8a42b]" />
        </div>
      </div>

      <div>
        <label className="mb-3 block text-sm font-bold text-[#0f4357]">الجنس</label>
        <div className="flex gap-8">
          <label className="flex items-center gap-3 text-sm">
            <input type="radio" name="gender" value="ذكر" onChange={handleInputChange} className="h-4 w-4 cursor-pointer" />
            <span>ذكر</span>
          </label>
          <label className="flex items-center gap-3 text-sm">
            <input type="radio" name="gender" value="أنثى" onChange={handleInputChange} className="h-4 w-4 cursor-pointer" />
            <span>أنثى</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfoForm;