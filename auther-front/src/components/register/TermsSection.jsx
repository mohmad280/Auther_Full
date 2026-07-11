function TermsSection({ agreedToTerms, setAgreedToTerms, nextStep }) {
  return (
    <div className="space-y-8">
      <div className="rounded-xl border border-[#e8d8a9] bg-[#fffaf0] p-8 shadow-sm">
        <div className="mb-6 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#d8a42b] text-3xl text-white">
            ✓
          </div>
        </div>

        <h3 className="mb-4 text-center text-2xl font-bold text-[#0f4357]">قبل البدء بالتسجيل</h3>
        <p className="mx-auto mb-8 max-w-2xl text-center text-base leading-relaxed text-[#0f4357]/70">
          يرجى قراءة الشروط والموافقة عليها قبل المتابعة إلى نموذج التسجيل.
        </p>

        <div className="flex items-center justify-center gap-4 rounded-lg border border-[#e3d7aa] bg-white p-4">
          <input
            type="checkbox"
            checked={agreedToTerms}
            onChange={(e) => setAgreedToTerms(e.target.checked)}
            className="h-5 w-5 cursor-pointer rounded border-[#d8a42b] text-[#d8a42b] focus:ring-1 focus:ring-[#d8a42b]"
          />
          <span className="text-sm font-semibold text-[#0f4357]">أوافق على الشروط والأحكام</span>
        </div>
      </div>

      <div className="flex justify-center pt-4">
        <button
          onClick={nextStep}
          disabled={!agreedToTerms}
          className="rounded-lg bg-[#d8a42b] px-12 py-3 text-base font-bold text-white transition hover:bg-[#c69a1a] disabled:opacity-60"
        >
          متابعة
        </button>
      </div>
    </div>
  );
}

export default TermsSection;
