<?php

namespace Deployer;

require 'recipe/common.php';

set('bin/php', function () {
    return 'php';
});

set('project_files', [
    'build' => '',
]);

task('deploy:upload_code', function () {
    foreach (get('project_files') as $key => $item) {
        if (isset($key) && is_string($key)) {
            upload($key, '{{release_path}}/'.$item);
        } else {
            upload($item, '{{release_path}}/'.$item);
        }
    }
})->desc('Uploading code');


task('deploy', [
    'deploy:prepare',
    'deploy:lock',
    'deploy:release',
    'deploy:upload_code',
    'deploy:symlink',
    'deploy:unlock',
    'cleanup',

])->desc('Deploy your project');

onFailure('deploy', 'deploy:failed');
after('deploy:failed', 'deploy:unlock');

after('deploy', 'success');

server('prod_1', getenv('PROD_HOST'))
    ->user(getenv('PROD_USERNAME'))
    ->password(getenv('PROD_PASSWORD'))
    ->set('deploy_path', '~')
    ->stage('prod');

server('preprod_1', getenv('PREPROD_HOST'))
    ->user(getenv('PREPROD_USERNAME'))
    ->password(getenv('PREPROD_PASSWORD'))
    ->set('deploy_path', '~')
    ->stage('preprod');
