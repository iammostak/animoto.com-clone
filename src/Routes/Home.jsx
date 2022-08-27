import Business from "../Components/Business";
import CustomersReview from "../Components/CustomersReview";
import EverythingNeed from "../Components/EverythingNeed";
import Explore from "../Components/Explore";
import FirstVideo from "../Components/FirstVideo";
import HelpCenter from "../Components/HelpCenter";
import Introduction from "../Components/Introduction";
import PartnerOf from "../Components/PartnerOf";
import QuicklyTemplates from "../Components/QuicklyTemplates";

function Home() {

   document.title = 'Free Video Maker | Create &amp; Edit Your Videos Easily - Animoto';


   return (
      <div>
         <Introduction />
         <Business />
         <QuicklyTemplates />
         <EverythingNeed />
         <CustomersReview />
         <PartnerOf />
         <FirstVideo />
         <HelpCenter />
         <Explore />
      </div>
   );
}

export default Home;