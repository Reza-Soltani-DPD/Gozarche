##### DEPENDENCIES

FROM --platform=linux/amd64 node:16-alpine AS deps
RUN apk add --no-cache libc6-compat openssl
WORKDIR /app


COPY prisma ./
COPY package.json yarn.lock ./

RUN yarn 
RUN yarn prisma generate
##### BUILDER

FROM node:16-alpine AS builder
ENV DATABASE_URL postgresql://root:tF05eN7OPrqmo85LNHiO3PTR@esme.iran.liara.ir:33767/postgres
ENV NEXTAUTH_SECRET 2497766051bc79ad394d017575fb3b13
ENV NEXTAUTH_URL https://gozarche.iran.liara.run
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY prisma ./prisma/
COPY . .

RUN yarn prisma generate
RUN yarn build


##### RUNNER

FROM node:16-alpine AS runner
WORKDIR /app


ARG DB

ENV DS $DB
RUN printenv
ENV NODE_ENV production
ENV DATABASE_URL postgresql://root:tF05eN7OPrqmo85LNHiO3PTR@esme.iran.liara.ir:33767/postgres
ENV NEXTAUTH_SECRET 2497766051bc79ad394d017575fb3b13
ENV NEXTAUTH_URL https://gozarche.iran.liara.run
ENV PORT 3000


COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json  /app/yarn.lock ./
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

CMD ["node", "server.js"]