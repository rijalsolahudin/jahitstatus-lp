# Base image
FROM node:18-alpine as build

# Install pnpm
RUN npm install -g pnpm

# Set working directory
WORKDIR /app

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy all files
COPY . .

# Build the app
RUN pnpm run build

# Production stage
FROM caddy:2-alpine

# Copy built files to Caddy serve directory
COPY --from=build /app/dist /srv

# Copy Caddyfile configuration
COPY Caddyfile /etc/caddy/Caddyfile

# Expose ports
EXPOSE 80

# Caddy runs automatically as entrypoint