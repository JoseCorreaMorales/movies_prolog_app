<?php
if (isset($_GET['selectedValue'])) {
  $selectedValue = $_GET['selectedValue'];

  if ($selectedValue === 'animacion') {
    // Ejecutar la consulta utilizando Prolog para la animación
    $prolog = `swipl -s knowledgeBaseAnimation.pl -g "$selectedValue" -t halt.`;

    // Imprimir el resultado
    echo $prolog;
  } elseif ($selectedValue === 'thriller') {
    // Ejecutar la consulta utilizando Prolog para el thriller
    $prolog = `swipl -s knowledgeBaseThriller.pl -g "$selectedValue" -t halt.`;

    // Imprimir el resultado
    echo $prolog;
  }elseif ($selectedValue === 'ficcion') {
    // Ejecutar la consulta utilizando Prolog para el thriller
    $prolog = `swipl -s knowledgeBaseFiccion.pl -g "$selectedValue" -t halt.`;

    // Imprimir el resultado
    echo $prolog;
  }elseif ($selectedValue === 'terror') {
    // Ejecutar la consulta utilizando Prolog para el thriller
    $prolog = `swipl -s knowledgeBaseTerror.pl -g "$selectedValue" -t halt.`;

    // Imprimir el resultado
    echo $prolog;
  }elseif ($selectedValue === 'romance') {
    // Ejecutar la consulta utilizando Prolog para el thriller
    $prolog = `swipl -s knowledgeBaseRomance.pl -g "$selectedValue" -t halt.`;

    // Imprimir el resultado
    echo $prolog;
  }elseif ($selectedValue === 'comedia') {
    // Ejecutar la consulta utilizando Prolog para el thriller
    $prolog = `swipl -s knowledgeBaseComedia.pl -g "$selectedValue" -t halt.`;

    // Imprimir el resultado
    echo $prolog;
  }elseif ($selectedValue === 'accion') {
    // Ejecutar la consulta utilizando Prolog para el thriller
    $prolog = `swipl -s knowledgeBaseAccion.pl -g "$selectedValue" -t halt.`;

    // Imprimir el resultado
    echo $prolog;
  }elseif ($selectedValue === 'familiar') {
    // Ejecutar la consulta utilizando Prolog para el thriller
    $prolog = `swipl -s knowledgeBaseFamiliar.pl -g "$selectedValue" -t halt.`;

    // Imprimir el resultado
    echo $prolog;
  }
  
  else {
    // El valor seleccionado no coincide con ninguna opción válida
    echo "Opción no válida.";
  }
} else {
  // No se ha proporcionado ningún valor seleccionado
  echo "No se ha seleccionado ningún valor.";
}
?>
