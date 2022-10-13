export default (posts=[], action)=>{
    switch (action.type) {
        case "FETCH":
            return action.payload
            
            case "UPDATE":
                return  posts.map(element=>element._id===action.payload._id?action.payload:posts)
                // $$$ the logic behind using this approach is to ensure that both of the ids match and if not
                // $$$ the returned value is the old post without any of the edits

            case "CREATE":
                return [...posts, action.payload]
    
        default:
            return posts
    }


}