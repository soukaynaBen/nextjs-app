
exports.handler= async (event,context)=>{
        const guides=[{ title:'Mario kart shortscuts you never know existed',author:'luigi'},
        { title:'Ultimate short fighter guide',author:'chun-li'}
        ];
       console.log("context:"+context);
    if(context.clientContext.user){
        return {
            statusCode:401,
            body:JSON.stringify({
                msg:'you are unauthorized to access'
            })
        }
      }

    return {
        statusCode:200,
        body:JSON.stringify(guides)
    }

}
