/* calender with nested loops */

for (month=1;month<=12;month++)
    {
      
        var date=31
if(month==2)
    {
        date=28
    }
    else if(month==3||month==5 ||month==7|| month==9||month==11)
        {
            date=30
        }

        switch(month)
        {
            case 1 :console.log("january")
            break;

            case 2 :console.log("febraury")
            break;

            case 3 :console.log("march")
            break;

            case 4 :console.log("april")
            break;
            
            case 5 :console.log("may")
            break;
        
            

            case 6:console.log("june")
            break;


            case 7:console.log("july")
            break;

            case 8 :console.log("august")
            break;

            case 9:console.log("septmeber")
            break;

            case 10 :console.log("october")
            break;

            case 11 :console.log("novamber")
           
            break;

            case 12 :console.log("december")
                     
            break;
        }
        
        for(day=1;day<=date;day++){
            console.log(day,"-",month);
            
        }
        console.log("<-------month end--------->")

    }