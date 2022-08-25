import BusinessCard from "./BusinessCard";

const data = [
   {
      id: 1,
      title: 'SMALL BUSINESS',
      des: 'Capture attention and engage your audience with professional videos.',
      img: 'https://images.ctfassets.net/00i767ygo3tc/58RO6ExjLkW8a6SjV5lx18/18e776a3e0a9ef95bd8064d3c9a08db1/2022-04_SMB-Modules-from-HomePage_LP_Small-Business-removebg-preview.png?w=612&h=572&q=80&fm=webp'
   },
   {
      id: 2,
      title: 'HR AND PEOPLE OPS',
      des: 'Boost engagement and company culture in hybrid workspaces.',
      img: 'https://images.ctfassets.net/00i767ygo3tc/3IS1ef7FvNE9FXQL0SR714/024a3b2eeefe6a41314abbdea86af677/2022-04_SMB-Modules-from-HomePage_LP_HR-People-Ops-removebg-preview.png?w=612&h=572&q=80&fm=webp'
   },
   {
      id: 3,
      title: 'MARKETING AGENCIES',
      des: 'Wow your clients with videos that showcase and promote their brand.',
      img: 'https://images.ctfassets.net/00i767ygo3tc/76Ujd3ZGigsQm00DFwjJXp/2c922d8301472338849a1df2e483d630/2022-04_SMB-Modules-from-HomePage_LP_Marketing-Agencies-removebg-preview.png?w=612&h=572&q=80&fm=webp'
   }
]

function Business() {
   return (
      <div className="business-comp">
         <div className="business-header">
            <h1>Put video to work for your business</h1>
            <img src="https://animoto.com/static/wavy-e1cf461e1a9e7fed09a8a00a53c93f7f.svg" alt="curve-line" width="130px" />
         </div>
         <div className="business-content">
            {
               data.map(item => (
                  <BusinessCard
                     key={item.id}
                     title={item.title}
                     des={item.des}
                     image={item.img}
                  />
               ))
            }
         </div>
      </div>
   );
}

export default Business;