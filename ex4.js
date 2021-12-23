var shipments = 
        {
            'standard': {
                'leadTime': 7,
                'fee': 2
            },
            'express': {
                'leadTime': 3,
                'fee': 4.5
            }
        };

        document.getElementById("shipments").onchange=function()
        {
            // var selectedField=document.getElementById("shipments");
            // var selectOption=selectedField.options.selectedIndex;
            // var selectedValue=selectedField.options[selectOption].innerHTML;
            //console.log(selectedValue);

         var selectedValue=document.getElementById("shipments").value;
        // console.log(selectedValue);
        var leadTime=shipments[selectedValue].leadTime;
        console.log(leadTime);

        var fee=shipments[selectedValue].fee;
       
        //  if(selectedValue==)
        var orderDate=new Date();
        var deliveryDate=new Date(orderDate.getTime()+(86400000*leadTime));


            document.getElementById("order_date").innerHTML=orderDate.toISOString().slice(0,10);
            document.getElementById("delivery_date").innerHTML=deliveryDate.toISOString().slice(0,10);
            document.getElementById("delivery_fee").innerHTML=fee.toFixed(2);

        }
        

        ///////////////////////////////
        var phones = 
        {
            'iphone_se_red': {
                'name': 'iPhone SE 64GB Red',
                'price': '450',
                'currency': 'US$',
                'imageUrl': "https://www.mhr.pt/232729-large_default/apple-iphone-se-64gb-red.jpg"
            },
            'iphone_11_black': {
                'name': 'iPhone 11 128GB Black',
                'price': '869',
                'currency': 'EUR',
                'imageUrl': "https://assets.swappie.com/iphon11musta1-300x300.jpg"
            },
            'iphone_8_plus_silver': {
                'name': 'iPhone 8 Plus 64GB Silver',
                'price': '519',
                'currency': 'US$',
                'imageUrl': "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdrimz2laif.com%2Fproduct%2Fiphone-8-plus-64gb-silver-black-gold-and-space-grey%2F&psig=AOvVaw3ygsELhQEWn_riR6K8_zv8&ust=1640185179735000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLCVvY2U9fQCFQAAAAAdAAAAABAJ"
            }
        };


        var radioItems=document.getElementsByName("product");

        for(var a=0;a<radioItems.length;a++)
        {
            radioItems[a].onchange=function()
            {
                for(var b=0;b<radioItems.length;b++)
                {
                    if(radioItems[b].checked)
                    {
                        var phoneName=radioItems[b].value;
                        console.log(phoneName);
                        document.getElementById("phone_image").src=phones[phoneName].imageUrl;
                        document.getElementById("phone_name").innerHTML=phones[phoneName].name;

                        console.log(document.getElementById("phone_price").innerHTML=phones[phoneName].currency+parseInt(phones[phoneName].price).toFixed(2).toString());

                    }
                }
            }

        }

        function leading_zero(n1){
            if(n1<10)
            {
                return "0"+n1.toString();
            }
            else
            {
                return n1.toString();
            }

        }

        ////////////////////

        var isRunning=false;
        var startTime,currentTime,elapsedTime=0,clockInterval,hours,minute,seconds,remainder,formatted;
        document.getElementById("start_stop").onclick=function()
        {
            if(!isRunning)
            {
                isRunning=true;
                if(elapsedTime==0) 
                {
                    startTime= new Date().getTime();
                }
                else{

                    startTime=new Date().getTime()-elapsedTime;
                    console.log(elapsedTime);
                }
            

                    clockInterval= window.setInterval(function(){
                    currentTime=new Date().getTime();
                    elapsedTime=currentTime-startTime;
                 
                    //console.log(startTime);


                    hours=Math.floor(elapsedTime/3600000);
                    remainder=elapsedTime-(hours*3600000);

                    minute=Math.floor(remainder/60000);
                    remainder-=minute*60000;

                    seconds=Math.floor(remainder/1000);
                    remainder-=seconds*1000;

                    formatted=leading_zero(hours)+":"+leading_zero(minute)+":"+leading_zero(seconds)+":"+leading_zero(remainder);

                    document.getElementById("stopwatch").innerHTML=formatted;

                },10)
                
            }
            else{
                isRunning=false;
                window.clearInterval(clockInterval);
            
            }
        }

        document.getElementById("reset").onclick=function(){
            startTime=new Date().getTime();
            if(!isRunning)
            {
                elapsedTime=0;
                document.getElementById("stopwatch").innerHTML=elapsedTime;

            }
        }
 