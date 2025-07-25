From node:22-alpine

WORKDIR /docker0

# COPY ./index.js ./index.js
# COPY ./package.json ./package.json
# COPY ./package-lock.json ./package-lock.json
# RUN npm install --production
# EXPOSE 3000
# CMD ["node", "index.js"]

# or use the following to copy all files

COPY . .
RUN npm install --production
EXPOSE 3002
CMD ["node", "index.js"]
