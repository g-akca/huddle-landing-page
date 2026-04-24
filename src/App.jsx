import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div 
      className="
        text-base tablet:text-[18px] leading-base text-white min-h-screen px-9 tablet:px-20 py-10 
        bg-purple-700 bg-[url('/images/bg-mobile.svg')] bg-no-repeat bg-size-[100%_auto] bg-top 
        flex flex-col gap-13 tablet:gap-10
      "
    >
      <div className="flex flex-col gap-16">
        <Header />
        <MainSection />
      </div>

      <Footer />
    </div>
  )
}

export default App
