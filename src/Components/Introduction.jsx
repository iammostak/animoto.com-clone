function Introduction() {
   return (
      <div className="intro-comp">
         <div className="intro-art-i"></div>
         <div className="intro-art-ii"></div>
         <div className="intro-art-iii"></div>
         <div className="intro-content">
            <div>
               DO-IT-YOURSELF
               <img src="https://animoto.com/static/wavy-e1cf461e1a9e7fed09a8a00a53c93f7f.svg" alt="curve-line" width="130px" />
            </div>
            <div>
               <div>
                  <h1>Easily make your own videos</h1>
                  <div>
                     Join millions of people creating and sharing videos with our easy drag and drop video maker. No experience necessary.
                  </div>
                  <button className="btn">GET STARTED FREE</button>
               </div>
               <div>
                  <div>
                     <img src="https://animoto.com/static/desktop-image-bg-8ea06e38a522392f18df00037c063f3b.svg" alt="background-img" />
                  </div>
                  <div>
                     <video
                        src="https://d2of6bhnpl91ni.cloudfront.net/cms/03_New%20Aspirational%20V2_YT_Stream-b0e722c3fc.mp4"
                        controls
                        autoPlay
                        muted
                        loop
                     ></video>
                  </div>
               </div>
            </div>
         </div>
         <div>
            <img src="https://animoto.com/static/desktop-wiggle-63f5acc89165c256b6b908672b369bd9.svg" alt="curve-svg" height="70px" />
         </div>
      </div>
   );
}

export default Introduction;