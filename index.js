class Landing{
    // property
    database={
        "hassan":{username:'hassan',password:'achu12'},
        "hussain":{username:'husain',password:'uchu13'},
        "thameem":{username:'thameem',password:'thamim14'}
    }

    saveData(){
     if(this.database){
        localStorage.setItem("database",JSON.stringify(this.database))
     }
    }

    getData(){
        const data= JSON.parse(localStorage.getItem("database"))
        console.log(data)
    }

    // register
    register(){
        this.getData

        email=rgemail.value
        pswd=rgpswd.value

        console.log(email);
        console.log(pswd);

        if(email==""||pswd==""){
            alert('please fill the form completely')
        }
        else{
            if(email  in this.database){
                

            }
        }
    }

    
}

const obj =new Landing;

obj.saveData()

obj.getData()