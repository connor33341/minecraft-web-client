# ---- Build Stage ----
FROM node:18-alpine AS build
# Without git installing the npm packages fails
RUN apk add git
WORKDIR /app
COPY . /app
# install pnpm
RUN npm i -g pnpm@9.0.4
# Build arguments
ARG DOWNLOAD_SOUNDS=true
ARG DISABLE_SERVICE_WORKER=false
ARG CONFIG_JSON_SOURCE=REMOTE
# TODO need flat --no-root-optional
RUN node ./scripts/dockerPrepare.mjs
RUN pnpm i
# Download sounds if flag is enabled
RUN if [ "$DOWNLOAD_SOUNDS" = "true" ] ; then node scripts/downloadSoundsMap.mjs ; fi

# TODO for development
# EXPOSE 9090
# VOLUME /app/src
# VOLUME /app/renderer
# ENTRYPOINT ["pnpm", "run", "run-all"]

# only for prod
RUN DISABLE_SERVICE_WORKER=$DISABLE_SERVICE_WORKER \
    CONFIG_JSON_SOURCE=$CONFIG_JSON_SOURCE \
    pnpm run build

# ---- Run Stage ----
FROM node:18-alpine
RUN apk add git
WORKDIR /app
# Copy build artifacts from the build stage
COPY --from=build /app/dist /app/dist
COPY server.js /app/server.js
# Install express
RUN npm i -g pnpm@9.0.4
RUN npm init -yp
RUN pnpm i express github:zardoy/prismarinejs-net-browserify compression cors
EXPOSE 8080
VOLUME /app/public
ENTRYPOINT ["node", "server.js", "--prod"]
