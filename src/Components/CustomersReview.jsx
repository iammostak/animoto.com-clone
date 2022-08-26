import CustomersReviewCard from "./CustomersReviewCard";

const data = [
   {
      id: 1,
      title: 'MATT CAVALLARO',
      position: 'FOUNDER, NEST HOMEWARE',
      img: 'https://images.ctfassets.net/00i767ygo3tc/5BqRKnEuMFaOAav2D4vSSJ/f9c069faa5c0f8f8831f4f7f6463d351/TestimonialOneIllustration.png?w=320&h=299&q=80&fm=webp',
      des: '“Running our Animoto video on Facebook and Instagram not only increased awareness of the Nest brand, but we also made 4x our usual online sales.”'
   },
   {
      id: 2,
      title: 'REBECCA FANCHER',
      position: 'SR. DIRECTOR, AMERICAN HEART ASSOCIATION',
      img: 'https://images.ctfassets.net/00i767ygo3tc/1TuMlRQQJMVXTOy7ZjjuPl/ac0c443010035659113644460fb34f81/TestimonialTwoIllustration.png?w=320&h=299&q=80&fm=webp',
      des: '“Our Animoto video was a quick way for us to let our audience know about our event, and show them how simple it was to register or donate. Plus, we can easily adjust our video so they work on all platforms. A true time-saver.”'
   },
   {
      id: 3,
      title: 'MARY MANNIX',
      position: 'REAL ESTATE AGENT, BERKSHIRE HATHAWAY',
      img: 'https://images.ctfassets.net/00i767ygo3tc/bqjxtmuX7vs1uFe4uasV1/ef5338ce6588039752c6aff8fe89b843/TestimonialThreeIllustration.png?w=320&h=299&q=80&fm=webp',
      des: '“Animoto helps me to build a stronger brand in the competitive real estate marketplace, and their real estate templates make it easy for me to create listings videos and virtual tours.”'
   }
];

function CustomersReview() {
   return (
      <div className="review-comp">
         <div className="review-header">
            <h1>Hear from our customers</h1>
            <img src="https://animoto.com/static/wavy-e1cf461e1a9e7fed09a8a00a53c93f7f.svg" alt="curve-line" width="130px" />
         </div>
         <div className="review-content">
            {
               data.map(item => (
                  <CustomersReviewCard
                     key={item.id}
                     title={item.title}
                     img={item.img}
                     position={item.position}
                     des={item.des}
                  />
               ))
            }
         </div>
      </div>
   );
}

export default CustomersReview;