function BusinessCard({ title, des, image }) {
   return (
      <div>
         <img src={image} alt={title} />
         <div>
            <h4>{title}</h4>
            <div>{des}</div>
            <button className="btn outline">LEARN MORE</button>
         </div>
      </div>
   );
}

export default BusinessCard;