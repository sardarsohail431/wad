<?php
$tree = array("produce oxygen", "produce shade in summers", "produce wood");
$arrlength = count($tree);
echo "<ul>";
for($x = 0; $x < $arrlength; $x++) {
	echo "<li>";
    echo $tree[$x];
    echo "<br>";
    echo "</li>";
    echo "</ul>";
}
?>