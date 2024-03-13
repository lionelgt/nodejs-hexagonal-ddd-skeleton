# ✨🐢🚀✨ Node.js Hexagonal Architecture + DDD: Template repository for your Node.js projects, designed for microservices.

<img src="https://avatars.githubusercontent.com/u/9950313"  align="left" width="210px" height="210px">
<img align="left" width="0" height="210px" hspace="10"/>

> ⚡ Start your Node.js non-blocking projects as fast as possible

> 🎯 Start with a software architecture that isolates the domain from external components

> 🔥 Get started with software architecture that promotes maintainable, scalable, and high-quality software design

> 🐢 Start your project for JavaScript runtime environment that will benefit from the non-blocking paradigms.

[![Lionelgt](https://img.shields.io/badge/Lionel_gt-LinkedIn-blue.svg)](https://www.linkedin.com/in/lionelgt/)

## 👨🏼‍💻️️ Content
- [Introduction](#-introduction)
- [Dependencies](#-dependencies)
- [How to start](#-how-to-start)
- [How was this repository created? ](https://github.com/lionelgt/nodejs-hexagonal-ddd-skeleton/blob/main/docs/steps-to-create-repository-template.md)
- [Software architecture diagram](https://github.com/lionelgt/java-hexagonal-ddd-skeleton/blob/main/docs/software-architecture-diagram.md)
- [Related repositories](#-related-repositories)

## ℹ️️ Introduction

This skeleton repository was built to serve as a starting point for building a Node.js project that implements Hexagonal Architecture + Domain-Driven Design (DDD).

As a example I included a API that covers all the layers to show the implementation in each of them.

## 🔧️ Dependencies

- [Node 20.11.1](https://nodejs.org/dist/latest-v20.x/docs/api/)
- [Npm 10.2.4](https://docs.npmjs.com)
- [Nest 10.3.2](https://docs.nestjs.com/)
- [Typescript 5.3.3](https://www.typescriptlang.org/docs/)
- [Nx 18.0.8](https://nx.dev/getting-started/intro)
- [zod 3.22.4](https://zod.dev/)

## 🚀 How to Start
1. Create your own repository from this [nodejs-hexagonal-ddd-skeleton](https://github.com/lionelgt/nodejs-hexagonal-ddd-skeleton) repository. [Follow these steps](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template).
2. Clone your repository: `git clone https://github.com/:your-user/:your-repository-name`.
3. Execute this to install dependencies:  `npm install`
4. Execute this to build:  `npm run build`
5. Execute this to build image: `docker build -t nodejs-hexagonal-ddd-skeleton:1.0.0 .`
6. Execute this to run the container: `docker run -p 3000:3000 nodejs-hexagonal-ddd-skeleton:1.0.0`
7. In order to check everything is OK : `curl 'localhost:3000/api/git-repository'`
    ```json
   {
       "name": "nodejs-hexagonal-ddd-skeleton",
       "full_name": "lionelgt/nodejs-hexagonal-ddd-skeleton",
       "owner": {
           "login": "lionelgt",
           "url": "https://api.github.com/users/lionelgt"
       }
   }
   ```
8. **Start developing!**

## 💡 Related repositories

### ☕ Java

- [♨ ☕ 🚀 Java Hexagonal Architecture + DDD: Skeleton repository for your new java projects](https://github.com/lionelgt/java-hexagonal-ddd-skeleton)
- [♨ ☕ 🚀 Java *Reactive*, Hexagonal Architecture + DDD: Template repository for your new java *reactive* projects](https://github.com/lionelgt/java-hexagonal-ddd-reactive-skeleton)