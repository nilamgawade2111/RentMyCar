FROM node:20-alpine

WORKDIR /app

# 1. Copy package files first to leverage Docker Layer Caching
COPY package.json package-lock.json* ./

# 2. FAST INSTALL
# --mount=type=cache: Persists the npm cache between builds (HUGE speedup)
# --include=dev: Ensures we get dev tools (Vite and Tailwind)
# --no-audit --no-fund: Skips security/funding checks to save time
RUN --mount=type=cache,target=/root/.npm \
    npm install --include=dev --no-audit --no-fund

# 3. Copy source code
# (In docker-compose, this is overridden by volumes, but good for fallback)
COPY . .

# 4. Configure Vite dev server
ENV PORT=8000
ENV CI=false

EXPOSE 8000

# 5. Use 'npm run dev' for Vite live reloading
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "8000"]