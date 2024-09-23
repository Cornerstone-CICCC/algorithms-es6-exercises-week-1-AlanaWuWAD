/*
Create an object called facebookProfile. The object should have 3 properties:

your name
the number of friends you have, and
an array of messages you've posted (as strings)
The object should also have 4 methods:

postMessage(message) - adds a new message string to the array
deleteMessage(index) - removes the message corresponding to the index provided
addFriend() - increases the friend count by 1
removeFriend() - decreases the friend count by 1
*/

const facebookProfile = {
    name :"Alana",
    numOfFriends : 3,
    arrayMessage : ["Hi, nice to meet you!"],
    postMessage : function(message) {
        this.arrayMessage[this.arrayMessage.length] = message
        return this.arrayMessage
    },
    deleteMessage : function (index) {
        var arr = this.arrayMessage
        arr.splice(index,1)
        return arr
    
    },
    addFriends : function() {
       return ++ this.numOfFriends 
    },
    removeFriends : function() {
        return --this.numOfFriends 
    }

}

console.log(facebookProfile.postMessage("see you later"))
console.log(facebookProfile.postMessage("okok"))
console.log(facebookProfile.deleteMessage(1))

