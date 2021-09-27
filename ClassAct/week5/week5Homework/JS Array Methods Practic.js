//JS Array Methods Practice//
//Using the placeholder User data at https://jsonplaceholder.typicode.com/users :// 

create and print a list of phone numbers//--


const phone = data.forEach(user => console.log(user.phone));

console.log(phone);



//--------
create and print a list of website and email pairs (pair them in a string, array, or object)//--




//Using the placeholder To-Do data at https://jsonplaceholder.typicode.com/todos ://

create a list of user 9's to-dos//--

const user9tasks = data.filter(

    task => task.userID === 9


//-------------
Then find the number of user 9's incomplete task//--

const incompleteTasks = data.filter(tasks =>  tasks.completed < 1
    );
 console.log(incompleteTasks);


//Using the placeholder Post data at https://jsonplaceholder.typicode.com/post :

create a list of user 5's posts
then, create a list of title and body pairs

const user5tasks = data.filter()


//-------
const chitchat = [];

const  jargonPhrase = data.forEach(user =>
chitchat.push(`${user.company.catchPhrase}, ${user.company.bs}`)
);

console.log(chitchat);



