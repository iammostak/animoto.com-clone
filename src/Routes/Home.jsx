import Business from "../Components/Business";
import EverythingNeed from "../Components/EverythingNeed";
import Introduction from "../Components/Introduction";
import QuicklyTemplates from "../Components/QuicklyTemplates";

function Home() {
   return (
      <div>
         <Introduction />
         <Business />
         <QuicklyTemplates />
         <EverythingNeed />
      </div>
   );
}

export default Home;