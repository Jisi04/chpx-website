FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5173

# Confirms the Vite dev server is actually up and responding, not just that
# the container process is running — `docker ps` / `docker compose ps` will
# show "healthy"/"unhealthy" instead of just "running".
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:5173/ || exit 1

CMD ["npm", "run", "dev", "--", "--host"]
