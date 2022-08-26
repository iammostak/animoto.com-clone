function CustomersReviewCard({ img, title, position, des }) {
   return (
      <div>
         <img src={img} alt={title} />
         <div>
            <h4>{title}</h4>
            <div>{position}</div>
            <div>{des}</div>
         </div>
      </div>
   );
}

export default CustomersReviewCard;