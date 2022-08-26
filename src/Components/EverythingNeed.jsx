import EverythingNeedLeftCard from "./EverythingNeedLeftCard";
import EverythingNeedRightCard from "./EverythingNeedRightCard";

function EverythingNeed() {
   return (
      <div className="need-comp">
         <div className="need-header">
            <h1>Everything you need to create stunning videos</h1>
            <img src="https://animoto.com/static/wavy-e1cf461e1a9e7fed09a8a00a53c93f7f.svg" alt="curve-line" width="130px" />
         </div>
         <div className="need-content">
            <EverythingNeedLeftCard
               title='Stock images and music at your fingertips'
               des='Save time and money tracking down stock media with our built-in library of millions of photos, video clips, and graphics from Getty Images. Set the mood with one of 3,000+ licensed songs.'
               video='https://d2of6bhnpl91ni.cloudfront.net/cms/12-2020_StockGraphic_Homepage_A3_ForAnimation (1)-50f8e6b637.mp4'
               buttonText='GET STARTED FREE'
            />
            <EverythingNeedRightCard
               title='Easy customization tools'
               des='Make each video your own with intuitive color, font, and design tools. Add your logo as a watermark to build brand awareness.'
               video='https://d2of6bhnpl91ni.cloudfront.net/cms/easily%20customize%20your%20videos-5cb98c4715.mp4'
               buttonText='GET STARTED FREE'
            />
            <EverythingNeedLeftCard
               title='Unlimited video creation'
               des='Create square, landscape, and vertical videos to share to social media and beyond. There are no creation limits on any Animoto plan.'
               video='https://d2of6bhnpl91ni.cloudfront.net/cms/create-unlimited-videos-37b27ee358.mp4'
               buttonText='GET STARTED FREE'
            />
            <EverythingNeedRightCard
               title='Take the stress out of video feedback'
               des='No more juggling messy email threads and contradictory comments. Invite anyone to add time-stamped comments to your video. Reply and implement feedback right from your video editing workspace.'
               video='https://d2of6bhnpl91ni.cloudfront.net/cms/2022-06_CommentingLP-Graphic1-8bad680eab.mp4'
               buttonText='LEARN MORE'
            />
            <div className='need-art-i'></div>
            <div className='need-art-ii'></div>
         </div>
      </div>
   );
}

export default EverythingNeed;