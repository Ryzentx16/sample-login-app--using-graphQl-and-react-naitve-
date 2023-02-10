import data from "./data.js";

const students = data.students;
const colleges = data.colleges;

const resolvers = {
  Mutation: {
    createStudent: (root, args, context, info) => {
      try {
        if (students.find((x) => x.firstName == args.firstName)) {
          console.log("student already exists!");
          return "student already exists!";
        } else {
          const latestId = students[students.length-1] == undefined ? 0 : students[students.length-1].id;
          const student = {
            id: latestId + 1,
            collegeId: args.collegeId,
            firstName: args.firstName,
            lastName: args.lastName,
            password: "1234",
          };

          students.push(student);
          console.log(`a student has been added, data: ${JSON.stringify(student)}`);
          return `a student has been added, data: ${JSON.stringify(student)}`;
        }
      } catch (er) {
        console.log(`there has been an error, more details: ${er}`);
        return `there has been an error, more details: ${er}`;
      }
    },
  },

  Query: {
    sayHello: (root, args, context, info) => {
      return `Hi ${args.name} GraphQL server says Hello to you!!`;
    },

    //resolver function for greeting
    greeting: () => {
      return "hello from TutorialsPoint !!!";
    },

    //resolver function for students returns list
    students: (root, args, context, info) => {
      console.log("Retruning Students......");
      return students;
    },

    //resolver function for studentbyId
    studentById: (root, args, context, info) => {
      const r = students.find((x) => x.id == args.id);

      // console.log(r);
      //args will contain parameter passed in query
      return r;
    },
  },

  //for each single student object returned,resolver is invoked
  Student: {
    fullName: (root, args, context, info) => {
      return root.firstName + ":" + root.lastName;
    },

    college: (root) => {
      return colleges.find((x) => x.id == root.collegeId);
    },
  },
};

export default resolvers;
