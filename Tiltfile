# rentmycar Tiltfile
# Auto-generated - paths are relative to this directory

docker_build(
    'rentmycar',
    '.',
    live_update=[
        sync('./src', '/app/src'),
        sync('./public', '/app/public'),
        sync('./package.json', '/app/package.json'),
        run('touch /tmp/reload', trigger=['./src', './public', './package.json'])
    ],
)

k8s_yaml([
    './deployment.yaml',
    './service.yaml',
    './ingressroute.yaml',
])

k8s_resource(
    'rentmycar',
    # Removed port_forwards - access via Traefik instead
    auto_init=True,
)

