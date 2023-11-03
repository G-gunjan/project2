<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>  
<head/>
    
<body>
    <script type="text/javascript">
        var num1=prompt("please enter 1st number");
var num2=prompt("please enter 2nd number");
var op=prompt("please select among +,-,x,/");
switch(op)
{
    case "+":
        var res=parseFloat(num1)+(num2);
        console.log(`${num1}+${num2}=${res}`);
        break;
        case "-":
        var res=parseFloat(num1)-(num2);
        console.log(`${num1}-${num2}=${res}`);
        break;
        case "*":
            var res=parseFloat(num1)*(num2);
            console.log(`${num1}x${num2}=${res}`);
            break;
            case "/":
                var res=parseFloat(num1)/(num2);
                console.log(`${num1}/${num2}=${res}`);
                break;
                default:
                    console.log('invalid operation');
        

}

    </script>
    
</body>
</html>