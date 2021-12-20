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
            var selectedField=document.getElementById("shipments");
            var selectOption=selectedField.options.selectedIndex;
            var selectedValue=selectedField.options[selectOption].innerHTML;
            console.log(selectedValue);
            var date=new Date();

            document.getElementById("order_date").innerHTML.innerHTML=selectedValue
            document.getElementById("delivery_date").innerHTML
            document.getElementById("delivery_fee").innerHTML

        }
        