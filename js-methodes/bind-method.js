let person = {
    firstName: 'Ajay',
    lastName: 'Chauhan',
    fullName: function(){
       return 'My full name is ' + this.firstName + ' ' + this.lastName
    }
  };
  
console.log(person.fullName());
  
  let member = {
    firstName: 'Ram',
    lastName: 'Setu'
  };
  
  let fullname = person.fullName.bind(member)();
  console.log(fullname);