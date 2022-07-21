import axios from "axios"; 

const getUsers = (userId) => {
    return new Promise (async (resolve, reject) => {
       const {data} = await axios("https://jsonplaceholder.typicode.com/users/" + userId);
       
       resolve(data);
    });
};

const getPost = (userId) => {
    return new Promise (async (resolve, reject) => {
       const {data} = await axios("https://jsonplaceholder.typicode.com/posts/" + userId);
       
       resolve(data);
    });
};


async function getData(userId) {

try{
const users = await getUsers(userId);
const posts = await getPost(userId);


users.posts = posts; 
return users;


} catch(e){
    console.log(e);
}

};

export default getData;
