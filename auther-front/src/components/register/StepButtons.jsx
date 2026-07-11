function StepButtons({ step, prevStep, nextStep, isLastStep, isSubmitting, canGoNext }) {
  return (
    <div className="flex flex-col-reverse gap-4 border-t border-[#e0e0e0] pt-8 sm:flex-row sm:justify-between">
      <button
        type="button"
        onClick={prevStep}
        disabled={step === 0}
        className="rounded-lg border-2 border-[#d8a42b] px-8 py-3 text-sm font-bold text-[#d8a42b] transition hover:bg-[#fafaf8] disabled:opacity-50"
      >
        السابق
      </button>

      <button
        type={isLastStep ? "submit" : "button"}
        onClick={!isLastStep ? nextStep : undefined}
        disabled={isSubmitting || !canGoNext}
        className="rounded-lg bg-[#d8a42b] px-8 py-3 text-sm font-bold text-white transition hover:bg-[#c69a1a] disabled:opacity-60"
      >
        {isSubmitting ? "جاري الإرسال..." : isLastStep ? "إرسال الطلب" : "التالي"}
      </button>
    </div>
  );
}

export default StepButtons;
