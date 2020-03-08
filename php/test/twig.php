reuqire_once '../../vendor/autoload.php';

$loader = new \Twig\Loader\ArrayLoader([
    'index' => 'hello {{name}}'
]);

$twig 