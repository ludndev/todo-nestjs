

https://www.prisma.io/blog/nestjs-prisma-rest-api-7D056s1BmOL0

## prisma

npm install -D prisma

npx prisma init

npx prisma migrate dev --name "init"


## nest

npx nest generate controller todos
npx nest generate service todos
npx nest generate module todos


## swagger

npm install --save @nestjs/swagger swagger-ui-express



````shell
curl -X "GET" "http://127.0.0.1:3000/api/todos" -H "accept: application/json"
````



npx prisma migrate reset
npm run seed


