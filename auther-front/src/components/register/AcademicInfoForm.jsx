function AcademicInfoForm({ formData, handleInputChange }) {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <label className="mb-3 block text-sm font-bold text-[#0f4357]">
            اسم الجامعة / الكلية *
          </label>
          <input
            type="text"
            name="nameOfUniversity"
            value={formData.nameOfUniversity}
            onChange={handleInputChange}
            placeholder="مثال: الجامعة الأردنية"
            className="w-full rounded-lg border border-[#ddd] p-3 text-sm focus:border-[#d8a42b] focus:outline-none focus:ring-1 focus:ring-[#d8a42b]"
          />
        </div>

        <div>
          <label className="mb-3 block text-sm font-bold text-[#0f4357]">
            التخصص *
          </label>
          <input
            type="text"
            name="specialization"
            value={formData.specialization}
            onChange={handleInputChange}
            placeholder="مثال: إدارة أعمال"
            className="w-full rounded-lg border border-[#ddd] p-3 text-sm focus:border-[#d8a42b] focus:outline-none focus:ring-1 focus:ring-[#d8a42b]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <label className="mb-3 block text-sm font-bold text-[#0f4357]">
            السنة الأكاديمية *
          </label>
          <select
            name="theAcademicYear"
            value={formData.theAcademicYear}
            onChange={handleInputChange}
            className="w-full rounded-lg border border-[#ddd] p-3 text-sm focus:border-[#d8a42b] focus:outline-none focus:ring-1 focus:ring-[#d8a42b]"
          >
            <option value="">اختر السنة</option>
            <option value="1">الأولى</option>
            <option value="2">الثانية</option>
            <option value="3">الثالثة</option>
            <option value="4">الرابعة</option>
            <option value="5">الخامسة</option>
          </select>
        </div>

        <div>
          <label className="mb-3 block text-sm font-bold text-[#0f4357]">
            مستوى الأداء الأكاديمي
          </label>
          <select
            name="academicLevel"
            value={formData.academicLevel}
            onChange={handleInputChange}
            className="w-full rounded-lg border border-[#ddd] p-3 text-sm focus:border-[#d8a42b] focus:outline-none focus:ring-1 focus:ring-[#d8a42b]"
          >
            <option value="">اختر</option>
            <option value="ممتاز">ممتاز</option>
            <option value="جيد جدا">جيد جدا</option>
            <option value="جيد">جيد</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default AcademicInfoForm;
