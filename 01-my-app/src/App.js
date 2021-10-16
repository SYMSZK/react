import React from "react";
import Hello from "./components/hello/Hello";
import Test from "./components/test/Test";
import Jsx from "./components/jsx/Jsx";
import InlineStyle from "./components/style/InlineStyle";
import InternalStyle from "./components/style/InternalStyle";
import ExternalStyle from "./components/style/ExternalStyle";
import Clock1 from "./components/clock1/Clock1";
import Props from "./components/props/Props";
import Clock2 from "./components/clock2/Clock2";
function App() {
  return (
    <div>
      {/* Merhaba Dünya(App)
      <Hello />
      <Test />
      <Jsx />
      <InlineStyle />
      <InternalStyle />
     <ExternalStyle />

     <Clock1 />
     
      <Props ad="Ziya" soyad="Sarı" />
      <Props ad="Ali" soyad="Kara" />
      <Props ad="Ayşe" soyad="Pembe" />
      <Props ad="Hakan" soyad="Mavi" />
             */}
      <Clock2 yaziRengi="yellow" zeminRengi="navy" />
      <Clock2 yaziRengi="white" zeminRengi="black" />
      <Clock2 yaziRengi="yellow" zeminRengi="red" />
    </div>
  );
}

export default App;
