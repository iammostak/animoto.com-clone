function ListCard({ title, data }) {
   return (
      <div>
         <h4>{title}</h4>
         {data.map((item) => (
            <p key={item}>{item}</p>
         ))}
      </div>
   );
}

export default ListCard;
