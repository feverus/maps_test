# build environment
FROM node:lts-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
ENV NODE_PATH /app/node_modules/:$NODE_PATH
COPY tsconfig.json ./
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent --save
RUN npm install react-scripts@5.0.1 -g --silent
COPY . ./
COPY public/index_prod.html ./public/index.html
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]