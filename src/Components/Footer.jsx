import ListCard from "./ListCard";
import { GrFacebookOption } from 'react-icons/gr';
import { BsYoutube } from 'react-icons/bs';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';

const list = [
   {
      title: 'USES',
      data: ['Marketing video', 'Video ad', 'How-to video', 'Slideshow video', 'Social media', 'Promo video', 'Birthday video', 'Intro videos', 'Explainer video', 'Email marketing']
   },
   {
      title: 'ANIMOTO FOR',
      data: ['Business', 'Photography', 'Real Estate', 'Non-profit', 'Education', 'E-commerce', 'Fitness', 'HR / People Ops', 'Marketing Agency']
   },
   {
      title: 'FEATURES',
      data: ['Video commenting tool', 'Screen recorder', 'Photo video maker', 'Music library', 'Online video editor', 'Templates', 'Video trimming', 'Stock library', 'Voice over']
   },
   {
      title: 'COMPANY',
      data: ['Support', 'Blog', 'Careers', 'Press', 'Affiliates', 'Privacy policy', 'Terms of use', 'Animoto Tutorials']
   }
];

function Footer() {
   return (
      <div className="footer">
         <div className="footer-content">
            {
               list.map(item => <ListCard title={item.title} data={item.data} />)
            }
            <div>
               <h4>CONNECT</h4>
               <div>
                  <a href="https://www.facebook.com/Animoto" target="_blank">
                     <GrFacebookOption style={{ color: 'white', backgroundColor: '#3f51b5', padding: '9px', cursor: 'pointer', borderRadius: '50%' }} />
                  </a>
                  <a href="https://www.youtube.com/channel/UCeqtYy6WpYkZ3Q_EUnY0fVQ" target="_blank">
                     <BsYoutube style={{ color: 'white', backgroundColor: 'red', padding: '9px', cursor: 'pointer', borderRadius: '50%' }} />
                  </a>
                  <a href="https://twitter.com/Animoto" target="_blank">
                     <FaTwitter style={{ color: 'white', backgroundColor: '#1d9bf0', padding: '9px', cursor: 'pointer', borderRadius: '50%' }} />
                  </a>
                  <a href="https://www.instagram.com/animoto/" target="_blank">
                     <RiInstagramFill style={{ color: 'white', backgroundColor: '#E1306C', padding: '9px', cursor: 'pointer', borderRadius: '50%' }} />
                  </a>
                  <a href="https://www.linkedin.com/company/animoto/" target="_blank">
                     <FaLinkedinIn style={{ color: 'white', backgroundColor: '#0A66C2', padding: '9px', cursor: 'pointer', borderRadius: '50%' }} />
                  </a>
               </div>
               <div>
                  <a href="https://www.facebook.com/business/solutions-explorer/campaign_management/144864402752633/Animoto" target="_blank">
                     <img src="https://animoto.com/static/FacebookPartnerIcon-4f675b081bec613dbac01a85deceacb3.svg" alt="facebook business partner" className="partner-logo-fb" />
                  </a>
               </div>
               <div>
                  <a href="https://support.google.com/youtube/answer/6145904" target="_blank">
                     <img src="https://animoto.com/static/YoutubePartnerIcon-c1d64a90323f18e6780043bcfcd98978.svg" alt="youtube business partner" className="partner-logo-yt" />
                  </a>
               </div>
            </div>
         </div>
         <div className="footer-rights">
            <img src="https://animoto.com/static/Logo-769512d18812f2135069123e6840b976.svg" alt="logo" />
            <div>© 2022 Animoto Inc. All Rights Reserved.</div>
         </div>
      </div>
   );
}

export default Footer;