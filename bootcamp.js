//This is a class which is a feature of object oriented programming

'use strict'
class Bootcamper{
	constructor(fullname,username,email,password,BFA,score)
    {
		this.fullname = fullname;
		this.username = username;
		this.email = email;
		this.password = password;
		this.BFA = BFA;
		this.score = score;
        
	}
	getDetails(fullname,username,email,password,BFA,score)
    {
    	console.log("Your Fullname is:"+fullname)
        console.log("Your Username is :" + username);
    	console.log("Your Password is :" + password);
    	console.log("Your Email is :" + email);
    	console.log("Your BFA is :" + BFA);
        console.log("Your Score is :" + score);
    	console.log("--------------------------------");

    }
    getScore(fullname,BFA,score)
    {
        console.log("Your Fullname is:"+fullname)
        console.log("Your Username is :" + username);
        console.log("Your Password is :" + password);
        console.log("Your Email is :" + email);
        console.log("Your BFA is :" + BFA);
        console.log("Your Score is :" + score);
        console.log("--------------------------------");

    }
    askQuestion(fullname,BFA,question)
    {
        console.log("Your Fullname is:"+fullname)
        console.log("Your BFA is :" + BFA);
        console.log("Your Score is :" + question);
        console.log("--------------------------------");

    }

    haveMindset(fullname,BFA,mindset)
    {
        console.log("Your Fullname is:"+fullname)
        console.log("Your BFA is :" + BFA);
        console.log("Your Score is :" + mindset);
        console.log("--------------------------------");

    }
    
    
}
/*This is Inheritance which is a feature 
of object oriented programming here Member class is inheriting from 
the Bootcamper class*/
class Member extends Bootcamper{
	
	constructor(fullname,username,email,password,BFA,score,question,mindset)
{		
		super();

		

    }
    //This is called method overriding
    //overriding the base class method
    getDetails(fullname,username,email,password,BFA)
    {
    	console.log("Your Details is as Follows")
    	console.log("Your Fullname is:"+fullname)
        console.log("Your Username is :" +username);
    	console.log("Your Password is :" + password);
    	console.log("Your Email is :" + email);
    	console.log("Your BFA is :" + BFA);
      	console.log("--------------------------------");
    }
     getScore(fullname,BFA,score)
    {
        console.log("Your Fullname is:"+fullname);
        console.log("Your BFA is :" + BFA);
        console.log("Your Score is :" + score);
        console.log("--------------------------------");

    }
    askQuestion(fullname,BFA,question)
    {
        console.log("Your Fullname is:"+fullname);
        console.log("Your BFA is :" + BFA);
        console.log("Your Question is :" + question);
        console.log("--------------------------------");

    }

    haveMindset(fullname,BFA,mindset)
    {
        console.log("Your Fullname is:"+fullname);
        console.log("Your BFA is :" + BFA);
        console.log("Your Mindset is :" + mindset);
        console.log("--------------------------------");

    }
 
}

/*Creating an instance of a class is an object bootcamper
as the Member class will inherit from the Bootcamper class 
which is done with super()*/
/*let member1 = new Member();
member1.getDetails("Salami Adedotun","Dotman007","123456","Dotman007@outlook.com","Azeez");
member1.getScore("Salami Adedotun","Azeez",90);
member1.askQuestion("Salami Adedotun","Azeez","Please how do i go about hosting my webpage on github");
member1.haveMindset("Salami Adedotun","Azeez","Growth Mindset");*/