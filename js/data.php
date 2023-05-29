<?php
if (isset($_GET['selectedValue'])) {
  $selectedValue = $_GET['selectedValue'];

  // Ejecutar la consulta utilizando Prolog
  $prolog = `swipl -s knowledgeBaseAnimation.pl -g "$selectedValue" -t halt.`;

  // Imprimir el resultado
  echo $prolog;
}
?>