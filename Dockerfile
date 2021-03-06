FROM node:carbon

CMD echo 'Starting build'
# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ssr16/package*.json ./



# Bundle app source
COPY ./ssr16 .

CMD echo 'Starting npm install'
RUN npm i -g yarn
RUN yarn install
CMD echo 'Finished yarn install'
CMD echo '-----------------------------------'
CMD echo '-----------------------------------'
CMD echo '-----------------------------------'
CMD echo '-----------------------------------'
CMD echo '-----------------------------------'
CMD echo 'Starting yarn build'
RUN yarn build

EXPOSE 3002
CMD [ "npm", "run", "start:server" ]
