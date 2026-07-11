function ContactInfoForm({ formData, handleInputChange }) {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <label className="mb-3 block text-sm font-bold text-[#0f4357]">
            رقم الهاتف *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="07XXXXXXXX"
            className="w-full rounded-lg border border-[#ddd] p-3 text-sm focus:border-[#d8a42b] focus:outline-none focus:ring-1 focus:ring-[#d8a42b]"
          />
        </div>

        <div>
          <label className="mb-3 block text-sm font-bold text-[#0f4357]">
            البريد الإلكتروني *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="example@email.com"
            className="w-full rounded-lg border border-[#ddd] p-3 text-sm focus:border-[#d8a42b] focus:outline-none focus:ring-1 focus:ring-[#d8a42b]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <label className="mb-3 block text-sm font-bold text-[#0f4357]">
            كلمة المرور *
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="أدخل كلمة مرور قوية"
            className="w-full rounded-lg border border-[#ddd] p-3 text-sm focus:border-[#d8a42b] focus:outline-none focus:ring-1 focus:ring-[#d8a42b]"
          />
        </div>

        <div>
          <label className="mb-3 block text-sm font-bold text-[#0f4357]">
            الموقع / اللواء *
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            placeholder="مثال: عمان"
            className="w-full rounded-lg border border-[#ddd] p-3 text-sm focus:border-[#d8a42b] focus:outline-none focus:ring-1 focus:ring-[#d8a42b]"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactInfoForm;
