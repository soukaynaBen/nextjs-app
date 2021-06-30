exports.handler=async ()=>{
    console.log("function ran");
   const data={name:"mario",age:32,job:"plomber"}
   return {
       statusCode:200,
       body:JSON.stringify(data)
   }
}