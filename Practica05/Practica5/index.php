<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi primer pagina en  PHP -250943</title>
</head>
<body>
    <?php
    //Declaración de una variable de tipo string
    $nombre = "Yair Sampayo ";
    $carrera_estudia="T.S.U en Desarrollo de software Multiplataforma";
    echo "<h1> Hola mundo desde PHP! </h1>";
    #Esta linea imprime la version de PHP que esta utilizando
    echo "<H2> Estas usando la version de PHP: " . phpversion() . "</h2>";
    ?>
    <!-- Este es un comentario en HTML-->
    <hr>
    <?php
    /* Después de asignarle un valor a la variable $nombre,
    podemos imprimirla en pantalla */
    echo "<h3> Mi nombre es : $nombre y estudio: $carrera_estudia </h3>";
    ?>

    <?php
    $x = 10;
    $y = 5;
    $z = '3';
    echo "<h3> La suma de $x + $y es : ". ($x +$y) . "</h3>";
    echo "<h3> La suma de $x + $y + $z es : ". ($x +$y +$z) . "</h3>";

    function multiplicar($a, $b)
    {
        $resultado = $a * $b;
        echo "<h4> La multiplicación de $a * $b es: $resultado </h4>";
        return $resultado;
    }

    echo "<h4> La multiplicacion de 3 x 3 es :" . multiplicar(3, 3) . "</h4>";
    echo "<h4> La multiplicacion de $x x $y es :" . multiplicar($x, $y) . "</h4>";
    
    // Guardamos el último resultado en la variable para poder usarla abajo
    $resultado = multiplicar(1250, 325);
    echo "<h4> La multiplicacion de 1250 x 325 es :" . $resultado . "</h4>";
    echo "<hr>";
    
    echo "<p> El resultado dela última multiplicacion es : $resultado </p>";

    function myTest()
    {
          static $w = 0; //static scope
          echo "$w <br>";
          $w++;
    }

    myTest();
    myTest();
    myTest();
    myTest();
    myTest();
    echo '$w'; 
    myTest();
    myTest();
     
    #funcion para saber el tipo de dato de una variable 
    /*var_dump()*/

    echo "<p>La variables <strong>nombre</strong> es de tipo: ";
    var_dump($nombre);
    echo "</p>";

    echo "<p>La variables <strong>carrera_estudia</strong> es de tipo: ";
    var_dump($carrera_estudia);
    echo "</p>";

    // CORREGIDO: Asignación de string de fecha correcto
    $fecha_nacimiento = "2007-10-21";

    echo "<p>La variables <strong>fecha_nacimiento</strong> es de tipo: ";
    var_dump($fecha_nacimiento);
    echo "</p>";

    $fecha_hoy = date("09/11/2026");
    $edad_actual = date("Y") - 2007; 
    echo "<p> La edad actual es : $edad_actual </p>";
    ?>
</body>
</html>
