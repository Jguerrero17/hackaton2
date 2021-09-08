//Hackaton 2

//Ejercicio #0
//Asignar a objetos
//Tienes una variedad de user objectos, Cada uno tiene name, surname y id.
//Escriba el código para crear otra matriz a partir de él, de objetos con id y fullName, donde
//fullName se genera a partir de name y surname.
//Por ejemplo:
    //let john = { name: "John", surname: "Smith", id: 1 };
    //let pete = { name: "Pete", surname: "Hunt", id: 2 };
    //let mary = { name: "Mary", surname: "Key", id: 3 };
    //let users = [ john, pete, mary ];
    //let usersMapped = /* ... your code ... */ 
    //  /*usersMapped = [
        // { fullName: "John Smith", id: 1 },
        // { fullName: "Pete Hunt", id: 2 },
        // { fullName: "Mary Key", id: 3 }
        //]
    // */alert( usersMapped[0].id ) // 1
    //alert( usersMapped[0].fullName ) // John Smith
    //So, actually you need to map one array of objects to another. Try using => here. There’s a small
    //catch.
    //Entonces, en realidad, necesita mapear un arreglo de objetos a otra. Intente usar => aquí. Hay
    // una pequeña trampa.

    let usersMapped = users.map(user => ({
        fullName: `${user.name} ${user.surname}`,
        id: user.id
    }));



//  Ejercicio #1
//      ¿Se copia el arreglo?
//    ¿Qué va a mostrar este código?
//    let fruits = ["Apples", "Pear", "Orange"];// insertar un nuevo valor en la "copia"
//    let shoppingCart = fruits;shoppingCart.push("Banana");// ¿Qué hay en las frutas?
//    alert( fruits.length ); // 4


//Ejercicio #2
//Operaciones de arreglos
//Intentemos 5 operaciones de arreglos.
//1. Crea un arreglo styles on los items “Jazz” y “Blues”.
//2. Adjunta “Rock-n-Roll” al final
//3. Reemplaza el valor en el medio por “Classics”. Su código para encontrar el valor medio
//debería funcionar para cualquier arreglo con longitud impar.
//4. Quita el primer valor del arreglo y muéstralo.
//5. Anteponer Rap y Reggae en el arreglo

//El arreglo en el proceso:
//Jazz, Blues
//Jazz, Blues, Rock-n-Roll
//Jazz, Classics, Rock-n-Roll
//Classics,Rock-n-Roll
//Rap, Reggae, Classics, Rock-n-Roll


let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
alert( styles.shift() );
styles.unshift("Rap", "Reggae");


//Ejercicio #3
    //Sumar números de entrada
    //Escribe la función sumInput() esta:
        //• Pregunta al usuario por valores usando prompt y almacena los valores en el arreglo.
        //• Termina de preguntar cuando el usuario ingresa un valor no numérico, una cadena vacía
        //o presiona “Cancelar”.
        //• Calcula y devuelve la suma de elementos del arreglo.
    //PD. Un cero 0 es un número válido, no detenga la entrada en cero


    function sumInput() {

        let numbers = [];
      
        while (true) {
      
          let val = prompt("Escriba un valor", 0);
      
       
          if (val === "" || val === null || !isFinite(val)) break;
      
          numbers.push(+val);
        }
      
        let sum = 0;
        for (let number of numbers) {
          sum += number;
        }
        return sum;
      }
      
      alert( sumInput() );

//Ejercicio #4
//Rango de filtro
    //Escribe una función filterRange(arr, a, b) que obtiene una matriz arr, busque elementos 
    //con valores mayores o iguales a A menores o iguales B y devuelve un resultado como una matriz.
    //La función no debería modificar la matriz. Debería devolver la nueva matriz.
      //Por ejemplo:
      //let arr = [5, 3, 8, 1];
      //let filtered = filterRange(arr, 1, 4);
      //alert( filtered ); // 3,1 (matching values)
      //alert( arr ); // 5,3,8,1 (not modified)


      function filterRange(arr, a, b) {
        
        return arr.filter(item => (a <= item && item <= b));
      }
      
//Ejercicio #5
//Copiar y ordenar el arreglo
//Tenemos una variedad de cadenas arr. Quisiéramos tener una copia ordenada, pero no la modificamos.
    //Crea una función copySorted(arr) que devuelve tal copia.
    //let arr = ["HTML", "JavaScript", "CSS"];
    //let sorted = copySorted(arr);
    //alert( sorted ); // CSS, HTML, JavaScript
    //alert( arr ); // HTML, JavaScript, CSS (no changes)

    function copySorted(arr) {
        return arr.slice().sort();
      }
          
//Ejercicio #6
//Crea una calculadora extensible

//Crea una función constructora Calculator que crea objetos de calculadora "extensibles".
//La tarea consta de dos partes.

//Primero, implemente el método calculate(str) que lleva una string como "1 + 2" en el formato
//“Numero operator Numero” (delimitado por espacios) y devuelve el resultado. Debe entender
//más + y menos -.
//Ejemplo de uso:
    //let calc = new Calculator;
    //alert( calc.calculate("3 + 7") ); // 10

//Luego agrega el método addMethod(name, func) que le enseña a la calculadora una nueva
//operación. Toma el nombre del operador y la función de dos argumentos func (a, b) que lo
//implementa.

//Por ejemplo, agreguemos la multiplicación *, la división / y la potencia **:
    //let powerCalc = new Calculator;
    //powerCalc.addMethod("*", (a, b) => a * b);
    //powerCalc.addMethod("/", (a, b) => a / b);
    //powerCalc.addMethod("**", (a, b) => a ** b);
    //let result = powerCalc.calculate("2 ** 3");
    //alert( result ); // 8
        //• No hay paréntesis ni expresiones complejas en esta tarea.
        //• Los números y el operador están delimitados con exactamente un espacio.
        //• Puede haber un manejo de errores si desea agregarlo.


        function Calculator() {

            this.methods = {
              "-": (a, b) => a - b,
              "+": (a, b) => a + b
            };
          
            this.calculate = function(str) {
          
              let split = str.split(' '),
                a = +split[0],
                op = split[1],
                b = +split[2];
          
              if (!this.methods[op] || isNaN(a) || isNaN(b)) {
                return NaN;
              }
          
              return this.methods[op](a, b);
            };
          
            this.addMethod = function(name, func) {
              this.methods[name] = func;
            };
          }

//Ejercicio 8
//Reescriba 'if..else' en '?'
//Reescriba if..else usando múltiples operadores ternarios '?'.
//Para facilitar la lectura, se recomienda dividir el código en varias líneas.
//Let mensaje;
    //if (login == 'Empleado') {
        //mensaje = 'Hola';
        //} else if (login == 'Director') {
        //mensaje = 'Saludos';
        //} else if (login == '') {
        //mensaje = 'Sin inicio de sesión';
        //} else {
        //mensaje = '';
        //}

        let message = (login == 'Empleado') ? 'Hola' :
        (login == 'Director') ? 'Felicidades' :
        (login == '') ? 'Sin sesión' :
        '';