import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="text-base leading-base min-h-screen bg-purple-700 bg-[url('/images/bg-mobile.svg')] bg-no-repeat bg-size-[100%_auto] bg-top flex flex-col gap-13">
      <div className="px-9 pt-10 flex flex-col gap-16">
        <Header />
        <MainSection />
      </div>

      <Footer />
    </div>
  )
}

export default App
