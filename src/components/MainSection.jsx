import illustration from "/images/illustration-mockups.svg";

function MainSection() {
  return (
    <main className="flex flex-col gap-14 tablet:gap-10">
      <img src={illustration} alt="Illustration" />

      <div className="flex flex-col gap-8 tablet:gap-10 items-center">
        <div className="flex flex-col gap-6 text-center tablet:px-11">
          <h1 className="font-poppins font-semibold text-[24px] tablet:text-[40px] leading-[125%] tablet:px-2">Build The Community Your Fans Will Love</h1>
          <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion. </p>
        </div>

        <button type="button" className="bg-white rounded-[20px] tablet:rounded-[28px] w-50 h-10 tablet:h-14 text-purple-700 text-[12px] tablet:text-[18px] leading-base font-poppins shadow-[1px_3px_5px_rgba(0,0,0,0.25)]">
          Register
        </button>
      </div>
    </main>
  )
}

export default MainSection;