FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 4000

# Confirms the API is actually up and responding, not just that the
# container process is running — `docker ps` / `docker compose ps` will
# show "healthy"/"unhealthy" instead of just "running".
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:4000/api/health || exit 1

CMD ["npm", "run", "dev"]
