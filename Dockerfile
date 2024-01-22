FROM node:18-alpine AS client_build

WORKDIR /app

COPY ./client /app/

RUN npm install
RUN node_modules/.bin/ng build --configuration production

FROM node:18-alpine AS server_build

WORKDIR /app

COPY ./server /app/
COPY --from=client_build /app/dist/splitlify-frontend/browser /app/dist/splitlify

RUN npm install --production

# build docker
# FROM alpine

# WORKDIR /app

# RUN apk add --no-cache nodejs

# COPY --from=server_build /app ./

EXPOSE 5000

CMD ["node", "server"]