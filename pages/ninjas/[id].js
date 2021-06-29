// export  const getStaticPaths=async ()=> {

//     const res= await fetch('https://jsonplaceholder.typicode.com/users');
//     const data= await res.json();

//      const paths=data.map(ninja=>{
//            return{params:{id:ninja.id.toString()}  }
//      })

//     return {
//         paths,fallback:true
//     }
// }
// export  const getStaticProps=async (context)=> {

//     const id=context.params.id;
//     const res= await fetch('https://jsonplaceholder.typicode.com/users/'+id);
//     const data= await res.json();
            
//     return {
//         props:{ninja:data}
//     }
// }

// const Ninja = ({ninja}) => {
//     return ( 
//     <div>
//         <h1> Ninja </h1>
//          <p>{ninja.name}</p>
//          <p>{ninja.email}</p>
//          <p>{ninja.website}</p>
//          <p>{ninja.address.city}</p>
//     </div> );
// }
 
// export default Ninja;