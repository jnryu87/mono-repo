

# MonoRepo with Nx and Azure Cloud(Ingress)


# Angular app
```
yarn nx serve angular-app
```
# React app
```
yarn nx serve react-app --port 4300
```

# Nest app
```
yarn nx serve nest-app
```

# Build app
1. Build a base image
```
docker build -t mono-repo-base .
```

2. Build a module

Angular
```
docker build -f ./apps/angular-app/Dockerfile -t angular-app .
```

local build
```
docker build -f ./apps/angular-app/Dockerfile -t localhost:32000/angular-app .
docker push localhost:32000/angular-app
```

docker hub public registry
```
docker build -f ./apps/angular-app/Dockerfile -t jnryu87/nx-angular .
docker push jnryu87/nx-angular
```

React
```
docker build -f ./apps/react-app/Dockerfile -t react-app .
```

local build
```
docker build -f ./apps/react-app/Dockerfile -t localhost:32000/react-app .
docker push localhost:32000/react-app
```

docker hub public registry
```
docker build -f ./apps/react-app/Dockerfile -t jnryu87/nx-react .
docker push jnryu87/nx-react
```


Nestjs
```
docker build -f ./apps/nest-app/Dockerfile -t nest-app .
```

local build
```
docker build -f ./apps/nest-app/Dockerfile -t localhost:32000/nest-app .
docker push localhost:32000/nest-app
```

docker hub public registry
```
docker build -f ./apps/nest-app/Dockerfile -t jnryu87/nx-nest .
docker push jnryu87/nx-nest
```


3. Test run for the image

Angular
```
docker run -p 4200:80 angular-app
docker run -p 4200:80 jnryu87/nx-angular
```

React
```
docker run -p 4300:80 react-app
docker run -p 4300:80 jnryu87/nx-react
```

NestJs
```
docker run -p 3333:80 nest-app
docker run -it --init -p 8080:80 jnryu87/nx-nest
```


4. Local deployment
by service type

```
NodePort: values.yaml
LoadBalancer: values-lb.yaml
Ingress: values-ingress.yaml
```

```bash
infrastructure/helm-charts$ helm install angular-app ./angular-app -n mono-repo
infrastructure/helm-charts$ helm install react-app ./react-app -n mono-repo
infrastructure/helm-charts$ helm install nest-app ./nest-app -n mono-repo
```

Local k8s
```bash
helm install angular-app ./angular-app -n mono-repo -f ./angular-app/values-ingress-local.yaml
helm install react-app ./react-app -n mono-repo -f ./react-app/values-ingress-local.yaml
helm install nest-app ./nest-app -n mono-repo -f ./nest-app/values-ingress-local.yaml
```

Cloud k8s
```bash
helm install angular-app ./angular-app -n mono-repo -f ./angular-app/values-ingress.yaml
helm install react-app ./react-app -n mono-repo -f ./react-app/values-ingress.yaml
helm install nest-app ./nest-app -n mono-repo -f ./nest-app/values-ingress.yaml
```

5. AKS
(Local)
```
az login
(sudo) az aks install-cli
az aks get-credentials --resource-group team-aliance-lab --name jnryu-mono-repo
# Restart/reconnect to change context after this command
```

Install nginx ingress
```
helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
helm repo update

helm install ingress-nginx ingress-nginx --repo https://kubernetes.github.io/ingress-nginx --namespace ingress-nginx --create-namespace
```
