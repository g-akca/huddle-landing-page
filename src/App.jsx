import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div 
      className="
        text-base tablet:text-[18px] leading-base text-white bg-purple-700 bg-[url('/images/bg-mobile.svg')] 
        desktop:bg-[url('/images/bg-desktop.svg')] bg-no-repeat bg-size-[100%_auto] bg-top desktop:bg-cover
        flex flex-col gap-13 tablet:gap-10 desktop:gap-6 min-h-screen px-9 tablet:px-20 desktop:px-21 py-10 desktop:py-16
      "
    >
      <div className="flex flex-col gap-16 desktop:gap-26">
        <Header />
        <MainSection />
      </div>

      <Footer />
    </div>
  )
}

export default App
