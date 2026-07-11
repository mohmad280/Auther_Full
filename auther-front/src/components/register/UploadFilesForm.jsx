function UploadFilesForm({ formData, handleInputChange }) {
  const inputClass =
    "w-full rounded-lg border border-[#ddd] p-3 text-sm focus:border-[#d8a42b] focus:outline-none focus:ring-1 focus:ring-[#d8a42b]";

  return (
    <div className="space-y-8">
      <div className="rounded-lg border-2 border-dashed border-[#d8a42b] bg-[#fbfaf7] p-5">
        <label className="mb-3 block text-sm font-bold text-[#0f4357]">
          رابط الصورة الشخصية *
        </label>
        <input
          type="url"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleInputChange}
          placeholder="https://example.com/images/profile.jpg"
          className={inputClass}
          dir="ltr"
        />
        <p className="mt-2 text-xs text-[#0f4357]/60">
          أدخل رابطًا مباشرًا للصورة الشخصية (مثل Google Drive أو أي خدمة استضافة).
        </p>
      </div>

      <div className="rounded-lg border-2 border-dashed border-[#d8a42b] bg-[#fbfaf7] p-5">
        <label className="mb-3 block text-sm font-bold text-[#0f4357]">
          رابط الفيديو التعريفي *
        </label>
        <input
          type="url"
          name="videoUrl"
          value={formData.videoUrl}
          onChange={handleInputChange}
          placeholder="https://example.com/videos/intro.mp4"
          className={inputClass}
          dir="ltr"
        />
        <p className="mt-2 text-xs text-[#0f4357]/60">
          أدخل رابطًا مباشرًا للفيديو التعريفي.
        </p>
      </div>
    </div>
  );
}

export default UploadFilesForm;
