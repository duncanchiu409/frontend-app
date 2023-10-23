# build environment
FROM node:18-alpine as build
WORKDIR /app
COPY . .
RUN yarn
RUN yarn build
# production environment

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY ./nginx_configuration/default.conf /etc/nginx/conf.d/default.conf
COPY ./nginx_configuration/nginx.conf /etc/nginx/nginx.conf 
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]