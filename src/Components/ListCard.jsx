function ListCard({ title, data }) {
   return (
      <div>
         <h4>{title}</h4>
         {
            data.map(item => <p>{item}</p>)
         }
      </div>
   );
}

export default ListCard;