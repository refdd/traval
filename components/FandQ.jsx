import React from "react";
import Faq from "react-faq-component";
import HeaderSection from "./helper/HeaderSection";

const data = {
 
  rows: [
    {
      title: "Lorem ipsum dolor sit amet,",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
    },
    {
      title: "Nunc maximus, magna at ultricies elementum",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
    },
    {
      title: "Curabitur laoreet, mauris vel blandit fringilla",
      content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
    },
    {
      title: "What is the package version",
      content: <p>current version is 1.2.1</p>,
    },

  ],
  styles : {
    // bgColor: 'white',
    rowTitleColor: "#17233e",
    titleTextSize: '48px',
    // rowContentColor: 'grey',
    // arrowColor: "red",
  }
};



const config = {
  animate: true,
  // arrowIcon: "V",
  tabFocus: true
};
function FandQ() {
  return (
    <div className="h-auto " >
      <HeaderSection
      titel="FAQ"
      partOne="Frequently Asked "
      partTwo="Questions"
      decs="Below are some of the frequently asked questions and their answers, hopefully, you will find what questions you are looking for."
    />
      <div className="container mx-auto px-6 py-6">
        <Faq data={data}  config={config} />
      </div>
    </div>
  );
}

export default FandQ;
