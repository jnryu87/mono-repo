

# MonoRepo


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
docker build -f ./apps/angular-app/Dockerfile -t jnryu87/nx-react .
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
docker build -f ./apps/angular-app/Dockerfile -t jnryu87/nx-nest .
docker push jnryu87/nx-nest
```


3. Test run for the image

Angular
```
docker run -p 4200:80 angular-app
docker run -p 4200:80 nx-angular
```

React
```
docker run -p 4300:80 react-app
```

NestJs
```
docker run --init -p 3333:3333 nest-app
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

5. Using Ingress

Angular app
```
export POD_NAME=$(kubectl get pods --namespace mono-repo -l "app.kubernetes.io/name=angular-app,app.kubernetes.io/instance=angular-app" -o jsonpath="{.items[0].metadata.name}")
export CONTAINER_PORT=$(kubectl get pod --namespace mono-repo $POD_NAME -o jsonpath="{.spec.containers[0].ports[0].containerPort}")
echo "Visit http://127.0.0.1:8080 to use your application"
kubectl --namespace mono-repo port-forward $POD_NAME 8080:$CONTAINER_PORT
```

React app
```
export POD_NAME=$(kubectl get pods --namespace mono-repo -l "app.kubernetes.io/name=react-app,app.kubernetes.io/instance=react-app" -o jsonpath="{.items[0].metadata.name}")
export CONTAINER_PORT=$(kubectl get pod --namespace mono-repo $POD_NAME -o jsonpath="{.spec.containers[0].ports[0].containerPort}")
echo "Visit http://127.0.0.1:8081 to use your application"
kubectl --namespace mono-repo port-forward $POD_NAME 8081:$CONTAINER_PORT
```

Nest app
```
export POD_NAME=$(kubectl get pods --namespace mono-repo -l "app.kubernetes.io/name=nest-app,app.kubernetes.io/instance=nest-app" -o jsonpath="{.items[0].metadata.name}")
export CONTAINER_PORT=$(kubectl get pod --namespace mono-repo $POD_NAME -o jsonpath="{.spec.containers[0].ports[0].containerPort}")
echo "Visit http://127.0.0.1:8082 to use your application"
kubectl --namespace mono-repo port-forward $POD_NAME 8082:$CONTAINER_PORT
```


This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Smart, Fast and Extensible Build System**

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`
- Web (no framework frontends)
  - `npm install --save-dev @nrwl/web`
- [Angular](https://angular.io)
  - `npm install --save-dev @nrwl/angular`
- [Nest](https://nestjs.com)
  - `npm install --save-dev @nrwl/nest`
- [Express](https://expressjs.com)
  - `npm install --save-dev @nrwl/express`
- [Node](https://nodejs.org)
  - `npm install --save-dev @nrwl/node`

There are also many [community plugins](https://nx.dev/community) you could add.

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@mono-repo/mylib`.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `nx e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.



## ☁ Nx Cloud

### Distributed Computation Caching & Distributed Task Execution

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.
