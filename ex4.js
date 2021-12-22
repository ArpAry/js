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


        ////////////////////

        var isRunning=true;
        var startTime,currentTime,elapsedTime;
        document.getElementById("start_stop").onclick=function()
        {
            if(isRunning)
            {
                isRunning=true;
                startTime=new Date().getTime();
                window.setInterval(function(){
                    currentTime=new Date().getTime();
                    elapsedTime=currentTime-startTime;
                    document.getElementById("stopwatch").innerHTML=elapsedTime;
                    console.log(elapsedTime);

                },100)
                
            }
            else{
                isRunning=false;
            
            }
        }
