import React from 'react'
import Faq from "react-faq-component";
const data = {
 
    rows: [
      {
        title: "Day 1 - Barcelona - Zaragoza - Madrid",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
                ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
                In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
                Fusce sed commodo purus, at tempus turpis.`,
      },
      {
        title: "Day 2 - Zurich - Biel/Bienne - Neuchatel - Geneva",
        content:
          "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
      },
      {
        title: "Day 3 - Enchanting Engelberg",
        content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
              Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
              Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
              Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
      },
      {
        title: "Day 4 - Barcelona - Zaragoza - Madrid",
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
function Iternary() {
  return (
    <div className='container mx-auto pt-3'>
        <div className='flex flex-col gap-2 '>
        <h1 className='text-3xl text-[#17233e] font-semibold  font-serif capitalize  my-3 md:text-4xl '>What To Expect</h1>
        <p className='text-[#777] text-lg font-serif capitalize  leading-7'>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.Lorem ipsum, or lipsum as it is sometimes known
            , is dummy text used in laying out print, graphic or web designs.</p>
            <p className='text-[#777] text-lg font-serif capitalize  leading-7'>The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts 
                of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
       </div>
       <Faq data={data}  config={config} />
      
    </div>
  )
}

export default Iternary