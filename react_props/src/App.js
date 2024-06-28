import Card from "./components/Card";

function App() {
  return (
    <>
      <h2 className="text-white text-center text-4xl mt-20">React Props</h2>
      <div className='flex justify-center mt-8'>
        <Card cardName="Progressive Web App Development" cardPara="Reach anyone with native like install ability and capabilities with our progressive web app development services. Our single codebase can create a seamless web app no matter where you are and which device you have." />
        <Card cardName="Android App Development" cardPara="Tech is about efficiency, innovation, and developing premium Android apps that work seamlessly on every device. With the help of Google SDKs and android development tools (such as Dagger 2, Gradle, and Java), our experts can make anything possible." />
        <Card cardName="Software Quality Testing" cardPara="Do you think the first rocket by NASA was perfect enough to shoot into space? Our experts love uncovering opportunities to improve the mobile app and add to the customer experience using a series of quality software tests and metrics." />
      </div>
    </>

  );
}

export default App;
