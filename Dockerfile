# FROM node:18-alpine
# WORKDIR /app
# ADD package.json package.json
# RUN npm install
# COPY . .
# ENV NODE_ENV production
# RUN npm run build
# RUN npm prune --production
# CMD ["npm", "start"]
# EXPOSE 3000

# Dockerfile
# base image
FROM node:lts-alpine
# create & set working directory
WORKDIR /app
COPY package*.json ./
# install dependencies
RUN yarn install
# copy source files
COPY . .
# start app
RUN yarn build
EXPOSE 3000
ENTRYPOINT ["yarn"]
CMD ["serve"]