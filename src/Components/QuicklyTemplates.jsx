import { useState } from "react";
import QTCard from "./QTCard";

const arrA = [
   {
      id: 1,
      title: 'TELL A TRAVEL STORY',
      img: 'https://images.ctfassets.net/00i767ygo3tc/asset-sktwi7jfjxrnhft5/42bf42308d5b26a2fb1a15a89bba7c0c/Make-a-facebook-video-_2x-1b91f5bc33.jpg?w=525&h=295&q=50&fm=webp',
      video: 'https://d2of6bhnpl91ni.cloudfront.net/cms/Tell-a-travel-story-20-1eadfb60f7.mp4'
   },
   {
      id: 2,
      title: 'TRENDING TOPIC',
      img: 'https://images.ctfassets.net/00i767ygo3tc/2yEqvP358BvnUdigwAVlV2/2e7ebccf696d147107107522a1a71b09/Trend_Story.jpg?w=525&h=295&q=50&fm=webp',
      video: 'https://d2of6bhnpl91ni.cloudfront.net/cms/DIY-social-trend-video-for-instagram (1)-f632eaec15.mp4'
   },
   {
      id: 3,
      title: '#MONDAYMOTIVATION',
      img: 'https://images.ctfassets.net/00i767ygo3tc/1kDoozfRhRamTTcZsuzKMG/a078ab26d8aeed5c00701c7978d9e24a/make_your_own_monday_motivation_video.jpg?w=525&h=295&q=50&fm=webp',
      video: 'https://d2of6bhnpl91ni.cloudfront.net/cms/make-your-own-monday-motivation-video (1)-eaa5ae6586.mp4'
   }
];

const arrB = [
   {
      id: 1,
      title: 'REAL ESTATE LISTING',
      img: 'https://images.ctfassets.net/00i767ygo3tc/asset-sktwi7jfjxrnhft8/3cd037d0f2be2f512214e75dee69eddb/Real_Estate_Listing.jpg?w=525&h=295&q=50&fm=webp',
      video: 'https://d2of6bhnpl91ni.cloudfront.net/cms/real-estate-video-listing-template (1)-fa175cf52e.mp4'
   },
   {
      id: 2,
      title: 'DIGITAL ALBUM',
      img: 'https://images.ctfassets.net/00i767ygo3tc/asset-sktwi7jfjxrnhft9/fa0945721778cd756f0293c59ba36620/Digital_Album.jpg?w=525&h=295&q=50&fm=webp',
      video: 'https://d2of6bhnpl91ni.cloudfront.net/cms/photography-digital-album-video-template (1)-8d88389960.mp4'
   },
   {
      id: 3,
      title: 'ABOUT US',
      img: 'https://images.ctfassets.net/00i767ygo3tc/asset-sktwi7jfjxrnhfta/3f9e77def9ea8ddec5b1bfdf25e3f1e7/About_Us.jpg?w=525&h=295&q=50&fm=webp',
      video: 'https://d2of6bhnpl91ni.cloudfront.net/cms/about-us-video-template-social-media-website (2)-bed842b491.mp4'
   }
];

const arrC = [
   {
      id: 1,
      title: 'NEW LAUNCH PROMO',
      img: 'https://images.ctfassets.net/00i767ygo3tc/asset-sktwi7jfjxrnhftb/2db5197bda4b725b384182bd0a10587a/New_Launch_Promo.jpg?w=525&h=295&q=50&fm=webp',
      video: 'https://d2of6bhnpl91ni.cloudfront.net/cms/new-product-video-promo-template (1)-6edf638941.mp4'
   },
   {
      id: 2,
      title: 'COLLECTION PORTFOLIO',
      img: 'https://images.ctfassets.net/00i767ygo3tc/asset-sktwi7jfjxrnhftc/90b05ace043ddbc3f9a1c30b88e1a4bc/Collection_Portfolio.jpg?w=525&h=295&q=50&fm=webp',
      video: 'https://d2of6bhnpl91ni.cloudfront.net/cms/promo-video-product-portfolio-template (1)-5388fc4c5e.mp4'
   },
   {
      id: 3,
      title: 'BITE-SIZED PRODUCT INTRO',
      img: 'https://images.ctfassets.net/00i767ygo3tc/asset-sktwi7jfjxrnhftd/9a94be4c48398ceb3c23b40469d82fe5/Bite_Sized_Product_Intro.jpg?w=525&h=295&q=50&fm=webp',
      video: 'https://d2of6bhnpl91ni.cloudfront.net/cms/facebook-video-ad-produc-promo-template (1)-b97292146d.mp4'
   }
];

const arrD = [
   {
      id: 1,
      title: 'ANNIVERSARY CELEBRATION',
      img: 'https://images.ctfassets.net/00i767ygo3tc/5SyNIS6eCZZUkN8KtRQQKU/abe514429db5299db815f5456ea46e2b/AnniversaryCelebration-min.jpg?w=525&h=295&q=50&fm=webp',
      video: 'https://d2of6bhnpl91ni.cloudfront.net/cms/Anniversary video template-920b8225f2.mp4'
   },
   {
      id: 2,
      title: 'BIRTHDAY CARD',
      img: 'https://images.ctfassets.net/00i767ygo3tc/asset-sktwi7jfjxrnhfte/e500983434b4ae1351d513c3a6331dd7/BirthdayCard.jpg?w=525&h=295&q=50&fm=webp',
      video: 'https://d2of6bhnpl91ni.cloudfront.net/cms/online-birthday-card-video-template (1)-0453118dd4.mp4'
   },
   {
      id: 3,
      title: 'ENGAGEMENT SLIDESHOW',
      img: 'https://images.ctfassets.net/00i767ygo3tc/asset-sktwi7jfjxrnhftf/49ab80423ec9059cba97f354043f4026/Engagement_Slideshow.jpg?w=525&h=295&q=50&fm=webp',
      video: 'https://d2of6bhnpl91ni.cloudfront.net/cms/engagement-slideshow-video-template (2)-97d0dd6ae3.mp4'
   }
];

const arrE = [
   {
      id: 1,
      title: 'VIDEO RESUME',
      img: 'https://images.ctfassets.net/00i767ygo3tc/asset-sktwi7jfjxrnhfth/07f6462c449019e5800f103859423153/VideoResume.jpg?w=525&h=295&q=50&fm=webp',
      video: 'https://d2of6bhnpl91ni.cloudfront.net/cms/video-resume-template (1)-be7d1fa892.mp4'
   },
   {
      id: 2,
      title: 'SELF-INTRODUCTION',
      img: 'https://images.ctfassets.net/00i767ygo3tc/asset-sktwi7jfjxrnhfti/5e88b8d9d908427f1b450d5b539be1db/self_introduction.jpg?w=525&h=295&q=50&fm=webp',
      video: 'https://d2of6bhnpl91ni.cloudfront.net/cms/self-introduction-video-maker-template-21-bbfb0b35ee.mp4'
   },
   {
      id: 3,
      title: 'EDUCATIONAL PRESENTATION',
      img: 'https://images.ctfassets.net/00i767ygo3tc/737fg1qyv2EqV06YLUSfio/a9b5a5a639a937d63684fbd3904c8894/EducationalPresentation-min.jpg?w=525&h=295&q=50&fm=webp',
      video: 'https://d2of6bhnpl91ni.cloudfront.net/cms/school presentation video maker-e90dc0b548.mp4'
   }
];

const style = { borderBottom: '2px solid' }

function QuicklyTemplates() {

   const [type, setType] = useState(3);

   let data;
   type === 1 ? data = arrA : type === 2 ? data = arrB : type === 3 ? data = arrC : type === 4 ? data = arrD : data = arrE;

   return (
      <div className="qt-comp">
         <div className="qt-header">
            <h4>IMAGINE IT. CREATE IT.</h4>
            <h1>Create quickly with video templates</h1>
            <img src="https://animoto.com/static/wavy-e1cf461e1a9e7fed09a8a00a53c93f7f.svg" alt="curve-line" width="130px" />
         </div>
         <div className="qt-navigator">
            <div onClick={() => setType(1)} style={type === 1 ? style : undefined}>SOCIAL TRENDS</div>
            <div onClick={() => setType(2)} style={type === 2 ? style : undefined}>BUSINESS</div>
            <div onClick={() => setType(3)} style={type === 3 ? style : undefined}>PROMO VIDEOS</div>
            <div onClick={() => setType(4)} style={type === 4 ? style : undefined}>CELEBRATIONS</div>
            <div onClick={() => setType(5)} style={type === 5 ? style : undefined}>PERSONAL</div>
         </div>
         <div className="qt-content">
            {
               data.map(item => (
                  <QTCard
                     key={item.id}
                     title={item.title}
                     img={item.img}
                     video={item.video}
                  />
               ))
            }
         </div>
      </div>
   );
}

export default QuicklyTemplates;