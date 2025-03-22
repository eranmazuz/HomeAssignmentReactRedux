FROM node:latest AS build
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . .
ARG REACT_APP_CATEGORIES_URL
ARG REACT_APP_POST_ORDER_URL

ENV REACT_APP_CATEGORIES_URL $REACT_APP_CATEGORIES_URL
ENV REACT_APP_POST_ORDER_URL $REACT_APP_POST_ORDER_URL
RUN npm run build
FROM nginx:alpine


COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]