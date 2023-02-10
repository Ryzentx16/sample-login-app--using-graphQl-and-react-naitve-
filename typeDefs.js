const typeDefs = `
    #graphql
    
    type Query { 
        greeting:String
        students:[Student]!
        studentById(id:ID!):Student! 
     }
     
     type Student {
        id: ID!
        firstName: String
        lastName: String
        password: String
        collegeId: String
     }
`;

export default typeDefs;
