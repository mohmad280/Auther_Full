function ExperienceForm({ formData, handleInputChange }) {
  return (
    <div className="space-y-8">
      <div>
        <label className="mb-3 block text-sm font-bold text-[#0f4357]">
          مستوى الخبرة *
        </label>
        <select
          name="experienceLevel"
          value={formData.experienceLevel}
          onChange={handleInputChange}
          className="w-full rounded-lg border border-[#ddd] p-3 text-sm focus:border-[#d8a42b] focus:outline-none focus:ring-1 focus:ring-[#d8a42b]"
        >
          <option value="">اختر المستوى</option>
          <option value="مبتدئ">مبتدئ</option>
          <option value="متوسط">متوسط</option>
          <option value="متقدم">متقدم</option>
        </select>
      </div>

      <div>
        <label className="mb-3 block text-sm font-bold text-[#0f4357]">
          هل شاركت من قبل؟
        </label>
        <div className="flex gap-8">
          <label className="flex items-center gap-3 text-sm">
            <input
              type="radio"
              name="participatedBefore"
              value="نعم"
              checked={formData.participatedBefore === "نعم"}
              onChange={handleInputChange}
              className="h-4 w-4 cursor-pointer"
            />
            <span>نعم</span>
          </label>
          <label className="flex items-center gap-3 text-sm">
            <input
              type="radio"
              name="participatedBefore"
              value="لا"
              checked={formData.participatedBefore === "لا"}
              onChange={handleInputChange}
              className="h-4 w-4 cursor-pointer"
            />
            <span>لا</span>
          </label>
        </div>
      </div>

      <div>
        <label className="mb-3 block text-sm font-bold text-[#0f4357]">
          سبب المشاركة
        </label>
        <textarea
          name="participationReason"
          value={formData.participationReason}
          onChange={handleInputChange}
          rows="4"
          placeholder="اكتب سببك في المشاركة"
          className="w-full rounded-lg border border-[#ddd] p-3 text-sm focus:border-[#d8a42b] focus:outline-none focus:ring-1 focus:ring-[#d8a42b]"
        />
      </div>

      <div>
        <label className="mb-3 block text-sm font-bold text-[#0f4357]">
          كيف علمت عن المنبر؟
        </label>
        <textarea
          name="howDidYouKnow"
          value={formData.howDidYouKnow}
          onChange={handleInputChange}
          rows="3"
          placeholder="مثال: من خلال وسائل التواصل"
          className="w-full rounded-lg border border-[#ddd] p-3 text-sm focus:border-[#d8a42b] focus:outline-none focus:ring-1 focus:ring-[#d8a42b]"
        />
      </div>
    </div>
  );
}

export default ExperienceForm;
