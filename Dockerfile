### STAGE 1: Build ###

# We label our stage as 'builder-image'
FROM node:10.16.0 as builder-image
COPY package.json package-lock.json ./
RUN npm set progress=false && npm config set depth 0 && npm cache clean --force

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm i && mkdir /ng-app && cp -R ./node_modules ./ng-app
WORKDIR /ng-app
COPY . .

## Build the angular app in production mode and store the artifacts in dist folder
RUN $(npm bin)/ng build --prod

### STAGE 2: Setup ###
FROM nginx:alpine-perl as runtime-image

## Copy our default nginx config
COPY docker/nginx/default.conf /etc/nginx/conf.d/
COPY docker/nginx/nginx.conf /etc/nginx/

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder-image ng-app/dist /usr/share/nginx/html

## startup.sh script is launched at container run
ADD docker/startup.sh /startup.sh
CMD /bin/sh /startup.sh
