import React, {useContext} from "react"; //Buraya use context import ettik
import {ThemeContext} from "../App"; // Buraya ThemeContext import ettik



function Content() {

    const theme = useContext(ThemeContext);
    console.log(theme);

  return (
    <div className="content" style={ theme }>
      <div className="part_up">
        <p>
          <strong>
            Context, verileri her düzeyde manuel olarak aktarmaya gerek kalmadan
            blesen agacindan veri gecirmenin bir yolunu saglar
          </strong>
        </p>

        <p>
          Context, gecerli kimligi dogrulanmis kullanici, tema veya tercih
          edilen dil gibi bir React bilesenleri agaci icin "global" olarak kabul
          edilebilecek verileri paylasmak uzere tasarlanmistir
        </p>

        <p>
          Tipik bir React uygulamasinda, veriler props araciigiyla yukaridan
          asagiya (ebeveynden cocuga) aktarilir, ancak bu, bir uygulamadaki
          bircok bilesenin gerektirdigi belirli türdeki sahne türleri (orn. Dil
          tercihi, UI temasi) icin külfetli olabilir. Context, agacin her
          seviyesinden acikca bir prop iletmek zorunda kalmadan bilesenler
          arasinda bu gibi degerleri paylasmanin bir yolunu saglar
        </p>
      </div>
        <div className="part_down">
            <p>
                <strong>API</strong>
            </p>

            <pre>
                const MyContext = React.createContext(defaultValue); {"\n"} {"\n"}
                &lt;Mycontext.Provider value="{/*some value*/}
                "&gt;{"{children}"}&lt;/MyContext.provider&gt; {"\n"} {"\n"}
                const value = useContext(MyContext);
            </pre>
            <code></code>
        </div>
    </div>
  
  );
}

export default Content;
