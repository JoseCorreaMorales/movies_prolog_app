<?php
if (isset($_GET['selectedValue']) == 'animacion') {
  $selectedValue = $_GET['selectedValue'];

  // Ejecutar la consulta utilizando Prolog
  $prolog = `swipl -s knowledgeBaseAnimation.pl -g "$selectedValue" -t halt.`;

  // Imprimir el resultado
  echo $prolog;
}

if(isset($_GET['selectedValue']) === 'thriller') {
  $selectedValue = $_GET['selectedValue'];
  // Ejecutar la consulta utilizando Prolog
  $prolog = `swipl -s knowledgeBaseThriller.pl -g "$selectedValue" -t halt.`;

  // Imprimir el resultado
  echo $prolog;
}
?>